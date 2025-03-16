// Number and methods 
// Number() constructor constains constants and methods to work with numbers 
// 1.Number.isNaN()
// - it returns true if argument value is NaN otherwise false 
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(Number.NaN));
// console.log(Number.isNaN(0/0));
// console.log(Number.isNaN(1/0));//false
// console.log(Number.isNaN(23));
// console.log(Number.isNaN("23"));
// console.log(Number.isNaN("hello"));

// console.log(isNaN("hello"));//true- global method isNaN() returns true if we pass it a character string it try to convert string into number and get NaN
// console.log(isNaN({}));//true
// console.log(isNaN(undefined));//true

// // 2. Number.parseInt()
// console.log( Number.parseInt("   003424"));
// // console.log( parseInt("   3424"));// global method
// console.log( Number.parseInt("11.2"));// decimal part is truncated 
// console.log( Number.parseInt("11dsfkj"));// 11 
// console.log( Number.parseInt("dsfkj123"));// NaN
// console.log( Number.parseInt());// NaN
//-leading whitespces and zeros are ignored

// 3.Number.parseFloat()
// -same as parseInt only work with decimal point 
// console.log(Number.parseFloat());//NaN
// console.log(Number.parseFloat("02"));//2
// console.log(Number.parseFloat("2.2"));//2.2
// console.log(Number.parseFloat('2.2dsfd'));//2.2
// console.log(Number.parseFloat('   4.3   '));//4.3
// console.log(Number.parseFloat('addsa4.3'));//NaN

// Properties
// 1.Number.MAX_VALUE
// -it represents maximum value in js 
// console.log(Number.MAX_VALUE);//1.7976931348623157e+308
// a value larger than Number.MAX_VALUE is Infinity
// console.log(Infinity);

// 2.Number.MIN_VALUE
// -it represents positve minimum value 
// console.log(Number.MIN_VALUE);//5e-324

// Math object & methods
// - the Math is a Object that constains static properties and methods for mathematical constants and methods 
// - It works with number type, not working with BigInt type.
// - Math is not a constructor 

// methods 
// 1.Math.abs()
// -it always returns positive number 
// -it returns absolute value of number 
// console.log(Math.abs(-23));
// console.log(Math.abs(12));
// console.log(Math.abs(-0));
// console.log(Math.abs(0));
// console.log(Math.abs(Infinity));
// console.log(Math.abs('-1'));//1
// console.log(Math.abs(""));//0
// console.log(Math.abs([]));//0
// console.log(Math.abs({}));//NaN
// console.log(Math.abs(null));//0
// console.log(Math.abs([2]));//2
// console.log(Math.abs([2,2]));//NaN
// console.log(Math.abs("str"));//NaN
// console.log(Math.abs());//NaN

// 2.Math.ceil()
// - it round up and returns a smallest integer greater than or equal to given number 
// console.log(Math.ceil(-Infinity));//-Infinity
// console.log(Math.ceil(-3.003));//-3
// console.log(Math.ceil(-4));//-4
// console.log(Math.ceil(-0.84));//-0
// console.log(Math.ceil(-0));//-0
// console.log(Math.ceil(0));//0
// console.log(Math.ceil(0.84));//1
// console.log(Math.ceil(4));//4
// console.log(Math.ceil(6.004));//7
// console.log(Math.ceil(Infinity));//Infinity
// console.log(Math.ceil(9.9));//10
// console.log(Math.ceil(9.1));//10

// 3.Math.floor()
// console.log(Math.floor(-Infinity));//-Infinity
// console.log(Math.floor(-2.002));//-3
// console.log(Math.floor(-1));//-1
// console.log(Math.floor(-0.322));//-1
// console.log(Math.floor(-0));//-0
// console.log(Math.floor(0));//0
// console.log(Math.floor(1));//1
// console.log(Math.floor(2.002));//2
// console.log(Math.floor(Infinity));//Infinity
// console.log(Math.floor(9.9));//9
// console.log(Math.floor(9.1));//9
// console.log(Math.floor("9.1"));//9

// 4. Math.max();
// -it returns max value from given numbers 
// console.log(Math.max(10,20));//20
// console.log(Math.max(-10,-20));//-10
// console.log(Math.max());//-Infinity
// console.log(Math.max("12","90"));//90 - "12" and "90" is conveted into number
// console.log(Math.max(Number.MAX_VALUE,Infinity));//

// let arr = [23,23,345,6572,13,"34234"];
// console.log(Math.max(...arr));

// 5.Math.min()
// - it returns minimum value form given numbers 
// console.log(Math.min(10,20));//10
// console.log(Math.min(-10,-20));//-20
// console.log(Math.min());//Infinity
// console.log(Math.min("12","90"));//12 - "12" and "90" is conveted into number
// console.log(Math.min(Number.MAX_VALUE,Infinity));//

// let arr = [23,23,345,6572,13,"34234"];
// console.log(Math.min(...arr));//13

// 7.Math.round()
// // - it returns value of the number rounded to the nearest number 
// console.log(Math.round(-Infinity));//-infinity
// console.log(Math.round(Infinity));// Infinity
// console.log(Math.round(9.1));// 9
// console.log(Math.round(9.9));// 10
// console.log(Math.round(9.5));// 10
// console.log(Math.round(9.501));// 10
// console.log(Math.round(9.4999));// 9
// console.log(Math.round("  12.3  "));// 12
// console.log(Math.round("12.3dj"));//NaN

// 8.Math.random()
// console.log(Math.random());
// console.log(Math.floor(Math.random()*1000));

// Date & its methods 
// it is used to work with date and time 
const currentDate = new Date();
console.log(currentDate.toString())
console.log(currentDate.toDateString())
console.log(currentDate.toLocaleString())
console.log(currentDate.toLocaleDateString())
let start = Date.now();
console.log(Date.now());// current date in miliseconds
console.log(currentDate);// current date
console.log(currentDate.getDate());//
console.log(currentDate.setDate(15));//
console.log(currentDate.toDateString())

