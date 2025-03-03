// when to use switch and if else

// conditional chaining
function getDiscount(price){
    return price>500 ? 100 : price ===null || price ===undefined? 0 : 50;
}

// console.log(getDiscount(undefined));

// 1.Create a JavaScript program that:
// Takes a number as input from the user.
// Checks if the number is odd or even using:
// if-else
// ternary operator
// switch-case
// Displays the result in the console

/**
 * take number and check number is even or odd
 */
 const prompt = require('prompt-sync')();
function checkEvenOdd(){
    let inputNumber = Number(prompt("Enter a number : "));
    console.log('Using if-else')
    if(inputNumber%2==0){
        console.log(`${inputNumber} is a Even`)
    }else{
        console.log(`${inputNumber} is a Odd`)
    }

    console.log('Using Ternary Operator')
    inputNumber % 2 == 0 ? console.log(`${inputNumber} is a Even`) : console.log(`${inputNumber} is a Odd`);

    console.log('Using Switch-case')
    switch(inputNumber%2){
        case 0:
            console.log(`${inputNumber} is a Even`)
            break;
        case 1:
            console.log(`${inputNumber} is a Odd`)
            break;
        case -1:
            console.log(`${inputNumber} is a Odd`)
            break;
        default:
            console.log("default")
    }

}

// checkEvenOdd()

// 2.Write a JavaScript program that:
// Takes marks (0-100) as input from the user.
// Uses if-else and switch-case to assign grades:
// 90-100 → Grade A
// 80-89 → Grade B
// 70-79 → Grade C
// 60-69 → Grade D
// Below 60 → Grade F
// Uses a for loop to display grades for 5 different marks entered by the user.
// Displays the results in the console.
 
// 3.Modify the grade assignment program 
// to take input for multiple students and store the results in an array.
// Display the average marks of all students at the end.
/**
 * take mark and return grade
 * @param {number} mark 
 * @returns returns grade based on mark
 */
function getGrade(mark){
    if(mark>=90){
        return 'A';
    }else if(mark>=80){
        return 'B';
    }else if(mark>=70){
        return 'C';
    }else if(mark>=60){
        return 'D';
    }else{
        return 'F';
    }
}

/**
 * method accepts multiple students marks and print grade and average of all marks 
 */
function getResult(){
    let i=1;
    let marks = []
    let numberOfStudents= Number(prompt("Enter Number Of Students : "))
    console.log(`Enter ${numberOfStudents} Students Marks....`)
    while(i<=numberOfStudents){
        let mark = Number(prompt(`Enter Student ${i} Marks : `))
        if(mark>100 || mark < 0){
            console.log("Please enter marks between 0-100....");
            continue;
        }
        marks.push(mark);
        i++;
    }
    let sumOfMarks=0;
    for(let i=0;i<marks.length;i++){
        sumOfMarks+=marks[i];
        let grade=getGrade(marks[i]);
        console.log(`Student ${i+1} gets ${marks[i]} mark and ${grade} Grade`);
    }
    console.log(`Average Of All students marks is ${sumOfMarks/marks.length}`)
}
// getResult();


