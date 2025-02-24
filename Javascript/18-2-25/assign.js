// 1). Create variables of different data types:
// I - Declare variables for String, Number, Boolean, Null, Undefined, Object, and Array.
// II - Use console.log(typeof variableName); to check their types. [observe their behaviour with reason.]
// let age=23;
// let name="vishal";
// let isLoggedIn=true;
// let obj1=null;
// let sirname;
// let student = {name:'rahul', age:23};
// let rollNos = [2,3,5,5];

// console.log(typeof age);//number
// console.log(typeof name);//string
// console.log(typeof isLoggedIn);//boolean
// console.log(typeof obj1);//object
// console.log(typeof sirname);//undefined
// console.log(typeof student);//object
// console.log(typeof rollNos);//object
 
 
// // 2).
// let name1 = "Vishal";
// let name2 = name1; 
// name2 = "Suraj";
// console.log(name1); 
// console.log(name2);
// //primitive type
// //copy by value
// // store in stack memory
 
// let obj1 = { name: "Vishal" };
// let obj2 = obj1; 
// obj2.name = "Suraj";
// console.log(obj1.name);
// console.log(obj2.name);
// // reference data types
// // copy by reference
// // store in heap memory

// let object1 = { name: "Vishal" };
// let object2 = { ...object1 }; // shallow copy
// object2.name = "Suraj";

// console.log(object1.name); // Vishal
// console.log(object2.name); // Suraj

 
// Run both the above code, and check differnces between them and prepare with reason.? 
 
// // 3. Type coercion
// console.log("5" + 3);//53(3 is converted in to string and + concate 5 and 3)
// console.log("5" - 3);//2 ("5" is converted in to number)
// console.log(10 + " apples");//10 apples
// console.log("10" * "2");//20 ("2" is converted in to number)
// console.log("5" / 3); // 1.6667 (String converted to number)
// console.log("5" % 3); // 2 (String converted to number)
// console.log("5" ** 3); // 125 (String converted to number)
// // all operators (-,*,%,/,**) converts the string into number
// // only + converts number into string

// console.log(null - 3); // -3(null is converted to 0)
// console.log(true - 1); // 0 (true is converted into 1)
// console.log(false + 2); // 2 (false is converted into 0)
// console.log(true + false);// 1(it converts +false to 0 and then true + 0 = 1 + 0 = 1)
 
// do try above code and do prepare with output and valid reason behind it. (Try more combinations like this.)

// 4. Predict the output
// console.log(10 + "10");  //1010
// console.log(10 - "5"); //5
// console.log(10 / "2"); //5
// console.log("10" - "5" + 2);// 7 ("10" and "5" are converted into number)
// console.log("5" + 3 + 2+true);  //532true
// console.log(true +false -"1");  //0
// console.log(null + 5);  //5
// console.log(undefined + 3);//NaN (undefined is converted into NaN)

// function myFunction(){

// }
// console.log(typeof myFunction);//function