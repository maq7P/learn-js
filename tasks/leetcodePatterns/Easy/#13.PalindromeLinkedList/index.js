//https://leetcode.com/problems/palindrome-linked-list/
class Solution {
    static middleNode(head) {
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
    static reverseList(head) {
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
}
function isPalindrome(head) {
    if (!head)
        return false;
    let middle = Solution.middleNode(head);
    let middleReverse = Solution.reverseList(middle);
    while (middleReverse && head) {
        if (head.val !== middleReverse.val)
            return false;
        head = head.next;
        middleReverse = middleReverse.next;
    }
    return true;
}
export {};
