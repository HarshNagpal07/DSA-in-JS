let arr=[1,3,4,5,7];

for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        let str=" ";
        for(let k=i;k<=j;k++){
            str=str+arr[k];
        }
        console.log(str);
    }
}









