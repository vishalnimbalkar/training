// 3.Reverse an Array
// Create an array of five numbers.
// Reverse the array without using reverse() (use push() and pop() in a loop).
// Print the reversed array.

// let numbers = [1,2,3,4,5]
// let revered=[];
// for(let i=numbers.length-1;i>=0;i--){
//     let ele = numbers.pop()
//     revered.push(ele);
// }
// console.log(revered);

// 4.Filter Even Numbers
// Create an array of 10 random numbers.
// Use filter() to create a new array containing only even numbers.
// Print both arrays.

// let numbers = [65,12,54,65,65,6,31,32,38,,3]
// let even = numbers.filter((ele)=>ele%2==0)
// console.log("Original : "+numbers);
// console.log(even);

// 5.Double the Elements Using map()
// Create an array of numbers [1, 2, 3, 4, 5].
// Use map() to create a new array where each number is doubled.
// Print both arrays.

// let numbers = [1, 2, 3, 4, 5];
// let double = numbers.map(ele=>ele+ele)
// console.log(numbers);
// console.log(double);

// 6.Calculate Sum Using reduce()
// Create an array of five numbers.
// Use reduce() to find the sum of all numbers.
// Print the result.

// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((arrSum, currEle)=>arrSum+currEle)
// console.log(sum);

// 7.Print Each Element Using forEach()
// Create an array of colors.
// Use forEach() to print each color with a message: "Color: <color>".

// let colors = ['red', 'yellow', 'blue', 'Orange', 'white']
// colors.forEach((color)=>{
//     console.log(`Color : ${color}`);

// })

// 8.Find the First Number Greater than 50 Using find()
// Create an array of numbers [10, 25, 60, 45, 90, 30].
// Use find() to get the first number greater than 50.
// Print the result.

// let numbers = [10, 25, 60, 45, 90, 30]
// console.log(numbers.find((num)=>num>50));

// 9.Student Scores Processing
// Create an array of student objects, each with properties: name, marks (an array of numbers).
// Use map() to calculate the average marks for each student.
// Use filter() to create a new array of students who have an average mark greater than 60.
// Use reduce() to calculate the total marks of all students.
// Print the results.

const students = [
  {
    name: "vishal",
    marks: [65, 98, 55, 65, 98],
  },
  {
    name: "rahul",
    marks: [77, 98, 55, 66, 98],
  },
  {
    name: "sanket",
    marks: [78, 98, 85, 65, 95],
  },
  {
    name: "ganesh",
    marks: [65, 68, 44, 73, 98],
  },
  {
    name: "sohel",
    marks: [44, 55, 63, 65, 35],
  },
];

let toppers = [];
let totalMarks = 0;

let avgMarks = students.map((student) => {
  let sumOfMarks = student.marks.reduce((sum, mark) => sum + mark);
  totalMarks += sumOfMarks;
  let avg = sumOfMarks / student.marks.length;
  if (avg > 60) toppers.push(student);
  return avg;
});

// let toppers = students.filter((student)=>{
//     let sumOfMarks = student.marks.reduce((sum,curr)=>sum+curr)
//     let avg = sumOfMarks/student.marks.length;
//     if(avg > 60) return student
// })

// let totalMarks = students.reduce((total,student)=> total + student.marks.reduce((sum,curr)=>sum+curr),0)

// console.log(avgMarks)
// console.log(toppers)
// console.log(totalMarks)

// 10.Inventory Management System
// Create an array of objects representing products with properties: id, name, price, and stock.
// Add a new product to the array using push().
// Remove a product from the start using shift().
// Update the stock of a product using map().
// Find the total stock available using reduce().
// Use find() to get a product with a price greater than $100.
// Print the final inventory.

const products = [
  {
    id: 1,
    name: "tv",
    price: 90,
    stock: 10,
  },
  {
    id: 2,
    name: "ac",
    price: 120,
    stock: 10,
  },
  {
    id: 3,
    name: "fan",
    price: 50,
    stock: 10,
  },
];

/**
 * add new product object in produncts object
 * @param {object} product - new produnct
 */
function addProduct(product) {
  products.push(product);
}

/**
 * remove first product from products object
 */
function removeFirst() {
  products.shift();
}

/**
 * take new stock value and produnct id and update stock
 * @param {*} newStockValue - new stock value
 * @param {*} id - product id
 */
function updateStock(newStockValue, id) {
  //    products=products.map((product)=>{
  //     if(product.id === id){
  //         product.stock=newStockValue
  //     }
  //     return product
  //    })
  products.forEach((product) => {
    if (product.id == id) {
      product.stock = newStockValue;
    }
  });
}

let greaterProduct = products.find((product) => {
  return product.price > 100;
});

let newProduct = {
  id: 4,
  name: "laptop",
  price: 150,
  stock: 12,
};
addProduct(newProduct);

updateStock(20, 3);

removeFirst();

let totalStock = 0;
products.forEach((product) => {
  totalStock += product.stock;
});

// console.log(products);
// console.log(greaterProduct);
// console.log(totalStock);

// 1. Create an array of five fruits and print the third fruit.
let fruits = ["Apple", "Mango", "Banana", "kivi", "Grapes"];
// console.log(fruits[2]);

// 2. Use push() and pop() to add and remove an element from an array.
fruits.pop();
fruits.push("Watermelon");
// console.log(fruits);

// 3. Use unshift() and shift() to add and remove an element from the beginning of an array.
fruits.shift();
fruits.unshift("Apple");
// console.log(fruits);

// 4. Create an array and use forEach() to print each element.
// fruits.forEach((fruit)=>console.log(fruit));

// 5. Use map() to create a new array where each number is doubled.
let nums = [2, 3, 1, 2, 4, , 6, 7];
let double = nums.map((num) => num + num);
// console.log(double);

// 6. Use filter() to create a new array containing only even numbers.
let even = nums.filter((num) => num % 2 === 0);
// console.log(even);

// 7. Use reduce() to find the sum of an array of numbers.
let sumOfArray = nums.reduce((sum, num) => sum + num);
// console.log(sumOfArray);

// 8. Concatenate two arrays using concat().
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
// console.log(c);

// 9. Use reverse() to reverse an array and print it.
let reversed = nums.reverse();
// console.log(reversed);

// 10. Use join() to convert an array into a string with commas.
// console.log(nums.join())

// 11. Flatten a nested array using flat().
let array = [1, 2, [3, 4, [5, [3]], 6], 7];
// console.log(array.flat());
// console.log(array.flat(2));
// console.log(array.flat(Infinity));

// 12. Use splice() to remove two elements from an array starting at index 1.
let newArr = [1, 2, 3, 4, 5, 6, 7];
newArr.splice(1, 2);
// console.log(newArr);

// 13. Use slice() to extract a portion of an array without modifying the original.
let portion = newArr.slice(2, 5);
// console.log(portion);

// 14. Find the largest number in an array using reduce().
let arr = [32, 5, 333, 98, 75, 98];
let max = arr.reduce((preMax, curr) => (curr > preMax ? curr : preMax));
// console.log(max);

// 15. Count occurrences of each element in an array using reduce().
let ar = [1, 2, 2, 3, 4, 4, 5, 2, 1, 8];
let res = ar.reduce((acc, num) => {
  acc[num] = acc[num] || 0 ? acc[num]+1:1;
  return acc;
}, {});
// console.log(res);

// 16. Remove duplicate elements from an array using filter() and indexOf().

ar.filter((ele) => {
  let count = 0;
  let i = ar.indexOf(ele);
  while (i !== -1) {
    count++;
    if (count == 2) {
      count--;
      removeEle(i);
    }
    i = ar.indexOf(ele, i + 1);
  }
});

function removeEle(start) {
  ar.splice(start, 1);
}

// console.log(ar);

// function removeDuplicates(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];
// const uniqueNumbers = removeDuplicates(numbers);

// console.log(uniqueNumbers);


// 1. Implement a Function to Find the Second Largest Number in an Array
// Question:
// Write a function secondLargest(arr) that finds and returns the second largest number in an array.
// If the array has less than two unique numbers, return null.
// Do not use built-in sorting methods.
function secondLargest(arr){
  let len = arr.length;
  let max = arr[0];
  let secondMax = 0;
  for (let index = 1; index < arr.length; index++) {
    if(arr[index]>max){
      secondMax = max;
      max = arr[index];
    }
    if(arr[index]>secondMax && arr[index] < max){
      secondMax = arr[index]
    }
  }
  return secondMax
}

function secondLargest2(arr){
  let sl=0;
  arr.reduce((acc, curr)=>{
    if(curr>acc){
      sl=acc;
      return curr;
    }else{
      if(curr<acc && curr>sl){
        sl=curr;
      }
      return acc;
    }
  })
  return sl;
}

let numbers = [2,78,454,75,87,90,2,78,75,90];
// console.log(secondLargest2(numbers))


// 2. Count Unique Values in an Array
// Question:
// Write a function countUnique(arr) that counts the number of unique elements in an array.
// Use an efficient method that does not involve nested loops.
function countUnique(arr){
  let count=0;
  let occurs = arr.reduce((acc,curr)=>{
    acc[curr]= acc[curr] || 0 ? acc[curr]+1 : 1; 
    return acc;
  },{})
  console.log(occurs);
  
  arr.forEach((ele)=>{
    if(occurs[ele]<2){
      count++;
    }
  })
 return count;
}

// console.log(countUnique(numbers));

// 3. Merge and Sort Two Arrays Without Duplicates
// Question:
// Write a function mergeSortedArrays(arr1, arr2) that merges two sorted arrays into a single sorted array 
// without duplicates.

// 4. Find the Most Frequent Element in an Array
// Question:
// Write a function mostFrequent(arr) that returns the element that appears most frequently in an array.
// If multiple elements have the same highest frequency, return any one of them.

// 5. Implement a Function to Chunk an Array
// Question:
// Write a function chunkArray(arr, size) that splits an array into smaller chunks of a given size.
// Example: chunkArray([1, 2, 3, 4, 5, 6, 7], 3) should return [[1, 2, 3], [4, 5, 6], [7]].

// 6. Rotate an Array by a Given Number of Positions
// Question:
// Write a function rotateArray(arr, k) that rotates an array k positions to the right.
// Example: rotateArray([1, 2, 3, 4, 5], 2) should return [4, 5, 1, 2, 3].

function rotateArray(arr,k){
  let n = arr.length;
  reverseArr(arr,0,n-k-1);
  reverseArr(arr,n-k,n-1);
  reverseArr(arr,0,n-1);

}

function reverseArr(arr,start,end){
  while(start<end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

let num = [1, 2, 3, 4, 5];
rotateArray(num,2);
console.log(num);
