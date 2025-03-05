// console.log(firstName)
// var firstName;
// // let firstName = 'vishal'
// var firstName = 'soham'
// console.log(firstName);

// console.log(typeof([] + {}));// "[object object]"
// console.log({} + 1);//[]->"" +"[object object]1" => "[object object]"

// console.log(1 + "1" - 1)//"11"-1=>11-1=10

// console.log(true + true);//1+1=2
// console.log(true - false);//1-0=1
// console.log(true + "1");//"true1"
// console.log(true - "1");//0


// console.log([] == false);//false ==false - true- []->""->false
// console.log([] == 0);// 0 == 0 - true
// console.log("" == 0);// 0 == 0 - true
// console.log(null == 0);// false
// console.log(null >= 0);// false
// console.log(undefined == 0); //false

// console.log([] - 1);//-1
// console.log({} - 1);//1-1=0

// const arr = [1, 2, 3];
// arr[10] = 5;
// console.log(arr.length);//11
// console.log(typeof arr[8]);//11

// const arr = [1, 2, 3, 4];
// delete arr[1];
// console.log(arr.length);//3
// arr.unshift(10);
// arr.push(12);
// console.log(arr[0]);
// console.log(arr[arr.length-1]);

// let temp = arr[1];
// console.log(arr[arr.length-2]);
// console.log(arr[1]);

// arr[1]=arr[arr.length-2];
// arr[arr.length-2]=temp;

// arr.splice(arr.length-1,0,12);
// let newArr = arr.slice(-2);
// console.log(newArr);

// console.log(arr.slice(-2, -3));
// console.log(arr);

const arr = [1, 2, 3, 4, 5];
 
console.log(arr.splice(2, 2));//[3,4]

console.log(arr);//[1,2,5]
 
console.log(arr.slice(1, 3));//[2,5]

console.log(arr);//[1,2,5]
 