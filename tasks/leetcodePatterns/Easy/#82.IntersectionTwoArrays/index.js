"use strict";
//https://leetcode.com/problems/intersection-of-two-arrays/
function intersection(nums1, nums2) {
    const hash1 = {};
    const res = [];
    for (let i = 0; i < nums1.length; i++) {
        hash1[nums1[i]] ? hash1[nums1[i]]++ : (hash1[nums1[i]] = 1);
    }
    for (let i = 0; i < nums2.length; i++) {
        hash1[nums2[i]] && !res.includes(nums2[i]) && res.push(nums2[i]);
    }
    return res;
}
;
