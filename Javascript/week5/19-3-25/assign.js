// 1.Write a function that takes an array of numbers and a callback function to print each number multiplied by 2.
function printValues(arr,multipy){
    arr.forEach(element => {
        console.log(multipy(element));
    });
}
function multiple(number){
    return number * 2;
}
let arr = [1,2,3,5]
// printValues(arr,multiple)

// 2.Write a higher-order function that takes a function and a number, then applies the function to the number.
function higherOrder(number, square){
    console.log(square(number));
}
function square(number){
    return number * number;
}
// higherOrder(2,square)

// 3.Create a Promise that resolves with the message "Data loaded successfully".
function loadData(){
    return new Promise((resolve,reject)=>{
        resolve("Data loaded successfully");
    })
}
// const promise = loadData();
// promise.then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// .finally(()=>console.log("cleanup success"))

// 4.Write an async function that returns a resolved Promise with a greeting message.
// 5.Write a function that filters even numbers using a callback function.
// 6.Create a Promise chain that performs a series of arithmetic operations on a number.
function arithmeticOperation(num1, num2, operator){
    return new Promise((resolve,reject)=>{
        switch (operator) {
            case '+':
                resolve(num1 + num2);
            case '-':
                resolve(num1 - num2);
            case '*':
                resolve(num1 * num2);
            case '/':
                resolve(num2 !== 0 ? num1 / num2 : "Cannot divide by zero");
            default:
                reject("Invalid operator")
                return "Invalid operator";
        }
    })
}

// arithmeticOperation(20,12,'+').then((res)=>{
//     console.log(res);
//     return arithmeticOperation(20,12,'-')
// }).then((res)=>{
//     console.log(res);
//     return arithmeticOperation(20,12,'*')
// }).then((res)=>{
//     console.log(res);
//     return arithmeticOperation(20,12,'/')
// }).then((res)=>{
//     console.log(res);
//     return arithmeticOperation(20,0,'/')
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("End of series");
// })

// 7.Convert a callback-based function to use Promises.
// 8.Write an async function that handles errors using try-catch.
// 9.Implement a higher-order function that takes two functions and applies them sequentially to a number.
// 10.Write a function that executes multiple Promises in parallel and returns the results.
// 11.Write an async function that performs two API calls sequentially using fetch.