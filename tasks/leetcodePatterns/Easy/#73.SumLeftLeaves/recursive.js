//https://leetcode.com/problems/sum-of-left-leaves/
import TreeNode from "../../common/TreeNode/index.js";
function sumOfLeftLeavesRecursive(root) {
    let res = 0;
    if (!root)
        return res;
    const recursive = (node, isLeft = false) => {
        if (!node) {
            return null;
        }
        if (isLeft && !node.left && !node.right) {
            res += node.val;
        }
        if (node.left) {
            recursive(node.left, true);
        }
        if (node.right) {
            recursive(node.right);
        }
    };
    recursive(root);
    console.log(res);
    return res;
}
;
sumOfLeftLeavesRecursive(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(17))));
