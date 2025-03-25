// console.log(Number("3.3"));//3.3
// console.log(Number("3.3xbfg"));//NaN
// can we  use map() as filter and filter as map()


// write a problem that covers all methods of array
let arr = [1,2,3,4,5,6,7,8,9]
function allArrMethods(arr){
    arr.push(10,11,12);//12 - updated length of array
    // add elements at the end and returns updated length;
    arr.pop();//12
    // removes last element and return removed element
    arr.shift();//1
    // removes first element from an array and return removed element 
    console.log(arr);//[2,3,4,5,6,7,8,9,10,11]
    arr.unshift(1,1.5);//12 - updated length of array
    // add new element to the begining of array and returns updated length 
    console.log(arr);//[1,1.5,2,3,4,5,6,7,8,9,10,11]
    // double each element in array 
    const doubleArr = arr.map((num)=>num+num);
    console.log(doubleArr);//[2,  3,  4,  6,  8, 10, 12, 14, 16, 18, 20, 22]
    // map use to transform value of array and return new array with those values
    
    //filter even numbers 
    console.log(arr.filter((num)=>num%2==0));//[ 2, 4, 6, 8, 10 ]
    //filter method use to filter out elements from array that passes a given condition and return new array

    // find sum of all elements in an array 
    console.log(arr.reduce((sum, ele)=>sum + ele,0));//67.5
    // reduce() used to reduce array elements into single value and return that value 

    // find first element that is greater than 5 
    console.log(arr.find((num)=>num>5));//6
    // find() return first element that passes the given condition returns undefined if no element found
    // findLast() iterate array in reverse order and returns  first element that passes the given condition returns undefined if no element found
    console.log(arr.findLast((num)=>num>5));//11

    // find index of element that is greater the 5 
    console.log(arr.findIndex((num)=>num>5));//6th index
    console.log(arr.findLastIndex((num)=>num>5));//11th index
       // findIndex() return first index that passes the given condition 
    // findLastIndex() iterate array in reverse order and returns  first index that passes the given condition 
    // both findIndex() and findLastIndex() returns -1 if no element matches condition 

    // indexOf()
    console.log(arr.indexOf(8));//8 returns index of given element that is first occures 
    console.log(arr.indexOf(18));//-1 return -1 if element is not present in array 
    console.log(arr.indexOf(5,3));//5  second parameter is a startPosition form that searching is start 
    console.log(arr.indexOf(2,3));//-1

    // slice()
    console.log(arr.slice(4,-2));// [ 4, 5, 6, 7, 8, 9 ] - it return new array from index 4 to -2 and end index is not included 

    // splice()
    // it used to add or delete elements from array 
    console.log(arr.splice(3,2,99,44)); // [3, 4] are deleted from array and 99 and 44 are added it thier place
    console.log(arr);//[1, 1.5, 2, 99, 44, 5,   6, 7,  8,  9, 10,  11 ]
    
    console.log(arr.reverse());//[ 11, 10,  9,  8, 7, 6,  5, 44, 99, 2, 1.5, 1];
    // reverse() reverse array and return reference to original array 

    // concat() add given elements into array at the end or array and return new array 
    console.log( arr.concat(23,45,65,[22,33]));//[ 11, 10, 9, 8, 7, 6, 5, 44, 99, 2, 1.5, 1, 23, 45, 65, 22, 33]
    
    // includes() method return true if element present in array otherwise false
    console.log(arr.includes(2));//true
    console.log(arr.includes(90));//false
    
    //join() return new string by combining all array elements with given seprator
    console.log(arr.join("-"));//'11-10-9-8-7-6-5-44-99-2-1.5-1'
    
    arr.fill(0);
    console.log(arr);
    // fill() method add give element to the array it therir are elements in array then override with given value
    // [
    //     0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0,
    //     0, 0
    //   ]       
}

// allArrMethods(arr)

// write a problem that covers all methods of string 
let str = "Hello, my name is vishal"
function allStringMethods(str){
    console.log(str.toUpperCase());//HELLO, MY NAME IS VISHAL
    console.log(str.toLowerCase());//hello, my name is vishal
    console.log(str.charAt(4));//o
    console.log(str.indexOf('m'));//7
    console.log(str.indexOf('z'));//-1
    console.log(str.lastIndexOf('e'));//13
    console.log(str.lastIndexOf('z'));//-1
    console.log(str.includes('my'));//true
    console.log(str.includes('the'));//false
    console.log(str.slice(0,-6));//Hello, my name is
    console.log(str.slice(-10,-6));// is
    console.log(str.slice(undefined, undefined));//Hello, my name is vishal
    // if we pass undefined as start it treat as 0 and for end it treated as str.length
    console.log(str.substring(2,10));//llo, my
    console.log(str.substring(-2,10));//Hello, my - -2 converted to 0 negative indexing not supported
    console.log(str.substring(14,6));// my name - if start > end it swap start and end 
    console.log(str.substring(undefined,undefined));//Hello, my name is vishal

    console.log(str.split(" "));//[ 'Hello,', 'my', 'name', 'is', 'vishal' ]
    console.log(str.split(" ",4));//[ 'Hello,', 'my', 'name', 'is' ]

    console.log("   vishal    ".trim());//vishal - remove leading and trailing spaces

    console.log(str.concat(". ", "I am from shrigonda"));//Hello, my name is vishal. I am from shrigonda
    //all arguments converted into string 

    console.log(str.search(/[a-z]/))//1 - it returns first occurence of matching sub string index if not present return -1

    console.log(str.match(/[A-Z]/));//[ 'H' ] - returns array with mactching given matching pattern 
    let str1 = 'vishal'
    let str2 = 'rahul'
    console.log(str1.localeCompare(str2));//1 - str1 is occures after str2 ( return +ve number)
    console.log(str2.localeCompare(str1));//-1 - str2 is occures before str1 ( return -ve number)
    console.log('rahul'.localeCompare(str2));//0 - str2 is equal to str1 
    
    console.log(str.replace(/\s/g,'_'));//Hello,_my_name_is_vishal    
}
// allStringMethods(str)
// write a problem that covers all methods of Number 
function allNumberMethodds(){
    // 1.Number.isNaN()
// - it returns true if argument value is NaN otherwise false 
console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN(Number.NaN));//true
console.log(Number.isNaN(0/0));//true
console.log(Number.isNaN(1/0));//false
console.log(Number.isNaN(23));//false
console.log(Number.isNaN("23"));//false
console.log(Number.isNaN("hello"));//false

// // 2. Number.parseInt()
console.log( Number.parseInt("   003424"));//3424
console.log( parseInt("   3424"));// global method//3424
console.log( Number.parseInt("11.2"));// decimal part is truncated //11
console.log( Number.parseInt("11dsfkj"));// 11 
console.log( Number.parseInt("dsfkj123"));// NaN
console.log( Number.parseInt());// NaN
//-leading whitespces and zeros are ignored

// 3.Number.parseFloat()
// -same as parseInt only work with decimal point 
console.log(Number.parseFloat());//NaN
console.log(Number.parseFloat("02"));//2
console.log(Number.parseFloat("2.2"));//2.2
console.log(Number.parseFloat('2.2dsfd'));//2.2
console.log(Number.parseFloat('   4.3   '));//4.3
console.log(Number.parseFloat('addsa4.3'));//NaN

// 1.Number.MAX_VALUE
// -it represents maximum value in js 
console.log(Number.MAX_VALUE);//1.7976931348623157e+308

// 2.Number.MIN_VALUE
// -it represents positve minimum value 
console.log(Number.MIN_VALUE);//5e-324
}

allNumberMethodds()