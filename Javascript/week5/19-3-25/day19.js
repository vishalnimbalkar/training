
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

// task1(function () {
//     task2(function () {
//         console.log("Both tasks completed");
//     });
// });

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

// checkEven(11).then((result)=>console.log(result))
// .catch((error)=>console.log(error))
// .finally(()=>console.log("clean up done"))

// resolve(value) - makes promise as fullfilled and returns result 
// reject(error) - makes the promise rejected with an error 

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
// dummy data api 
fetch('https://jsonplaceholder.typicode.com/posts/100')
      .then(response => response.json())
      .then(json => console.log(json))

