const express = require('express');
const router = require('./routes/routes');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

//what is middleware
// Middleware functions are functions that have access to the request object, the response object, and the next function in the application’s request-response cycle.

// Middleware functions can perform the following tasks:
// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware in the stack.
app.use('/api', router)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


const print = function (req, res, next) {
    console.log('hello from print')
    next()
}

const validate = function (req, res, next) {
    const id = Number(req.params.id);
    if(Number.isNaN(id)){
        return res.status(400).send("invalid id")
    }else{
        console.log('validate successfully')
    }
    next()
}

app.use((err, req, res, next) => {
  console.error(err.stack)
  return res.status(500).send('Error')
})


// we can add properties in request body from middleware 
const addTime = function (req, res, next){
    req.time = Date.now();
    next();
}
// app.use('/', (req, res, next)=>{
//     console.log('msg 1');
//     next();
// },
// (req, res, next)=>{
//        console.log('msg 2');
//     next();
// })
app.use(print)// apply for all routes
// app.use("/",print)// apply for all routes with "/"
// app.use("/about",print)// apply for all routes "/about" 
app.use(addTime);
app.use('/validate/:id', validate)

app.get('/error', (req, res) => {
  throw new Error('This is a test error');
});

app.get('/', (req, res) => {
    console.log(req.time);
  res.send('Hello from home')
})

app.get('/about', (req, res) => {
  res.send('Hello from about')
})

app.get('/validate/:id', (req, res)=>{
    res.send(req.params.id);
})

// types of middleware 
// 1.Application-level middleware
// 2.Router-level middleware
// same as appllication level middleware, expects uses instance of express.Router()

// 3.Error-handling middleware
// it always take four parameters (err, req, res, next)
// Express will automatically forward any errors (via throw or next(err)) to this handler.
// always use error handling middleware after routes 
// Request → Middleware 1 → Route Handler (throws error) → Express looks for: (err, req, res, next) → Error Middleware → Response
// if we put it before it will never reach to error handling middleware 
// We register error-handling middleware after routes because:
// -Express handles middleware sequentially.
// -Errors need to happen before they can be caught.
// -Registering it later ensures it catches all errors thrown from routes or other middleware.

// 4.Built-in middleware
// - express.json()

// 5.Third-party middleware
// -cookie-parser, body-parser 


app.listen(port, ()=>console.log('server running on port '+port))