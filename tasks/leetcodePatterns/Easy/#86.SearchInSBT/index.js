//https://leetcode.com/problems/search-in-a-binary-search-tree
const search = (root, val) => {
    if (!root) {
        return null;
    }
    if (root.val === val) {
        return root;
    }
    else {
        if (val > root.val) {
            return root.right ? search(root.right, val) : null;
        }
        else
            return root.left ? search(root.left, val) : null;
    }
};
export {};
