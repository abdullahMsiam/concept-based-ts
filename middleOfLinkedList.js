//  Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
/* Length বের করো:

* একটা variable length = 0 initialize করো।
* current = head set করো।
* while loop চালাও যতক্ষণ current null না হয়:
  ^ length++ করো।
  ^ current = current.next করো।
* এতে list এর total nodes count হয়ে যায়।
* Middle Index Calculate করো:

  ^ middleIndex = Math.floor(length / 2)।
~যেমন: length 5 হলে middleIndex = 2 (0-based index)।
~length 4 হলে middleIndex = 2 (second middle)।
* Middle Node Traverse করো:

* current = head reset করো।
* for loop চালাও i = 0 থেকে i < middleIndex পর্যন্ত:
* current = current!.next করো।
^ এতে middle position এ পৌঁছে যাবে।
*Return করো:

return current; (middle node)।


*/
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
