"use strict";
//https://leetcode.com/problems/isomorphic-strings/
function isIsomorphic(s, t) {
    const d1 = {}, d2 = {};
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];
        if (sChar in d1 && d1[sChar] !== tChar)
            return false;
        if (tChar in d2 && d2[tChar] !== sChar)
            return false;
        d1[sChar] = tChar;
        d2[tChar] = sChar;
    }
    return true;
}
;
