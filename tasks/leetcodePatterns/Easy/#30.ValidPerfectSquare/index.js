"use strict";
//https://leetcode.com/problems/valid-perfect-square/
function isPerfectSquare(num) {
    let left = 0;
    let right = Math.floor(num / 2);
    while (left <= right) {
        let middle = Math.floor((right + left) / 2);
        const currentPower = Math.pow(middle, middle);
        if (num === currentPower)
            return true;
        if (num > currentPower) {
            left = middle + 1;
        }
        if (num < currentPower) {
            right = middle - 1;
        }
    }
    return false;
}
console.log(isPerfectSquare(8));
