// Object 
// - it is a collection of key value pair where key are string or symbols

// Object creation, 
// - we can create object in two ways 
// 1. literal syntax 
// 2. new Object()

// 1. literal syntax 
const user = {
    id : 233,
    name : 'vishal',
    email : 'vishal@gmail.com',
    isLoggedIn : true
    // [secreatKey] : 1324
}
// console.log(user);

// 2. new Object()
const employee = new Object();
employee.id=123;
employee.name='Rahul';
employee.salary=12000;
// console.log(employee);

// Accessing elements
// 1. using dot 
// console.log(user.id)
// console.log(user.name)
// console.log(user.gender);//undefined if property is not present it returns undefined


// 2. using []
// console.log(user['email'])
// console.log(user['isLoggedInw'])

// modifying properties
// adding new property 
user.age = 24;
// adding symbol key 
const secreatKey = Symbol('password');
user[secreatKey] = "vishal123";
// user.secreatKey = "vishal123";
// console.log(user);
// console.log(user[secreatKey]);
let address = {
    city : 'pune',
    state : 'Maharashtra'
}
user.address = address;
// console.log(user)
// update id 
user.id = 111;
user['name'] ='Vishal Nimbalkar';

// delete property 
// it delete property from object and return true 
// console.log(delete user.id)
// console.log(delete user.ss)
// delete user - we cannot delete object using delete
// console.log(user);
