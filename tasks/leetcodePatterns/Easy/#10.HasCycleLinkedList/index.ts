//https://leetcode.com/problems/linked-list-cycle/
import ListNode from "../ListNode/index";

function hasCycle(head: ListNode | null): boolean {
  if(!head) return false

  let fast = head
  let slow = head

  while(slow.next && fast.next && fast.next.next){
    slow = slow.next
    fast = fast.next.next

    if(fast === slow) return true
  }

  return false
}
