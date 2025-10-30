// let jewels="aAz";
// let stones="aAAbbbb";

// let count=0;
// for(let i=0;i<=stones.length;i++){
//     for(let j=0;j<jewels.length;j++){
//         if(stones[i]==jewels[j]){
//             count++;
//             break;
//         }
//     }
// }
// console.log(count)
//WIth maps
let jewels="aAz";
let stones="aAAbbbb";

let max=new Set();
let count=0;
for(let i=0;i<jewels.length;i++){
    max.add(jewels[i])
}
for(let i=0;i<stones.length;i++){
    if(max.has(stones[i]))
        count++;
}
console.log(count);