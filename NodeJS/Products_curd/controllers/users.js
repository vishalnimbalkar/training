const { pool } = require("../config/database");
const { generateToken } = require("../middlewares/jwt.js");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { sendEmail } = require('../services/email.js')

const register = async (req, res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ success: false, errors: errors.array()})
  }
  const { name, email, password } = req.body;
  
  try {
     // Hash the password using bcryptjs
     const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const values = [name, email, hashedPassword];
    const query = `insert into users (name, email, password) values (?,?,?)`;
    const result = await pool.query(query, values);    
    
    // check how many rows are affected if not send error
    if(result[0].affectedRows === 0){
      return res.status(400).json({ success: false, error : 'Error inserting records'})
    }
    await sendEmail(email, name);
    return res.status(201).json({ success: true, message : 'User register successfully'})
    
  } catch (error) {
    return res.status(500).json({success: false, error: error.message});
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
    const query = `select id, email, name, password, created_At, modified_At from users where email = ?`;
    const [rows] = await pool.query(query,email);

    //check if user data is fetched or not 
     if (rows.length === 0) {
      return res.status(401).json({ success: false, error: "Invalid email or password" });
    }
    const user = rows[0];

    //compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({success: false, error: "Invalid email or password" });
    }

    const accessToken = generateToken(user);
    //store refres token
    return res.status(200).json({success: true, message: "Login successfully", user, accessToken});
  } catch (error) {
    console.log(error);
    return res.status(500).json({success: false, error: error.message });
  }
};

const logout = async (req, res) => {
  return res.status(200).json({success: true, message: "Logged out successfully" });
};

module.exports = { login, register, logout };
