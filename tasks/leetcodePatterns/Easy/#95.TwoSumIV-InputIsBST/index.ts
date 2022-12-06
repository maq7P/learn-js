//https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
import TreeNode from "../../common/TreeNode/index.js";

function findTarget(root: TreeNode | null, k: number): boolean {
  const seen = new Set()
  const stack = [root]

  while(!!stack.length){
    const cur = stack.pop()

    if(cur){
      if(seen.has(k - cur.val)) return true

      seen.add(cur.val)

      if(cur.left){
        stack.push(cur.left)
      }
      
      if(cur.right){
        stack.push(cur.right)
      }
    }
  }

  return false
};