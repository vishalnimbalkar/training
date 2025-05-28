const bcrypt = require('bcryptjs');
// const crypto = require('crypto');
const { pool } = require("../config/database");
const { verifyEmailToken } = require("../middlewares/jwt.js");
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { sendEmail } = require('../services/email.js')
const {} = require('../middlewares/jwt.js')

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() })
  }
  const { name, email, password } = req.body;

  try {
    // Hash the password using bcryptjs
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // const verificationToken = crypto.randomBytes(32).toString('hex');
    const userData = { email}
    //generate verification token using user data
    const verificationToken = verifyEmailToken(userData);

    const values = [name, email, hashedPassword, verificationToken];
    const query = `insert into users (name, email, password, verification_token) values (?,?,?,?)`;
    await pool.query(query, values);

    //send email service
    await sendEmail(email, name, verificationToken);

    return res.status(201).json({ success: true, message: 'User register successfully' })

  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    //get user by email
    const query = `select id, email, name, password, created_At, modified_At, is_Active, is_Verified from users where email = ?`;
    const [rows] = await pool.query(query, email);

    //check if user data is fetched or not 
    if (rows.length === 0) {
      return res.status(401).json({ success: false, error: "Invalid email or password" });
    }
    const user = rows[0];
    if (!user.is_Active) {
      return res.status(403).json({ success: false, message: "Your account is deactivated" })
    }
    if (!user.is_Verified) {
      return res.status(403).json({ success: false, message: "Please Verified Your email address" })
    }
    //compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: "Invalid email or password" });
    }

    //generate access token
    const accessToken = generateToken(user);

    return res.status(200).json({ success: true, message: "Login successfully", user, accessToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const verifyUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  const verificationToken = req.query.verification_token;
  // virify jwt token and extract user data
  const userData = jwt.verify(verificationToken, process.env.JWT_VERIFY_KEY);
  const email = userData.email;
  try {
    const [rows] = await pool.query(
      `SELECT id, is_Active, is_Verified FROM users WHERE email = ? AND verification_token = ?`,
      [email, verificationToken]
    );

    const user = rows[0];

    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email or token." });
    }

    // check user is deactivated or not
    if (!user.is_Active) {
      return res.status(403).json({ success: false, message: "Account is deactivated." });
    }

    //check user is already verified or not 
    if (user.is_Verified) {
      return res.status(200).json({ success: true, message: "User already verified." });
    }

    // set verification token null and mark user as verified 
    await pool.query(
      `UPDATE users SET is_Verified = 1, verification_token = NULL WHERE email = ?`,
      [email]
    );

    return res.status(200).json({ success: true, message: "User verified successfully." });

  } catch (error) {
    console.error("Verification error:", error);
    return res.status(500).json({ success: false,  error: error.message });
  }
}

const logout = async (req, res) => {
  return res.status(200).json({ success: true, message: "Logged out successfully" });
};

module.exports = { login, register, logout, verifyUser };
