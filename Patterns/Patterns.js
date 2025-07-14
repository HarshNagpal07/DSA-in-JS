/*console.log("hello");
console.log("world");*/

/* Output=>hello
           world*/

//Now i want to print the hello world in the same line

// process.stdout.write("hello");
// process.stdout.write("world");
/*This will print the output in terminal*/

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

