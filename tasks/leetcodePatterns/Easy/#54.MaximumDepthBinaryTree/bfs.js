//https://leetcode.com/problems/maximum-depth-of-binary-tree/
import TreeNode from "../../common/TreeNode/index.js";
function maxDepth(root) {
    const queue = [{ root, depth: 1 }];
    let max = 0;
    while (queue.length) {
        const { root, depth } = queue.shift();
        max = Math.max(max, depth);
        root.left && queue.push({ root: root.left, depth: depth + 1 });
        root.right && queue.push({ root: root.right, depth: depth + 1 });
    }
    return max;
}
//[2,null,3,null,4,null,5,null,6] --> 5
console.log(maxDepth(new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6, null, null)))))));
//[3,9,20,null,null,15,7] --> 2
console.log(maxDepth(new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
