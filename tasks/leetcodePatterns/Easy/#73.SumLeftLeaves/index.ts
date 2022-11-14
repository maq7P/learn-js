//https://leetcode.com/problems/sum-of-left-leaves/

import TreeNode from "../../common/TreeNode/index.js";


function sumOfLeftLeaves(root: TreeNode | null): number {
  if(!root) return 0

  function helper(node: TreeNode | null, prev: number = 0){
    if(node?.left){
      prev = prev + node.left.val

      return helper(node.left, prev)
    }
    if(node?.right){
      return helper(node.right, prev)
    }
    
    
    return prev
  }

  return helper(root)
};