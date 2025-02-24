// let, const, var | hoisting | Data Types

// - let and const are introduced in ES6

// var is used to declare variables with goble scope 
// var can be redeclare and updated 
// syntax 
// var varName = value;

// hoisted but intialized as undefined
    // console.log(x); // undefined
    // var x = 10;
    // console.log(x); // 10
// accesible outside a if, for and while 
    // if (true) {
    //     var y = 20; 
    // }
    // console.log(y); //20 not blocked scope

    // function test() {
    //     var z = 30;
    // }
    // console.log(z); // error becuase of function scoped(z is not defined)


// let is used to declare variables with block scope
// let cannot be redeclare but updated within a block scope
// Hoisted but not initialized
// syntax 
// let varName = value;
// let myName = 'vishal';
// console.log(myName);

    // console.log(a); // ReferenceError: Cannot access 'a' before initialization
    // let a = 5;
    // a = 15; // updatation allowed
    // console.log(a); // 15

    // if (true) {
    //     let b = 10;
    // }
    // console.log(b); // error b is not defined (blocked scope)(if,while, for)


    // const has blocked scope like let 
    // const is immutable means once we intialized it will not change 
    // it works only for primitive values, objects or array declare with const can be modified

    // const PI = 3.14;
    // PI = 3.1415; // Error: Assignment to constant variable

    // const student = { name: 'vishal'};
    // console.log(student)
    // student.name='rahul';
    // console.log(student)


    // Hoisting is JavaScript's default behavior of moving variable and function declarations
    //  to the top of their scope before executing the code.

    // functions declare with function keyword are fully hoisted.
    // we can call them before declaration   

    // functions declarations are hoisted
        // getData();
        // function getData(){
        //     console.log('getting data...');
        // }

    // function expression is not hoisted
    // functions assigned to let , var, and const are not hoisted
        // hello(); // TypeError: hello is not a function
        // var hello = function() {
        //     console.log("Hello..");
        // };


    // Data types 
    // two types 
    //     1.primitive data types
    //     2.Non-primitive data types
    
    // 1.primitive data types
    // - Number 
    // store Integer and floating point values 
        // let num=10;
        // let num2=22.2;

    // - String 
    // store sequence of charaters
    // we can use ('',"",``) to enclosed text
        // let name='vishal';
        // let lastName= "Nimbalkar";
        // let msg = "my 'name' is "+name;
        
        // console.log(msg)
    // - Boolean
    // it has only two values true or false
    // let isVisited=true;

    // -undefined
    // a variable is declared but not assigned value
    // let a;

    // -null
    // it show a absence of value 
    // let x=null;

    // -BigInt
    // for large numbers greater than Number.MAX_VALUE

    // - Symbol 
    // it is primitive type that creats unique and immutable identifier
    //     let sym1 = Symbol(); // Symbol with no description
    //     let sym2 = Symbol("id"); // Symbol with description
    //     let sym3 = Symbol("id"); // Different Symbol, even with the same description
        
    //     console.log(sym1 === sym2); // false
    //     console.log(sym2 === sym3); // false
    
