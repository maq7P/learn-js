"use strict";
//https://leetcode.com/problems/plus-one/
function plusOne(digits) {
    if (digits[digits.length - 1] !== 9) {
        digits[digits.length - 1]++;
        return digits;
    }
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        }
        else {
            digits[i]++;
            return digits;
        }
        if (i === 0) {
            digits.unshift(1);
            return digits;
        }
    }
    return digits;
}
;
console.log(plusOne([9, 9, 9, 9, 9, 0, 9]));
