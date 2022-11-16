"use strict";
//https://leetcode.com/problems/add-binary/
function addBinary(a, b) {
    let lenA = a.length, lenB = b.length;
    lenA > lenB && (b = "0".repeat(lenA - lenB) + b);
    lenA < lenB && (a = "0".repeat(lenB - lenA) + a);
    console.log(a, b);
    let res = "", carry = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        const d1 = +a[i], d2 = +b[i];
        const d = (d1 + d2 + carry) % 2;
        console.log("d: ", d);
        carry = Math.floor((d1 + d2 + carry) / 2);
        res += d;
    }
    carry && (res += carry);
    return res.split("").reverse().join("");
}
;
// console.log(addBinary("11", "1"));
// console.log(addBinary("1010", "1011"));
console.log(addBinary("1", "111"));
