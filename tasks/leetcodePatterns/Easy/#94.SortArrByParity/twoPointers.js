"use strict";
//84.62%
function sortArrayByParity2(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            [nums[j], nums[i]] = [nums[i], nums[j]];
            j++;
        }
    }
    return nums;
}
;
