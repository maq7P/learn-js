"use strict";
//https://leetcode.com/problems/power-of-two/submissions/
function isPowerOfTwo(n) {
    return (n > 0) && (n & (n - 1)) === 0;
}
;
