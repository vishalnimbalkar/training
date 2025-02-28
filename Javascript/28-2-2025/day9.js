// String 
// it is a object that store sequance of characters
// we can create string by 2 way one is string litral and another is string()

let myName = 'vishal'
myName[3]='x';// we cannot update string by this way 
// console.log(myName);

let name = new String('vishal')
// console.log(myName == name);


// 'a' and 'A' are different bcz it streets it case vise (upper and lower are different)
// if('a' == 'A') console.log(true);

// methods

let str = "Hello Everyone"
// console.log(str.length);//14
// console.log(str.toLowerCase())//hello everyone
// console.log(str.toUpperCase())//HELLO EVERYONE

// charAt()
// console.log(str.charAt(undefined))
// console.log(str.charAt())
// console.log(str.charAt(23))

let res = str.charAt();
// console.log(typeof res);

// indexOf(subString)
// console.log(str.indexOf('E',-100));//6
// console.log(str.indexOf('E',100));//-1
// console.log(str.indexOf('',100));//14(str.length)
// console.log(str.indexOf('',6));//start position = 6

// lastIndexOf(substring)
let str3 = "my name is vishal, Name"
// console.log(str3.lastIndexOf('y',-15))

// includes(substring)
// console.log(str3.includes('name',20))

// slice(start , end)
// console.log(str3.slice(2))

// split(seprator, limit)
let words = str3.split(" ");
// console.log(words);

// trim()
// it removes spaces from start and end of the string 
let sentence = "    Hello    ";
// console.log(sentence.trim());

// concat(str1,str2,....,strN)
let lname = 'nimbalkar'
// console.log(lname.concat(' ',"vishal"))
// console.log(lname.concat(78))
// console.log(lname.concat(null))
// console.log(lname.concat(undefined))
// console.log(lname.concat(true))

// search(regx)
// it search this string to find pattern and returns first occurrence index if found otherwise -1;
const regex = /[A-Z]/;
let age = 'my Age is 24' 
console.log(age.search(regex));


// substring()
// match()
// localeCompare()
// replace()
 