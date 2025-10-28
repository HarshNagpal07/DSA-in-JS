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