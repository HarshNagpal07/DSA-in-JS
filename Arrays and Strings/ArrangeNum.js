let arr = [1, -1, 3, 2, -7, -5, 11, 6 ];

let ARR=[];
let j=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]>=0){
        ARR[j]=arr[i];
        j++
    }
}
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){
        ARR[j]=arr[i];
        j++;
    }
}
console.log(ARR);
//Using Push
/*let arr = [1, -1, 3, 2, -7, -5, 11, 6];
let ARR = [];

// First push positive numbers
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 0) {
    ARR.push(arr[i]);
  }
}

// Then push negative numbers
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    ARR.push(arr[i]);
  }
}

console.log(ARR);*/
