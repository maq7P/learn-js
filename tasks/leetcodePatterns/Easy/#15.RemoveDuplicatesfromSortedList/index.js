//https://leetcode.com/problems/remove-duplicates-from-sorted-list/
import ListNode from "../ListNode/index";
function deleteDuplicates(head) {
    var _a, _b;
    if (!head)
        return null;
    const result = new ListNode(0);
    result.next = head;
    let cur = result;
    while (cur === null || cur === void 0 ? void 0 : cur.next) {
        if (cur.next.val === ((_b = (_a = cur.next) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.val)) {
            cur.next = cur.next.next;
        }
        else {
            cur = cur.next;
        }
    }
    return result.next;
}
