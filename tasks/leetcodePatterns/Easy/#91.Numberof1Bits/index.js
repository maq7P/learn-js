"use strict";
//https://leetcode.com/problems/number-of-1-bits/
function hammingWeight(n) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        ans += 1 & n;
        n = n >> 1;
    }
    return ans;
}
;
