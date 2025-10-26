let arr=[1,2,3,4,5];
/*
let reversed=[];
for(let i=0;i<arr.length;i++){//n
    reversed.unshift(arr[i]);//n//unshift gives the n2 complexity to reduce complexity do this 
}
console.log(reversed);
*/
//To reduce complexity do this 
let reversed=[];

for(let i=arr.length-1;i>=0;i--){
    reversed.push(arr[i]);//n
}
console.log(reversed);
