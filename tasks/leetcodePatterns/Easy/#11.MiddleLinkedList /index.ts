//https://leetcode.com/problems/middle-of-the-linked-list/
import ListNode from "../ListNode/index";

function middleNode(head: ListNode | null): ListNode | null {
  if (!head) return null

  let fast = head
  let slow = head

  while (slow.next && fast.next) {
    slow = slow.next

    if(fast.next.next){
      fast = fast.next.next
    }
  }

  return slow
}