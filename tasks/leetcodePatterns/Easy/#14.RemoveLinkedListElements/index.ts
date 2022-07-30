//https://leetcode.com/problems/remove-linked-list-elements/

import ListNode from "../../common/ListNode/index";

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if(!head) return null

  const result = new ListNode(0)
  result.next = head

  let cur: ListNode | null = result

  while(cur?.next){
    if(cur.next.val === val) {
      cur.next = cur.next?.next || null
    } else {
      cur = cur.next
    }
  }

  return result.next
}