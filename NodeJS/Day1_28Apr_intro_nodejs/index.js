// Introduction to NodeJS

// What is Node.js?
// js engines
// chrome - v8
// firefox - spider moncky
// safari - apple js

// v8 + c++ = node.js

// using nodejs we can run js outside browser.
// nodejs is open source,cross platfrom,server side runtime env for js.

// architecture of node.js
// request made by client go to event queue 
// request pick by event loop by fifo 
// two types of operations 
// 1.bloking operations (synchronus)
// - go to thread pool and assign a worker
// - if multiple users make bloking request and workers are not available then they have to wait to free worker
// - it is better to write code in non-bloking way.

// 2.non - bloking operations(asynchronus)
// - process directly

// Features of Node.js
// 1.Very fase: built on google chrome's v8 engine, it execute js code quickly
// 2. It uses a single-threaded event loop to handle multiple connections efficiently
// 3.cross platform: it can run on windows, linux, and Mac os
// 4.Asynchronous: all apis are non-bloking

// Why use Node.js?
// 1.Developers can use js for client side and server-side.
// 2.Larger cummunity and libraries: npm
// 3.Good for building apps like chat apps, online gamming.
// 4.Efficient Performance: Perfect for heavy operations like apis, web servers, or real time apps.

// Limitations of Node.js
// 1.Single threaded
// 2.callback hell: nested callbacks make code messy and hard to maintain.
// 3.Not ideal for CPU intensive tasks.
// 4.Some libraries or modules in npm may not be well documented. 



const fs = require('fs');
const crypto = require('crypto');

// setTimeout(() => {
//     console.log('settimeout 1 ');
// }, 0);

// console.log('hello from top level code');

// setImmediate(()=> console.log('hello from immediate 1'))

// fs.readFile('sample.txt' , ()=>{
//     console.log('IO polling finish');
    
//     setTimeout(() => {
//         console.log('settimeout 2 ');
//     }, 0);
//     setTimeout(() => {
//         console.log('settimeout 3 ');
//     }, 5*1000);
    
//     setImmediate(()=> console.log('hello from immediate 2'))
// })


// process.env.UV_THREADPOOL_SIZE = 4;
const start = new Date();

function runCryptoTask(id) {
    crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
      console.log(`Task ${id} done in ${Date.now() - start} ms`);
    });
  }

//   runCryptoTask(1);
//   runCryptoTask(2);
//   runCryptoTask(3);
//   runCryptoTask(4);
//   runCryptoTask(5);
//   runCryptoTask(6);


 