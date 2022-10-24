"use strict";
//https://leetcode.com/problems/search-insert-position/
function searchInsert(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (target < nums[mid]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}
;
console.log(searchInsert([1, 3, 5, 6], 5) === 2);
console.log(searchInsert([1, 3, 5, 6], 2) === 1);
console.log(searchInsert([1, 3, 5, 6], 7) === 4);
console.log(searchInsert([1, 3, 5, 6], 0) === 0);
console.log(searchInsert([1, 3], 2) === 1);
console.log(searchInsert([1, 3, 5], 1) === 0);
console.log(searchInsert([1, 3, 4, 5, 6], 3) === 1);
