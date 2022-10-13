//https://leetcode.com/problems/binary-tree-postorder-traversal/
import TreeNode from "../../common/TreeNode/index.js";
function postorderTraversal(root) {
    if (!root)
        return [];
    const nodes = [];
    function next(node) {
        if (node) {
            next(node.left);
            next(node.right);
            nodes.push(node.val);
        }
    }
    next(root);
    return nodes;
}
;
const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(postorderTraversal(tree));
