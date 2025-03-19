// Create a function using function declaration that checks if a number is prime.
function isPrime(number){
    let count = 0 ;
    for(let i=1;i<=number;i++){
        if(number%i==0){
            count++;
            if(count>2){
                return false;
            }
        }
    }
    if(count>2){
        return false;
    }
    return true;
}

// console.log(isPrime(7));

// Write an arrow function to calculate the factorial of a number.
const factorial = (number)=>{
    if(number < 1) return 1;
    let fact = 1;
    for(let i=1;i<=number;i++){
        fact *= i;
    }
    return fact;
}
// console.log(factorial(5));
// console.log(factorial(1));
// console.log(factorial(0));

// Create a function using a function declaration to find the maximum of three numbers.
function maxFromThreeNumbers(number1, number2, number3){
    return number1 > number2 && number1 > number3 ? number1 : number2 > number1 && number2 > number3 ? number2 : number3;
    // return Math.max(number1,number2,number3);
}
// console.log(maxFromThreeNumbers(12,32,11));

// Write an arrow function to convert Celsius to Fahrenheit.
const covertToFahrenheit = (number)=>{
    return (number *(9/5))+32;
}
// console.log(covertToFahrenheit(100));

// Create a function that checks if a given string is a palindrome.
function isPalindrome(str){
    let start = 0;
    let end = str.length-1;
    while(start < end){
        if(str[start] !== str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}
11211
// console.log(isPalindrome('121 '));

// Write an arrow function to calculate the sum of all numbers in an array.
const calculateSum = (arr)=>{
    return arr.reduce((sum,num)=>sum+num);
}
let arr = [1,2,3,4]
// console.log(calculateSum(arr));

// Write a function using Math.pow() to calculate the power of a number.
function powerOfNumber(number,power){
    return Math.pow(number,power)
}
// console.log(powerOfNumber(2,3));

// Write an arrow function that returns the number of vowels in a string.
const numberOfVowels=(str)=>{
    let count = 0;
    let vowels = 'aeiouAEIOU'
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
// console.log(numberOfVowels("vishalVISHAL"));

// Write a function using recursion to find the nth Fibonacci number.
function fibonacci(n){
   if(n<=1) return n;
   return fibonacci(n-1) + fibonacci(n-2);
}
0,1,1,2,3,5
// console.log(fibonacci(5));  //  5
// console.log(fibonacci(7));  //  13
// console.log(fibonacci(10)); // 55

// Write a function to check if a number is an Armstrong number.
// (An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits)
function armstrong(number){
    let strNum = String(number);
    let len = strNum.length;
    let sum = 0;
    for(let char of strNum){
        sum += Math.pow(Number(char),len);
    }
    return sum;
}
// console.log(armstrong(153));

// Write an arrow function to calculate the Greatest Common Divisor (GCD) of two numbers using recursion.
const gcd = (a,b)=>b === 0 ? a : gcd(b,a%b);
// console.log(gcd(48,18));
//(10,20)
// gcd(20,10%20)=(20,10)
// gcd(10,20%10)=(10,0)=>10


// Create a function compose that takes two functions and returns their composition.
// compose(f, g)(x)=f(g(x))\text{compose(f, g)(x)} = f(g(x))compose(f, g)(x)=f(g(x))

function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}
function double(num){
    return num+num;
}
function square(num){
    return Math.pow(num,2);
}

console.log(compose(square,double)(5));//100 → square(double(5)) = square(10) = 100



