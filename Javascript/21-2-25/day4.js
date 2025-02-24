let prompt = require('prompt-sync')();
// Nested if else
/**
 * based on age describe age category 
 * @param {number} age - age parameter
 */
function describeAge(age){

    if(age>=18){
        if(age>100){
            console.log("Enter a valid age");
        }else if(age>=60 && age <=100){
            console.log("older")
        }else{
            console.log("Young")
        }
        
    }else if(age<18 && age>12){
        console.log("teenager");
    }else{
        console.log("child");
    }
}

// let age = Number(prompt("Enter the Age : "));
// describeAge(age);

// switch case 
// let expression=1;
// switch(expression){
//     case 1:
//         console.log("1");
//     case 2:
//         console.log('2');
//         // break;
//     default:
//         console.log("invalid");
// }

// fall through issue 
 

// while 
// it will iterate until condition is true 
// let i=0;
// while(i<7){
//     console.log(++i);
// }
// syntax
// while(condition){
//     // statements
// }


// do while 
// it will execute first iteration even if condition is false
// syntax 
    // do{
    //     //statements
    // }while(condition);
// let i=0;
//     do{
//         console.log(i++);
//     }while(i<4);

// //  for loop 
// for(let i=0;i<4;i++){
//     console.log(i);
//     if(i==1){
//         break;
//     }
// }

//  ternary operator 
// syntax => condition ? ifTrue : ifFalse;

/**
 * it give a discount based on price
 * @param {number} price 
 * @returns applied discount
 */
function getDiscount(price){
    // return price>500 ? 100 : price ===null;
}

console.log(getDiscount(null));

// conditional chains