// hoisting

// function declarations are fully hoisted
getData();//accessing function before declaration
// console.log(getData())
function getData(){
    console.log("getting data...")
    // return 12,11;
}

// function expressions are not hoisted

// result();

let result = function setData(){
    console.log("setting data...")
}

// function closures

function outer(num){
    // let num=10;
    function show(a){
        console.log(num+a);
    }
    return show;
}
let output = outer(10);
output(12)
let output2 = outer(20);
output2(22)
