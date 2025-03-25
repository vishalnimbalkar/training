// 1.Write a function that takes an array of numbers and a callback function to print each number multiplied by 2.
function printValues(arr, multipy) {
  arr.forEach((element) => {
    console.log(multipy(element));
  });
}
function multiple(number) {
  return number * 2;
}
let arr = [1, 2, 3, 5];
// printValues(arr,multiple)

// 2.Write a higher-order function that takes a function and a number, then applies the function to the number.
function higherOrder(number, square) {
  console.log(square(number));
}
function square(number) {
  return number * number;
}
// higherOrder(2,square)

// 3.Create a Promise that resolves with the message "Data loaded successfully".
function loadData() {
  return new Promise((resolve, reject) => {
    resolve("Data loaded successfully");
  });
}
// const promise = loadData();
// promise.then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// .finally(()=>console.log("cleanup success"))

// 4.Write an async function that returns a resolved Promise with a greeting message.
async function greeting(name){
    return new Promise((resolve, reject)=>{
        resolve(`hello, ${name}`)
    })
}
// greeting('vishal').then((res)=>console.log(res));

// 5.Write a function that filters even numbers using a callback function.
function filterEven(arr, checkEven) {
  return arr.filter((number) => {
    if (checkEven(number)) {
      return number;
    }
  });
}
function checkEven(number) {
  return number % 2 === 0;
}
let array = [0, 1, 2, 3, 5, 8];
// console.log(filterEven(array,checkEven));

// 6.Create a Promise chain that performs a series of arithmetic operations on a number.
function arithmeticOperation(num1) {
  return new Promise((resolve, reject) => {
    resolve(num1);
  });
}

arithmeticOperation(20).then((res)=>{
        return res + 10;
    }).then((res)=>{
        return res * 2;
    }).then((res)=>{
        return res / 10;
    }).then((res)=>{
        console.log(res);
    })

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
function loadData(data, callbackFun) {
  setTimeout(() => {
    let error = false;
    callbackFun(data, error);
  }, 2000);
}
function callbackFun(data, error) {
  if (!error) {
    console.log(data);
  } else {
    console.log("error");
  }
}
// loadData("data1", callbackFun);

setTimeout(() => {
  console.log("1");
  
}, 0);
function loadData2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {        
        console.log(data);
        
      resolve(data);
    }, 2000);
  });
}
async function demo(){
    console.log("start");
    await loadData2('data')
    console.log("end");
    await loadData2('data 2')
    
}
demo()
// loadData2('data2').then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// .finally(()=>console.log('cleanup'))

// 8.Write an async function that handles errors using try-catch.
async function handleErrors(){
    try{
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts/50`)
        if(result.status !== 200){
            throw new Error("Page not found")
        }else{
            const data = await result.json();
            console.log(data);
        }
    }catch(error){
        console.log(error.message);
    }
}
// handleErrors()

// 9.Implement a higher-order function that takes two functions and applies them sequentially to a number.
function higherOrder(number, addTen, double){
    return addTen(double(number));
}
function addTen(number){
    return number+10;
}
function double(number){
    return number+number;
}
// console.log(higherOrder(10,addTen,double));//30


// 10.Write a function that executes multiple Promises in parallel and returns the results.

function getPromise(id){
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
}

// getPromise(1).then((result)=>{
//     return result.json();
// }).then((result)=>{
//     console.log(result);
//     return getPromise(2)
// }).then((result)=>{
//     return result.json();
// }).then((result)=>{
//     console.log(result);
//     return getPromise(3)
// }).then((result)=>{
//     return result.json();
// }).then((result)=>{
//     console.log(result);
// })

async function resolveParallely(){
    const [user1, user2, user3, user4]=await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/1`).then((res)=>res.json()),
        fetch(`https://jsonplaceholder.typicode.com/posts/2`).then((res)=>res.json()),
        fetch(`https://jsonplaceholder.typicode.com/posts/3`).then((res)=>res.json())
        // fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`).then((res)=>res.json())
    ])
    console.log(user1);
    console.log(user2);
    console.log(user3);
    console.log(user4);
    
}
// resolveParallely();

// 11.Write an async function that performs two API calls sequentially using fetch.

function getData(id) {
    return fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  }
  
  async function getUser() {
    const user1 = await getData(1);
    const data1 = await user1.json();
    console.log(data1);
    const user2 = await getData(2);
    const data2 = await user2.json();
    console.log(data2);
  }
  getUser();

// promise.all();
// method runs multiple promises at parallel and wait for all to resolve 
// it resolves when all promises are fullfilled and return array of resolve values 
// rejects immediatly if any promise fails 
