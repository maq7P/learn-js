"use strict";
//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
//TODO: re
// need to control previously simbol, how in example
function strStr(haystack, needle) {
    if (needle.length > haystack.length)
        return -1;
    let startIdx = -1;
    let needlePointer = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[needlePointer]) {
            console.log("startIdx: ", startIdx);
            console.log("i: ", i);
            const isLastOfNeedle = needle[needlePointer] === needle[needle.length - 1];
            if (needlePointer === 0 && !isLastOfNeedle) {
                startIdx = i;
            }
            if (isLastOfNeedle)
                return startIdx;
            needlePointer++;
        }
        else {
            needlePointer = 0;
            startIdx = -1;
        }
    }
    return startIdx;
}
;
console.log(strStr("mississippi", "issip"));
console.log(strStr("sadbutsad", "sad"));
