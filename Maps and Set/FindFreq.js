//Its like the Question Count Num of String. We can say thats a frequency
let x="Tomorrow";
let b=new Map();

for(let i=0;i<x.length;i++){
    if(b.get(x[i])==undefined){
        b.set(x[i],i);
    }
    else{
        b.set(x[i],b.get(x[i])+1);
    }
}
let str="";
for(let i=0;i<x.length;i++){
    if(b.get(x[i]==1)){
        str+=x[i];
    }
}
console.log(b);
console.log(str);