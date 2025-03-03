// Template literals
// -template literals is literals enclosed with backtick (`)
// - we can create multi-line String, string interpolation and also use expression inside string
// - we can use ${} this syntax to add variables inside string 
let firstName = 'vishal'
let lastName = 'Nimbalkar'
// let greeting  = `Hello, everyone my name is ${fname} ${lname}`
// console.log(greeting)

// we can use backtick(`), dollar($), and {} inside string using backslash(\)
let msg = `we can use \`, \$, and \{\} using backslash \\`
// console.log(msg)

// adding expression 
let num1 = 10;
let num2 = 29;
console.log(`${num1} + ${num2} = ${num1+num2}`);

// string comparision
// 1. strict equal(===) and loose equal(==)
let str1 = "hello";
let str2 = "Hello";
// console.log(str1 === str2); // true

let str3 = new String("hello");
let str4 = new String("hello");

// console.log(typeof str2);
// console.log(typeof str3);

// console.log(str1 == str3); //false
// console.log(str1 === str3); //false

// console.log(str4 == str3); //false

// // 2.localCompare()
// console.log("apple".localeCompare("appla")); // -1 - first string come before second
// console.log("banana".localeCompare("apple")); // 1 - first string come after a second
// console.log("apple".localeCompare("apple")); // 0 - both are equal

// console.log("apple".localeCompare("Apple")); // -1 - bcz ascii value of 'a' is 97 and 'A'= 65
// console.log("apple".localeCompare("Apple",'en',{sensitivity : 'base'})); // 0 -  sensitivity : 'base' ignore case 


// string concatenation
// 1. + operator

// if operand is string it will converted into string 
console.log([]+""); // [] array is converted into empty string "" due to type coercion
// console.log("" == false) // "" is always false
// [] is always true 
// "" is always false
// {} is always true

// console.log("hii"+true);//hiitrue
let res =[]+{};
console.log(typeof  res);

console.log([]+{});"[object object]"
console.log([]+[]);
console.log({}+{});

// 2. concat(str1,str2...,strN)
// it concatenate multiple strings and return new string 
let myName = 'vishal ';
console.log(myName.concat("Laxman ",lastName))
// 3. template litrals
// no need for + operator 

// 4. += Operater 
let result = "";
for (let i = 0; i < 5; i++) {
    result += "data "; 
}
// console.log(result)

// 5. join() with arrays
let words = ["JavaScript", "is", "programmin", "language"];
let sentence = words.join(" ");
console.log(sentence); 
let name = [firstName, lastName];
console.log(name.join(" "));

// isNaN("fjf")
// Number.isNaN()

console.log(Number('hello'));
console.log(Number.isNaN(NaN));

