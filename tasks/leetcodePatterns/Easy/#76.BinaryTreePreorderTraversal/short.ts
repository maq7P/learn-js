//https://leetcode.com/problems/binary-tree-preorder-traversal/

import TreeNode from "../../common/TreeNode/index.js";

function preorderTraversal(root: TreeNode | null): number[] {
  return root ? [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]: []
};