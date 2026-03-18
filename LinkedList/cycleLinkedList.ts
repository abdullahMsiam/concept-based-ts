class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  const set = new Set<ListNode>();
  while (head) {
    if (set.has(head)) {
      return head;
    }
    set.add(head);
    head = head.next;
  }

  return null;
}

console.log(
  detectCycle(
    new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4)))),
  ),
);
