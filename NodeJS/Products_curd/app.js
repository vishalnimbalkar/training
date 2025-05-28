require('dotenv').config();
const express = require("express");
const http = require('http');
const cors = require('cors');
const productRoutes = require("./routes/products.js");
const usersRoutes = require("./routes/users.js");
const fileRoutes = require("./routes/files.js");
const emailRoutes = require("./routes/emails.js");
const { checkConnection } = require("./config/database.js");

const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: ['http://localhost:4200'],
  methods: ['POST', 'PUT', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['X-Total-Count'],
  credentials: true,
  maxAge: 60,
  // preflightContinue: false, 
  // optionsSuccessStatus: 200
}));

app.use(express.json());

app.use("/product", productRoutes); 
app.use('/user', usersRoutes)
app.use('/file', fileRoutes)
app.use('/email', emailRoutes)

const server = http.createServer(app);
server.listen(port, () => console.log("server running on port " + port));
checkConnection();

