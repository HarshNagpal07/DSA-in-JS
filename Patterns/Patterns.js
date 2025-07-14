/*console.log("hello");
console.log("world");*/

/* Output=>hello
           world*/

//Now i want to print the hello world in the same line

// process.stdout.write("hello");
// process.stdout.write("world");
/*This will print the output in terminal in the same line*/

//  let a =prompt("Enter a number");
//  console.log(a);// This will print in live server

//Pattern 1 => Taking output from n user we can change it like 1,2 etc.

/*let prompt = require("prompt-sync")();
let n = prompt("Enter a number");
for(let i=1;i<=n;i++){
    process.stdout.write("* ");
}
console.log();

Output=> Enter a number5
         * * * * * 
*/

//Pattern 2 =>
/*let prompt = require("prompt-sync")();
let n = prompt("Enter a number");
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        process.stdout.write("* ");
    }
    console.log();
}
Output=> Enter a number5
         * * * * * 
         * * * * *
         * * * * *
         * * * * *
         * * * * *
*/

//Pattern 3 =>
/*let prompt = require("prompt-sync")();
let n = prompt("Enter a number");
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write("* ");
    }
    console.log();
}
Output=> Enter a number5
         *       
         * *     
         * * *   
         * * * * 
         * * * * *
*/
//Pattern 4 =>
/*let prompt = require("prompt-sync")();
let n = prompt("Enter a number");
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(j+" ");
    }
    console.log();
}
Output=>Enter a number5
        1 2
        1 2 3
        1 2 3 4
        1 2 3 4 5
*/
//Pattern 5 =>
/*let prompt = require("prompt-sync")();
let n = prompt("Enter a number");
let count =1;
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(count + " ");
        count = count + 1;
    }
    console.log();
}
Output=>Enter a number5
1 
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/
