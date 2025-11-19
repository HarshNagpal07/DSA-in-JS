//Iterate a string or character
// let x="Awesome";

// for(let i=0;i<x.length;i++){
//     console.log(x[i]);
// }
/*let arr="madam";//Brute Force

let i=0;
let j=arr.length-1;

while(i<j){
    if(arr[i]!==arr[j]){
        console.log(false);
    }
    i++;
    j--;
}
console.log(true);*/
//Without Extra Space
let arr="madam";
let reversed="";
for(let i=arr.length-1;i>=0;i--){
    reversed=reversed+arr[i];
}
console.log(reversed);
//Convert lower case to upper case
// let s = "hello";
// let result = "";

// for (let i = 0; i < s.length; i++) {
//     let code = s.charCodeAt(i);
//     if (code >= 97 && code <= 122) {
//         result += String.fromCharCode(code - 32); // difference between 'a' and 'A'
//     } else {
//         result += s[i];
//     }
// }

// console.log(result);

let str = "hello world";
let upper = str.toUpperCase();
console.log(upper);
//
let s = "HELLO";
let result = "";

for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    if (code >= 65 && code <= 90) {
        result += String.fromCharCode(code + 32); // convert uppercase → lowercase
    } else {
        result += s[i];
    }
}

console.log(result);

