"use strict";
//https://leetcode.com/problems/reverse-integer/
//TODO: доработать решение в цикле (больше 64-bit integers пока что)
function reverse(x) {
    let result = 0;
    while (x !== 0) {
        const pop = x % 10;
        x = Math.floor(x / 10);
        result = result * 10 + pop;
    }
    return result;
}
console.log(reverse(123)); ///321
console.log(reverse(-123)); // - 321
console.log(reverse(120)); // 21
