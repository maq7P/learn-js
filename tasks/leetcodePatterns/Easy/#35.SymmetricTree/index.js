//https://leetcode.com/problems/symmetric-tree/
import TreeNode from "../../common/TreeNode/index.js";
// with BFS
function isSymmetric(root) {
    const queue = [root];
    const levels = [];
    while (queue.length) {
        const level = [];
        for (let i = 0; i < queue.length; i++) {
            const current = queue.shift();
            console.log("iter: ", queue);
            level.push(current === null || current === void 0 ? void 0 : current.val);
            if (current === null || current === void 0 ? void 0 : current.left) {
                queue.push(current.left);
            }
            if (current === null || current === void 0 ? void 0 : current.right) {
                queue.push(current.right);
            }
        }
        // console.log(level);
        // console.log(queue);
        levels.push(level);
    }
    console.log(levels);
    return false;
}
;
const tree = new TreeNode(1, new TreeNode(2, new TreeNode(5), new TreeNode(3)), new TreeNode(2, new TreeNode(5), new TreeNode(3)));
console.log(isSymmetric(tree));
