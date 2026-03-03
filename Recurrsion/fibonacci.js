function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function fibonacciSeries(n) {
    for (let i = 0; i <= n; i++) {
        console.log(fib(i));
    }
}

/*fibonacciSeries(5);
function fib(n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));  // Output: 5*/