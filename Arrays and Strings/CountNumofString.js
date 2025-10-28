let arr="Tomorrow";

for(let i=0;i<arr.length;i++){
    let num=0;
    if(arr.indexOf(arr[i]==i)){
        for(let j=0;j<arr.length;j++){
            if(arr[i]=== arr[j])
            num++;
        }
        console.log(arr[i]+":"+num);
    }
}