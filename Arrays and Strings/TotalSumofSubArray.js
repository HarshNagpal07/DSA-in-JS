let arr=[-6,-5,6,2,3];

let TotalSum=0;
for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        let str="";
        let sum=0;
        for(let k=i;k<=j;k++){
            str=str+arr[k]+" ";
            sum=sum+arr[k];
        }
        console.log(str+"Sum is="+sum);
        TotalSum+=sum;
        console.log(TotalSum);
    }
}