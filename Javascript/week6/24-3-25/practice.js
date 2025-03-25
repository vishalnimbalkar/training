// let str = "vishal Nimbalkar"
// let newStr =str[0].toUpperCase()+str.slice(1);
// // console.log(newStr);
// console.log(str.slice(0,-2));
// // console.log(str.substring(0,str.length-2));

function reverseStr(str) {
  //     let revStr = ''
  //    for(let i=str.length-1;i>=0;i--){
  //     revStr+=str[i];
  //    }
  //    return revStr;
  return str.split("").reverse().join("");
}

// console.log(reverseStr(str));

// let strArr = str.split(" ");
// let newStr2 = ''
// for(let str of strArr){
//     newStr2 += reverseStr(str)+" "
// }

// // console.log(newStr2);

function isPailendrom(str) {
  //     let start = 0;
  //     let end = str.length-1;
  //     while(start < end ){
  //         if(str[start] !== str[end]){
  //             return false;
  //         }
  //         start++;
  //         end--;
  //     }
  //     return true;
  let reversed = str.split("").reverse().join("");
  if (str == reversed) return true;
  else return false;
}

// console.log(isPailendrom('vishal'));
// console.log(isPailendrom('nitin'));

let str = "leetcode"; //[{'l':1},'t','c','o','d']
// console.log(str.split(""));

function findUnique(str) {
  return str
    .split("")
    .filter((char, ind, arr) => arr.indexOf(char) === arr.lastIndexOf(char));
}
// console.log(findUnique(str));

function replaceVowels(str){
    let vowels = 'aeiouAEIOU';
    return str.split("").map((char)=>{
        if(vowels.includes(char)){
            return '*'
        }else {
            return char;
        }
    }).join('')
}

// console.log(replaceVowels(str));

function countFreq(str){
    let res = str.split("").reduce((acc,char)=>{
        acc[char] = (acc[char] || 0) +1;
        return acc;
    },[])
    return Object.keys(res).map((obj)=>({[obj] : res[obj]}))
}
// [{'l':1}]
console.log(countFreq(str));

let number = 'a2b5c1023';
function sumOfNumber(str){
    // let num = str.replace('/\D/g',"");
    // let nums = str.split("").reduce((acc,num)=>Number(num)? acc+Number(num) :acc,0)
    let nums = str.match(/\d/g).reduce((acc,num)=>Number(num)? acc+Number(num) :acc,0)
    console.log(nums);
    
}
console.log(sumOfNumber(number));
// Number() revised
let num1 ='1.2ghgh';

// console.log(+"123"+" "+Number("123"));

// if(0.5) console.log('0');
// if(42) console.log('42');

// 2.123222


let arr = [1,2,3,4,5]
// arr.length = 5
// arr.fill(1);
// console.log(arr);

// can we  use map() as filter and filter as map()
console.log(arr.map((ele)=>ele%2==0));

// write a program that contains all methods 

const removeVowels = (str) => str.replace(/[aeiouAEIOU]/g, '*');

console.log(removeVowels("Hello World")); // Output: "Hll Wrld"
