const users = require("../MOCK_DATA.json");
const fs = require("fs");

const getAllUsers = async (req, res) => {
  res.status(200).json({ success: true, users: users });
};

const getByUserId = async (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    res.status(200).json({ success: true, user: user });
  } else {
    res.status(404).json({ success: false, message: "user not found" });
  }
};

const insertUser = async (req, res) => {
  const user = req.body;

  if (user) {
    const id = Math.ceil(Math.random() * 1000);
    user.id = id;
    console.log(user);
    users.push(user);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) return res.status(500).json({ message: "Error writing file" });

      res.status(201).json({ success: true, user: user });
    });
  } else {
    res.status(404).json({ success: false, message: "Error to insert User" });
  }
};

const updateUser = async (req, res) => {
  const updatedFields = req.body;
  const id = Number(req.params.id);
  console.log(updatedFields);
  console.log(id);

  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedFields };
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) return res.status(500).json({ message: "Error writing file" });

      res.status(200).json({ success: true, user: users[index] });
    });
  } else {
    res.status(404).json({ success: false, message: "Error to update User" });
  }
};

const deleteUser = async (req, res) => {
  const id = Number(req.params.id);
  updatedFields = users.filter((user) => user.id !== id);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(updatedFields), (err) => {
          if (err) return res.status(500).json({ message: 'Error writing file' });
  
          res.status(200).json( {message : `user with id ${id} is deleted successfully`});
      });
};

const replaceUser = async (req, res)=>{
    const id = Number(req.params.id);
    const newUser = req.body;
    const index = users.findIndex(user => user.id === id);
    if(index !== -1){
        users[index] = newUser;
          fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
              if (err) return res.status(500).json({ message: 'Error writing file' });
      
              res.status(200).json( {success : true, user: users[index]});
          });
    }else{
    res.status(404).json({ success: false, message: "User not found" });
    }
}

module.exports = {
  getAllUsers,
  getByUserId,
  insertUser,
  updateUser,
  deleteUser,
  replaceUser
};
