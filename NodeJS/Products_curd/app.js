require('dotenv').config();
const express = require("express");
const productRoutes = require("./routes/products.js");
const usersRoutes = require("./routes/users.js");
const fileRoutes = require("./routes/files.js");
const emailRoutes = require("./routes/emails.js");
const { checkConnection } = require("./config/database.js");

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/product",productRoutes);
app.use('/user', usersRoutes)
app.use('/file', fileRoutes)
app.use('/email', emailRoutes)

app.listen(port, () => console.log("server running on port " + port));
checkConnection();
