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

function solve(head) {
  if (!head || !head.next) return head;
  let prev = null;
  let slow = head;
  let fast = head;

  while (fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next;
    if (!fast.next) break;
    fast = fast.next;
  }

  prev.next = slow.next || null;
  slow.next = head;
  head = slow;

  return head;
}

function printList(head) {
  let result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  console.log(result);
}

// TEST CASES

printList(solve(createList([])));
// Expected: []

printList(solve(createList([5])));
// Expected: [5]

printList(solve(createList([1, 2])));
// Expected: [2,1]

printList(solve(createList([1, 2, 3])));
// Expected: [2,1,3]

printList(solve(createList([1, 2, 3, 4])));
// Expected: [3,1,2,4]

printList(solve(createList([1, 2, 3, 4, 5])));
// Expected: [3,1,2,4,5]

printList(solve(createList([2, 3, 4, 5, 6, 7])));
// Expected: [5,2,3,4,6,7]

printList(solve(createList([1, 2, 3, 4, 5, 6])));
// Expected: [4,1,2,3,5,6]

printList(solve(createList([1, 2, 3, 4, 5, 6, 7])));
// Expected: [4,1,2,3,5,6,7]

printList(solve(createList([1, 2, 3, 4, 5, 6, 7, 8])));
// Expected: [5,1,2,3,4,6,7,8]

printList(solve(createList([-5, -4, -3, -2, -1])));
// Expected: [-3,-5,-4,-2,-1]

printList(solve(createList([1, 1, 1, 1, 1])));
// Expected: [1,1,1,1,1]
