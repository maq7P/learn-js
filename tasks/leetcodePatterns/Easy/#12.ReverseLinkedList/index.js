//https://leetcode.com/problems/reverse-linked-list/
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
export {};
