"use strict";
//https://leetcode.com/problems/contains-duplicate/
//js решение
function containsDuplicate(nums) {
    return [...new Set(nums)].toString() !== nums.toString();
}
//классическое решение
function containsDuplicateClassic(nums) {
    const seen = {};
    for (let item in nums) {
        if (seen[item]) {
            return true;
        }
        seen[item] = true;
    }
    return false;
}
//true
console.log(containsDuplicate([1, 2, 3, 4, 4]));
console.log(containsDuplicateClassic([1, 2, 3, 4, 4]));
//false
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicateClassic([1, 2, 3, 4]));
