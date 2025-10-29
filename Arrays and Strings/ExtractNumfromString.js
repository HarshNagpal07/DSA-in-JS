let x="abc334v44d";

for(let i=0;i<x.length;){
    if(x.charCodeAt(i)>=48 && x.charCodeAt(i)<=57){
       let j=i;
       while(j<x.length && x.charCodeAt(j)>=48 && x.charCodeAt(j)<=57){
        j++;
       }
       console.log(x.substring(i,j));
       i=j;
    }
    else{
        i++;
    }
}
//Simpler way
/*let x = "abc334v44d";

for (let i = 0; i < x.length; i++) {
  if (x.charCodeAt(i) >= 48 && x.charCodeAt(i) <= 57) {
    let j = i;
    while (j < x.length && x.charCodeAt(j) >= 48 && x.charCodeAt(j) <= 57) {
      j++;
    }
    console.log(x.substring(i, j)); // full number
    i = j - 1; // move i to the last digit of this number
  }
}*/
//Or we can say we can get anytype of number alphabet or cases like convert lower case to upper case and count their frequency
