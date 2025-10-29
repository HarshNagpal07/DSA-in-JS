//Largest Lucky Number in an Array
/*let arr=[1,2,4,3,5,4,3,3,2,4,4];
let max=-1;

for(let i=0;i<arr.length;i++){
    let count=0;
    
    for(let j=0;j<arr.length;j++){
        if(arr[i]===arr[j]){
            count++;
        }
    }
    if(arr[i]===count){
        max = Math.max(max,arr[i]);
    }
}
console.log(max);*/
// By maps
let arr=[1,2,4,3,5,4,3,3,2,4,4];
let max=-1;
let b=new Map();

for(let i=0;i<arr.length;i++){
    if(b.get(arr[i])===undefined){
        b.set(arr[i],1);
    }
    else{
        b.set(arr[i],b.get(arr[i])+1);
    }
}
console.log(b);

for(let [num,freq]of b){
    if(num===freq){
        max=Math.max(max,num);
    }
}
console.log(max);
