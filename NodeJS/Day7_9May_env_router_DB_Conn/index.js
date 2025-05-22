const express = require('express');
require('dotenv').config();
const usersRoutes = require('./routes/users.js');
const { checkConnection } = require('./config/db.js');


const app = express(); 
const port = process.env.PORT ;

app.use(express.json())

app.get('/',(req, res)=>{
    res.status(200).json({msg : 'Hello from home'})
})

app.use('/users', usersRoutes)


app.listen(port,  async() => {
  console.log('Server running on port 3000');
  try {
    await checkConnection(); 
  } catch (error) {
    console.log("Failed to initialize the database",error);
  }
});

// app.listen([port[, host[, backlog]]][, callback])
// host(string) - (Optional) The hostname or IP address. Defaults to localhost. Use '0.0.0.0' to listen on all network interfaces.
// backlog(number) - (Optional) The maximum number of queued pending connections.

// .env file (--env-file)
// it is used to store environment variables 
// why we use .env?
// - keep sensitive data outoff source code
// like database Credential, api keys, other secreat keys 

// What is a Router?
// A router in Express is a mini-application that handles a group of related routes.
// Instead of putting all your routes in one big file (like app.js or server.js), you split them into separate files by feature, such as:
// routes/products.js
// routes/users.js
// Then you connect them to the main app using app.use().