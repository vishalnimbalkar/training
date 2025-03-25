// console.log(1 + '2' + 3 - 1);//"12"+3="123"-1=122
// console.log('5' - 2 + '3' + 1);//5-2=3+"3"="33"+1="331"

// console.log(a);//undefined
// var a = 10;
 
// console.log(b);//
// let b = 20;

// console.log(0 == false);//0==0-true
// console.log(' ' == 0);//0 == 0 - true 
// console.log(null == undefined); // true
// console.log([] == ![]);//!true =false ->0==0->true
// console.log([] == []);// false objects are compared based on references
// console.log('5' === 5);//false


// Write a function printNumbers(n) that prints numbers from 1 to n but:
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// Otherwise, print the number itself.

function print(num){
    for(let i=1;i<=num;i++){
        // if(i%3===0 && i%5===0){
        //     console.log("FizzBuzz");
        // }else if(i%3===0){
        //     console.log("Fizz");
        // }else if(i%5===0){
        //     console.log("Buzz");
        // }else{
        //     console.log(i);
        // }
        let result = ''
        if(i%3===0) result +='Fizz'
        if(i%5===0) result +='Buzz'
        console.log(result || i);
        
    }
}

// print(15);

// You are given an array of numbers. Write a function that:
// Filters out even numbers.
// Maps each remaining number to its square.
// Reduces the final array to get the sum of squares.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const oddArr = numbers.filter((number)=>{
//     return number%2!==0;
// })
// console.log(oddArr);
// const squareArr = oddArr.map((number)=>{
//     return number*number;
// })
// const sum = squareArr.reduce((totalSum,number)=>{
//     return totalSum+=number;
// })
// console.log(sum);
//optimize above code?
// const result = numbers.filter((num)=>{
//     return num % 2 == 1 ;
// }).map((ele)=>ele*ele).reduce((acc,ele)=>acc+ele);
// console.log(result);


// const student = {
//     name: "Alex",
//     age: 21,
//     marks: { math: 85, science: 92, english: 78 }
//   };
//   Write a function that:
   
//   Iterates over the marks object.
//   Returns the average marks.
// let len =Object.values(student.marks).length;
// const sum = Object.values(student.marks).reduce((totalSum,mark)=>{
//     return totalSum+mark;
// })
// console.log(sum/len);
// optimize above code 

// function createCounter() {
//     var count = 0;
//     return function() {
//       count++;
//       console.log(count);
//     };
//   }
   
//   const counter1 = createCounter();
//   counter1();//1
//   counter1();//2
//   counter1();//3
   
//   const counter2 = createCounter();
//   counter2();//1
//   counter2();//2
  
//   Fix the following function to correctly store and display the correct counter value.

// var x = 5;
 
// (function() {
//   console.log(x);
//   var x = 10;
//   console.log(x);
// })();

// Write a function processTransactions(transactions) that:
// Filters transactions where the amount is greater than $500.
// Formats the date to Month Day, Year (e.g., "2023-05-12" → "12/05/2023").
// Capitalizes the first letter of every word in the description.
// Sums up the filtered transaction amounts.
const transactions = [
    { date: "2024-03-10", description: "amazon purchase", amount: 1200 },
    { date: "2024-02-15", description: "grocery shopping", amount: 450 },
    { date: "2024-01-22", description: "car repair", amount: 700 },
    { date: "2023-12-05", description: "gym membership", amount: 80 },
    { date: "2024-02-28", description: "laptop buy", amount: 1500 }
  ];

//   console.log(processTransactions(transactions));
const filteredTran = transactions.filter((tran)=>{
    return tran['amount']>500;
})
// console.log(filteredTran);
let sumOfTran =0;
const formatedTran = filteredTran.map((tran)=>{
    tran['date']=tran.date.split('-').reverse().join('/')
    tran['description']=tran['description'].split(" ").map((word)=>{
        return word[0].toUpperCase()+word.slice(1);
    }).join(" ")
    sumOfTran+=tran['amount'];
    return tran;
})
formatedTran.totalAmount = sumOfTran;
// console.log(formatedTran);
// console.log(sumOfTran);
// optimized 
function formatDate(dateString) {
    const date = new Date(dateString);
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
        return "Invalid Date";
    }

    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

const output = {
    formattedTransactions: transactions
        .filter(transaction => transaction.amount > 500)
        .map(({ date, description, amount }) => ({
            date: formatDate(date), 
            description: description.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" "),
            amount
        }))
};

// Calculate totalAmount correctly
output.totalAmount = output.formattedTransactions.reduce((acc, tran) => acc + tran.amount, 0);

console.log(output);


  
//   Expected Output
//   js
//   Copy
//   Edit
//   {
//     formattedTransactions: [
//       { date: "March 10, 2024", description: "Amazon Purchase", amount: 1200 },
//       { date: "January 22, 2024", description: "Car Repair", amount: 700 },
//       { date: "February 28, 2024", description: "Laptop Buy", amount: 1500 }
//     ],
//     totalAmount: 3400
//   }
  //optimize