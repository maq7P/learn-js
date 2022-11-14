function inorderTraversal(root) {
    let cur = root, stack = [], ans = [];
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop() || null;
        cur && ans.push(cur.val);
        cur = (cur === null || cur === void 0 ? void 0 : cur.right) || null;
    }
    return ans;
}
;
export {};
