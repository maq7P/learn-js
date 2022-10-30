//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

import TreeNode from "../../common/TreeNode/index.js";

function sortedArrayToBST(nums: number[]): TreeNode | null {

  const helper = (l: number, r: number) => {
    if(l <= r){
      const mid = Math.floor((l + r) / 2)
      const root = new TreeNode(nums[mid])

      root.right = helper(mid + 1, r)
      root.left = helper(l, mid - 1)

      return root
    }

    return null
  }
  
  return helper(0, nums.length - 1)
};

console.log(sortedArrayToBST([1,2,3, 4]));

