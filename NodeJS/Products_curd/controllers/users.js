const { pool } = require("../config/database");
const { generateToken } = require("../middlewares/jwt.js");
const jwt = require("jsonwebtoken");
const { validationResult } = require('express-validator');

let refreshTokens = [];
const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const values = [email, password];
    const query = `select id, email, name, password, created_At, modified_At from users where email = ? and password = ?`;
    const [rows] = await pool.query(query,values);
console.log(rows);

    //check if user data is fetched or not 
     if (rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const user = rows[0];

    const { accessToken, refreshToken } = generateToken(user);
    //store refres token
    refreshTokens.push(refreshToken);
    return res.status(200).json({ message: "Login successfully", user, accessToken, refreshToken,});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const refreshToken = (req, res) => {
  const { refreshToken } = req.body;
  // verify refreshToken from request is equal to refreshToken in refreshTokens
  if (!refreshToken || !refreshTokens.includes(refreshToken)) {
    return res.status(403).json({ error: "Refresh token is not valid" });
  }

  try {
    // Verify refresh token
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET_KEY
    );

    // Remove existing exp and iat from payload
    const { exp, iat, ...userData } = decoded;

    // Create new access token
    const accessToken = jwt.sign(userData, process.env.JWT_SECRET_KEY, {
      expiresIn: "5m",
    });

    res.status(200).json({ accessToken });
  } catch (err) {
    console.error(err);
    return res.status(403).json({ error: "Invalid refresh token" });
  }
};

const logout = async (req, res) => {
  const { refreshToken } = req.body;
  //remove refresh token from refreshTokens when user logout
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  return res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { login, refreshToken, logout };
