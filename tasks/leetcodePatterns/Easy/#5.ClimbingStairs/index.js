"use strict";
//https://leetcode.com/problems/climbing-stairs/
function climbStairs(n) {
    if (n <= 2) {
        return n;
    }
    let n1 = 1;
    let n2 = 2;
    let res = 0;
    for (let i = 3; i <= n; i++) {
        res = n1 + n2;
        n1 = n2;
        n2 = res;
    }
    return res;
}
console.log(climbStairs(5));
