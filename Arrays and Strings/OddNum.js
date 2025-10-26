let arr=[1,5,8,4,3,7];

let odd=[];
for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 !==0){
        odd.push(arr[i]);
    }
}
console.log(odd);