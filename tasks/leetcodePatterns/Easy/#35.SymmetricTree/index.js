//https://leetcode.com/problems/symmetric-tree/
import TreeNode from "../../common/TreeNode/index.js";
// with BFS
function isSymmetric(root) {
    const queue = [root];
    while (queue.length) {
        const level = [];
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const current = queue.shift();
            level.push((current === null || current === void 0 ? void 0 : current.val) || null);
            // if(current?.left){
            //   queue.push(current.left)
            // }
            // if(current?.right){
            //   queue.push(current.right)
            // }
            current && queue.push(current.left, current.right);
        }
        const centredIdx = level.length / 2;
        const leftSide = level.slice(0, centredIdx);
        const rightSide = level.slice(centredIdx).reverse();
        for (let i = 0; i < leftSide.length; i++) {
            if (leftSide[i] !== rightSide[i])
                return false;
        }
    }
    return true;
}
;
const tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(5), new TreeNode(3)), new TreeNode(2, new TreeNode(3), new TreeNode(5)));
const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode()), new TreeNode(2, new TreeNode(), new TreeNode(3)));
console.log(isSymmetric(tree1));
console.log(isSymmetric(tree2));
