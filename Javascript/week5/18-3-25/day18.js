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
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions