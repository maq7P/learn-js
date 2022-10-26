//https://leetcode.com/problems/minimum-depth-of-binary-tree/
import TreeNode from "../../common/TreeNode/index.js";
function minDepth(root) {
    if (!root)
        return 0;
    const left = (root === null || root === void 0 ? void 0 : root.left) ? minDepth(root === null || root === void 0 ? void 0 : root.left) : 0;
    const right = (root === null || root === void 0 ? void 0 : root.right) ? minDepth(root === null || root === void 0 ? void 0 : root.right) : 0;
    return (left !== 0 && right !== 0) && left < right ? left + 1 : right + 1;
}
;
console.log(minDepth(new TreeNode(1, new TreeNode(2))));
console.log(minDepth(new TreeNode(10, new TreeNode(9, new TreeNode(5, null, null)), new TreeNode(12, null, null))));
//[2,null,3,null,4,null,5,null,6] --> 5
console.log(minDepth(new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6, null, null)))))));
//[3,9,20,null,null,15,7] --> 2
console.log(minDepth(new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
