function reverseList(head) {
    if (!head)
        return null;
    let prev = null;
    let cur = head;
    while (cur) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}
function checkLen(head) {
    let len = 0;
    while (head === null || head === void 0 ? void 0 : head.next) {
        len++;
        head = head.next;
    }
    return len;
}
function addTwoNumbers(l1, l2) {
    const reversedL1 = reverseList(l1);
    const reversedL2 = reverseList(l2);
    const reversedL1WithLen = {
        len: checkLen(reversedL1),
        list: reversedL1
    };
    const reversedL2WithLen = {
        len: checkLen(reversedL2),
        list: reversedL1
    };
    const longTerm = reversedL1WithLen.len > reversedL2WithLen.len
        ? reversedL1WithLen.list : reversedL2WithLen.list;
    const shortTerm = reversedL1WithLen.len <= reversedL2WithLen.len
        ? reversedL1WithLen.list : reversedL2WithLen.list;
    let sumList = longTerm;
    while (sumList && longTerm && shortTerm && shortTerm.next) {
        const curSum = shortTerm.val + longTerm.val;
        sumList.val = curSum;
    }
    return null;
}
;
export {};
