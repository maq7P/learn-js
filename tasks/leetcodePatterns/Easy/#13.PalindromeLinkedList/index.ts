//https://leetcode.com/problems/palindrome-linked-list/

import ListNode from "../../common/ListNode/index";

class Solution {
  static middleNode(head: ListNode | null): ListNode | null {
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

  static reverseList(head: ListNode | null): ListNode | null {
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
}

function isPalindrome(head: ListNode | null): boolean {
  if(!head) return false

  let middle = Solution.middleNode(head)
  let middleReverse = Solution.reverseList(middle)

  while(middleReverse && head){
    if(head.val !== middleReverse.val) return false

    head = head.next
    middleReverse = middleReverse.next

  }

  return true
}