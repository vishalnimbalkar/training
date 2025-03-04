// Array 
let names = ['vishal', 'rahul', 'sanket']
let a = [1,2,1]
// let b = [1,2,1]
// let c = [...a,...b]
// console.log(c);
// concat array using spread operator (...)
// console.log(names)
// console.log("Length : "+names.length)
//  console.log(a.toString());
 
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


