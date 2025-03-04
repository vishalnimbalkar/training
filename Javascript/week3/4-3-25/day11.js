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
// console.log(user['isLoggedIn'])

// modifying properties
// adding new property 
user.age = 24;
// adding symbol key 
const secreatKey = Symbol('password');
user[secreatKey] = "vishal123";
// user.secreatKey = "vishal123";
// console.log(user);
// console.log(user[secreatKey]);

// update id 
user.id = 111;
user['name'] ='Vishal Nimbalkar';

// delete property 
// it delete property from object and return true 
console.log(delete user.id)
console.log(delete user.ss)
// delete user - we cannot delete object using delete
console.log(user);

// hasOwnProperty

// for in loop
for(let key in user){
    console.log(user[key]);
}
// - for in loop iterates objects by keys 
// - we can't use dot notation to access properties instead use [] ex.,user[key]
// -Note: for...in loops over the keys of an object, not the values.
// Dot notation expects a literal property name, not a variable.
// user.key tries to access a property named "key", but the object does not have 'key', so it returns undefined.
// -Bracket notation allows dynamic property access because key holds different values during each loop iteration.


// Object.assign()

// Object.keys() 

// Object.values()
