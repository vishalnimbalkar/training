const express = require("express");
require('dotenv').config();
const productRoutes = require("./routes/products.js");
const usersRoutes = require("./routes/users.js");
const { checkConnection } = require("./config/database.js");

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/product",productRoutes);
app.use('/user', usersRoutes)

app.listen(port, () => console.log("server running on port " + port));
checkConnection();
