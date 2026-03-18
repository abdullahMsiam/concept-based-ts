var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function detectCycle(head) {
    var set = new Set();
    while (head) {
        if (set.has(head)) {
            return head;
        }
        set.add(head);
        head = head.next;
    }
    return null;
}
console.log(detectCycle(new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4))))));
