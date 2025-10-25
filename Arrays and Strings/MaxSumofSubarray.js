let arr=[-6,-5,6,2,3];
let MaxSum=arr[0];//This one is for with using kth loop 
for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        let sum =0;
        for(let k=i;k<=j;k++){
            sum=sum+arr[k];
        }
        if(sum>MaxSum){
            MaxSum=sum;
        }
    }
}
console.log(MaxSum)
