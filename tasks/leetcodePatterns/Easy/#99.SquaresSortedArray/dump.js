"use strict";
//https://leetcode.com/problems/squares-of-a-sorted-array/
function sortedSquares(nums) {
    return nums.map(item => Math.pow(item, 2)).sort((a, b) => a - b);
}
;
