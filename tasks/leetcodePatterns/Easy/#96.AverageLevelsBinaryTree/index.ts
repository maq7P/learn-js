//https://leetcode.com/problems/average-of-levels-in-binary-tree/

import TreeNode from "../../common/TreeNode/index.js";

function averageOfLevels(root: TreeNode | null): number[] {
  const q = [root]
  const res: number[] = []
  
  while(q.length){
    let count = 0, sum = 0
    const qLen = q.length

    for(let i = 0; i < qLen; i++){
      const cur = q.shift()

      if(cur){
        count++
        sum += cur.val  

        cur.left && q.push(cur.left)
        cur.right && q.push(cur.right)
      }
      
    }
    
    res.push(sum / count)
  }

  return res
};
console.log(averageOfLevels(new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15) , new TreeNode(7))
)));