"use strict";
//https://leetcode.com/problems/counting-bits/
function countBitsAlg(n) {
    let res = [];
    for (let i = 0; i <= n; i++) {
        let cur = 0, temp = i;
        while (temp) {
            cur += temp & 1;
            temp >>= 1;
        }
        res.push(cur);
    }
    return res;
}
;
console.log(countBitsAlg(2));
