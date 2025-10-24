//Maximum and Minimum in an Array
let arr=[3,5,1,8,4,2];
let max= arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]<max){
        max = arr[i];
    }
}
console.log(max);