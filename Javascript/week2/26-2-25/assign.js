// 1.Create and Modify an Array
// Create an array of five numbers.
// Add a number to the end using push().
// Remove the first element using shift().
// Add a new number to the beginning using unshift().
// Print the final array.

let numbers = [1,2,3,4,5]
numbers.push(6)
numbers.shift()
numbers.unshift(0)
console.log(numbers);//[ 0, 2, 3, 4, 5, 6 ]


// 2.Access and Update Elements
// Create an array of five fruit names.
// Access and print the second and fourth elements.
// Change the third element to a different fruit.
// Print the updated array.

// let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Kivi']
// console.log("Original : "+fruits);
// console.log(`second element is ${fruits[1]} and fourth element is ${fruits[3]}`);
// fruits[2]='Grapes'
// console.log(fruits);

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
  