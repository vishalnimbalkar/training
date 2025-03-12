// 1.Convert "42" and "42.5" into numbers using Number(), parseInt(), and parseFloat().
// console.log(Number("42"));//42
// console.log(Number("42.5"));//42.5
// console.log(parseInt("42"));//42
// console.log(parseInt("42.5"));//42
// console.log(parseFloat("42"));//42
// console.log(parseFloat("42.5"));//42.5

// 2.Generate a random integer between 1 and 100.
// console.log(Math.floor(Math.random()*100)+1);

// 3.Round 4.7 using Math.round(), Math.ceil(), and Math.floor().
// console.log(Math.round(4.7));//5
// console.log(Math.ceil(4.7));//5
// console.log(Math.floor(4.7));//4

// 4.Find the square root and cube root of 64.
// console.log(Math.sqrt(64)); //8
// console.log(Math.cbrt(64)); //4

// 5.Write a program to display the current date and time in "YYYY-MM-DD HH:MM:SS" format.
// 6.Convert 123.456789 to a number with 2 decimal places.
let number = 123.456789;
let roundNum = Number(number.toFixed(2));
console.log(roundNum);

// 7.Find the number of days between January 1, 2024 and March 10, 2024.
// 8.Write a function that generates a random number between two given numbers.
function generatesRandomNumber(num1, num2){
    return Math.floor(Math.random()*(num2 - num1 + 1))+num1;
}
// console.log(generatesRandomNumber(10,20));
// console.log(generatesRandomNumber(1,100));

// 9.Convert "15th August 2023" to "2023-08-15" format.
// 10.Write a function to check if a number is an integer without using Number.isInteger().
function checkInteger(num){
    return typeof num === 'number';
}
// console.log(checkInteger(5));   
// console.log(checkInteger(5.5));    
// console.log(checkInteger(-3));    
// console.log(checkInteger(0));      
// console.log(checkInteger('5'));

// 11.Write a function to find the date of the next Friday from today.
// 12.Write a function to generate a random hex color (e.g., #a3e12f).
