import TreeNode from "../../common/TreeNode/index.js";


type TTreeNode = TreeNode | null
function inorderTraversal(root: TTreeNode): number[] {
  
  let cur: TTreeNode = root, stack: Array<TreeNode | null> = [], ans: number[] = [] 

  while(stack.length || cur){
    while(cur){
      stack.push(cur)
      cur = cur.left
    }
    
    cur = stack.pop() || null
    cur && ans.push(cur.val)
    cur = cur?.right || null
  }

  return ans
};