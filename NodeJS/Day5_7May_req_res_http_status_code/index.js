const express = require('express')
const app = express();
app.use(express.json());
app.listen(3000, ()=>console.log('server running on port 3000'))
// req 
// contains information about the hppt request send by the client(browser, postman)
// common req properties 
// 1.req.body - data sent in a body(post/put), needs middleware like express.json()
app.post("/register", (req,res)=>{
    const data = req.body;
    res.send({msg : "registe successfully", result : data})
})

// 2.req.params - route parameters (eg. '/user/:id')
app.get('/getName/:name', (req, res)=>{
    const name = req.params.name;
    res.send('Hello '+name);
})

//we can use multiple params 
app.get('/getName/:fname/:lname', (req, res)=>{
    const fname = req.params.fname;
    const lname = req.params.lname;
    res.send(`Hello ${fname} ${lname}`);
})

// 3.req.query - URL query string (eg. ?user=vishal)
app.get('/getName', (req, res)=>{
    const name = req.query.name;
    res.send('Hello '+name);
})

app.get('/getFullName', (req, res)=>{
    const fname = req.query.fname;
    const lname = req.query.lname;
    console.log(req.query);
    
    res.send(`Hello ${fname} ${lname}`);
})

app.get('/getData', (req, res)=>{
    const data = req.query.name;
    console.log(data);
    res.send(data);
})

// localhost:3000/getData?name=vishal&name=rahul&name=sanket
// if pass query with same name it will store as array 
// ['vishal','rahul','sanket']
app.get('/getSubjects', (req, res)=>{
    const data = req.query.subject;
    console.log(data);// java,c,dsa
    res.send(data);
})
// localhost:3000/getSubjects?subject=java,c,dsa

// 4.req.headers - HTTP headers sent with the request

// 5.req.method - HTTP method used (GET, POST)

// 6.req.url - The full URL of the request

app.get('/getHeaders',(req, res)=>{
    res.send(req.headers)
})

app.get('/getMethod',(req, res)=>{
    res.send(req.method)
})

app.get('/getUrl',(req, res)=>{
    console.log(req.url);
    
    res.send(req.url)
})
// --------------------------------------------

// res 
// it is used to send back data to client 
// mehtods 
// 1.res.send()
// sends response to client in plain text. it can be String, object, array. 
// res.send('Hello');
// res.send({ name: 'vishal' });       
// res.send([1, 2, 3]);  
// Automatically sets Content-Type based on the data type.
// Ends the response process

// 2.res.json()
// it sends JSON response. 
// sets content-type to application/json. 
// it automatically convets js object into json. 
// use res.json() instead of res.send() when sending Json
// res.json({ status: 'success', data: [1, 2, 3] });

// 3.res.status()
// set http status code for the response 
// res.status(404);
// res.status(201);

// 4.res.redirect([status], path)
// reditects client to another url 
// res.redirect('/login');
// res.redirect(301, 'https://example.com'); // 301 = permanent redirect
// Optional status code (default: 302 Found – temporary redirect).
app.get('/navigate',(req, res)=>{
    res.redirect('https://www.google.com');
})

// 5.res.render(view, [, locals])
// render a view template 

// res.render('profile', { name: 'vishal', age: 25 });
// You need to set up a view engine (app.set('view engine', 'ejs')).

// Looks for templates in the views/ folder by default.

// 6.res.sendFile(path, [, options])
// sends static file as a response 
// use absolute path ot __dirname 

app.get('/getFile', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

// File Type	    Extensions	                                 MIME Type (Auto-detected)
// HTML	        .html, .htm	                                       text/html
// CSS	            .css	                                               text/css
// JavaScript	    .js	                                              application/javascript
// Images      	.png, .jpg, .jpeg, .gif, .svg, .webp	        image/png, image/jpeg
// Text Files  	.txt, .csv, .log	                               text/plain, text/csv
// PDFs	        .pdf	                                            application/pdf
// Documents   	.docx, .xlsx, .pptx	e.g.,                         application/vnd.openxmlformats
// Audio/Video 	.mp3, .mp4, .wav, .ogg	e.g.,                        audio/mpeg, video/mp4
// ZIP/Archives	.zip, .rar, .tar, .gz	                            application/zip, etc.
// JSON/XML	    .json, .xml	                                        application/json, application/xml

// 7.res.set(field, [value])
// use to set response header.
// res.set('Content-Type', 'text/plain');
// res.set({ 'X-Powered-By': 'Express', 'Cache-Control': 'no-cache' });

// 8.res.end([data])
// Ends the response process 
// Optionally send data before closing the response 
// res.end('Finished!');
// res.end() is not needed when we use res.send() and res.json();

// 9.res.download()
// allows to send file and download automatically
// syntax - res.download(path, [, filename],callback)
// filename - optional 
// callback - error handling 
app.get('/download', (req, res)=>{
    res.download(__dirname+"/public/index.html", 'home')
})

// 10.res.append(field, value)
// Appends the specified value to the HTTP response header field.

// 11.res.cookie(name, value [, options])
// The res.cookie() function is used to set a cookie 
// It allows you to assign a cookie by providing a name and a value. 
// The value can be a simple string or an object, which will be automatically converted to JSON


// chaining of response methods 
app.get('/get',(req, res)=>{
    res.status(200).send('hello');
})

// once we call  send(), json(), or end() these methods after that process is end nothing will run. 
// res.write() , res.status(), res.set(), res.header(), res.type(), res.cookie() these methods are not end process 

// Http response status code 
