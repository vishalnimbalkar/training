const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');
const app = express();
const port = 3000;

app.use(express.json()); 
// When a request has a Content-Type: application/json header and includes a JSON body, this middleware:
// Reads the request body stream
// Parses the raw JSON string into a JavaScript object
// Stores it in req.body
// Passes control to the next middleware/route handler


app.get('/users',(req, res)=>{
    res.status(200).json(users);
})

app.get('/users/:id',(req, res)=>{
    const id = Number(req.params.id);
    const user = users.find(user=>user.id === id);
    if(user){
        res.status(200).json(user);
    }else{
        res.status(404).json({message : 'user not found'})
    }
})

app.post('/users',(req, res)=>{
    const user = req.body;
    user.id = users.length+1;
    users.push(user);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) return res.status(500).json({ message: 'Error writing file' });

        res.status(201).json(user);
    });
})

app.patch('/users/:id', (req, res)=>{
    const id = Number(req.params.id);
    const updatedFields = req.body;
    let index = users.findIndex(user=>user.id === id);
    if(index === -1){
        res.status(404).send('User not found');
    }
    users[index] = { ...users[index], ...updatedFields };

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) return res.status(500).json({ message: 'Error writing file' });

        res.status(200).json(users[index]);
    });
})

app.delete('/users/:id', (req, res)=>{
    const id = Number(req.params.id);
    filterdUsers = users.filter(user => user.id !== id);
    
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(filterdUsers), (err) => {
        if (err) return res.status(500).json({ message: 'Error writing file' });

        res.status(200).send(`user with id ${id} is deleted successfully`);
    });
})

app.put("/users/:id", (req, res)=>{
     const id = Number(req.params.id);
    const updatedFields = req.body;
     let index = users.findIndex(user=>user.id === id);
     if(index === -1){
         res.status(404).send('User not found');
     }
     users[index] = { ...updatedFields };
 
     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
         if (err) return res.status(500).json({ message: 'Error writing file' });
 
         res.status(200).json(users[index]);
     });
})
app.listen(port, ()=>console.log(`server running on port ${port}`));