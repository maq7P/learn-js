//https://leetcode.com/problems/delete-node-in-a-linked-list/
function deleteNode(node) {
    if (node && node.next) {
        node.val = node.next.val;
        node.next = node.next.next;
    }
}
;
export {};
