//https://leetcode.com/problems/middle-of-the-linked-list/
import ListNode from "../../common/ListNode/index.js";

function middleNode(head: ListNode | null): ListNode | null {
  if (!head) return null

  let fast: ListNode | null = head
  let slow: ListNode | null = head

  while (slow.next && fast?.next) {
    slow = slow.next
    fast = fast.next?.next
  }

  return slow
}

console.log(middleNode(new ListNode(
  1, new ListNode(
    2, new ListNode(
      3, new ListNode(
        4, new ListNode(
          5, new ListNode(
            6
          )
        )
      )
    )
  )
)));