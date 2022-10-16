"use strict";
//https://leetcode.com/problems/n-th-tribonacci-number/
function tribonacci(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    if (n === 2)
        return 1;
    let temp = 2, nth = 0;
    let first = 0;
    let second = 1;
    let third = 1;
    while (temp !== n) {
        nth = first + second + third;
        first = second;
        second = third;
        third = nth;
        temp++;
    }
    return nth;
}
;
console.log(tribonacci(4));
