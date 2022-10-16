import ListNode from "../../common/ListNode/index.js";
function middleNode(head) {
    if (!head)
        return null;
    let firstWay = head, secondWay = head;
    let firstWayTemp = 0, secondWayTemp = 0;
    while (firstWay.next) {
        firstWayTemp++;
        firstWay = firstWay.next;
    }
    const middleIdx = Math.floor(firstWayTemp / 2) + (firstWayTemp % 2 === 1 ? 1 : 0);
    while (secondWay.next && middleIdx !== secondWayTemp) {
        secondWay = secondWay.next;
        secondWayTemp++;
    }
    return secondWay;
}
console.log(middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))));
