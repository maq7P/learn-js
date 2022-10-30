//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
function sortedArrayToBST(nums) {
    let mid = Math.floor((nums.length - 1) / 2);
    let left = nums.splice(0, mid);
    let right = nums.splice(mid);
    console.log(left, right);
    return null;
}
;
console.log(sortedArrayToBST([1, 2, 3, 4]));
export {};
