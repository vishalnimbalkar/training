
    // Assignement
// Swap Two Variables Without Using a Third Variable
function swap1(num1, num2){
    num1=num1+num2; //30
    num2=num1-num2;//30-20=10
    num1=num1-num2;//30-10=20
    console.log(num1+" "+num2);
}
swap1(10,20);

const swapNUm=(a,b)=>{
    a=a+b;
    b=a-b;
    a=a-b;
    return {a,b};
}
console.log(swapNUm(1,3))

// Swap Two Variables Using a Third Variable
// function swap1(a,b){
//     let temp=a;
//     a=b;
//     b=temp;
//     console.log(a+" "+b);
// }
// swap1(22,33);

// Calculate area of rectangle
function area(length,width){
    return length*width;
}

const area2 = (length, width)=>{
    return length*width;
}

// console.log(area(2,3));
// console.log(area2(2,3));


// swap two variables without using third variable (XOR)
    function swap(a,b){
        a=a^b;
        b=a^b;
        a=a^b;
        console.log(a+" "+b);
    }
    swap(2,3);

// array distructuring
function swap(a,b){
    [a,b]=[b,a];
    console.log(a+" "+b);
}
// swap(33,44);