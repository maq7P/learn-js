//https://leetcode.com/problems/binary-tree-preorder-traversal/
function preorderTraversal(root) {
    return root ? [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : [];
}
;
export {};
