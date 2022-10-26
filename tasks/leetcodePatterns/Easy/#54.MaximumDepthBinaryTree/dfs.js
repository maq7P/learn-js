//https://leetcode.com/problems/maximum-depth-of-binary-tree/
import TreeNode from "../../common/TreeNode/index.js";
function maxDepth(root) {
    if (!root)
        return 0;
    const left = maxDepth((root === null || root === void 0 ? void 0 : root.left) || null);
    const right = maxDepth((root === null || root === void 0 ? void 0 : root.right) || null);
    return Math.max(left + 1, right + 1);
}
;
//[2,null,3,null,4,null,5,null,6] --> 5
console.log(maxDepth(new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6, null, null)))))));
//[3,9,20,null,null,15,7] --> 2
console.log(maxDepth(new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
