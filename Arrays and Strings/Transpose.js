//It just has Accessing the elements
// const row=2;
// const column=3;

// const matrix=[];
// let count=1;
// for(let i=0;i<row;i++){
//     const row=[];
//     for(let j=0;j<column;j++){
//         row[j]=count;
//         count++;
//     }
//     matrix[i]=row;
// }
// console.log(matrix);


//Transpose of a matrix
let arr=[[1,2,3],[3,2,1]];

let result=[];
for(let i=0;i<arr[0].length;i++){
    result[i]=[];
    for(let j=0;j<arr.length;j++){
        result[i][j]=arr[j][i];
    }
}
console.log(result);