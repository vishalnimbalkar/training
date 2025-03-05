
const user = {
    id : 233,
    name : 'vishal',
    email : 'vishal@gmail.com',
    isLoggedIn : true
    // [secreatKey] : 1324
}
// hasOwnProperty
// console.log(user.hasOwnProperty('name'));
// console.log(user.hasOwnProperty('gender'));
// console.log(user.hasOwnProperty(secreatKey));
// console.log(user.hasOwnProperty('toString'));

// hasOwnProperty will return true for direct properties only.
// in operator will return true for direct and inherited properties
// console.log('name' in user);
// console.log('name ' in user);
// console.log('toString' in user);
// console.log('hasOwnProperty' in user);
const example = {
    hasOwnProperty : ()=>{
        return false
    },
    name : 'vishal'
}
// console.log(example.hasOwnProperty('name'));//false
// console.log(Object.hasOwn(example,'name'));//true

// Object.keys() 
// console.log(Object.keys(example));

// Object.values()
// console.log(Object.values(example));
let result = Object.values(example);
// console.log(result[0]());

// Object.assign()
// - it copies all values from source object to target objects and if source object has nested objects then it will copy a reference of those objects 
const obj1 = { a : 1, b : 2 }
const obj2 = { c : 3, d : 4 }
const obj3 = Object.assign(obj1,obj2);
// in above case obj1 is target object so obj2 is mereged into obj1 and then obj1 reference is return to obj3 
// console.log(obj3)
// console.log(obj1)
// console.log(obj1 === obj3);

const obj4 = Object.assign({},obj1,obj2);
// in this case we mention one empty target object so obj1 and obj2 are mereged into target object and target is return.
// console.log(obj1)
// console.log(obj4)
// console.log(obj1 === obj4);

const object1 = { a : 1, b : 2,c : {d : 4} }
const object2 = Object.assign({},object1);
// console.log(object2);//{ a : 1, b : 2,c : {d : 4} }

object1.a=11;
// console.log(object1);//{ a : 11, b : 2,c : {d : 4} }
// console.log(object2);//{ a : 1, b : 2,c : {d : 4} }

object1.c.d=44;
// console.log(object1);//{ a: 11, b: 2, c: { d: 44 } }
// console.log(object2);//{ a: 1, b: 2, c: { d: 44 } }

const o1 = {a:1,b:2,c:3}
const o2 = {b:2,}
const o3 = {b:3,c:33}
const o4 = {b:null,c:undefined}
console.log(Object.assign(o1,o2,o3,o4));//{ a: 1, b: 3, c: 33 }
// console.log(Object.assign(o1,o2,o3,o4,null));//{ a: 1, b: 3, c: 33 }
// console.log(Object.assign(o1,o2,o3,o4,undefined));//{ a: 1, b: 3, c: 33 }
// console.log(Object.assign(o1,o2,o3,o4,[12,32,"vishal"]));
//{ '0': 12, '1': 32, '2': 'vishal', a: 1, b: null, c: undefined }

//it will ignore null, "", [] and undefined
// console.log(Object.assign(o1,null,undefined,'',[],{}));//{ a: 1, b: 2, c: 3 }

// for in loop
for(let key in user){
    // console.log(user[key]);
}
// - for in loop iterates objects by keys 
// - we can't use dot notation to access properties instead use [] ex.,user[key]
// -Note: for...in loops over the keys of an object, not the values.
// Dot notation expects a literal property name, not a variable.
// user.key tries to access a property named "key", but the object does not have 'key', so it returns undefined.
// -Bracket notation allows dynamic property access because key holds different values during each loop iteration.

 