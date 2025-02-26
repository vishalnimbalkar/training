// Array 
let names = ['vishal', 'rahul', 'sanket']
// console.log(names)
// console.log("Length : "+names.length)

// push()
// console.log(names.push('sai','d'));

// let moreNames = ['s','e']
// names.push(...moreNames,3);
// let newArr = names.concat(moreNames);
// console.log(newArr);
// names.push([3,2,3]);
// console.log(names.length)
// console.log(names[3][2])

// function myPush(arr,...ele){
//     let len = arr.length;
//     let eleLength = ele.length;
//     for(let i=0;i<eleLength;i++){
//         arr[len++]=ele[i];
//     }
//     return len;
// }
// myPush(names,'v','c');
// console.log(names)
// console.log(names.length)


// pop()
// let removedEle = names.pop();
// console.log(removedEle)
// console.log(names)
// console.log("Length : "+names.length)
// let a = []
// console.log(a.pop()) // undefined

// function myPop(arr){
//     let lastEle = arr[arr.length-1];
//     arr.length=arr.length-1;
//     return lastEle;
// }
// console.log(myPop(names));
// console.log(names);


// unshift()
// add to the start 
// names.unshift('sai');
// console.log(names)
// [1,2,3,, ,]
// [2,3]

// function myUnShift(arr,...ele){
//     let eleLength = ele.length;
//     let len = arr.length;
//     arr.length = len + eleLength;
//     let curr=len-1;
//     for(let i=arr.length-1;i>=eleLength;i--){
//         arr[i]=arr[curr--];
//     }
//     for(let i=0;i<eleLength;i++){
//         arr[i]=ele[i];
//     }
//     return len+eleLength;
// }
// console.log(names)
// // myUnShift(names,'v','c',['w']);
// myUnShift(names,'a')
// myUnShift(names,'w')
// myUnShift(names,'r')
// console.log(names)
// console.log(names.length)



// shift()
// let removedEle = names.shift()
// console.log(names);
// console.log(removedEle);
// let a = []
// console.log(a.shift())//undefined
// [1,2,3]
// [2,3,3]

// function myShift(arr){
//     let len = arr.length;
//     let res = arr[0];
//     for(let i=1 ;i<len;i++){
//         arr[i-1]=arr[i];
//     }
//     arr.length=len-1;
//     return res;
// }

// console.log(names);
// console.log(myShift(names));
// console.log(names);


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
console.log(result);

// findIndex() - return first index of element that satisfis condition else -1
// findLast() - iterate array in reverse and return first ele that satisfis condition else undefined
// findLastIndex() -  iterate array in reverse and return first index that satisfis condition else -1


// concate 
let a = [1,2,3]
let b = [4,5,6]
let c = a.concat(b)
console.log(c);

let d = c.concat(7,8,[9,10]);
console.log(d);


// flat()
let arr = [1,2,3,[4,5,[6,7]]] 
console.log(arr.flat());//[1,2,3,4,5.[6,7]]
console.log(arr.flat(2));//[1,2,3,4,5,6,7]
console.log(arr.flat(Infinity));//[1,2,3,4,5,6,7]


// join 
// reverse 
// splice 
// slice 


