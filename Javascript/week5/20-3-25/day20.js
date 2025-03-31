// ----------------------------------------------------------------------
// Async/await
// - both are used to handle asynchronus operations using Promises
// - both are keywords

// async - it turns normal function into asynchronus function and this function always retuns Promise
async function myFunc() {
  console.log("hello");
}

// console.log(myFunc());

// await -
// - await pause execution of its surrounding async function until promise is resolved or reject
// - we only use await inside async function

function getData(id) {
  return fetch("https://jsonplaceholder.typicode.com/posts/" + id);
}

async function getUser() {
  const user1 = await getData(1);
  const data = await user1.json();
  console.log(data);
}
getUser();

// which is better promises with then(), catch() or async await
// async-await
// -easy to understand and readable
// - better error handling

// Simple asynchronous logic	                 -> async/await
// Multiple independent async calls in parallel ->	Promise.all()
// Error handling with better control           ->	async/await
// Complex promise chains with multiple steps   ->	async/await
// Quick, single-step async calls               ->	.then().catch()

function loadData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
      // reject('error')
    }, 2000);
  });
}

// loadData(1)
//   .then((res) => {
//     console.log(res);
//     return loadData(2);
//   })
//   .then((res) => {
//     console.log(res);
//     return loadData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   })
 

// async function getAll() {
//   try {
//     const res = await loadData(1);
//     console.log(res);
//     const res2 = await loadData(2);
//     console.log(res2);
//     const res3 = await loadData(3);
//     console.log(res3);
//   } catch (error) {
//     console.log(error);
    
//   }
// }

// getAll()

// for async await we need to create new function with async and call it
// for above problem we can use IIFE
(async () => {
  try {
    const res = await loadData(1);
    console.log(res);
    const res2 = await loadData(2);
    console.log(res2);
    const res3 = await loadData(3);
    console.log(res3);
  } catch (error) {
   console.log(error);
  }
})();
