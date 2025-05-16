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
  //generate new jwt access token and refress token using user data
  const accessToken = jwt.sign(userData, process.env.JWT_SECRET_KEY, { expiresIn: "5m" });
  const refreshToken = jwt.sign(userData, process.env.JWT_REFRESH_SECRET_KEY, { expiresIn: "7d" }); // longer-lived
  return { accessToken, refreshToken };
};

module.exports = { jwtAuthMiddleware, generateToken };
