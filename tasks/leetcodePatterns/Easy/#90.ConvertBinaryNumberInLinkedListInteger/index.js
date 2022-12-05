//https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
function getDecimalValue(head) {
    let node = head;
    let len = 0;
    while (node) {
        len++;
        node = node.next;
    }
    node = head;
    let res = 0;
    while (node) {
        res += Math.pow(2, (len - 1)) * node.val;
        node = node.next;
        len--;
    }
    return res;
}
;
export {};
