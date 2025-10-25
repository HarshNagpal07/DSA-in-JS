//Simply understand whether a number is prime or not.
// for(let i=2;i<=n-1;i++){
//    if(n%i==0){
//        console.log("Not a Prime Number");
//    }
   
// }
// let n=17;
// let isPrime=true;
// for(let i=2;i<=n-1;i++){
//    if(n%i==0)
//     {
//     console.log("Not a Prime Number");
//     isPrime=false;
//     break;
//    }

//    if(isPrime){
//     console.log("Prime Number");
//     isPrime=true;
//    }
// }

// Storing Prime Number in a Array
let arr=[];
for(let num=2;arr.length<10;num++){
let isPrime=true;

for(let i=2;i<=Math.sqrt(num);i++){
    if(num % i ===0){
        isPrime = false;
        break;
    }
}
if(isPrime){
    arr.push(num);
}

}
console.log (arr);
