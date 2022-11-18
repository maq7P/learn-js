//https://leetcode.com/problems/binary-tree-preorder-traversal/

import TreeNode from "../../common/TreeNode/index.js";

function preorderTraversal(root: TreeNode | null): number[] {

  if(!root) return []

  const traversal = (node: TreeNode | null, acc: number[]) => {
    
    if(node?.left){
      acc.push(node?.left.val)
      traversal(node?.left, acc)
    }

    if(node?.right){
      acc.push(node?.right.val)
      traversal(node?.right, acc)
    }

    return acc
  }

  return traversal(root, [root.val])
};