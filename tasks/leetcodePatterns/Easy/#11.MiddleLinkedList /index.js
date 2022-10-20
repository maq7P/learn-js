//https://leetcode.com/problems/middle-of-the-linked-list/
import ListNode from "../../common/ListNode/index.js";
function middleNode(head) {
    var _a;
    if (!head)
        return null;
    let fast = head;
    let slow = head;
    while (slow.next && (fast === null || fast === void 0 ? void 0 : fast.next)) {
        slow = slow.next;
        fast = (_a = fast.next) === null || _a === void 0 ? void 0 : _a.next;
    }
    return slow;
}
console.log(middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))));
