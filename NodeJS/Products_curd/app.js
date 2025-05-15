const express = require("express");
const productRoutes = require("./routes/products.js");
const { checkConnection } = require("./config/database.js");
const {jwtAuthMiddleware, generateToken} = require('./middlewares/jwt.js')
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.post("/login", async (req, res) => {
  const userData = req.body;
  // check user data is present or not if not return 400 bad request
  if (!userData) return res.status(400).json({ error: "Invalid data" });
  try {
    const token = generateToken(userData);
    console.log(token);
    res.status(200).json({ message: "Login successfully", user: userData, token : token});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.use("/product", jwtAuthMiddleware,productRoutes);

app.listen(port, () => console.log("server running on port " + port));
checkConnection();
