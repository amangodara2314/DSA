/*

You are given the head of a singly linked-list.

The positions of a linked list of length = 7 for example, can intially be represented as:

[0, 1, 2, 3, 4, 5, 6]

Reorder the nodes of the linked list to be in the following order:

[0, 6, 1, 5, 2, 4, 3]

Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:

[0, n-1, 1, n-2, 2, n-3, ...]

You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.

Example 1:

Input: head = [2,4,6,8]

Output: [2,8,4,6]
Example 2:

Input: head = [2,4,6,8,10]

Output: [2,10,4,8,6]

*/

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

function printList(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result);
}

// with array solution
// O(n) time and space complexity

// function solve(head) {
//   const nodes = [];

//   let curr = head;

//   while (curr) {
//     nodes.push(curr);
//     curr = curr.next;
//   }

//   curr = head;
//   const n = nodes.length;
//   let i = 1;

//   while (i <= n - i) {
//     curr.next = nodes[n - i];
//     curr = curr.next;
//     curr.next = nodes[i];
//     curr = curr.next;
//     i++;
//   }

//   curr.next = null;

//   return head;
// }

// with two pointer solution
// O(n) time complexity and O(1) space complexity

function solve(head) {
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  slow.next = null;

  let prev = null;
  while (second) {
    const next = second.next;
    second.next = prev;
    prev = second;
    second = next;
  }

  let first = head;
  second = prev;

  while (second) {
    const next1 = first.next;
    const next2 = second.next;

    first.next = second;
    second.next = next1;

    first = next1;
    second = next2;
  }

  return head;
}

// TEST CASES

printList(solve(createList([2, 4, 6, 8])));
// Expected: [2, 8, 4, 6]

printList(solve(createList([2, 4, 6, 8, 10])));
// Expected: [2, 10, 4, 8, 6]

printList(solve(createList([1, 2, 3, 4, 5, 6, 7])));
// Expected: [1, 7, 2, 6, 3, 5, 4]

printList(solve(createList([1, 2, 3, 4, 5, 6])));
// Expected: [1, 6, 2, 5, 3, 4]
