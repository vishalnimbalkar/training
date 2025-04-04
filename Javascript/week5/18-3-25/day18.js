// Function Declaration, Arrow Functions, Parameters , higger Order functions, rest parameter, default parameter

// function declaration 
// function funcName(parameter1,parameter2,...,parameterN){
    //code inside method
// }

function greetMessage(){
    console.log("Hello, everyone");
}
// function call
// greetMessage()//Hello, everyone

// if function does not have return statement or if return keyword does not have any expression it returns undfined 
function show(){
    return
}
// console.log(greetMessage());
// console.log(show());//undfined
// -one function can only return one value 

// passing arguments
function addTwoNumbers(num1, num2){
    return num1+num2;
}
// - in above function declaration num1 and num2 are function parameters 
// - we can pass multiple parameter at a time 
addTwoNumbers(12,22);
// - 12 and 22 are called arguments

// passing object as a parameter

const Student = {
    name : 'vishal',
    age : 24
}
function updateName(std){
    std.name = 'sanket'
}
// console.log(Student.name);//vishal
// updateName(Student);
// console.log(Student.name);//sanket

// passig array as parameter 
let a = [12,23,34];
function updateArray(arr){
    arr[0]=11;
}

// console.log(a[0]);//12
// updateArray(a)
// console.log(a[0]);//11


// function expression 
// using anonymous function 
// -we can not use function recursively 
const add = function (a,b){
    return a+b;
}
// console.log(add(12,32));

// with function name  - if we want to use function recursively we need function name 
const sub = function subtraction(a,b){
    return a - b;
}
// console.log(sub(12,34))

// calling function
// console.log(add);// [Function: add]
// console.log(sub);// it logs only function reference - [Function: subtraction]
// console.log(sub(12,10));// we need to use paranthesis to call function 
// console.log(typeof sub);//function 
// console.log(typeof sub());//number - return type of functon
// -----------------------------------------------------
// recursion
let num = 0;
const message = function msg(){
    if(num > 4){
        return
    }else{
        console.log("hello");
        num++;
        // message();  - we can call function recursively using both ways
        msg()
    }
};
// message()
// ---------------------------------------------------------------------------
// Immediately Invoked Function Expressions (IIFE)
// - An IIFE is a self executing anonymous function 
// -syntax 
(function (){
    // console.log("IIFE")
})();
// -with arrow function 
// - if we donot close previous statement with semicolon js try to combine IIFE with previous statement and couseing error 
// let arr = 19
(()=>{
    // console.log("IIFE with Arrow function");
})();

// named IIFE 
(function print(name){
    console.log(name);
})('vishal');
// print('rahul')// RFError : print is not defined
// where use IIFE
// - to initializing values when page reload 
// -------------------------------------------------------
// function and global variable scope 
// -variables defined inside function cannot accessed outside the function
// - function can access all variables from global scope 
// - function does not have access to varaibles and functions declared inside inner function 

let num1 = 10;
let num2 = 39;
let name = "vishal";

function multiply(){
    let result = num1 * num2// global variable accessed inside function
    console.log(result);
}
// console.log(result);//ReferenceError: result is not defined - try to access inner function variable

function outer(){
    let result = num1 + num2;
    function inner(){
        let innerVar = num1 - num2;
        console.log(result);//outer function variable accessed
        console.log(name);//global variable accessed
    }
    // console.log(innerVar);//ReferenceError: result is not defined
    return inner;
}
const myFunc = outer();
// myFunc()
// --------------------------------------------------------------
// closure
// - it is combination of function and its lexical scope 
//  name conflicts - when a two variables or functions have same name in inner and outer scope then the inner scope variable has high precedence than outer scope variable
// --------------------------------------------------------
// Using arguments object 
// we can access arguments passed to a function using arguments object it is array like object 
// -syntax - arguments[i]
// - i is the number of argument and it start with 0 , so first argument is accessed by argument[0]
// - the total number of arguments are accessed by arguments.length;

function concatStr(str){
    let result ='';
    for (let index = 0; index < arguments.length; index++) {
        result +=arguments[index]
    }
    return result;
}

// console.log(concatStr('my ','name ','is ','vishal'));
// Note - arguments is array-like object is only has 0 based indexig and length property, it dose not have any other array properties
// ---------------------------------------------------------
// Function parameter
// 1.Default parameter
// - in js parameters of functions default value is undefined. 
// - we can set it to a default value at the time of declaration 

// example without default parameter
function mul(a,b){
    b = typeof b !== "undefined" ? b : 1;
    return a*b
}
//  console.log(mul(5));//NaN - without b = typeof b !== "undefined" ? b : 1;
//  console.log(mul(5));//5 

// using default parameter
function mul2(a,b=1){
    return a*b;
}
// console.log(mul2(9));//9
// console.log(mul2(9,undefined));//9 * 1 =9
// console.log(mul2(9,null));//9 * 0 =0 - it treat null as valid value
// if we pass undefined to default parameter it will take default value 

// Earlier parameters are available to later default parameters
// - parameter define earlier (to left ) are available to the later default parameters

function demo(name,message = `hello, ${name}`){
    return message;
}
// console.log(demo('vishal'));//hello, vishal
// ---------------------------------------------------------------------------
// Rest Parameter
// -it allow function to accept multiple arguments as an array 
// - syntax 
// function funcName(a,b, ...restArg){}
// - a function defination only have one rest parameter
// - rest parameter must be the last parameter 
// - rest parameter cannot have default value 
// - rest parameter prefix with triple dots (...)
// ex 
function names(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(Array.isArray(c));//true
    // console.log(arguments.length);
}
// names('a','b','c','d','e')
// a
// b
// [ 'c', 'd', 'e' ]

// names('a','b')
// a
// b
// [] - if no extra arguments passed it returns empty array

// names('a')
// a
// undefined
// [] 

// difference between rest parameter and arguments object 
// 1. rest parameter is array it supports all arra  methods and properties , arguments is array like object that only supports length property and 0 based indexing 
// 2. rest parameter does not contains any defined arguments before the ...restPara, arguments contains all named defined and rest parameter arguments
// ----------------------------------------------- --------------
// Arrow function 
// () => expression
// - no parameter
const f1 = () => console.log('f1');
// f1()

// param => expression
// - one parameter for this paranthesis optional
    let firstName = 'vishal'
    const f2 = firstName => console.log(firstName);
    // f2(firstName);

// (param) => expression
// -single parameter with parathesis
const f3 = (firstName) => console.log(firstName);
// f3(firstName);

// (param1, paramN) => expression
// -multiple parameters 
// - parathesis required if we are using more than one parameter 
let lastName = 'Nimbalkar'
const f4 = (firstName, lastName) => console.log(firstName, lastName);
// f4(firstName,lastName)

// () => {
//   statements
// }
// - no parameter with curley brackets indicates function body 
const f5 = ()=>{
    console.log('f5');
}
// f5()

// param => {
//   statements
// }
//- single parameter with {} and () are optional for single parameter
const f6 = firstName => {
    console.log(firstName);
}
// f6(firstName)

// (param1, paramN) => {
//   statements
// }
// -multiple parameters with {}
// - parathesis required if we are using more than one parameter 
const f7 = (firstName ,lastName) => {
    console.log(firstName, lastName);
}
// f7(firstName,lastName)

const f8 = (x)=> {return x*2};
// console.log("f8",f8(3));

// above function returns x*2 
// it is same as (x) => {return x*2}
// this works only for single line expression without {}

// returning object using single line expression 
const f9 = ()=>{name : 'vishal'};
// console.log(f9());// undefined
//-bcz of {} we need to use return statement 
// to return object in single line expression wrap it in ()
const f10 = ()=>({name : 'vishal'});
// console.log(f10());//{ name: 'vishal' }

// console.log(this); // {}

const argEx = (a,b)=>{
    console.log(arguments[0],arguments[1]);
}
// argEx()
//arrow function does not have arguments object
// - we can use rest parameter as alternative for arrow functions

function my(){
    let age = 20;
}
const obj = new my();
// console.log('prototype' in my);

// const obj2 = new f10();//TypeError: f10 is not a constructor
// console.log('prototype' in f10);//false
// arrow function does not have prototype
// arrow function cannot be used as constructor it will thow error when called with new keyword

// const func = (a, b, c)
//   => 1;
// SyntaxError: Unexpected token '=>'
// arrow function cannot contain line break between parameters and arrow

// IIFE with arrow function 
// (()=>console.log('hello'))();//hello



const result = function (a,c){
    console.log(arguments);
}
// result(12,32);//[Arguments] { '0': 12, '1': 32 }

function demo(a, a) {
    // console.log("a ",a);
}
demo(1, 2); // 2 in non Strict , error in strict

const object = {
    value: 10,
    method: function () {
        console.log(this.value);
    },
    arrow: () => {
        console.log(this.value);
    }
};
// object.method(); // 10
// object.arrow();  // undefined
// The this inside a regular function refers to the calling object (obj).
// The this inside an arrow function refers to the lexical scope (outside the object), typically window in browsers or global in Node.js.

let count = 1;
function increment(a = count++, b = a) {
    console.log(a, b);
}
// increment(); // 1 1
// increment(); // 2 2

// this keyword when and where use
// when to use this keyword 
// -refering to current object methods
// -accessesing properties inside constructor or classes
// -value of this keyword is changes based on function type 
// -in browser this refers to global object window 
// - in Node.js it refers to global 
// console.log(this); //{}

// regular funtion in non strict mode 
function showThis() {
    let username = "vishal"
    console.log(this); // window (in browsers) / global in node.js inside regular function outside {}
    console.log(this.username); // undefined
}
// showThis();

const inArrowFunc = ()=>{
    let username = "vishal"
    console.log(this);//{} - it inherit this from parents scope
    console.log(this.username); // undefined
}

inArrowFunc()
// regular funtion in strict mode 
// "use strict";
// function showThis2() {
//     console.log(this); // undefined
// }
// showThis2();

// in object method this refers to object itself 
const person = {
    name: "Vishal",
    greet: function() {
        console.log(this.name); // "Vishal"
    }
};
// person.greet();

// arrow function don't bind this they inherit it from parent scope 
const object2 = {
    value: 42,
    method: function () {
        const arrowFunc = () => {
            console.log(this.value); // 42
        };
        arrowFunc();
    },
    method2 :  () => {
        console.log(this.value); // undefind
    }
};
object2.method();
object2.method2();

// in DOM event handing this refers to the html element that call event 
// document.getElementById("btn").addEventListener("click", function () {
//     console.log(this); // Refers to the button element
// });
// call(), apply(), bind()

// call by value and call by reference 
// call by value (primitive data types)
let nums = 10;

function modifyValue(x) {
    x = x + 5;  
    console.log(x); //15
}

modifyValue(nums);
console.log(nums); // 10 
// - the value of nums is copied into x 
// - changes inside function not affects nums 

// call by reference (non - primitive data type)
let obj2 = { value: 10 };

function modifyObject(objRef) {
    objRef.value += 5; 
    console.log(objRef.value); //15
}

modifyObject(obj2);
console.log( obj2.value); // 15 
// - reference of obj2 is passed to objRef 
// both shares same memory 
// changes make in one object affects other also 

