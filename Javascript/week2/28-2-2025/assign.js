let str = "Hello, My name is Vishal."
// Find the length of a string
// console.log(`Length of string is ${str.length}`)//25

// Write a function getStringLength(str) that returns the length of a given string.
function getStringLength(str){
    let len=0;
    for (let char of str) {
        len++;
    }
    return len;
}
// console.log(getStringLength(str))//25

// Convert to uppercase
//console.log(str.toUpperCase());

// Write a function toUpper(str) that returns the string in uppercase.
function toUpper(str){
    return str.toUpperCase();
}
//console.log(toUpper(str));

// Convert to lowercase
//console.log(str.toLowerCase());

// Write a function toLower(str) that returns the string in lowercase.
function toLower(str){
    return str.toLowerCase();
}

//console.log(toLower(str))

// Get a character at a specific index
    // using [] 
    // console.log(str[5]);//,
    // using charAt(index)
    // console.log(str.charAt(5)) //,

// Write a function getCharacter(str, index) that returns the character at the given index in the string.
function getCharacter(str, index){
    return str[index];
}
// console.log(getCharacter(str, 0));//H

// Find the first occurrence of a substring
//  console.log(str.indexOf(' '));//6 - first occurence of space in string 
 
// Write a function findIndex(str, subStr) that returns the index of the first occurrence of subStr in str.
function findIndex(str, subStr){
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)===subStr){
            return i;
        }
    }
    return -1;
}
// console.log(findIndex(str,' '));//6

// Find the last occurrence of a substring
// console.log(str.lastIndexOf(' '));//17

// Write a function findLastIndex(str, subStr) that returns the index of the last occurrence of subStr in str.
function findLastIndex(str, subStr){
    for(let i=str.length-1;i>=0;i--){
        if(str.charAt(i)===subStr){
            return i;
        }
    }
    return -1;
}
// console.log(findLastIndex(str," "));//17

// Check if a string contains a substring
// console.log(str.includes('My'));//true

// Write a function containsSubstring(str, subStr) that returns true if str contains subStr, otherwise false.
// Hello, My name is Vishal."
function containsSubstring(str, subStr){
    let isTrue = false;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)===subStr.charAt(0)){
            let k=i;
            for(let j=0;j<subStr.length;j++){
                if(str.charAt(k++)===subStr.charAt(j)){
                    isTrue = true;
                }else{
                    isTrue = false; 
                    break;
                }
            }
        }
    }
    return isTrue;
}
// console.log(containsSubstring(str,'is'));//true

// Extract a portion of a string using slice()
// console.log(str.slice(18,24));//Vishal
// console.log(str.slice(NaN,24));//Hello, My name is Vishal

// Write a function extractSlice(str, start, end) that returns the sliced portion of str.
function extractSlice(str, start, end=str.length){
    start = isNaN(start) ? 0 : start;
    end = isNaN(end) ? 0 : end;
    if(start>=end) return '';
    let result = ''
    for(let i=start;i<end;i++){
        result+=str.charAt(i);
    }
    return result;
}
// console.log(extractSlice(str,NaN,10));//Hello, My 
// console.log(extractSlice(str,6,6));// 

// Extract a portion of a string using substring()
// console.log(str.substring(2,9));//llo, My

// Write a function extractSubstring(str, start, end) that returns a substring from str.
function extractSubstring(str, start, end){
    start = isNaN(start) || start < 0 ? 0 : start;
    end = isNaN(end) || end < 0 ? 0 : end;
    if(start > end ){
        let temp = start;
        start = end ;
        end = temp ;
    }
    let result = ''
    for(let i=start;i<end;i++){
        result+=str.charAt(i);
    }
    return result;
}
// console.log(extractSubstring(str,1,NaN));//H

// Trim whitespace from a string
let sentence = "    hello     "
// console.log(sentence.trim());// "hello"

// Write a function trimString(str) that removes leading and trailing spaces.
function trimString(str){
    return str.trim();
}
// console.log(trimString(sentence));//'hello'

// Split a sentence into words
let words = str.split(" ");
// console.log(words);//[ 'Hello,', 'My', 'name', 'is', 'Vishal.' ]

// Join an array of words into a sentence
let Sentence = ''
 words.forEach((word)=>{
    Sentence+=word+" "
})
// console.log(Sentence); Hello, My name is Vishal.words.join("")
// console.log(words.join(" "));


// Concatenate two strings
let string1 = "Hello "
let string2 = "world"
// console.log(string1.concat(string2));//Hello world

// Check if a string starts with a specific word

// startsWith(searchString)
// startsWith(searchString, position)

let demoString = 'today is a work day'
// console.log(demoString.startsWith('to'));//true
// console.log(demoString.startsWith('day',2));//true

// Check if a string ends with a specific word
// console.log(demoString.endsWith('day'));//true
// console.log(demoString.endsWith('work',15));//true

// Find the first word in a sentence
let len = demoString.indexOf(' ');
let ans = demoString.substring(0,len);
// console.log(ans);//today

// Reverse a string

function reverseString(str){
    let revStr = ''
    for(let i=str.length-1;i>=0;i--){
        revStr+=str.charAt(i);
    }
    return revStr;
}

console.log(reverseString("hello"));

// Replace "JavaScript" with "JS" in a sentence
let msg = 'JavaScript is programming language that used to developed web applications'
// console.log(msg.replace('JavaScript','JS'));

