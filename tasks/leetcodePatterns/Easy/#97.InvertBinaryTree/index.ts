//https://leetcode.com/problems/invert-binary-tree/

import TreeNode from "../../common/TreeNode/index.js";

function invertTree(root: TreeNode | null): TreeNode | null {     
  if(!root) return null

  const oldRight = root.right
  
  root.right = invertTree(root.left)
  root.left = invertTree(oldRight)

  return root
};