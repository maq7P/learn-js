"use strict";
//https://leetcode.com/problems/verifying-an-alien-dictionary/
function isAlienSorted(words, order) {
    if (words.length < 2)
        return true;
    const dictonary = {};
    for (let i = 0; i < order.length; i++) {
        dictonary[order[i]] = i;
    }
    for (let i = 1; i < words.length; i++) {
        const word1 = words[i - 1];
        const word2 = words[i];
        const maxLen = Math.max(word1.length, word2.length);
        let temp = 0;
        while (temp < maxLen) {
            const [o1, o2] = [dictonary[word1[temp]], dictonary[word2[temp]]];
            if (o1 === undefined)
                return false;
            if (o1 === o2) {
                temp++;
                continue;
            }
            temp;
            if (o1 > o2) {
                return false;
            }
            else
                break;
        }
    }
    return true;
}
;
console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(isAlienSorted(["app", "apple"], "abcdefghijklmnopqrstuvwxyz"));
// console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"));
console.log(isAlienSorted(["kuvp", "q"], "ngxlkthsjuoqcpavbfdermiywz"));
// console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"));
