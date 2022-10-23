"use strict";
//https://leetcode.com/problems/power-of-four/
// test that number is deree of two:
// n & (n - 1) === 0
// example:
// 1000 & (1000 - 0001) = 1000 & 0111 = 0 
function isPowerOfFourFast(n) {
    return (+(n).toString(2) % 2) === 1 && !!((n & (n - 1)) === 0);
}
;
console.log(isPowerOfFourFast(4));
