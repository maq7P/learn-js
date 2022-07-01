"use strict";
//https://leetcode.com/problems/binary-search/
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (right >= left) {
        let mid = Math.floor((left + (right - left) / 2));
        if (nums[mid] === target)
            return mid;
        if (nums[mid] < target) {
            left = mid + 1;
        }
        else
            right = mid - 1;
    }
    return -1;
}
console.log(search([1, 2, 3, 4, 10], 4));
console.log(search([1, 2, 3, 4, 10, 100, 2000], 100));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
