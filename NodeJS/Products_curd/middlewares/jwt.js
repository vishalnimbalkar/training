const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtAuthMiddleware = (req, res, next) => {
  // check for autorization header is present or not
  const autorization = req.headers.authorization;
  if (!autorization) return res.status(401).json({ error: "Unauthorized" });

  //access jwt taoken from request headers
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    // verify the jwt token
    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // add decoded data in request object
    req.userData = decodedData;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Invalid token" });
  } 
};

/**
 * function to generate jwt token
 */
const generateToken = (userData) => {
  //generate new jwt access token using user data
  const accessToken = jwt.sign(userData, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });
  return accessToken;
};

// function to generate jwt token for email verificaation
const verifyEmailToken = (userData) => {
  const verificationToken = jwt.sign(userData, process.env.JWT_VERIFY_KEY);
  return verificationToken;
}

module.exports = { jwtAuthMiddleware, generateToken, verifyEmailToken };
