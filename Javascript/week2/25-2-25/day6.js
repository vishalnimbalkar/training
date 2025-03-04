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

function outer(){
    let a = 10;
    function inner(){
        console.log(a)
        a++;
    }
    return inner;
}

let ans1 = outer()
let ans2 = outer()
// console.log(ans1)

// ans1()
// ans1()
// console.log();
// ans2()
// ans2()

function createCounter(){
    let count =0;
    return {
        increment : function(){
            count++;
            console.log(count);
            
        },
        decrement : function(){
            count--;
            console.log(count);
            
        }
    }
}

let counter = createCounter()
// counter.increment();
// counter.increment();
// counter.decrement();
