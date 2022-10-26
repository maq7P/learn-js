//https://leetcode.com/problems/minimum-depth-of-binary-tree/
import TreeNode from "../../common/TreeNode/index.js";
function minDepthBFS(root) {
    if (!root)
        return 0;
    const queue = [[root, 1]];
    while (queue) {
        let [curNode, curDepth] = queue.shift();
        if (!(curNode === null || curNode === void 0 ? void 0 : curNode.left) && !(curNode === null || curNode === void 0 ? void 0 : curNode.right)) {
            return curDepth;
        }
        curDepth++;
        curNode.left && queue.push([curNode.left, curDepth]);
        curNode.right && queue.push([curNode.right, curDepth]);
    }
    return 0;
}
;
console.log(minDepthBFS(new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6, null, null)))))));
