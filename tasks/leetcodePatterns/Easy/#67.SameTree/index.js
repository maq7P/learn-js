//https://leetcode.com/problems/same-tree/
function isSameTree(p, q) {
    if (!p && !q)
        return true;
    if (!p || !q)
        return false;
    const left = isSameTree(p.left, q.left);
    const right = isSameTree(p.right, q.right);
    return p.val === q.val && left && right;
}
;
export {};
