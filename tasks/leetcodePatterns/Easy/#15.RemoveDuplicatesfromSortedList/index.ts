//https://leetcode.com/problems/remove-duplicates-from-sorted-list/

import ListNode from "../ListNode/index";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if(!head) return null

  const result = new ListNode(0)
  result.next = head

  let cur: ListNode | null = result

  while(cur?.next){
    if(cur.next.val === cur.next?.next?.val){
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return result.next
}