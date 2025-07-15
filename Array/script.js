/*let arr = []; //This was an empty array (Dynamic)
arr.push(100);//push method is used to insert a value in the array
arr.push(75);
arr.push(25);
arr.push(50);
arr.push("Harsh");
arr.push(false);

console.log(arr);

console.log(arr[1]);

arr.pop();//pop method is used to delete a value from the array
console.log(arr);*/

//These method can be done by inserting their index number(Not using the push or pop)
/*let arr=[]; //Dynamic array
arr[0] = 20;
arr[1] = 30;
arr[2] = 40;
arr[3] = 50;

//I dont declare the 4,5,6 index of the array, so itself they show the size of empty array.
arr[7] = 150;
console.log(arr);*/

/*let arr = new Array(3);//It means we having the new array having indices of 0,1,2
arr[0]=2;
arr[1]=1;
arr[2]=3;
arr[3]=5;//this shows js can apply the new number because of dynamic nature

arr[7]=10;

console.log(arr);*/

/*let arr =  new Array(3);
arr.push(10);// They just pull the particular arr number not for their index number
console.log(arr);*/

/*let arr = new Array(5);
arr[0] = Number(prompt("Enter a value"));
arr[1] = Number(prompt("Enter a value"));
arr[2] = Number(prompt("Enter a value"));
arr[3] = Number(prompt("Enter a value"));
arr[4] = Number(prompt("Enter a value"));
console.log(arr);*/
//Now, this upper array i want to print the array using for loop
/*let arr = new Array(5);

for (let i=0;i<arr.length;i++){
    arr[i]=Number(prompt("Enter a value"));
}
console.log(arr);*/
//Yha pr kya ho rha hum index pr jake pick kr rhe h
//But hum ab index pr jake value pick kre ge
//Question=>1
//Sum of n Element of array
let arr = [10,20,30,40,50];
//let arr = new Array(5);
let sum = 0;
for(let i=0;i<arr.length;i++){
    //arr[i]=Number(prompt("Enter a value"));//I initialize the number you want to add
    sum = sum + arr[i];
}
console.log(sum);



