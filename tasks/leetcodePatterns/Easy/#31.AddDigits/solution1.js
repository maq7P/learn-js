"use strict";
//https://leetcode.com/problems/add-digits/
function addDigits(num) {
    if (num >= 10) {
        let res = 0;
        while (num) {
            res += num % 10;
            num = Math.floor(num / 10);
        }
        return addDigits(res);
    }
    else {
        return num;
    }
}
console.log(addDigits(38));
