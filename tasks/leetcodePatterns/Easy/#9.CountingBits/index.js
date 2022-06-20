"use strict";
//https://leetcode.com/problems/counting-bits/
function countBits(n) {
    const res = [];
    for (let i = 0; i <= n; i++) {
        res.push(i.toString(2));
    }
    return res.map(item => {
        let sum = 0;
        for (let char of item) {
            if (char === "1")
                sum += 1;
        }
        return sum;
    });
}
console.log(countBits(5));
console.log(countBits(123213212));
