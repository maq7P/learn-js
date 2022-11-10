//https://leetcode.com/problems/same-tree/

import TreeNode from "../../common/TreeNode/index.js";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if(!p && !q) return true

  if(!p || !q) return false

  const left = isSameTree(p.left, q.left)
  const right = isSameTree(p.right, q.right)

  return p.val === q.val && left && right
};