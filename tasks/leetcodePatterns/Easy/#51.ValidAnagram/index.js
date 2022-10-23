"use strict";
//https://leetcode.com/problems/valid-anagram/
function isAnagram(s, t) {
    const sHash = {};
    for (let item of s) {
        sHash[item] ? (sHash[item]++) : (sHash[item] = 1);
    }
    for (let item of t) {
        if (!sHash[item])
            return false;
        sHash[item]--;
    }
    for (let key in sHash) {
        if (sHash[key])
            return false;
    }
    return true;
}
;
console.log(isAnagram("anagram", "nagaram"));
