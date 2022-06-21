"use strict";
//https://leetcode.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function hasCycle(head) {
    if (!head)
        return false;
    let fast = head;
    let slow = head;
    while (slow.next && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow)
            return true;
    }
    return false;
}
