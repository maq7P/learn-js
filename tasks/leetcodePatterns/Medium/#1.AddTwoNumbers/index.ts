//https://leetcode.com/problems/add-two-numbers/
import ListNode from "../../common/ListNode/index";

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null

  let prev: ListNode | null = null
  let cur: ListNode | null = head

  while (cur) {
    let next: ListNode | null = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}

function checkLen(head: ListNode | null): number {
  let len = 0;

  while (head?.next) {
    len++;
    head = head.next
  }

  return len
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const reversedL1 = reverseList(l1);
  const reversedL2 = reverseList(l2);

  const reversedL1WithLen = {
    len: checkLen(reversedL1),
    list: reversedL1
  }

  const reversedL2WithLen = {
    len: checkLen(reversedL2),
    list: reversedL1
  }

  const longTerm = reversedL1WithLen.len > reversedL2WithLen.len
    ? reversedL1WithLen.list : reversedL2WithLen.list;

  const shortTerm = reversedL1WithLen.len <= reversedL2WithLen.len
    ? reversedL1WithLen.list : reversedL2WithLen.list;


  let sumList = longTerm;
  while (sumList && longTerm && shortTerm && shortTerm.next) {
    const curSum = shortTerm.val + longTerm.val

    sumList.val = curSum
  }
  return null
};


