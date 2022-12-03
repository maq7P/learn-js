import ListNode from "../../common/ListNode/index.js"

// example by decimal number 
// 1234
// ans = 0 * 10 + 1 = 1
// ans = 1 * 10 + 2 = 12
// ans = 12 * 10 + 3 = 123
// ans = 123 * 10 + 4 = 1234
// same way we can with binary number

function getDecimalValueBest(head: ListNode | null): number {
  let res = 0
  
  while(head){
    res = res * 2 + head.val
    head = head.next
  }

  return res
};