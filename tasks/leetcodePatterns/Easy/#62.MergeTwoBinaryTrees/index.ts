//https://leetcode.com/problems/merge-two-binary-trees/

import TreeNode from "../../common/TreeNode/index.js"

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {

  if(!root1 && !root2) return null

  if(!root1) return root2
  if(!root2) return root1

  const mergedTree = new TreeNode(root1.val + root2.val)

  mergedTree.left = mergeTrees(root1.left, root2.left)
  mergedTree.right = mergeTrees(root1.right, root2.right)

  return mergedTree
};

