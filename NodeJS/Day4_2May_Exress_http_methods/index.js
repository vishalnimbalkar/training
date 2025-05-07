// can we send multiple res in method 
// first res is send to client and then gives error to nodejs 

// diff put vs patch 
// use cases of params and query 
// params - to delete, update, get specific record
// query - filtring and searching - when we need to filter result based on criteria


// Http Methods 
// HTTP (HyperText Transfer Protocol) is the foundation of data communication on the web. It defines a set of request methods to perform actions on resources (like reading, creating, updating, deleting data).

// 1.GET
// getting data from server.
// ex:- viewing list of products. 

// 2.POST 
// insert data on server.
// ex:- creating account, submitting form 

// 3.PUT 
// update entire data resource
// ex:- editing entire profile or replacing post 

// 4.PATCH
// partially update data
// ex:- update only users name or profile picture 

// 5.DELETE 
// remove data from server 
// ex:- deleting post 

// 6.HEAD
// same as GET but ony returns headers
// ex:- Checking last modified date or if a page exists.

// 7.OPTIONS 
// discover supported http methods for a resource.
// returns allowed methods like: GET, POST, PATCH 
const express = require('express');
const app = express();

// app.use(express.json());
// app.use() is used to use middlewares 
// express.json() is built in middleware function that parse incomming requests with json payloads.
// It is used for handling data send in http request body 


app.get('/',(req, res)=>{
    res.send('home')
    res.send('welcome') // error
})

app.post('/user',(req, res)=>{
    res.send("post request")
})

app.put('/user',(req, res)=>{
    res.send("put request")
})


app.patch('/user',(req, res)=>{ 
    res.send("patch request")
})


app.delete('/user',(req, res)=>{
    res.send("delete request")
})

app.head('/user',(req, res)=>{
    res.send("head request")
})


app.options('/user',(req, res)=>{
    res.send("options request")
})

// can we set host 
// app.listen vs http.createServer()
// internal working 
app.listen(3000,()=>console.log('server listern to port 3000'))

// note:
// if we have two matching routes with mehtod only the first matching route is executed others are ignored
// -----------------------------------------------
