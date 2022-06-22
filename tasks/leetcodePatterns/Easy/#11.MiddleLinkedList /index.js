function middleNode(head) {
    if (!head)
        return null;
    let fast = head;
    let slow = head;
    while (slow.next && fast.next) {
        slow = slow.next;
        if (fast.next.next) {
            fast = fast.next.next;
        }
    }
    return slow;
}
export {};
