//https://leetcode.com/problems/symmetric-tree/

import TreeNode from "../../common/TreeNode/index.js";

// with BFS
function isSymmetric(root: TreeNode | null): boolean {
  const queue  = [root]

  const levels = []
  
  while(queue.length){
    const level = []
    
    
    for(let i = 0; i < queue.length; i++){
      const current = queue.shift()

      console.log("iter: ", queue);
      
      level.push(current?.val)

      if(current?.left){
        queue.push(current.left)
      }

      if(current?.right){
        queue.push(current.right)
      }
    }

    // console.log(level);
    // console.log(queue);
    
    

    levels.push(level)

  }

  console.log(levels);
  

  return false
};

const tree = new TreeNode(
  1, 
  new TreeNode(
    2,
    new TreeNode(5),
    new TreeNode(3)
  ),
  new TreeNode(
    2,
    new TreeNode(5), 
    new TreeNode(3)
  )
)


console.log(isSymmetric(tree));
