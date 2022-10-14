"use strict";
//https://leetcode.com/problems/is-subsequence/
function isSubsequence(s, t) {
    let temp = 0;
    let stack = [];
    for (let c of t) {
        if (c === s[temp]) {
            stack.push(c);
            temp++;
        }
    }
    console.log(stack.join(""));
    return s === stack.join("");
}
;
console.log(isSubsequence("axc", "ahbgdc"));
