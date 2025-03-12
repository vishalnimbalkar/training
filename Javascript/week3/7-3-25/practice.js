// Nested objects, 
const person = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
    },
    hobbies: ["reading", "gaming"],
    work: {
      company: "TechCorp",
      position: "Developer",
      details: {
        experience: 5,
        skills: ["JavaScript", "React", "Node.js"]
      }
    }
  };
  
//   console.log(person.name);//John
//   console.log(person.address.city);//New York
//   console.log(person.work.details.skills[1]);//React
//   console.log(person.hobbies[1]);//gaming
//   console.log(person['hobbies'][0]);//reading
  
// const obj = { a: { b: { c: 42 } } };
// console.log(obj.a?.b?.c);  
// console.log(obj.x?.y?.z);  

// const person2 = { name: "Alice", contact: null };
// console.log(person2.contact?.email);

// const obj = { key: "value" };
// console.log(obj["key"]);
// console.log(obj.key);
// console.log(obj.key?.toUpperCase());
// console.log(obj["missingKey"]?.toUpperCase());
// console.log(undefined.toUpperCase());

// const obj = { '1': "one", "01": "zero-one", true: "bool", null: "nothing" };
// console.log(obj[1]);//one
// console.log(obj["01"]); //zero-one
// console.log(obj[true]); //bool
// console.log(obj[null]); //nothing

// const arr = [10, 20, 30];
// arr["key"] = 99;

// console.log(arr.length);//3
// console.log(arr["key"]);//99
// console.log(arr[3]);//undefined

// const obj = { a: { b: { c: 100 } } };
// const copy = JSON.parse(JSON.stringify(obj));

// copy.a.b.c = 200;
// console.log(obj.a.b.c);

// const arr = [[1, 2], 
//              [3, 4]];
// console.log(arr[0][1]);

// const obj = { x: 10 };
// console.log(obj.hasOwnProperty('x'));
// console.log("x" in obj);
// console.log(Object.keys(obj).includes('x'));

// const data = { users: [{ name: "Alice" }, { name: "Bob" }] };
// console.log(data.users?.[1]?.name);//Bob 
// console.log(data.users?.[3]?.name);//undefined

// const obj = { name: "Sam", age: 25 };
// delete obj.age;
// console.log(obj.age);//undefined
// console.log(obj.hasOwnProperty("age"));//false

// Iterating objects, 
// -using for...in 
for(let key in person){
    // console.log(`${key} : ${person[key]}`);
    
}

// -using forEach()
Object.keys(person.address).forEach((add)=>{
    // console.log(add+" : "+person.address[add]); 
})

Object.values(person.work).forEach((ele)=>{
    // console.log(ele);  
})


// tricky questions

// const obj = { a: 1, b: 2, c: 3 };
// for (let key in obj) {
//   console.log(key);
// }

// const obj = { x: 10, y: 20 };
// obj.z = undefined;

// for (let key in obj) {
//   console.log(key);
// }

// const obj = { a: 1, b: 2, c: 3 };
// const keys = Object.keys(obj);

// keys.forEach(key => {
//   console.log(key, obj[key]);
// });

// const obj = { name: "John", age: 30 };
// Object.prototype.gender = "male";

// for (let key in obj) {
//   console.log(key);
// }


// Object Methods
// Object.entries()

// console.log(Object.entries(person));


Object.entries(person).forEach(([key,value])=>{
  // console.log(key, value);
  
})

for(let [key, value] of Object.entries(person)){
  // console.log(key,value);
  
}
let a = [1,2,3]
// console.log(Object.entries(a));
// console.log(Object.entries("djflks"));


// hasOwn()
// const obj = {
//   name: "Alice",
//   age: 25,
//   hasOwnProperty: () => false
// };

// console.log(obj.hasOwnProperty("name"));//false
// console.log(Object.prototype.hasOwnProperty.call(obj, "name"));//true
// console.log(Object.hasOwn(obj, "name"));//true

// const obj = Object.create({ inherited: "value" });
// obj.own = "value";

// console.log(Object.hasOwn(obj, "own"));//true
// console.log(Object.hasOwn(obj, "inherited"));//false
// console.log(obj.hasOwnProperty("own"));//true
// console.log(obj.hasOwnProperty("inherited"));//false

const obj = Object.create(person);
obj.key = "value";

// console.log(obj.hasOwnProperty("key"));
// console.log(Object.prototype.hasOwnProperty.call(obj, "key"));
// console.log(Object.hasOwn(obj, "key"));

// console.log(null==0);//false
// console.log('' && 0 && "hell");

// let arr = [1,2,3,4];
// delete arr[2];
// console.log(arr[2]);

// // console.log(arr.splice(null,undefined));
// let str = "vishal"
// console.log(str.concat(4,5));
// console.log(str.slice(-10,3));


// arr[-202]=233;
// console.log(Object.values(arr));
// console.log(arr.join("+"));

// console.log(arr.length);

// toLocalString()
// - returns string representation of given object 

const testDate = new Date();

// const indDate = testDate.toLocaleString("ind");
// console.log(indDate);

let num = 1000000;
console.log(num.toLocaleString('en-IN'));

// toString()
// -converts given object into string 

// valueOf()
// -convets object into primitive value  

