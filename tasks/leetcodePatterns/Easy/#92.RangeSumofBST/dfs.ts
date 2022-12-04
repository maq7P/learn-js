//https://leetcode.com/problems/range-sum-of-bst/

import TreeNode from "../../common/TreeNode/index.js";

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if(!root) return 0
    
  let sum = 0
  
  const recursiveSum = (node: TreeNode | null) => {
    if(!node){
      return sum
    }
      
    if(node.val >= low && high >= node.val){
      sum += node.val
    }
      
    recursiveSum(node.left)
    recursiveSum(node.right)
  }
  
  recursiveSum(root)
    
  return sum
};



