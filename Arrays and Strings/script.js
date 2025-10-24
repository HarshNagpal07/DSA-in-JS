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
/*let arr = [10,20,30,40,50];
//let arr = new Array(5);
let sum = 0;
for(let i=0;i<arr.length;i++){
    //arr[i]=Number(prompt("Enter a value"));//I initialize the number you want to add
    sum = sum + arr[i];
}
console.log(sum);*/
//Output=> 150; 
//If i want to print the other numberacc to you👍 so we use prompt type 

//Question=>2
//Max Number
/*let arr= [10,2,3,43,66,90];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max= arr[i];
    }
}
console.log(max)*/
//Output=>90 for min just max>arr[i] i.e=>2

//Question=>3
//2nd Max Number
/*let arr = [10, 6, 75, 65, 88, 30];

let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for(let i=2; i<arr.length;i++){
    if(arr[i]>max){
        sMax = max;
        max = arr[i];
    }
    else if(arr[i] > sMax && max != arr[i]){//This logic is so confusing
        sMax = arr[i];
    }
}
console.log(sMax)*/

// Question=>4
//Reverse the array=>1st Method Pick the element from the last 
/*let arr=[10,20,30,40,50]

let temp = new Array(arr.length);

let j = 0;
for(let i=arr.length-1;i>=0;i--){
    temp[j] =arr[i];
    j++;
} 
console.log(temp);*/

//2nd Method
//Pick the elements by 1st and last indicies of array
/*let arr=[10,20,30,40,50];

let i=0;
let j=arr.length-1;

while(i!=j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);*/

//Question=> 5
//Arrange the One's and zero's in one side
/*let arr = [1, 0, 0, 1, 0, 1, 0, 1, 1];

let i=0; j=0;
while(i<arr.length){
    if(arr[i]==0){
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    j++
}
i++;
}
console.log(arr);*/
//Question=> 6
//Arrange the negative and positive number in one side 
/*let arr = [5, 1, -17, -5, 19, 7, 2, -15, 3];

let j = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        // Swap arr[i] with arr[j]
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
}

console.log(arr);*/ 

//Question=> 7
//Move the elements left side by 1
/* let arr=[1,2,3,4,5]

let copy = arr[0];
for(let i=0;i<arr.length;i++){
    arr[i]=arr[i+1];
}
arr[arr.length-1]=copy;
console.log(arr);*/

//Move the elements right side by 1
/* let arr=[1,2,3,4,5];

let copy=arr[arr.length-1];
for(let i=arr.length-1;i>0;i--){
    arr[i]=arr[i-1];
}
arr[0]=copy;
console.log(arr);*/

//Nesters looping
/*for(let i=1;i<=4;i++){
    console.log(i+"execution");
for(let j=1;j<=3;j++){
    console.log("hello");
}
}*/

//Move the element left side by 2
/*let arr=[1, 2, 3, 4, 5];//5 element of array

let k = Number(prompt("Enter k value"));
k=k % arr.length;//This is for value is greater than 5 let's check
let count = 0;
for(let j=0;j<k;j++){
    count++;
    let copy = arr[0];
    for(let i=0;i<arr.length-1;i++){
        arr[i]=arr[i+1];
    }
    arr[arr.length-1]=copy;
}
console.log(arr)
console.log(count);*/

//Move the element right side by 2
// let arr=[1, 2, 3, 4, 5];

// let k=Number(prompt("Enter k value"));
// k = k % arr.length  ;
// for(let j=0;j<k;j++){
//     let copy=arr[arr.length-1];
//     for(let i=arr.length-1;i>0;i--){
//         arr[i]=arr[i-1];
//     }
//     arr[0]=copy;
// }
// console.log(arr);
//New method of left rotation(Main made Algo)
/*let arr=[1,2,3,4,5]
let temp= new Array(arr.length);
let k= Number(prompt("Enter a value"))
k = k % arr.length;

for(let i=0;i<arr.length;i++){
    temp[(i + k) % arr.length] = arr[i];
}
console.log(temp);*/

//Block Swap reverse algo
//Left rotation without extra space
/*let arr=[1,2,3,4,5]
let k=Number(prompt("Enter an value"));
k= k % arr.length;

reverse(0,k-1);
reverse(k,arr.length-1);
reverse(0,arr.length-1);
console.log(arr);

function reverse(i,j){
    while(i<j){
        let temp= arr[i];
        arr[i]= arr[j];
        arr[j]= temp;
        i++;
        j--;
    }
}*/

//Right rotation without extra space
/*let arr=[1,2,3,4,5]
let k=Number(prompt("Enter an value"));
k= k % arr.length;

reverse(0,arr.length-1);
reverse(0,k-1);
reverse(k,arr.length-1);
console.log(arr);

function reverse(i,j){
    while(i<j){
        let temp= arr[i];
        arr[i]= arr[j];
        arr[j]= temp;
        i++;
        j--;
    }
}*/

//Remove duplicate from Sorted array(LeetCode Question)
//Answer=>
// var RemoveDuplicate = Function(nums)
// {
//     let j = 1;
//     for(let i=0;i<nums.length-1;i++){
//         if(nums[i] != nums[i+1]){
//             nums[j] = nums[i+1];
//             j++;
//         }
//     }
//     return j;
// };