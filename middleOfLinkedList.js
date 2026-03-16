//  Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function middleNode(head) {
    var length = 0;
    var current = head;
    while (current) {
        length++;
        current = current.next;
    }
    var middleIndex = Math.floor(length / 2);
    current = head;
    for (var i = 0; i < middleIndex; i++) {
        current = current.next;
    }
    console.log(current);
    return current;
}
middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))));
