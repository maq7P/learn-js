//https://leetcode.com/problems/remove-element/

//TODO: re
function removeElement(nums: number[], val: number): number {
  const len = nums.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (nums[i] !== val) nums[count++] = nums[i];
  }

  return count;
};