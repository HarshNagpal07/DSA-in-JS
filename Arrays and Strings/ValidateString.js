//Iterate a string or character
// let x="Awesome";

// for(let i=0;i<x.length;i++){
//     console.log(x[i]);
// }
let arr="madam";

let i=0;
let j=arr.length-1;

while(i<j){
    if(arr[i]!==arr[j]){
        console.log(false);
    }
    i++;
    j--;
}
console.log(true);