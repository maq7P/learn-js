//https://leetcode.com/problems/merge-two-sorted-lists/

import ListNode from "../../common/ListNode/index";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let merged = new ListNode(0)

  const res = merged
  while(list1 && list2){

    if(list1.val < list2.val){
      merged.next = new ListNode(list1.val)
      list1 = list1.next
    } else {
      merged.next = new ListNode(list2.val)
      list2 = list2.next
    }

    merged = merged.next
  }

  while(list1){
    merged.next = new ListNode(list1.val)
    list1 = list1.next
    merged = merged.next
  }

  while(list2){
    merged.next = new ListNode(list2.val)
    list2 = list2.next
    merged = merged.next
  }

  return res.next

}