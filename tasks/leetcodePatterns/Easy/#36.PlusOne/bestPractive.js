"use strict";
//https://leetcode.com/problems/plus-one/
function plusOneBestPractice(digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        const cur = (digits[i] + carry) % 10;
        digits[i] = cur;
        carry = Math.floor(cur / 10);
    }
    console.log(carry);
    return carry ? [carry, ...digits] : digits;
}
console.log(plusOneBestPractice([9]));
