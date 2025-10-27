let arr = [[1,2,3],[3,2,1],[4,5,6]];

let max=0;
for(let i=0;i<arr.length;i++){
    let sum=0;
    for(let j=0;j<arr[i].length;j++){
        sum=sum+arr[i][j];
        if(sum>max){
            max=sum;
        }
    }
}
console.log(max);