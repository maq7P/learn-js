"use strict";
//https://leetcode.com/problems/contains-duplicate-ii/
function containsNearbyDuplicate(nums, k) {
    if (k === 0)
        return false;
    let i = 0, j = 1;
    while (j < nums.length) {
        console.log(i, j);
        console.log("____");
        if (nums[i] === nums[j] && i !== j) {
            return true;
        }
        if (j - i <= k && j !== i) {
            i++;
            continue;
        }
        j++;
    }
    return false;
}
;
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// console.log(containsNearbyDuplicate([99,99], 2));
// console.log(containsNearbyDuplicate([0,1,2,3,2,5], 3));
// console.log(containsNearbyDuplicate([1,2,1], 0));
// console.log(containsNearbyDuplicate([1,2,1], 1));
// console.log(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,9], 3));
