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
// console.log(str3.slice(2,2))

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
console.log(age.search(regex));//3

// substring()
let nm = 'Vishal';
// console.log(nm.substring(2));//shal
// console.log(nm.substring(2,5));//sha
// console.log(nm.substring(5,2));//sha - start is greter than end it is swap automatically 
// console.log(nm.substring(-5,2));//Vi - negative values are converted into 0
// console.log(nm.substring(NaN,3));//Vis - NaN is treated as 0
// console.log(nm.substring(-1,-3));//"" - if both arg are negative or nan or zero it returns "" empty string


// match()
let paragraph = "This is a sentence for match() Method";
let regx = /[A-Z]/g;
let result = paragraph.match(regx);

// console.log(result);//[ 'T', 'M' ]

// localeCompare()
console.log( "a".localeCompare('c'));//-1 or -2 negative 
console.log( "c".localeCompare('a'));// 1 or 2 positive
console.log( "a".localeCompare('a'));// 0 equal

// replace()
let newStr = paragraph.replace(' ','_');
console.log(newStr);//This_is a sentence for match() Method(bcz we pass string as replacement only first occurrence is replaced)
let ans = "abc".replace("", "_"); 
console.log(ans);//_abc

// startsWith(searchString)
// startsWith(searchString, position)

// endsWith(searchString)
// endsWith(searchString, endPosition)
//  -- endPosition - The end position at which searchString is expected to be found (the index of searchString's last character plus 1). Defaults to str.length.



 