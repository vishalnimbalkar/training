// 1. Multiplication Table Generator
// Instructions:
// Ask the user for a number (n) and generate its multiplication table up to 10 using a for loop.
// If the user enters 0 or a negative number, display an error message and continue asking for a valid input.
// Allow the user to generate multiple tables until they enter -1 to exit the program.
const prompt = require("prompt-sync")();

/**
 * take number from user and generate multipication table for it until user enter -1
 */
function generateMultiplicationTable() {
    let num;
  do {
    do {
      num = Number(prompt("Enter a Number : "));
      if (num <= -2 || num === 0) {
        console.log("Please enter valid number");
      }
    } while (num <= -2 || num === 0);
   
    if(num=== -1){
        break;
    }
    for(let i=1;i<11;i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
    console.log("------------------------------------")
  } while (num!=-1);
}

// generateMultiplicationTable();

// 2. Vowel and Consonant Counter
// Instructions:
// Ask the user for a word or sentence.
// Use a for loop to iterate through each letter.
// Use a switch-case or if-else statement to check whether the letter is a vowel (a, e, i, o, u) or a consonant.
// Count and display the total number of vowels and consonants.
// Ignore spaces and special characters using continue.

/**
 * countes number of vowels and consonants from word or sentence
 */
function counter(){
    let userIntput = prompt("Enter a word or sentence : ")
    let vowelsCounter = 0 ;
    let consonantCounter = 0;
    userIntput = userIntput.toLowerCase()

    for (let i = 0; i < userIntput.length; i++) {
        let ch = userIntput[i];
        if(ch=='a' || ch=='i' || ch=='e' || ch=='o' || ch=='u'){
            vowelsCounter++;
        }else if(ch > 'a' && ch < 'z'){
            consonantCounter++;
        }
    }
    console.log(`Total Number of Vowels are ${vowelsCounter} and Consonent are ${consonantCounter}`)
}

counter()