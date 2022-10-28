//https://leetcode.com/problems/binary-tree-paths/
import TreeNode from "../../common/TreeNode/index.js";
function binaryTreePaths(root) {
    if (!root)
        return [];
    const ans = [];
    const goDFS = (node, path) => {
        if (!node.left && !node.right) {
            return ans.push(path.slice(0, -2));
        }
        path += node.val + "->";
        node.left && goDFS(node.left, path);
        node.right && goDFS(node.right, path);
    };
    goDFS(root, "");
    return ans;
}
;
console.log(binaryTreePaths(new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6, null, null)))))));
console.log(binaryTreePaths(new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
