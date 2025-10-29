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
//With Simple Logic // Two pointer se bhi hoga
/*let isPal = true;
for (let i = 0; i < arr.length / 2; i++) {
  if (arr[i] !== arr[arr.length - 1 - i]) {
    isPal = false;
    break;
  }
}
console.log(isPal ? "Palindrome" : "Not Palindrome");*/

/*Raman Jump
if (n % 6 == 0 || n % 6 == 1 || n % 6 == 3)
        return "YES";
    else
        return "NO";
Sharpener Admin
15:50 
0,1,3,6,7,9,12,13,15,18....*/