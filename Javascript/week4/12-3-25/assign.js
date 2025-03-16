// 1.Convert "42" and "42.5" into numbers using Number(), parseInt(), and parseFloat().
// console.log(Number("42"));//42
// console.log(Number("42.5"));//42.5
// console.log(parseInt("42"));//42
// console.log(parseInt("42.5"));//42
// console.log(parseFloat("42"));//42
// console.log(parseFloat("42.5"));//42.5

// 2.Generate a random integer between 1 and 100.
// console.log(Math.ceil(Math.random()*100));

// 3.Round 4.7 using Math.round(), Math.ceil(), and Math.floor().
// console.log(Math.round(4.7));//5
// console.log(Math.ceil(4.7));//5
// console.log(Math.floor(4.7));//4

// 4.Find the square root and cube root of 64.
// console.log(Math.sqrt(64)); //8
// console.log(Math.cbrt(64)); //4

// 5.Write a program to display the current date and time in "YYYY-MM-DD HH:MM:SS" format.
let currDate = new Date();
let formatedDate2 = currDate.toLocaleString('en-IN')
console.log(formatedDate2);//13/3/2025, 10:56:48 am
let formattedDate = currDate.toLocaleString('en-IN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // 24-hour format
}).replaceAll('/','-').replace(',','');
console.log(formattedDate);

// 6.Convert 123.456789 to a number with 2 decimal places.
let number = 123.456789;
let roundNum = Number(number.toFixed(2));
// console.log(roundNum);

// 7.Find the number of days between January 1, 2024 and March 10, 2024.
let dateStr1 = "1 January 2024";
let dateStr2 = "10 March 2024";
let newDate1 = new Date(dateStr1);
let newDate2 = new Date(dateStr2);
let difference = newDate2-newDate1;
let days = difference / (1000 * 60 * 60 * 24);
// console.log(days); //69

// 8.Write a function that generates a random number between two given numbers.
function generatesRandomNumber(num1, num2){
    return Math.floor(Math.random()*(num2 - num1 + 1))+num1;
}
// console.log(generatesRandomNumber(10,20));
// console.log(generatesRandomNumber(1,100));

// 9.Convert "15th August 2023" to "2023-08-15" format.
let date = "15th August 2023";
let dateArr = date.split(' ');
dateArr[0] = Number.parseInt(dateArr[0]);
// console.log(dateArr);
const months = {
    January: '01', February: '02', March: '03', April: '04',
    May: '05', June: '06', July: '07', August: '08',
    September: '09', October: '10', November: '11', December: '12'
};
const formatedDate = dateArr.map((value)=>{
    let month = ''
    for(let key in months){
        if(value === key){
            return months[key];
        }
    }
    return value;
})
// console.log(formatedDate.reverse().join("-"));

let dateStr = dateArr.join(" ");
let newDate = new Date(dateStr);
// console.log(`${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`);

// 10.Write a function to check if a number is an integer without using Number.isInteger().
function checkInteger(num){
    return num%1==0;
}
// console.log(checkInteger(5));   
// console.log(checkInteger(5.5));    
// console.log(checkInteger(-3));    
// console.log(checkInteger(0));      
// console.log(checkInteger('5'));

// 11.Write a function to find the date of the next Friday from today.
let current = new Date();
let day = current.getDay();
let daysUntilFri = (5 - day + 7) % 7 || 7;
current.setDate(current.getDate()+daysUntilFri);
console.log(current.toDateString());


// 12.Write a function to generate a random hex color (e.g., #00012f).
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`;
}
console.log(getRandomHexColor());
// Explanation
// Math.random() → Generates a random number between 0 and 1.
// Math.floor() → Ensures the value is an integer.
// 0xFFFFFF → The maximum value for a 6-digit hex color (16777215 in decimal).
// .toString(16) → Converts the number to a hexadecimal string.
// .padStart(6, '0') → Ensures the color code is always 6 characters long (e.g., #00ff00).

// 0x - denotes its hexadecimal value in js 
// Math.random() * 0xFFFFFF generates a random number between 0 and 16777215.

// console.log(Number.isNaN());
// console.log(isNaN());
