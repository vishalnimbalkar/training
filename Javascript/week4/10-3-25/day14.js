// JSON Syntax
// rule
// - it store data in the form of key-value pair ("key"  : value)
// - key is always string enclosed in "" 
// - value can be string, number, boolean, array, object(nested),null 
// - comments are not allowed
// - no comma at the last item 
// ex:
// json object
   const employee = {
        "id": 1,
        "name": "Vishal",
        "age": 24,
        "skills": ["JavaScript", "Java"],
        "isLoggedIn": true,
        getData : ()=>{
            return "data..."
        }
    }
  
// json array
   const students = [
    {
      "id": 1,
      "name": "vishal"
    },
    {
      "id": 2,
      "name": "rahul"
    },
    {
        "id" : null,
        "name" : undefined
    }
  ]

  // Stringifying
//   JSON.stringify() - converts object into json string 
// - undefined and functions are ingnore by this method
const stringObj = JSON.stringify(employee)
// console.log(stringObj);


// Parsing
// JSON.parse() - converts json string into js object
// ---------------------------------------------------------
//if json string has undefined and null what happen?
const jsonString2 = '{"name":"undefind", "age": null}';
// console.log(JSON.parse(jsonString2));
// console.log(JSON.parse(jsonString2).age);
// -null is store as it is 
// - undefind is store as a string 

// why and where we use json strigigy and parsing?
// - api communication
// - to store data in local and session storage bcz- it store only string type data

let jsObject = JSON.parse(stringObj);
// console.log(jsObject.age);

// console.log(JSON.stringify({ a: undefined, b: null, c: NaN }));

// const jsonString = '{"name":"alice"}'
// console.log(JSON.parse(jsonString));

// console.log(JSON.stringify([1, undefined, 2, null, NaN]));//"[1,null,2,null,null]"

// const obj = { x: 10, y: 20 };
// console.log(JSON.parse(JSON.stringify(obj)) === obj);//false

// console.log(JSON.stringify({ a: 1, b: () => 2, c: function() { return 3; } }));//"{"a":1}"


// const obj = { name: "Alice", age: 25 };
// const jsonString = JSON.stringify(obj, ["name"]);
// console.log(jsonString);

const obj = { name: "Alice", age: 25 };
// console.log(JSON.stringify(obj, null, 2)); // Fill in the ???



