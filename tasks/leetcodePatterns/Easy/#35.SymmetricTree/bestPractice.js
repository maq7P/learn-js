//https://leetcode.com/problems/symmetric-tree/
import TreeNode from "../../common/TreeNode/index.js";
// with BFS
function isSymmetricBestPractice(root) {
    const traversal = (r1, r2) => {
        if (!r1 && !r2)
            return true;
        if (!r1 || !r2)
            return false;
        return r1.val === r2.val
            && traversal(r1.left, r2.right)
            && traversal(r1.right, r2.left);
    };
    return traversal(root, root);
}
;
const tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(5), new TreeNode(3)), new TreeNode(2, new TreeNode(3), new TreeNode(5)));
const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(), new TreeNode(3)), new TreeNode(2, new TreeNode(), new TreeNode(3)));
console.log(isSymmetricBestPractice(tree1));
console.log(isSymmetricBestPractice(tree2));
