"use strict";
//https://leetcode.com/problems/climbing-stairs/
/*
* На n-ую ступеньку можно попасть двумя способами:
*  пройти от n - 1 и от n - 2, то есть сумма их вариантов -> чирсла фибоначи
* */
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
