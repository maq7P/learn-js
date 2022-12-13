"use strict";
//https://leetcode.com/problems/squares-of-a-sorted-array/
function sortedSquares2(nums) {
    const res = [];
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        if (Math.abs(nums[r]) > Math.abs(nums[l])) {
            res.push(Math.pow(nums[r], 2));
            r--;
        }
        else {
            res.push(Math.abs(Math.pow(nums[l], 2)));
            l++;
        }
    }
    return res.reverse();
}
;
