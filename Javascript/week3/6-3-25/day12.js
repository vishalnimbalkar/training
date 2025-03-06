// // // console.log(firstName)
// // var firstName;
// // // let firstName = 'vishal'
// // console.log(typeof typeof null);

// // console.log(bar);
// // // console.log(bar());

// // var bar = function(){
// //     console.log('jel');

// // }

// // const person = { name: "Alice" };
// // const anotherPerson ={...person};
// // anotherPerson.name = "Bob";
// // console.log(person.name);

// // function demo(x, y) {
// //     arguments[0] = 100;
// //     arguments[1] = 200;
// //     console.log(x, y);
// //   }
// //   demo(1, 2);

// // // var firstName = 'soham'
// // // console.log(firstName);

// // // console.log(typeof([] + {}));// "[object object]"
// // // console.log({} + 1);//[]->"" +"[object object]" => "[object object]1"

// // // console.log(1 + "1" - 1)//"11"-1=>11-1=10

// // console.log(true + true);//1+1=2
// // console.log(true - false);//1-0=1
// // console.log(true + "1");//"true1"
// // console.log(true - "1");//0

// // console.log([] == false);// []->""->false -> false == false = true
// // console.log([] == 0);// 0 == 0 - true
// // console.log("" == 0);// 0 == 0 - true
// // console.log(null == 0);// false
// // console.log(undefined >= 0);// true
// // console.log(undefined > 0);// false
// // console.log(undefined < 0);// false
// // console.log(undefined <= 0);// true
// // console.log(Number(undefined));// true
// // console.log(undefined == 0); //false

// // console.log([1,2]-[2,1]);//NaN (multi valued array is return NaN)

// // // console.log([] - 1);//-1
// // // console.log({} - 1);//NaN -1 = NaN

// // // const arr = [1, 2, 3];
// // // arr[10] = 5;
// // // console.log(arr.length);//11
// // // console.log(typeof arr[8]);//11

// // // const arr = [1, 2, 3, 4];
// // // delete arr[1];
// // // console.log(arr.length);//3
// // // arr.unshift(10);
// // // arr.push(12);
// // // console.log(arr[0]);
// // // console.log(arr[arr.length-1]);

// // // let temp = arr[1];
// // // console.log(arr[arr.length-2]);
// // // console.log(arr[1]);

// // // arr[1]=arr[arr.length-2];
// // // arr[arr.length-2]=temp;

// // // arr.splice(arr.length-1,0,12);
// // // let newArr = arr.slice(-2);
// // // console.log(newArr);

// // // console.log(arr.slice(-2, -3));
// // // console.log(arr);

// // const arr = [1, 2, 3, 4, 5];

// // console.log(arr.splice(2, 2));//[3,4]

// // console.log(arr);//[1,2,5]

// // console.log(arr.slice(1, 3));//[2,5]

// // console.log(arr);//[1,2,5]

// // console.log({}-{});//{}->"[object object]"-"[object object]"=>true - true => 1-1=0
// // console.log(Number("dfd"));
// // console.log(dlkfjl === undefined)
// // const dlkfjl;

// // console.log([] - 1);//[]->""->0-1=-1
// // console.log({} - 1);//{}->"[obj obj]"->NaN-1=NaN
// // const name = 'outer';
// // if(true){
// //     var name = 'my'
// //     console.log(name);

// // }
// // // my()
// // console.log(name);

// function my() {
//   console.log("1");
// }
// // my()//2
// function my() {
//   console.log("2");
// }

// // my()//2

// // const my=''
// // console.log(typeof null);
// // console.log(typeof Null);
// // console.log(typeof NULL);

// // data types
// // console.log({} == {});
// // // console.log([]==[]);
// // console.log(String({}));//{}->"[Object Object]"
// // console.log(Number({})==0);//{}->"[Object Object]"

// // console.log({} == "[object object]");

// // operator
// // console.log([]==![])

// // console.log('' || 0);
// // console.log(Boolean({}));

// // 1. =
// // console.log(y);
// console.log(x);

// {
//   var x = (y = 6);
//   console.log(x);
//   console.log(y);
//   x = 29;
//   y = 78;
// }

// console.log(x);
// console.log(y);


// let a = 13;
// a.b=23;
// console.log(a);
// console.log(a.b);

// console.log(0 == "0");//true
// console.log(0 === "0");//false
// console.log(false == 'false')//;0 == NaN -> false
// console.log(false == 0);//true
// console.log("5" + 3 - 1);//52
// console.log("5" - 3 + "1");//"21"
// console.log([] + []);""+""=""
// console.log({} + {});//"[object Object][object Object]"
// console.log(true == "1");//1 == 1 =>true
// console.log(true === "1");//false

// let arr = [1, 2, 3];
// arr[100] = 5;
// console.log(arr.length);//101

// let arr = [1, 2, 3, 4];
// delete arr[1];
// console.log(arr.length);//4

// console.log(arr[1]);//undefind

// let obj = { a: 1 };
// console.log(obj.hasOwnProperty("toString"));//false

// let arr = ["a", "b", "c"];
// arr.length = 1;
// console.log(arr);["a"]

// console.log(typeof null);//"object"
// console.log(typeof []);//'object'
// console.log(a);//undefined
// var a = 10;

// function test() {
//     console.log(a);
//     let a = 10;
// }
// test();

// function test() {
//     console.log(a);
//     var a = 10;
// }
// test();

// function test() {
//     if (true) {
//         var a = 5;
//     }
//     console.log(a);
// }
// test();

// function test() {
//     if (true) {
//         let a = 5;
//     }
//     console.log(a);
// }
// test();

// function makeCounter() {
//     let count = 0;
//     return function () {
    //         console.log(count);
    //         count++;
//     };
// }
// let counter = makeCounter();
// counter();//0
// counter();//1

// let x = 1;
// function outer() {
//     let x = 2;
//     function inner() {
//         console.log(x);
//     }
//     inner();
// }
// outer();

// function foo() {
//     console.log(this);
// }
// foo();

// let obj = {
//     foo: function () {
//         console.log(this);
//     }
// };
// obj.foo();
// let obj = {
//     foo: () => {
//         console.log(this);
//     }
// };
// obj.foo();
// console.log(typeof NaN);
// console.log(0.1 + 0.2 === 0.3);//false
// console.log([] == ![]); []=>''->0 == 0 = true
// let a = {};
// let b = {};
// console.log(a == b);//false
// console.log(1 < 2 < 3);//true < 3 - 1 < 3 - true 
// console.log(3 > 2 > 1);//true >= 1 - false