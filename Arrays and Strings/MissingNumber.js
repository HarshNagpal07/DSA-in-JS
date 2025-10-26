let arr=[1,3,4];

let n=arr.length+1;
let sum=0;
let SUM=(n*(n+1)/2);
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
}
console.log(SUM-sum);