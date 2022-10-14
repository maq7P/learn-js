"use strict";
//https://leetcode.com/problems/is-subsequence/
function isSubsequence(s, t) {
    let temp = 0;
    let checker = [];
    for (let c of t) {
        if (c === s[temp]) {
            checker.push(c);
            temp++;
        }
    }
    return s === checker.join("");
}
console.log(isSubsequence("axc", "ahbgdc"));
