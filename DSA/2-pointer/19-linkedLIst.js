/*
# remove nth node from end of the linked list
  - Give the head of linked list remove the nth node from the end of the list and return its head

*/
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeFromEnd(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}

function printList(head) {
  let current = head;

  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

// Create linked list: 1 → 2 → 3 → 4 → 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Call function
let result = removeFromEnd(head, 2);

// Print result
printList(result);
