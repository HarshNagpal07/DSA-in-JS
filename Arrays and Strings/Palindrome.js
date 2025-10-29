let arr="abba";

let Palindrone=1;
for(let i=0;i<Math.floor(arr.length/2);i++){
    if(arr[i]!==arr[arr.length-1-i]){
    Palindrone=0;
    break;
    }
}
if(Palindrone==1){
    console.log("Palindrone")
}
//With Simple Logic
/*let isPal = true;
for (let i = 0; i < arr.length / 2; i++) {
  if (arr[i] !== arr[arr.length - 1 - i]) {
    isPal = false;
    break;
  }
}
console.log(isPal ? "Palindrome" : "Not Palindrome");*/