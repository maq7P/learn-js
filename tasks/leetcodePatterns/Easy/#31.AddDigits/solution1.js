"use strict";
//https://leetcode.com/problems/add-digits/
function addDigits1(num) {
    if (num >= 10) {
        let res = 0;
        while (num) {
            res += num % 10;
            num = Math.floor(num / 10);
        }
        return addDigits1(res);
    }
    else {
        return num;
    }
}
console.log(addDigits1(38));
