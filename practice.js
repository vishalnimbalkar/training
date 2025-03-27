// // // const my = ()=>{
// // //     console.log(this);
// // // }

// // // function my2(){
// // //     console.log(this);
// // //     const my = ()=>{
// // //         console.log(this);
// // //     }
// // //     my()
// // // }
// // // my()
// // // // my2()

// // // const obj = {
// // //     name : 'vishal',
// // //     my : function (){
// // //         console.log(this.name); 
// // //         let my2 = ()=>{
// // //             console.log(this);
// // //         }
// // //         my2()
// // //     },

// // // }
// // // obj.my()
// // // // obj.my2()
// // // console.log(this);
// // // my()
// // //  function my (){
// // //     console.log('hello');
// // // }

// // // const numbers = [];
// // // const newNumbers = numbers.map(num => {
// // //   if (num % 2 === 0) return num * 2;
// // // //   else return num;
// // // });
// // // console.log(newNumbers);

// // // const sum = numbers.reduce((acc, num)=>acc+num,0);
// // // console.log(sum);

// // // const object = [
// // //     {name : 'vishal'},
// // //     {
// // //         city : 'pune'
// // //     }
// // // ]

// // // let address = object[1];
// // // console.log(object.includes({
// // //     city : 'pune'
// // // }));

// // // const numbers = [1, 2, 3, 4, 5];
// // // Output: [2, 4, 6, 8, 10]
// // // console.log(numbers.map((num)=>num*2));
// // // console.log(numbers.filter((num)=>num%2===0));
// // // console.log(numbers.find((num)=>num%2===1));


// // // const numbers = [1, 2, 2, 3, 4, 4, 5];
// // // Output: [1, 2, 3, 4, 5]
// // // const unique = numbers.filter((num,index,arr)=>{
// // //   return arr.indexOf(num)===index;
// // // })
// // // console.log(unique);


// // const numbers = [5, 1, 8, 3, 7];
// // // Output: [8, 7, 5, 3, 1]
// // // console.log(numbers.sort((a,b)=>b-a));

// // // const words = ["hello", "world"];
// // // // Output: ["HELLO", "WORLD"]
// // // console.log(words.map((word)=>word.toUpperCase()));

// // // const words = ["apple", "banana", "cherry", "blueberry"];
// // // Output: "blueberry"
// // // console.log(words.reduce((longestWord,word)=>word.length > longestWord.length ? word : longestWord,""));

// // const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
// // // Output: { apple: 3, banana: 2, orange: 1 }

// // const occurences = items.reduce((acc, word)=>{
// //     acc[word] = (acc[word] || 0)+1;
// //     return acc;
// // },{})

// // // console.log(occurences);

// // const people = [
// //     { name: "Alice", age: 25 },
// //     { name: "Bob", age: 30 },
// //     { name: "Charlie", age: 25 }
// //   ];
// //   // Output: { 25: [{name: "Alice", age: 25}, {name: "Charlie", age: 25}], 30: [{name: "Bob", age: 30}] }
// //   const result = people.reduce((acc,obj)=>{
// //     acc[obj.age] = acc[obj.age] || []
// //     acc[obj.age].push(obj);
// //     return acc;
// //   },{})
// // //   console.log(result);
  
// // const arr = [1, [2, 3], [4, [5, 6]]];
// // // Output: [1, 2, 3, 4, 5, 6]
// // console.log(arr.flat(Infinity));

// const numbers = [1, 2, 2, 3, 3, 3, 4,1,1,1,1,3,3,3];
// // Output: 3
// const mostFreq = numbers.reduce((freq, ele)=>{
//     freq[ele] = (freq[ele] || 0) +1;
//     return freq;
// },{})
// let result = -1;
// let count = 0;
// for(let key in mostFreq){
//     if(mostFreq[key] > count){
//         result = key;
//         count = mostFreq[key];
//     }
    
// }
// // console.log(result);

// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
// // Output: [1, 2, 3, 4, 5, 6]
// const mergedArr = arr1.concat(arr2).sort((a,b)=>a-b)
// // console.log(mergedArr);

// const users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" }
//   ];
//   // Output: { 1: { id: 1, name: "Alice" }, 2: { id: 2, name: "Bob" } }

// const output = users.reduce((out,user,index)=>{
//     out[index+1] = user;
//     return out;
// },{})
// console.log(output);

// const words = ["Apple", "Banana", "Avocado", "Grapes"];
// // Output: ["Apple", "Avocado"]
// console.log(words.filter((word)=>word.charAt()==='A'));

// const numbers = [5, 10, 15, 20];
// // Output: [0, 10, 30, 60] // (0*5, 1*10, 2*15, 3*20)
// console.log(numbers.map((num,index)=>num*index));

// const names = ["John", "Emily", "Christopher", "Anna"];
// // Output: "Christopher"
// console.log(names.find((word)=>word.length>5));

// const numbers = [10, 55, 72, 40, 85];
// // Output: 3
// console.log(numbers.filter((num)=>num>50).length);

// const numbers = [5, 12, 8, -3];
// // Output: true
// console.log(numbers.some((num)=>num<0));

// const prices = [5, 10, 15];
// Output: ["$5.00", "$10.00", "$15.00"]
// console.log(prices.map((price)=>{
//     return `$${price.toFixed(2)}`
// }));

const arr = [1, "hello", 2, 3, "world", 4];
// Output: [4, "hello", 3, 2, "world", 1]
// const filterArr = arr.filter((num)=>{
//     return typeof num === 'number'
// }).reverse()
// let i = 0;
// const result = arr.map((num)=>{
//     return typeof num === 'number' ? filterArr[i++] : num;
// })

// console.log(result);

// const words = ["apple", "banana", "cherry"];
// // Output: ["Apple", "Banana", "Cherry"]
// const result = words.map((word)=>word.charAt().toUpperCase()+word.slice(1))
// console.log(result);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];
// // Output: [1, 2, 5, 6]
// let result = []
// arr1.forEach((num)=>{
//     if(!arr2.includes(num)){
//         result.push(num);
//     }
// })
// arr2.forEach((num)=>{
//     if(!arr1.includes(num)){
//         result.push(num);
//     }
// })
// console.log(result);

const words = ["listen", "silent", "enlist", "hello", "below", "elbow"];
// Output: { "eilnst": ["listen", "silent", "enlist"], "ehllo": ["hello"], "below": ["below", "elbow"] }

const result = words.reduce((output,word)=>{
    let sortedWord = word.split('').sort().join('');
    output[sortedWord] = output[sortedWord] || []
    output[sortedWord].push(word)
    return output;
},{})

// console.log(result);


// console.log("vishAl".charCodeAt(4));
// console.log('vishal'.indexOf('shall'));
// const strArr = str.split("")
// let i=0;
// let char = str.indexOf(str[i]);
// let count = 0;
// while(char !== -1){
    //     count++;
    //     char = str.indexOf(str[i],char);
    // }
    // console.log(count);
    const str = '  1 vishal23 nimbalkar123'
    // console.log(str.slice("1","   4 "));
    console.log(str.split(/\D/));
    



