//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let length = 0;
  let current = head;

  while (current) {
    length++;
    current = current.next;
  }

  let middleIndex = Math.floor(length / 2);
  current = head;
  for (let i = 0; i < middleIndex; i++) {
    current = current!.next;
  }
  console.log(current);
  return current;
}

middleNode(
  new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
  ),
);
