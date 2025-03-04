
// Match digits in a string
let digitString = 'My mobile number is 7744855070 and my id is 53';
let result = digitString.match(/\d+/g);
// console.log(result);

// Find the position of "apple" in a sentence
let sentence = 'My favotire fruit is a appleeeeee';
console.log(sentence.search('apple'));

// Find the most frequent character in a string
function mostFrequent(str){
    // let char = str[0];
    let mostFrequentChar = str[0]
    let len = str.length;
    let maxCount = 0;
    for(let i=0;i<len;i++){
        let count = 0;
        let char = str[i]
        let index = str.indexOf(char);
        while(index!== -1){
            count++;
            index=str.indexOf(char,index+1)
        }
        if(count > maxCount){
            maxCount = count;
            mostFrequentChar = char;
        }
    }
    return mostFrequentChar;
}

// console.log(mostFrequent(sentence))

// Extract domain name from an email string
let email = 'vishalnimbalkar78@gmail.com'
function getDomainName(email){
    let domain = ''
    let start = email.search('@');
    for(let i=start+1;i<email.length;i++){
        if(email.charAt(i)=== '.') break;
       domain +=email.charAt(i);
    }
    return domain;
}
console.log(getDomainName(email));

console.log(email.split('@')[1].split('.')[0]);

// Sort words in a sentence alphabetically
function sortSentence(str){
    let words = str.split(' ');
    console.log(words);
    for(let j=0;j<words.length;j++){
        for(let i=0;i<words.length-1;i++){
            if((words[i].localeCompare(words[i+1]))>0){
                let temp = words[i];
                words[i] = words[i+1]
                words[i+1] = temp
            }
        }
    }
    return words;
}

console.log(sortSentence(sentence));

// Format a string into title case (capitalize first letter of each word)

let words = sentence.split(' ');
let titleCase = words.map((word)=>{
    return word.charAt(0).toUpperCase()+word.slice(1);
})

console.log(titleCase.join(" "));

