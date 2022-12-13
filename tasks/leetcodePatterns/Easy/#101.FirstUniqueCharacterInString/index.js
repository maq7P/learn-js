"use strict";
//https://leetcode.com/problems/first-unique-character-in-a-string/
function firstUniqChar(s) {
    var _a, _b;
    const hash = {};
    let max = 0;
    for (let c of s) {
        for (let i = 0; i <= max; i++) {
            if (hash[i] === c) {
                ((_a = hash[i + 1]) === null || _a === void 0 ? void 0 : _a.length) ? hash[i + 1].push(c) : hash[i + 1] = [c];
            }
            else {
                ((_b = hash[i]) === null || _b === void 0 ? void 0 : _b.length) ? hash[i].push(c) : hash[i] = [c];
            }
        }
    }
    console.log(hash);
    return 0;
}
;
firstUniqChar("leetcode");
