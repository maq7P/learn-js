//https://leetcode.com/problems/minimum-depth-of-binary-tree/

import TreeNode from "../../common/TreeNode/index.js";

function minDepthBFS(root: TreeNode | null): number {
  if(!root) return 0

  const queue: [TreeNode | null, number][] = [[root, 1]] 

  while(queue){

    let [curNode, curDepth] = queue.shift() as [TreeNode | null, number]
    
    if(!curNode?.left && !curNode?.right){
      return curDepth
    }
    
    curDepth++
    
    curNode.left && queue.push([curNode.left, curDepth])
    curNode.right && queue.push([curNode.right, curDepth])
  }

  return 0
};

console.log(minDepthBFS(
  new TreeNode(
    2, 
    null, 
    new TreeNode(
      3, 
      null, 
      new TreeNode(
        4,
        null,
        new TreeNode(
          5,
          null,
          new TreeNode(
            6,
            null,
            null
          )
        )
      )
    ))
));