//https://leetcode.com/problems/closest-binary-search-tree-value

import TreeNode from "../../common/TreeNode/index.js";

const closestValue = (root: TreeNode, target: number) => {

  const dfs = (node: TreeNode | null, cur: number): number => {
    if(!node || target === node.val) return cur

    if(Math.abs(target - node.val) < Math.abs(cur - target)){
      cur = node.val
    }

    const right = dfs(node.right, cur)
    const left = dfs(node.left, cur)

    return Math.abs(target - left) < Math.abs(target - right) ? left : right
  }

  return dfs(root, +Infinity)
}

console.log(closestValue(new TreeNode(
  3,
  new TreeNode(2, new TreeNode(1) , new TreeNode(4.5)),
  new TreeNode(3.6)
), 4));