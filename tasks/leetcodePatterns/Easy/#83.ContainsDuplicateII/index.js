"use strict";
//https://leetcode.com/problems/contains-duplicate-ii/
function containsNearbyDuplicate(nums, k) {
    if (k === 0)
        return false;
    let i = 0, j = 1;
    while (j < nums.length) {
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
};

function containsNearbyDuplicateSlicingWindow(nums: number[], k: number): boolean {
    const d = {}
    
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
           
        if(num in d && i - d[num] <= k){
            return false
        }
        
        d[num] = i
    }
    
    return false
};

//console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// console.log(containsNearbyDuplicate([99,99], 2));
// console.log(containsNearbyDuplicate([0,1,2,3,2,5], 3));
// console.log(containsNearbyDuplicate([1,2,1], 0));
// console.log(containsNearbyDuplicate([1,2,1], 1));
// console.log(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,9], 3));
