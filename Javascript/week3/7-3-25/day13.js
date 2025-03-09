// console.log(5 > 3 ? "Yes" : "No");// "yes"
// console.log(5 < 3 ? "Yes" : "No");// "No"
// console.log(5 == "5" ? "Equal" : "Not Equal");// Equal
// console.log(5 === "5" ? "Equal" : "Not Equal");// Not Equal

// let num = 10;
// let result = num > 10 ? "Greater" : num === 10 ? "Equal" : "Smaller";
// console.log(result);//Equal

// console.log(true ? false || "Hello" : "World");//Hello
// console.log(false ? "A" : "B" && "C");//"C"
// console.log(0 ? "X" : 1 ? "Y" : "Z");//Y

// let value = 10;
// value > 5 ? console.log("Greater than 5") : null;//Greater than 5
// value < 5 ? console.log("Smaller than 5") : null;

// let x = 5 > 2 ? 10 : 20;//10
// let y = 5 < 2 ? 10 : 20;//20
// console.log(x, y);

// console.log(10 + (true ? 5 : 0));//15
// console.log(10 + (false ? 5 : 0));//10
// console.log(10 + true ? 5 : 0);//11 ? 5 : 0; = 5

// function greet() { return "Hello"; }
// function bye() { return "Goodbye"; }

// console.log(true ? greet() : bye());// Hello
// console.log(false ? greet() : bye());// Goodbye

// let obj = { name: "Alice", age: 25 };
// console.log(obj ? "Exists" : "Not Found");//Exists

// let emptyObj = {};
// console.log(emptyObj ? "Has Data" : "Empty");//Has Data

// console.log("" ? "Truthy" : "Falsy");//Falsy
// console.log(0 ? "Truthy" : "Falsy");//Falsy
// console.log(NaN ? "Truthy" : "Falsy");//Falsy
// console.log(null ? "Truthy" : "Falsy");//Falsy
// console.log(undefined ? "Truthy" : "Falsy");//Falsy
// console.log([] ? "Truthy" : "Falsy");//Truthy
// console.log({} ? "Truthy" : "Falsy");//Truthy

// console.log(true ? false ? "A" : "B" : "C");//B
// console.log(false ? true ? "X" : "Y" : "Z");//Z

// if ("false") {//Truthy
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// }

// if (null) {//Falsy
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// }

// if ([] == false) {//true
//     console.log("Array is falsy");
// } else {
//     console.log("Array is truthy");
// }

// if ({} == false) {//false
//     console.log("Object is falsy");
// } else {
//     console.log("Object is truthy");
// }

// let x = 10;

// if (x < 5) console.log("Greater");
// else
//     console.log("less");
//     console.log("Still in if?");

// if (x < 5) 
//     console.log("Smaller");
//     console.log("This runs?");

// let a = 0;

// if (a = 10) {
//     console.log("Assigned, not compared!");
// } else {
//     console.log("Comparison happened!");
// }

// if (typeof NaN === "number") {
//     console.log("NaN is a number?");//
// } else {
//     console.log("NaN is not a number");
// }

// if (typeof null === "object") {
//     console.log("Null is an object?");//
// } else {
//     console.log("Null is not an object");
// }

// if (false && true || true) {
//     console.log("Condition met");//
// } else {
//     console.log("Condition failed");
// }

// if (true || false && false) {
//     console.log("Condition passed");
// } else {
//     console.log("Condition failed");//
// }

// if (!false && true || false) {
//     console.log("Condition met");
// } else {
//     console.log("Condition failed");
// }

// if ([] && {} && !null) {  true && true
//     console.log("Truthy Chain");
// } else {
//     console.log("Falsy Chain");
// }

// if (!!"0" && !!0) {
//     console.log("Both truthy");
// } else {
//     console.log("Something is falsy");
// }

// let num = 5;

// if (num > 0)
//     if (num > 10){
//         console.log("Greater than 10");
//         console.log("Greater than 10");
//     }
//     else {
//         console.log("Less than 10 but positive");
//         console.log("Less than 10 but positive");

//     }

// let obj = {};
// if (Object.keys(obj)) {
//     console.log("Has keys");
// } else {
//     console.log("No keys");
// }

// let x = 2;
// switch (x) {
//     case 1:
//         console.log("One");
//     case 2:
//         console.log("Two");
//     case 3:
//         console.log("Three");
//     default:
//         console.log("Default");
// }

// let num = 10;
// switch (true) {
//     case num > 5:
//         console.log("Greater than 5");
//         break;
//     case num < 5:
//         console.log("Less than 5");
//         break;
//     default:
//         console.log("Exactly 5");
// }

// let value = "1";
// switch (value) {
//     case 1:
//         console.log("Number 1");
//         break;
//     case "1":
//         console.log("String 1");
//         break;
//     default:
//         console.log("Neither");
// }

// let x = 10;
// switch (x + 5) {
//     case 10:
//         console.log("Ten");
//         break;
//     case 15:
//         console.log("Fifteen");
//         break;
//     default:
//         console.log("Other");
// }

// let value = null;
// switch (value) {
//     case undefined:
//         console.log("Undefined case");
//         break;
//     case null:
//         console.log("Null case");
//         break;
//     default:
//         console.log("Default case");
// }

// let obj = { key: "value" };
// let obj2 = { key: "value" };
// switch (obj) {
//     case { key: "value" }:
//         console.log("Object Matched");
//         break;
//     default:
//         console.log("No Match");
// }
// console.log(obj == { key: "value" });
// console.log(obj === obj2);

// let day = "Monday";
// switch (day) {
//     case "Monday":
//     case "Tuesday":
//         console.log("Start of the week");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("Weekend!");
//         break;
//     default:
//         console.log("Midweek");
// }

// let value = "";
// switch (value) {//""===""->Empty String
//     case 0:
//         console.log("Zero");
//         break;
//     case false:
//         console.log("False");
//         break;
//     case "":
//         console.log("Empty String");
//         break;
//     default:
//         console.log("Something else");
// }

// let num = 5;// we can place default anywhere in switch it will execute when no case match, it is a best practice to place it in bottom for more code redability
// switch (num) {
//     default:
//         console.log("Not 1 or 2");
//         break;
//     case 1:
//         console.log("One");
//         break;
//     case 2:
//         console.log("Two");
//         break;
// }

// function checkNumber(n) {
//     switch (n) {
//         case 1:
//             return "One";
//         case 2:
//             return "Two";
//         default:
//             return "Other";
//     }
// }
// console.log(checkNumber(2));
// console.log(checkNumber(5));


// for (;;) {
//     console.log("Hello");
//     break;
// }

// let i = 0;
// for (; i < 5; ) {
//     console.log(i);
//     i++;
// }

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
// }

// for (let j = 0; j < 3; j++) {
//     setTimeout(() => console.log(j), 1000);
// // }

// for (let i = 0; i < 3; i++)
//     console.log(i);
//     console.log("Outside?");

// for (let i = 0; i < 5; i++) {
//     if (i === 2) continue;
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(i, j);
//         break;
//     }
// }

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), 0);
// }

// let arr = ["a", "b", "c"];
// for (let index in arr) {
//     console.log(index);
// }

// let obj = { a: 1, b: 2, c: 3 };
// for (let value of Object.keys(obj)) {
//     console.log(obj[value]);
// }

// outer: for (let i = 0; i < 3; i++) {
//     inner : for (let j = 0; j < 3; j++) {
//         console.log(i, j);
//         if (j === 1) break inner;
//     }
// }

// let x = 5;
// while (x < 5) {
//     console.log("Inside while");
// }

// do {
//     console.log("Inside do...while");
// } while (x < 5);

// let i = 0;
// while (i < 3) {
//     console.log(i);
// }

// let i = 0;
// while (true) {
//     console.log(i);
//     i++;
//     if (i === 3) break;
// }

// let i = 0;
// while (i < 5) {
//     i++;
//     if (i === 3) continue;
//     console.log(i);
// }

// let i = 0;
// while (i < 3) 
//     console.log(i);
//     i++;

// let num = 10;
// do {
//     console.log(num);
//     num -= 2;
// } while (num > 5);

// let count = 0;
// while (false) {
//     console.log(count);
//     count++;
// }

// let count = 0;
// do {
//     console.log(count);
//     count++;
// } while (false);

// let obj = { a: 1, b: 2, c: 3 };
// let keys = Object.keys(obj);
// let i = 0;

// while (i < keys.length) {
//     console.log(keys[i], obj[keys[i]]);
//     i++;
// }

// let i = 0, j = 0;
// while (i < 3) {
//     while (j < 3) {// for second iteration of outer while loop j=3 ;
//         console.log(i, j);
//         j++;
//     }
//     i++;
// }


// function createFunctions() {
//     let arr = [];
//     for (var i = 0; i < 3; i++) {
//         arr.push(() => console.log(i));
//     }
//     return arr;
// }

// const funcs = createFunctions();
// funcs[0]();
// funcs[1]();
// funcs[2]();

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
// }

// for (var i = 0; i < 3; i++) {// IIFE - Immedeatly Invoke Function Expression 
//     (function(i) {
//         setTimeout(() => console.log(i), 1000);
//     })(i);
// }

// function outerFunction(a) {
//     return function innerFunction(b) {
//         return a + b;
//     };
// }

// const addFive = outerFunction(5);
// console.log(addFive(3));

// function counter() {
//     var count = 0;
//     return {
//         increment: function() {
//             count++;
//             console.log(count);
//         },
//         decrement: function() {
//             count--;
//             console.log(count);
//         }
//     };
// }

// const myCounter = counter();
// myCounter.increment();//1
// myCounter.increment();//2
// myCounter.decrement();//1
// console.log(myCounter.count);// undefined - not accesible outside bcz return object only expose increment and decrement methods a count variable is private we cannot access form outside

// function test() {
//     for (let i = 0; i < 3; i++) {
//         setTimeout(() => console.log(i), 1000);
//     }
// }

// test();

// function makeMultiplier(x) {
//     return function(y) {
//         return x * y;
//     };
// }

// const double = makeMultiplier(2);
// const triple = makeMultiplier(3);

// console.log(double(4));
// console.log(triple(4));

// function outer() {
//     let a = "Hello";
//     function inner() {
//         console.log(a);
//     }
//     a = "Hi";
//     return inner;
// }

// const fn = outer();
// fn();

// function createAdder(addValue = 10) {
//     return function (x) {
//         return x + addValue;
//     };
// }

// const addTen = createAdder();
// console.log(addTen(5));

// const addTwenty = createAdder(20);
// console.log(addTwenty(5));
// "use strict"
// {
//     let secret = "Hidden";
//     function revealSecret() {
//         console.log(secret);
//     }
// }

// revealSecret();
// console.log(this);

// let arr = [1, 2, 3];
// arr[-1] = 99;
// console.log(arr);
// console.log(arr[-1]);
// arr[-200] = 499;
// console.log(arr);
// console.log(arr.length);

// let arr = [10, 20, 30];

// arr[-1] = 100;  // Assigning a value using a negative index

// console.log(arr);  // ✅ Output: [10, 20, 30]
// console.log(arr[-1]);  // ✅ Output: 100
// console.log(arr.length);  // ✅ Output: 3 (Length remains unchanged)
// console.log(arr[-2]);
// console.log(arr.at(1));
// console.log(arr.at(-1));
// console.log(arr.at(-11));

// let x = arr[2]+arr[5];
// console.log(x);


// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2[0] = 100;
// console.log(arr1[0]);

// let arr = [1, 2, 3];
// let arr2 = [...arr];
// arr2[0] = 100;
// console.log(arr[0]);

// let arr = [];
// arr[5] = 10;
// console.log(arr[4]);
// console.log(arr.length);

// let arr = [10, 20, 30];
// for (let i in arr) {
//     console.log(i);
// }

// let arr = [1, , 3, , 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = new Array(5);
// console.log(arr.length);
// console.log(arr[2]);
// console.log(arr);

// let arr = [1, 2, 3];
// arr[100] = 4;
// console.log(arr.length);
// console.log(arr);

// let arr = [1, 2, 3];
// console.log(arr[-1]);
// console.log(arr[1.5]);

// let arr = [1, , 3, , 5];
// arr.length = 3;
// console.log(arr);
// console.log(arr.length);

// arr.forEach((ele)=>{
//     console.log(ele);
    
// })

// let arr = [];
// arr[2] = "Hello";
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// let arr = [1, 2, 3];
// let arr2 = arr;
// arr2.length = 1;
// console.log(arr);

// let arr = [1, 2, 3];
// arr[5] = 10;
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// let arr = [];
// arr[3] = "A";
// arr[5] = "B";

// for (let i in arr) {
//     console.log(i);
// }
// [ , , ,"A", ,"B"]

// let arr = [1, , 2, , 3];
// console.log(arr.length);//5
// console.log(arr[1] === undefined);//true
// console.log(1 in arr);//false

// let arr = [1, , , 4];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     count++;
// }
// console.log(count);

// let arr = [1, 2, 3];
// arr[5] = null;
// console.log(arr);
// console.log(arr.length);

// let arr = [1, , 3];
// for (let i of arr) {
//     console.log(i);
// }

// let arr = [1, 2, 3];
// arr["foo"] = 100;
// console.log(arr.length);
// console.log(arr["foo"]);
// console.log(arr);

// const arr = [1, 2, 3];
// arr[0] = 100;
// arr = []
// console.log(arr);
// let arr = [1];
// arr[5] = 10;
// console.log(arr.length);
// console.log(arr.hasOwnProperty(3));
// console.log(arr.hasOwnProperty(0));
// console.log(3 in arr);

// let arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr.length);//5
// console.log(arr);

// let arr = [,];
// console.log(arr);//[]
// console.log(arr.length);//0
// console.log(arr.pop());//0
// console.log(arr);//[]

// let arr = [10];
// // console.log(arr.pop(arr.pop(arr.pop(10))));
// arr.pop(49)
// console.log(arr);

// let arr = [];
// // console.log(arr.pop() - arr.pop() + arr.pop());
// console.log(arr.shift("10"));

// console.log(arr);

// let arr = [10, 20, 30];
// // console.log(arr.unshift(arr.shift()) + arr.length);
// // let last = arr.pop();
// // let first = arr.shift();
// // arr.push(first)
// // arr.unshift(last)
// console.log(arr);

// let arr = [1, 2, 3,4,5,[2,3,[5,7]]];
// console.log(arr.unshift(arr.shift() + arr.pop()) + arr.length);

// let newArr=[8,6,7,[9]];
// // while(arr.length>0){
// //     newArr.push(arr.pop())
// // }

// while(n>0 && arr.length){
//     let i=arr.length;
//     newArr.push(arr[i--])
// }
// console.log(...arr,...newArr);
// console.log(arr.map((ele)=>ele>5));
// console.log([2,3]*2);


// let age = 16;
// let canVote = age > 18 ? "Yes" : "No";
// console.log(canVote);//No


// switch ("5") {
//   case 5:
//     console.log("Number 5");
//     break;
//   case "5":
//     console.log("String 5");
//     break;
// }

// for (let i = 0; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }
// 0
// 1
// 2
// 4

// let i = 5;
// while (i > 0) {
//   console.log(i);
//   i -= 2;//i=i-2
// }
// 5
// 3
// 1

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const fn = outer();
// fn();//1
// fn();//2

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.splice(2, 2));//[3,4]
// console.log(arr);[1,2,5]

// console.log("hello world".split(" ").reverse().join("-"));//world-hello

// const str = "jdkjdkjflskjdlfksdjlk I love JavaScript programming";
// console.log(str.split(" ").reduce((a, b) => a.length > b.length ? a : b));

// let a = "";
// let b = a;
// console.log(a == b);//false
// console.log(a === b);//false

// console.log(typeof NaN);//"number"
// console.log(NaN == NaN);//false


// console.log([1, 2, 3] + [4, 5, 6]);

// let arr = [1, 2, 3, 4];
// arr.forEach(num => {
//     if (num === 2) arr.push(5);
// });
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let filtered = arr.filter(num => num > 2);
// console.log(filtered);
// console.log(arr);

// console.log(Array.isArray({}));
// let arr = [1, 2, 3, 4];
// console.log(arr.map(num => num * 2).pop());
// console.log(arr);

// let arr = [1, 2, 13, 4,0];

// console.log(arr.reverse().indexOf(2));
// arr.sort((a,b)=>a-b);
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-1;j++){
//         if(arr[j]<arr[j+1]){
//             [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//         }
//     }
// }
// console.log(arr);

// let arr = [1,2,4];
// console.log(arr.reduce((acc, num) =>{
// sum= acc + num;
// return sum
// } ));

// let a = [1,2,3]
// // let b=[...a];
// let b = a.map(item => item)
// console.log(a===b);
// console.log(b);

// let str = 'vishal'
// console.log(typeof str.charAt(1))
// console.log("5" + - "2");
// console.log("B" + "A" + +"A" + "A");//BANaNA

// console.log(typeof null + 1);//"object"+1 = object1
// console.log(typeof undefined + 1);//undefind1
// console.log(typeof "Hello" + 1);//string1
// console.log("hello".repeat(0));
// console.log("hello".repeat(1));
// console.log("hello".repeat(3.9));
// console.log("hello".repeat(-100));

// console.log("Hello World".replace(/l/g,""));
// console.log("Hello".split("").reverse().join(""));
// console.log("a,b,c,,d".split(","));
// console.log("JavaScript".substring(4, 1));//ava
// console.log("JavaScript".slice(4, 1));//""

console.log("Hello".match(/l/g));
console.log("Hello".match(/x/g));
console.log("Hello".match(/l/));
console.log("HeLlo".slice(1,undefined));
