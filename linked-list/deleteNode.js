class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function createList(arr) {
  if (!arr.length) return null;

  let head = new ListNode(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }

  return head;
}

function solve(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

function printList(head) {
  let result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  console.log(result);
}

// TEST CASE 1
// Delete node with value 2

let head1 = createList([1, 5, 2, 4, 3]);
let node1 = head1.next.next;

solve(node1);

printList(head1);
// Expected: [1, 5, 4, 3]

// TEST CASE 2
// Delete node with value 3

let head2 = createList([1, 2, 3, 4, 5]);
let node2 = head2.next.next;

solve(node2);

printList(head2);
// Expected: [1, 2, 4, 5]

// TEST CASE 3
// Delete node with value 20

let head3 = createList([10, 20, 30]);
let node3 = head3.next;

solve(node3);

printList(head3);
// Expected: [10, 30]

// TEST CASE 4
// Delete node with value 4

let head4 = createList([1, 2, 3, 4, 5, 6]);
let node4 = head4.next.next.next;

solve(node4);

printList(head4);
// Expected: [1, 2, 3, 5, 6]

// TEST CASE 5
// Delete node with value -3

let head5 = createList([-1, -2, -3, -4]);
let node5 = head5.next.next;

solve(node5);

printList(head5);
// Expected: [-1, -2, -4]

// TEST CASE 6
// Delete node with value 200

let head6 = createList([100, 200, 300, 400]);
let node6 = head6.next;

solve(node6);

printList(head6);
// Expected: [100, 300, 400]
