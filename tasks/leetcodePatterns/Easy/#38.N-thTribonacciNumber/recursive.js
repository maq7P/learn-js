"use strict";
function tribonacciRecursive(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    if (n === 2)
        return 1;
    return tribonacciRecursive(n - 3) + tribonacciRecursive(n - 2) + tribonacciRecursive(n - 1);
}
;
console.log(tribonacciRecursive(25));
