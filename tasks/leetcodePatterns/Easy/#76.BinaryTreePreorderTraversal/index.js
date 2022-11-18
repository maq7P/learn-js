//https://leetcode.com/problems/binary-tree-preorder-traversal/
function preorderTraversal(root) {
    if (!root)
        return [];
    const traversal = (node, acc) => {
        if (node === null || node === void 0 ? void 0 : node.left) {
            acc.push(node === null || node === void 0 ? void 0 : node.left.val);
            traversal(node === null || node === void 0 ? void 0 : node.left, acc);
        }
        if (node === null || node === void 0 ? void 0 : node.right) {
            acc.push(node === null || node === void 0 ? void 0 : node.right.val);
            traversal(node === null || node === void 0 ? void 0 : node.right, acc);
        }
        return acc;
    };
    return traversal(root, [root.val]);
}
;
export {};
