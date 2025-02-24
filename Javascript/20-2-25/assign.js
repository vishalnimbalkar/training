// 1. Create a simple calculator in JavaScript that:
// Takes two numbers as input from the user.
// Performs addition (+), subtraction (-), multiplication (*), division (/), and modulus (%).
// Displays the results in the console.
// Uses assignment operators (+=, -=, *=, /=, %=) to modify a variable and log the updated values.

const prompt = require("prompt-sync")();

/**
 * accept two input values from user and conversts it into number
 * @returns {object} array of user inputs
 */
function getInput() {
  let num1 = Number(prompt("Enter first number: "));
  let num2 = Number(prompt("Enter second number: "));
  return [num1, num2];
}

/**
 * take two parameters and return addtion of two numbers
 * @param {number} num1 - first number
 * @param {number} num2 - second number
 * @returns addtion of num1 and num2
 */
function addtion(num1, num2) {
  return num1 + num2;
}

/**
 * take two parameters and return substraction of two numbers
 * @param {number} num1 - first number
 * @param {number} num2 - second number
 * @returns substraction of num1 and num2
 */
function substraction(num1, num2) {
  let result = num1;
  result -= num2;
  return result;
}

/**
 * take two parameters and return multiplication of two numbers
 * @param {number} num1 - first number
 * @param {number} num2 - second number
 * @returns multiplication of num1 and num2
 */
function multiplication(num1, num2) {
  let result = num1;
  result *= num2;
  return result;
}

/**
 * take two parameters and return division of two numbers
 * @param {number} num1 - first number
 * @param {number} num2 - second number
 * @returns division of num1 and num2
 */
function division(num1, num2) {
  if (num2 == 0) {
    return 0;
  }
  return num1 / num2;
}

/**
 * take two parameters and return modulus of two numbers
 * @param {number} num1 - first number
 * @param {number} num2 - second number
 * @returns modulus of num1 and num2
 */
function modulus(num1, num2) {
  return num1 % num2;
}

let userInput = getInput();
let num1 = userInput[0];
let num2 = userInput[1];

// console.log("Addition : " + addtion(num1, num2));
// console.log("Substraction : " + substraction(num1, num2));
// console.log("Multiplication : " + multiplication(num1, num2));
// console.log("Division : " + division(num1, num2));
// console.log("Modulus : " + modulus(num1, num2));

// 2.Write a function that:
// Takes two numbers as input from the user.
// Uses comparison operators (>, <, >=, <=, ==, ===, !=, !==) to compare them.
// Uses logical operators (&&, ||, !) to evaluate conditions.
// Displays the results in the console.

/**
 * It compare two input values using comparision operators (>, <, >=, <=, ==, ===, !=, !==).
 * Uses logical operators (&&, ||, !) to evaluate conditions.
 * @param {number} num1 - first parameter
 * @param {number} num2 - seconde parameter
 */
function compareInputs(num1, num2){
    if(num1<num2){
        console.log(`${num1} is less than ${num2}`);
    }else{
        console.log(`${num1} is greater than ${num2}`);
    }

    if(num1>num2){
        console.log(`${num1} is greater than ${num2}`);
    }else{
        console.log(`${num1} is less than ${num2}`);
    }

    if(num1===num2){
        console.log(`${num1} is equal to ${num2}`)
    }else{
        console.log(`${num1} is not equal to ${num2}`)
    }

    if(num1>0 && num2>0){
        console.log("both numbers are positive");
    }
    if(num1<0 && num2<0){
        console.log("both numbers are negative");
    }

    if(num1>0 || num2>0){
        console.log("one numbers is positive");
    }
}

// compareInputs(num1,num2);

// (Optional)
// Modify the calculator to take user input for the operation (+, -, *, /, %).
// Use if-else statements to perform the chosen operation.

/**
 * Take one user inut 
 * @returns returns user input
 */
function getOperator(){
    let operator=prompt("Enter operator :");
    return operator;
}

/**
 * take two numbers and one operator and based on operator returns result
 * @param {number} num1 - first number
 * @param {number} num2 - second number
 * @param {number} operator - operator 
 * @returns based on operator returns result
 */
function modifiedCalculator(num1, num2, operator){
    if(operator==='+'){
        return num1+num2;
    }else if(operator==='-'){
        return num1-num2;
    }else if(operator==='*'){
        return num1*num2;
    }else if(operator==='/'){
        if(num2==0){
            return 0;
        }
        return num1/num2;
    }else if(operator==='%'){
        return num1%num2;
    }else{
        console.log("Operator is not valid")
    }
    return 0;
}

let operator = getOperator();
console.log(modifiedCalculator(num1,num2,operator));
