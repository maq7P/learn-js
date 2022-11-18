"use strict";
//https://leetcode.com/problems/length-of-last-word/
function lengthOfLastWord(s) {
    const splitWithSpaces = s.split(" ");
    if (splitWithSpaces.length === 1 && splitWithSpaces[0]) {
        return splitWithSpaces[0].length;
    }
    let temp = splitWithSpaces.length - 1;
    while (temp >= 0) {
        const cur = splitWithSpaces[temp];
        if (cur)
            return cur.length;
        temp--;
    }
    return 0;
}
;
// console.log(lengthOfLastWord("Hello    World   "));
// console.log(lengthOfLastWord("a"));
// console.log(lengthOfLastWord("a "));
