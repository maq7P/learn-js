//https://leetcode.com/problems/invert-binary-tree/
function invertTree(root) {
    if (!root)
        return null;
    const oldRight = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(oldRight);
    return root;
}
;
export {};
