// // 1. break
// it is use to exit from loop 

    // for (let index = 0; index < 5; index++) {
    //     if(index===3){
    //         break;
    //     }
    //     console.log(index)
    // }

// // 2. continue
// it is use to skip a current iteration of loop

    // for (let index = 0; index < 5; index++) {
    //     if(index===3){
    //         continue;
    //     }
    //     console.log(index)
    // }


// 3. function scope
let a;
a = 29;
let result = function getData(){
    let data = 'data'
    console.log(data)
}
console.log(result());// when function return type is void it returns 'undefined'


console.log(undefined == null);// true bcz- both are loosely equal in js
console.log(undefined === null);// false bcz- data types are different 

// console.log(data)

// lexical scope

function outer(){
    let myName = "vishal"
    // console.log(a);
    function inner(){
        let a=10;
        console.log(myName);
    }
    inner()
}
// outer()



//    *
//   * *
//  * * *
// * * * *
    // let n=4;
    // for(let i=1;i<=4;i++){
    //     let stars=""
    //     // let spaces=""
    //     for(let k=1;k<=n-i;k++){
    //         stars+=" "
    //     }
    //     for(let j=1;j<=i;j++){
    //         stars+="* "
    //     }
    //     console.log(stars)
    // }

// * * * *
//  * * *
//   * *
//    *
// let n=4;
// for(let i=n;i>=1;i--){
//     let stars=""
//     for(let k=1;k<=n-i;k++){
//         stars+="  "
//     }
//     for(let j=i;j>0;j--){
//         stars+="* "
//     }
//     console.log(stars)
// }

//   *
//  * *
// * * *
//* * * * 
// * * *
//  * *
//   *

// let n=4;
// for(let i=1;i<=n;i++){
//     let stars=""
//     for(let k=1;k<=n-i;k++){
//         stars+=" "
//     }
//     for(let j=1;j<=i;j++){
//         stars+="* "
//     }
//     console.log(stars)
 
// }
// for(let i=n-1;i>0;i--){
//     let stars=""
//     for(let j=1;j<=n-i;j++){
//         stars+=" "
//     }
//     for(let k=1;k<=i;k++){
//         stars+="* "
//     }
//     console.log(stars)
// }