"use strict";
//https://leetcode.com/problems/hamming-distance/
function hammingDistance2(x, y) {
    let count = 0;
    while (x || y) {
        if ((x & 1) !== (y & 1)) {
            count++;
        }
        x = x >> 1;
        y = y >> 1;
    }
    return count;
}
;
console.log(hammingDistance2(3, 1));
