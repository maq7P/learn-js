//https://leetcode.com/problems/remove-linked-list-elements/
import ListNode from "../../common/ListNode/index";
function removeElements(head, val) {
    var _a;
    if (!head)
        return null;
    const result = new ListNode(0);
    result.next = head;
    let cur = result;
    while (cur === null || cur === void 0 ? void 0 : cur.next) {
        if (cur.next.val === val) {
            cur.next = ((_a = cur.next) === null || _a === void 0 ? void 0 : _a.next) || null;
        }
        else {
            cur = cur.next;
        }
    }
    return result.next;
}
