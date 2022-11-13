//https://leetcode.com/problems/delete-node-in-a-linked-list/

import ListNode from "../../common/ListNode/index.js";

function deleteNode(node: ListNode | null): void {
  if(node && node.next){
    node.val = node.next.val
    node.next = node.next.next
  }
};