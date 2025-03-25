// 1.Create an object person with properties name, age, and city. Then modify city to a new value.
const person = {
    name : "vishal",
    age : 24,
    city : 'Pune'
}
person.city = 'Shrigonda'
// console.log(person);

// 2.Add a new property email to person and then delete the age property.
person.email = 'vishal@gamil.com'
delete person.age;
// console.log(person);

// 3.Write a function that checks if a given key exists in an object.
console.log(person.hasOwnProperty('email'));// only direct properties can not checks properties created with Object.create(null);
console.log(Object.hasOwn(person,'email'));//if object have property name with hasOwnProperty it is best choise
console.log('email' in person);// it checks direct and inherited properties also 
// - use hasOwn if you want to checks direct properties
// - use in operator if want to checks for direct and indirect properties 
// - avoid hasOwnProperty() 

// 4.Write a function that logs all key-value pairs in an object.
function logObject(object){
    for(let [key,value] of Object.entries(object)){
        console.log(key, value);
        
    }
}
// for(let key in person){
//     console.log(key,person[key]);
    
// }
// logObject(person)

// 5.Find the property with the longest key name in an object.
function largestKey(object){
    let largeKey='';
    for(let key in object){
        if(key.length > largeKey.length){
            largeKey = key;
        }
    }
    return largeKey;

    Object.keys(object).reduce((largeKey,key)=>key.length > largeKey.length ? key : largeKey)
}
// console.log(largestKey(person));
// person.currentAddress = 'Pune'
// console.log(largestKey(person));

// 6.Merge two objects and return a new object.
const address = {
    city : 'nagar',
    state : 'Maharashtra',
    country : 'India'
}

const mergedObject = Object.assign(person,address)
// console.log(mergedObject);
const mergedObject2 = {...person,...address};
// console.log(mergedObject2);
// - using spread operator is recommended bcz of its clean and simple syntax 


// 7.Write a function to count the number of properties in an object.
function countPropNumber(object){
    let count = 0;
    for(let key in object){
        if(Object.hasOwn(object,key)){
            count++;
        }
    }
    return count;

    // using Object.keys()
    // return Object.keys(object).length;
}
// console.log(person);
// console.log(countPropNumber(person));

// 8.Convert an object into an array of [key, value] pairs.
const arr = Object.entries(person)
// console.log(arr);

// 9.Write a function that sums only the numeric properties of an object.
person.salary = 12000;
person.age = 24;
function sumOfNumbericProp(object){
    const values = Object.values(person);
    let sum = 0 ;
    for(let value of values){
        if(typeof value === 'number' && !Number.isNaN(value)){
            sum+=value;
        }
    }
    return sum;
}
// console.log(sumOfNumbericProp(person));


// 10.Write a function that prints all values from a nested object.
const employee = {
    name: "Vishal",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Pune",
        zip: 411001
    },
    contacts: {
        phone: "9876543210",
        email: "vishal@example.com",
        social: {
            linkedin: "linkedin.com/in/vishal",
            github: "github.com/vishal78"
        }
    },
    scores: [85, 90, 78], // Array inside object
    isActive: true
};
function printsNestedObject(object){
    for(let value of Object.values(object)){
        if(typeof value === "object"){
            for(let [key, val] of Object.entries(value)){
                console.log(key,val);
            }
        }
    }
}

// printsNestedObject(employee)

// 11.Write a function that returns all keys from a nested object.
function keyFromNestedObject(object){
    let keys = [];
    for(let key in object){
        if(Object.hasOwn(object,key)){
            if(typeof object[key] === 'object'){
                for(let nestedKey in object[key]){
                    keys.push(nestedKey);
                }
            }
        }
    }
    return keys;
}
// console.log(keyFromNestedObject(employee));

// 12.Convert an array of objects into a single object where keys are object properties and values are arrays.
const users = [
    { id: 1, name: "Vishal", age: 25 },
    { id: 2, name: "sanket", age: 28 },
    { id: 3, name: "Rahul", age: 30 }
];
const singleObject = {}
for(let key in users){
    singleObject[key]=Object.values(users[key]);
}
// console.log(singleObject);
//----------------------------------------------------
//try this with reduce method
const singleObject2 = users.reduce((acc,value,index)=>{
    acc[index]=Object.values(value)
    return acc;
},{})

// console.log(singleObject2);

// 13.Write a function to find the deepest level of nesting in an object.
let level = 1;
function deepestLevel(object){
    for(let key in object){
        if(Object.hasOwn(object,key)){
            if(typeof object[key]==='object'){
                level++;
                deepestLevel(object[key])
            }
        }
    }
}
const deepestObject = {
    address : {
        city :{
            state : {
                street : {

                }
            }
        },
        demo:{
            demo2 :{
                demo3 : {
                    demo4:{
                        demo5 : 23
                    }
                }
            }
        }
    }
}
// deepestLevel(deepestObject)
// console.log(level);
//if same level have two nested objects then what ?
// ------------------------------------------------------------
function deepestLevel2(object,depth=1){
    let maxDepth = depth;
    for(let key in object){
            if(typeof object[key]==='object'){
                let currentDepth = deepestLevel2(object[key],depth+1)
                maxDepth = Math.max(maxDepth,currentDepth);
            }
    }
    return maxDepth;
}


console.log(deepestLevel2(deepestObject));

// 14.Write a function that returns an array of properties of a specific data type.
function specificProp(object,dataType){
    const result = []
    for(let key in object){
        if(Object.hasOwn(object,key)){
            if(dataType === typeof object[key]){
                result.push(key);
            }
        }
    }
    return result;
}
// console.log(specificProp(person,"Number"));

// 15.Write a function that deep clones a nested object.
function deepClone(object){
    return {...object};
}
const newEmployee = deepClone(employee);
newEmployee.address.street = 'sinhgad road';
newEmployee.name = 'Rahul';
// console.log(employee);
// console.log(newEmployee);


// json assignment
// 1.Create a JSON object for a person with name, age, and city, and access the name property.
// const person = {
//     name : 'Vishal',
//     age : 23,
//     city : 'Pune'
// }
// console.log(person['name']);

// 2.Convert a JavaScript object into a JSON string.
const jsonString = JSON.stringify(person);
// console.log(jsonString);

// 3.Parse a JSON string into an object and change the city property to "San Francisco".
const jsonObject = JSON.parse(jsonString);
jsonObject.city = 'San Francisco';
// console.log(jsonObject);

// 4.Convert an array of numbers [10, 20, 30] into a JSON string.
const num = [10,20,30];
// console.log(num);
// console.log(JSON.stringify(num));//'[10,20,30]'

// 5.Convert an object to a formatted JSON string with indentation.
// console.log(JSON.stringify(person,null,100));

// 6.Convert an object to a JSON string but include only name and age properties.
// console.log(JSON.stringify(person,['name','age']));

// 7.Parse the JSON string into an array and access any value.
const array = []
JSON.parse(jsonString,(key,value)=>{
    array.push(value);
})
// console.log(array);

// 8.Deep clone an object using JSON.stringify and JSON.parse.
const original = {
    name: "Vishal",
    address: { city: "Pune", zip: 411001 }
}
const deepClone = JSON.parse(JSON.stringify(original));
deepClone.address.city = 'shrigonda'
// console.log(original);
// console.log(deepClone);

// problem 
// -it ignores functions, undefined, NaN and symbols and Infinity
// - use this approch when object contains only array and primitive values 

// 9.Write a function that safely parses JSON and handles errors.
function parseJson(jsonStr){
    try {
        const parsedObj = JSON.parse(jsonStr);
        return parsedObj;
    } catch (error) {
        return {}
    }
}

const data = parseJson('{"name":"Vishal"}');
// console.log(data);

const badData = parseJson('{"name":"Vishal", age:}');
// console.log(badData); 

// 10.Remove properties with values "null" or "undefined" while converting an object to a JSON string.

function remover(object){
    const jsonString = JSON.stringify(object,(key,value)=>{
        return value === null ? undefined : value;
    })
    return jsonString;
}

const myData = {
    name: "Vishal",
    age: 25,
    city: "Pune",
    email: null,       
    phone: undefined,  
    skills: ["JavaScript", "Node.js"]
};
// console.log(remover(myData));


