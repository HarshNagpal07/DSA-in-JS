let x="abc334v44d";

for(let i=0;i<x.length;i++){
    if(x.charCodeAt(i)>=48 && x.charCodeAt(i)<=57){
        for(let j=i;j<x.length && x.charCodeAt(j)>=48 && x.charCodeAt(j)<=57;j++){
            console.log(x.substring(i,j));
            i=j;
        }
    }
}