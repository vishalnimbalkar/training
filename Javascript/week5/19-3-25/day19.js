
// higher order functions
// - it is a function that take another function as argument and return function as its result 
// ex : - Map(), reduce(), filter(), forEach(), find()

// setTimeout()
// -the setTimeout() method sets timer which execute function or pieace of code once time is expire
// -syntax -> setTimeout(code/funcRef, delay )
// -code/function reference -> a function/code to be executed after timer expires
// -delay(optional) -> time in miliseconds that the function or code executed after expires, if we donot pass delay 0 is value used , function executed immediately
// if delay value is not number then it try to do type coercion into number type

// return value 
// it returns timeoutId(object)
let result = setTimeout(() => {
    // console.log("hello");
}, 2000);
// console.log(result);

// setTimeout() is a asynchronus function 
// it does not stop execution of other part of program 
setTimeout(() => {
    // console.log("first function");
}, 2000);

setTimeout(() => {
    // console.log("second function");
}, 1000);
// ---------------------------------------------------------------------
// setInterval()
// the setInterval() method repeatedly call function or pieace of code with time delay between each call   
//  a method returns unique intervalId using it we can clear interval using clearInterval() method 
// -syntax -> setInterval(code/function, delay)
let count = 0;
    // let id =setInterval(() => {
    //     console.log("hello, everyone");
    //     count++;
    //     if(count === 4) clearInterval(id)
    // }, 1000);

//---------------------------------------------------------------------
// callback 
// a function that pass as argument to another function

// where we use callback 
// - setInterval(), setTimeout()
// -Event listenets (addEventListener())
// - API calls 
// -array higher order function - map(), reduce(), filter()


function myFunc(){
    console.log("welcome");
}
// setTimeout(myFunc, 2000);

// callback hell 
// it is situation where we have nested callbacks
// it is difficult to read and debug code in callback hell
function task1(callback) {
    setTimeout(() => {
        console.log("Task One completed");
        callback();
    },1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task Two completed");
        callback();
    },1000);
}

// task1(()=>{
//     task2(()=>{
//         console.log("tasks completed")
//     })
// })
// task1(function () {
//     task2(function () {
//         console.log("Both tasks completed");
//     });
// });

// using promise 
function get(data){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            // reject("Error")
            resolve(data);
        }, 2000);
    })
}

// get('data 1').then((res)=>{
//     console.log(res);
//     return get('data 2')
// }).then((res)=>{
//     console.log(res);
//     return get('data 3')
// }).then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// })


// using async await 
async function callAll(){
    const data1 = await get('data 1');
    console.log(data1);
    const data2 = await get('data 2');
    console.log(data2);
    const data3 = await get('data 3');
    console.log(data3);
    
}
callAll()
// solution for callback hell 
// Promise and Async/await 
// -----------------------------------------------------------------------
// Promise 
// the promise object represents the completion or failure of an asynchronous operation and its resulting value 

// states
// 1. pending - Initial state neither fullfilled nor rejected
// 2. fullfilled - successfully completion of operation, and result is availabel
// 3. rejected - operation failed, and error is provided

let checkEven = (number)=>{
    return new Promise((resolve, reject)=>{
        if(number%2===0) resolve(`${number} is even`)
        else reject(`${number} is Odd`)
    })
}

// checkEven(10).then((result)=>{
//     console.log(result);
//     // show();
// })
// .catch((error)=>console.log(error))
// .finally(()=>console.log("clean up done"))


// resolve(value) - makes promise as fullfilled and returns result and executer then() method
// reject(error) - makes the promise rejected with an error and execute catch() method

// methods
// Promise.resolve()- returns a promise that resolves with the given value 

// Promise.reject() - returns a promise that immediately rejects with a given error 

// Promise.finally() - runs a cleanup or final code no matter what is result of promise (resolve or reject)

// Promise chaning
function getData(data){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        console.log(data);
        resolve('success')
      }, 2000);
    })
}

// console.log('getting data 1..');
// getData('data1').then((res)=>{
//     console.log(res);
//     console.log('getting data 2...');
//     getData("data2").then((res)=>{
//         console.log(res);
//     })
// })

// getData('data1').then((res)=>{
//     console.log(res);
//     return getData('data2');
// }).then((res)=>{
//     console.log(res);
//     return getData('data3');
// }).then((res)=>{
//     console.log(res);
// })

// why promises 
// - avoid callback hell 
// - error handling 
// perform task sequencially using .then()

// use of promises
// -API Calls 
// -Database Queries

// try-catch vs then-catch
    // try {
    //     // Code that may throw an error
    // } catch (error) {
    //     // Handle the error
    // } finally {
    //     // Code that always runs (cleanup code)
    // }
    // -handle synchronus errors directly 

    // promise
    // .then((result) => {
    //     // Code for successful promise
    // })
    // .catch((error) => {
    //     // Code for rejected promise
    // })
    // .finally(() => {
    //     // Code that always runs (cleanup code)
    // });
    // -handle promise 

//     3. Which One Should I Use?
//      Use try...catch...finally for:
//      -Synchronous code.
//      -Async/await error handling.

//      Use .then().catch().finally() for:
//      -Promise-based code.
//      -Chainable logic like fetch()

// // dummy data api 
// fetch('https://jsonplaceholder.typicode.com/posts/100')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`) - to get all posts of user id 1



// console.log("Start");

// setTimeout(() => console.log("Timeout 1"));

// setTimeout(() => console.log("Timeout 2"));
// Promise.resolve().then(() => console.log("Promise 1"));


// Promise.resolve().then(() => {
//     console.log("Promise 2");
//     return Promise.resolve();
// }).then(() => console.log("Promise 3"));

// console.log("End");
// Start
// End
// Promise 1
// Promise 2
// Promise 3
// Timeout 1
// Timeout 2

// execution order 
// Synchronous Code Runs First
// Microtasks (Promises & Await) Run Next
// Macrotasks (setTimeout) Run Last


// Promise.reject("Error occurred")
//     .then(() => console.log("Success"))
//     .finally(() => console.log("Finally block"));

    // it throws error unhandledPromiseRejecttion

    // let promise = new Promise((resolve, reject) => {
    //     reject("Error!"); // ❌ Ignored
    //     resolve("Success!");
    // });
    
    // promise
    //     .then(result => console.log("Resolved:", result)) // ✅ Resolved: Success!
    //     .catch(error => console.error("Caught Error:", error)) // ❌ Not executed
    //     .finally(() => console.log("Cleanup done!")); // ✅ Always runs
    
    Promise.resolve(10)
    .then((num) => {
        // console.log(num);
        num * 2;  // No return here
    })
    .then((num) => {
        // console.log(num);//undefind - bcz above then return nothing
    });
