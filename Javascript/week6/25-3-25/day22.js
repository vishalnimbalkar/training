// destructuring
// -The destructuring assignment syntax unpack object properties into variables:
// -Destructuring null or undefined directly cauase TypeError
// - js cannot extract values from null and undefind 
// -to avoid this error use default values 

// array destructuring
let arr = [2,3,5,7,8,10];
// let [a,b,c]=arr;
// console.log(a,b,c);

// skiping array values 
// let [a,b,,,,c]=arr;
// console.log(a,b,c);//2,3,10

// array position values 
let {[0]:first, [1]:second,[arr.length-1]:last} = arr;
// console.log(first, second, last);//2,3,10

// The Rest Property
// You can end a destructuring syntax with a rest property.
// This syntax will store all remaining values into a new array:
// let  [a,b,c ,...rest] = arr;
// console.log(a,b,c,rest);

// --------------------------------------------------------------------------
// object destructuring
// it does not change the original object 
// const person ={
//     firstName : 'Vishal',
//     lastName : 'Nimbalkar'
// }

// let {firstName, lastName}=person;
// console.log(firstName, lastName);

// let {first, last}=person;
// console.log(first, last);// undefined undefined

// the order of properties does not matter in object 

// let {lastName, firstName}=person;
// console.log(firstName, lastName);// Vishal Nimbalkar

// // Object property alias 
// let {firstName : myName} = person;
// console.log(myName);//Vishal

// Object default values 
// let {firstName, lastName, country = "IND"} = person;
// console.log(firstName, lastName, country);//Vishal Nimbalkar IND

// Note : destructuring can be used with any iterable 
// --------------------------------------------------------------------------

// String Destructuring
let str = "vishal"
let [char1, char2, , , , char6] = str;//v i l
// let [char1, char2, ...char6] = str;//v i [ 's', 'h', 'a', 'l' ]
// console.log(char1, char2, char6);

// swaping js variable using destructuring
let num1 = 10;
let num2 = 30;
[num1, num2] = [num2, num1]
// console.log(num1, num2);//30 10


// ---------------------------------------------------------------------------------
// sessionStorage() and localStorage()
// 1.sessionStorage()
// - stores data temporarily on the client side 
// - when tab is closed data is clear
// - storage limit is 5MB 
// - scope for data is one tab only 

// / 2.localStorage()
// - it also used to store data on client side  
// - data stores permenantly (until manually cleared) 
// - storage limit is 5MB 
// - scope for data is shared across all tabs 


// tricky questions 
// what happen when we store direct object on session or localStorage
// sessionStorage.setItem('data',{name : 'vishal'})//'[object Object]' - given object is coerced into string
// localStorage.setItem('data',JSON.stringify({name : 'vishal'}))

// - localStorage is accessed from only other tabs those have same origin(protocol + domain + port)
// -If you store this on https://example.com, it won’t be accessible on https://sub.example.com or http://example.com.

// when to use which
// use sessionStorage for temporary data like. form data, and user selections
// use sessionStorage for temporary user login when user close tab login details will clear 

// use localStorage in e-commerce website for cart functionality
// used for user preferences like theme or wesite setting 

// Modular JavaScript (Import/Export, Code Splitting)
// Module
// js module allow to break code in separate files
// this makes easier to maintain code 
// modules are imported from external files with the help of import statement 
// modules also rely of type='module' in <script type='module'></script> tag
// example 
    // <script type="module">
    // import message from "./message.js";
    // </script> 

// Export 
// functions and variable can be exported from module using export statement 
// There are two types of exports:
// 1. Named export 
// we can create named export two ways in-line individually and all once at bottom
// -In line individually
    export const name = 'vishal';
    export const age = 23;
// - All at once at the bottom 
    const email = 'vishal@gamil.com'
    const password = '2332'
    export {email, password};
// 2. Default export 
// Import 



