function findTarget(root, k) {
    const seen = new Set();
    const stack = [root];
    while (!!stack.length) {
        const cur = stack.pop();
        if (cur) {
            if (seen.has(k - cur.val))
                return true;
            seen.add(cur.val);
            if (cur.left) {
                stack.push(cur.left);
            }
            if (cur.right) {
                stack.push(cur.right);
            }
        }
    }
    return false;
}
;
export {};
