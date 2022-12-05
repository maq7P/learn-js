//https://leetcode.com/problems/range-sum-of-bst/
function rangeSumBST(root, low, high) {
    if (!root)
        return 0;
    let sum = 0;
    const recursiveSum = (node) => {
        if (!node) {
            return sum;
        }
        if (node.val >= low && high >= node.val) {
            sum += node.val;
        }
        recursiveSum(node.left);
        recursiveSum(node.right);
    };
    recursiveSum(root);
    return sum;
}
;
export {};
