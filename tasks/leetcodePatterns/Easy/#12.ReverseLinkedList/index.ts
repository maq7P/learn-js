//https://leetcode.com/problems/reverse-linked-list/

import ListNode from "../../common/ListNode/index";

function reverseList(head: ListNode | null): ListNode | null {
  if(!head) return null

  let prev: ListNode | null = null
  let cur: ListNode | null = head

  while(cur){
    let next: ListNode | null = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}