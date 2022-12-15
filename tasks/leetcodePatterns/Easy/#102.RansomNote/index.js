"use strict";
//https://leetcode.com/problems/ransom-note/
function canConstruct(ransomNote, magazine) {
    const hashRansomNote = {};
    const hashMagazine = {};
    for (let note of ransomNote) {
        hashRansomNote[note] ? hashRansomNote[note]++ : hashRansomNote[note] = 1;
    }
    for (let note of magazine) {
        hashMagazine[note] ? hashMagazine[note]++ : hashMagazine[note] = 1;
    }
    console.log(hashMagazine, hashRansomNote);
    for (let key in hashMagazine) {
        console.log(hashMagazine[key], hashRansomNote[key]);
        if (!hashRansomNote[key]) {
            continue;
        }
        if (hashMagazine[key] < hashRansomNote[key]) {
            return false;
        }
    }
    return true;
}
;
canConstruct("a", "b");
canConstruct("aa", "aab");
// canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi")
