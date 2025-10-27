let arr = [[1,2,3],[3,2,1],[4,5,6]];

let min=arr[0][0];
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]<min){
            min=arr[i][j];
        }
    }
}
console.log(min);