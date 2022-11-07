"use strict";
//https://leetcode.com/problems/assign-cookies/
function findContentChildren(g, s) {
    const sortG = g.sort((a, b) => a - b);
    const sortS = s.sort((a, b) => a - b);
    let iG = 0, iS = 0;
    while (iS <= sortS.length) {
        if (sortS[iS] >= sortG[iG]) {
            iG++;
        }
        iS++;
    }
    return iG;
}
;
console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
