// 1.Use template literals to create a sentence
// Write a function greet(name, age) that returns a sentence like "Hello, my name is John and I am 25 years old." using template literals.
function greet(name, age) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}
// console.log(greet("vishal",24));

// 2.Compare two strings (case-sensitive)
// Write a function compareStrings(str1, str2) that returns true if the strings are exactly the same, otherwise false
function compareStrings(str1, str2) {
  if (str1.localeCompare(str2) === 0) {
    return true;
  }
  return false;
}
let str1 = "vishal";
let str2 = "Vishal";
let str3 = new String("vishal");
let str4 = "rahul";
let str5 = `rahul`;
// console.log(compareStrings(str1,str2));
// console.log(compareStrings(str1,str3));
// console.log(compareStrings(str1,str4));
// console.log(compareStrings(str5,str4));

// 3.Concatenate two strings using + and .concat()
// Write a function concatenateStrings(str1, str2) that returns a concatenated string using both + and .concat().
function concatenateStrings(str1, str2) {
  console.log(str1 + " " + str2);
  console.log(str1.concat(" ", str2));
}
// concatenateStrings('Hello','World')
// concatenateStrings('vishal','nimbalkar')

// 4.Check if one string contains another using includes()
// Write a function containsSubstring(str, subStr) that returns true if str contains subStr.
function containsSubstring(str, subStr) {
  if (str.length < subStr.length) return false;
  if (str.includes(subStr)) {
    return true;
  }
  return false;
}
// console.log(containsSubstring("Hello, world",'world'));
// console.log(containsSubstring("Hello, world",'Hello, world'));
// console.log(containsSubstring("Hello, world",'worlds'));
// console.log(containsSubstring("Hello, world",'Hello, words'));

// 5.Find the longest word in a sentence
// Write a function findLongestWord(sentence) that returns the longest word in a given sentence.
function findLongestWord(sentence) {
  let words = sentence.split(" ");
  longestWord = ""; // global variable
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}
// console.log(findLongestWord("hello, my name is vishal."))

// 6.Compare two strings (case-insensitive)
// Write a function compareIgnoreCase(str1, str2) that returns true if str1 and str2 are the same regardless of case.
function compareIgnoreCase(str1, str2) {
  if (str1.length !== str2.length) return false;
  return str1.toLowerCase() === str2.toLowerCase();
}
// console.log(compareIgnoreCase('vishal','Vishal'));
//console.log(compareIgnoreCase('vishal','vishal'));

// 7.Check if two strings are anagrams (basic version)
// Write a function isAnagram(str1, str2) that returns true if str1 and str2 are anagrams (contain the same letters in any order).
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    if (!str1.includes(str2[i])) {
      return false;
    }
  }
  return true;
  // return str1.split('').sort().join('')===str2.split('').sort().join('');
}
// console.log(isAnagram('vishal','visale'));
// console.log(isAnagram('vishal','halvis'));

// 8.Find all words of a given length in a sentence
// Write a function findWordsOfLength(sentence, length) that returns an array of words that have exactly length characters.
function findWordsOfLength(sentence, length) {
  let words = sentence.split(" ");
  let result = words.filter((word) => {
    return word.length === length;
  });
  return result;
}
// console.log(findWordsOfLength("Hello everyone today is a holiday",5))

// 9.Find the longest word and its length in a sentence
// Write a function longestWordInfo(sentence) that returns an object { word: "longestWord", length: wordLength }.
function longestWordInfo(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return { word: longestWord, length: longestWord.length };
}
// console.log(longestWordInfo("Hello everyone today is a holiday"));

// 10.Check if two sentences are anagrams (ignore spaces and case)
// Write a function isSentenceAnagram(str1, str2) that returns true if both sentences are anagrams when spaces and case are ignored.
function isSentenceAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s/g, "");
  str2 = str2.toLowerCase().replace(/\s/g, "");
  if (str1.length !== str2.length) return false;
  char1 = str1.split("").sort().join("");
  char2 = str2.split("").sort().join("");
  return char1 === char2;
}
// console.log(isSentenceAnagram("hello my name is vishal", "hello my name is vishax"));
// console.log(isSentenceAnagram("hello my name is vishal", "hello my name is vishal    "));
// console.log(isSentenceAnagram("vishal", "lshavi"));

// 11.Count occurrences of each character in a string
// Write a function charFrequency(str) that returns an object mapping each character to its count.
function charFrequency(str) {
  return str.split("").reduce((acc, curr) => {
    acc[curr] = acc[curr] || 0 ? acc[curr] + 1 : 1;
    return acc;
  }, {});
}
// console.log(charFrequency("apple"));

// 12.Find and replace the longest word in a sentence with another word
// Write a function replaceLongestWord(sentence, newWord) that replaces the longest word in sentence with newWord.
function replaceLongestWord(sentence, newWord) {
  let words = sentence.split(" ");
  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return sentence.replace(longestWord, newWord);
}
// console.log(replaceLongestWord("Hello everyone today is a holiday","vishal"));


//1. Create a Student Object
// Create an object for a student with properties: name, age, and marks.
// Access and modify the marks.
const Student = {
  name : 'vishal',
  age : 24,
  marks : 98
}

// console.log("Student Name : "+Student.name)
// console.log("Student Age : "+Student['age'])

Student.marks=99;
// console.log(Student)

// 2.Add and Delete Properties
// Create an object for a car with properties: brand, model, year.
// Add a new property color.
// Delete the year property.
const car = {
  brand : 'suzuki',
  model : 'swift',
  year : 2014
}
// adding new property color 
car.color = 'white'
// deleting year property 
delete car.year
// console.log(car);

// 3.Check if a Property Exists
// Create an object for an employee with properties name, department, and salary.
// Check if bonus exists in the object.
const employee = {
  name : 'vishal',
  department : 'IT',
  salary : 12000
}
// console.log(employee.hasOwnProperty('bonus'));//false

// 4.Loop through Object Properties
// Create an object book with title, author, and year.
// Use a for...in loop to print all properties.
const book = {
  title : 'javacript',
  author : 'Brenden Eich',
  year : 1995
}
for(let key in book){
  // console.log(key +" : "+book[key])
}
// 5.Copy an Object Using Object.assign()
// Create an object person with name and age.
// Create a copy using Object.assign() and modify the copied object.
const Person = {
  name : 'sanket',
  age : 22
}
let personCopy = Object.assign({},Person)
// console.log(Person);
// console.log(personCopy);
// console.log(Person === personCopy);


// 6.Nested Objects
// Create an object company with name and a nested object address containing city and state.
// Access city.
const company = {
  name : 'google',
  address : {
    city : 'pune',
    state : 'maharashtra'
  }
}
const city = company.address.city;
// console.log(city);

// 7.Convert Object to Array (Keys & Values)
// Create an object phone with properties brand, model, price.
// Convert keys and values to arrays using Object.keys() and Object.values().
const phone = {
  brand : 'poco',
  model : 'M6 Pro 5G',
  price : 13000
}
let keys = Object.keys(phone);
let values = Object.values(phone);
// console.log(keys);
// console.log(values);

//8. Merge Two Objects
// Merge two objects user1 and user2 using the spread operator.
const mergedObject = {...Student,...car}
// console.log(mergedObject);

//9. Object Factory Function
// Write a function createPerson(name, age, city) that returns an object with these properties.
function createPerson(name, age, city){
  return {
    'name' : name,
    'age' : age,
    'city' : city
  }
}
const person = createPerson('vishal', 22, 'Pune')
// console.log(person);

// 10.Find the Property with the Highest Value
// Create an object scores with student names as keys and marks as values.
// Find the student with the highest marks.
const scores = {
  'rahul' : 78,
  'vishal' : 98,
  'ganesh' : 87
}

let max = 0
for(let key in scores){
  if(scores[key] > max){
    max = scores[key]
  }
}
// console.log(max);
