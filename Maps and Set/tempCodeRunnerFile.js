let n = 10; // you can change this value to test with other numbers

// if (n <= 2) {
//     console.log(0);
// } else {
//     let isPrime = new Map();

//     // Step 1: Initialize all numbers as prime
//     for (let i = 0; i < n; i++) {
//         isPrime.set(i, true);
//     }

//     // Step 2: Mark non-primes
//     for (let i = 2; i * i < n; i++) {
//         if (isPrime.get(i)) {
//             for (let j = i * i; j < n; j += i) {
//                 isPrime.set(j, false);
//             }
//         }
//     }

//     // Step 3: Count primes
//     let count = 0;
//     for (let i = 2; i < n; i++) {
//         if (isPrime.get(i)) {
//             count++;
//         }
//     }

//     console.log(count);
// }