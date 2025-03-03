// 1.Take two string inputs (numbers as strings), convert them into numbers using Number() or parseInt(),
// and perform arithmetic operations (+, -, *, /).

const prompt = require("prompt-sync")();
function arithmeticOperations() {
  let num1 = Number(prompt("Enter Number 1 : "));
  let num2 = parseInt(prompt("Enter Number 2 : "));

  function add() {
    console.log("Addition : " + (num1 + num2));
  }
  function subtract() {
    console.log("Substraction : " + (num1 - num2));
  }
  function multiply() {
    console.log("Multiplication : " + num1 * num2);
  }
  function divide() {
    if (num2 === 0) {
        console.log("Can't divide by 0");
    } else {
        console.log("Division : " + num1 / num2);
    }
  }
  add();
  subtract();
  multiply();
  divide();
}

// arithmeticOperations();

// 2.Write a program to:
// Print numbers from 1 to 50, but:
// Replace multiples of 3 with "Fizz".
// Replace multiples of 5 with "Buzz".
// Replace multiples of 3 and 5 with "FizzBuzz".
// Use for and if-else to implement this.

function show(){
    for(let i=1;i<=50;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }else if(i%3==0){
            console.log("Fizz");
        }else if(i%5==0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}

// show()

// 3.Write a function createCounter() that:
// Uses a closure to maintain a private count variable.
// Returns another function that increments and logs the count each time it’s called.

function createCounter(){
    let count=0;
    function increment(){
        count++;
        console.log(count)
    }
    return increment;
}

let counter = createCounter()
// counter()


// 4.Write a function generateFibonacci(n) that prints the first n numbers of the Fibonacci series.
// Implement it using a for loop.
// Then, implement the same function using recursion.

function generateFibonacci(n){
    let a=0;
    let b=1;
    console.log(a)
    console.log(b)
    for(let i=1;i<=n;i++){
        let c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
}

// generateFibonacci(10);
console.log(0)
console.log(1)
function generateFibonacci2(n,a=0,b=1){
    if(n<1){
        return;
    }
    console.log(a+b);
    return generateFibonacci2(n-1,b,a+b);
}

// generateFibonacci2(10)