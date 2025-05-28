require('dotenv').config()
const http = require('http');
const url = require('url');
const {checkConnection} = require('./config/database.js')
const {getAllUsers} = require('./controllers/users.js')

const port = process.env.PORT;
const server = http.createServer( async (req, res)=>{
    const myUrl = url.parse(req.url,true)
    console.log(myUrl);
    console.log(req.method);
   switch(myUrl.pathname){
    case "/":
        return res.writeHead(200).end("Hello from Home page")
    case '/user':
        if(req.method === 'GET'){
            const result = await getAllUsers();
            console.log(result);
            return res.writeHead(200,  { 'Content-Type': 'application/json' }).end(JSON.stringify(result))
        }else if(req.method === 'POST'){
            return res.writeHead(201).end("User registered successfully")
        }else if(req.method === 'PATCH'){
            const id = myUrl.query.id;
            return res.writeHead(200).end(`User with id ${id} Updated successfully`)
        }else if(req.method === 'DELETE'){
            const id = myUrl.query.id;
            return res.writeHead(200).end(`User with id ${id} Deleted successfully`)
        }
   }
})

server.listen(port, ()=> console.log("server running on port "+port));
checkConnection()