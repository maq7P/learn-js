//https://leetcode.com/problems/linked-list-cycle/

import ListNode from "../../common/ListNode/index";

function hasCycle(head: ListNode | null): boolean {
  const set = new Set()

  while(head){
    if(set.has(head)){
      return true
    }

    set.add(head)
    head = head.next
  }

  return false
}