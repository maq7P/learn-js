//https://leetcode.com/problems/middle-of-the-linked-list/
import ListNode from "../../common/ListNode/index.js";
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
        else
            break;
    }
    return slow;
}
console.log(middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))));
