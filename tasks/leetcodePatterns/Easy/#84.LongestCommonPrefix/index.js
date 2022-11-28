"use strict";
//https://leetcode.com/problems/longest-common-prefix/submissions/
function longestCommonPrefixx(words) {
    if (!words[0] || words.length == 1)
        return words[0] || "";
    let i = 0;
    while (words[0][i] && words.every(w => w[i] === words[0][i]))
        i++;
    return words[0].substr(0, i);
}
;
