//https://leetcode.com/problems/sum-of-left-leaves/
function sumOfLeftLeavesIterable(root) {
    if (!root)
        return 0;
    const stack = [[root, false]];
    let res = 0;
    while (stack.length) {
        const [cur, isLeft] = stack.pop();
        if (isLeft && !cur.left && !cur.right) {
            res += cur.val;
        }
        if (cur.left) {
            stack.push([cur.left, true]);
        }
        if (cur.right) {
            stack.push([cur.right, false]);
        }
    }
    return res;
}
;
export {};
