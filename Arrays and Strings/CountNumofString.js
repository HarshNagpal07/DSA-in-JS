// let arr="Tomorrow";

// for(let i=0;i<arr.length;i++){
//     let num=0;
//     if(arr.indexOf(arr[i]==i)){
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]=== arr[j])
//             num++;
//         }
//         console.log(arr[i]+":"+num);
//     }
// }
//Max num in a sentence
let arr= ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

let max=0;
for(let i=0;i<arr.length;i++){
    let count =1;
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]==" "){
            count++;
        }
        console.log(count);
    }
    if(max<count){
        max=count;
    }
}
console.log(max);