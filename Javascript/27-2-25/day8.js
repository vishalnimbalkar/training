

let numbers = [1,2,3,4,2,4];

// map()
// let result = numbers.map((num)=>{
//     return num+num;
// })
// console.log(result);

// let ans = numbers.map((num,index,number)=>{
//     return [num,index,number]
// })

// console.log(ans);

//  filter()
// let even = numbers.filter((ele)=>{
//     return ele%2==1
// })

// console.log(even);
// function count(arr,ele){
//     let count=0;
//     for(let i=0;i<arr.length;i++){
//         if(ele==arr[i]){
//             count++;
//         }
//     }
//     return count;
// }

// let duplicate = numbers.filter((ele,index,arr)=>{
//   return count(arr,ele)>1;
// })

// console.log(duplicate)

// forEach()
// numbers.forEach((ele)=>{
//     console.log(ele)
// })

// numbers.forEach((ele,ind,arr)=>{
//     console.log(`${ind} : ${ele} => ${arr}`);
    
// })

// reduce()
// without initialValue 
// let nums = [1,3,4,6];
// let result = nums.reduce((sum,ele,index,arr)=> sum+ele )
// console.log(result);//14

// // with initialValue
// let initialValue =10;
// let result2 = nums.reduce(
//     (accumulator, currValue)=> accumulator+currValue,initialValue
// )
// console.log(result2);//24

// console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
// console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN


// find() - return first ele that satisfis condition else undefined
let nums = [1,2,3,4,2,4];
let result = nums.find((ele)=>ele>3);
// console.log(result);

// findIndex() - return first index of element that satisfis condition else -1
// findLast() - iterate array in reverse and return first ele that satisfis condition else undefined
// findLastIndex() -  iterate array in reverse and return first index that satisfis condition else -1


// concate 
let a = [1,2,3]
let b = [4,5,6]
let c = a.concat(b)
// console.log(c);

let d = c.concat(7,8,[9,10]);
// console.log(d);


// flat()
let arr = [1,2,3,[4,5,[6,7]]] 
// console.log(arr.flat());//[1,2,3,4,5,[6,7]]
// console.log(arr.flat(2));//[1,2,3,4,5,6,7]
// console.log(arr.flat(Infinity));//[1,2,3,4,5,6,7]


// join()
// it creates and return new string by concatenating all elements of array by specified separater
let arrr = [1,2,,3,4]
// console.log(arrr.join());//1,2,,3,4
// console.log(arrr.join(" + "));//1 + 2 + + 3 + 4
// console.log(arrr.join(""));//1234

// reverse() - it reverse all array element and return reference of that array
// let newArr = arrr.reverse();
// console.log(newArr)
// newArr[0]=32;
// console.log(newArr)
// console.log(arrr)

// slice() - returns shallow copy/ portion of an array 
// syntax - slice() , slice(start), slice(start, end)
// console.log(arrr.slice(3));

// splice
// syntax - splice(), splice(start, deleteCount, items1,..., itermsN)
// it changes content of array by removing or replacing or adding new ele 
 let array = [1,2,3,4,5]
//  array.splice(2);// delete all from start [1,2]
//  array.splice(2,1);// delete one from start [1,2,4,5]
let res = array.splice(2,0,0,0); // [1,2,0,0,3,4,5]
 console.log(array);
 console.log(res);
 