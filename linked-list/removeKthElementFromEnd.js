/*
Given the head of a linked list and an integer n, remove the nth node from the end of the list and return its head.

Example 1:

Input: head = [1,2,3,4], n = 2

Output: [1,2,4]
Example 2:

Input: head = [5], n = 1

Output: []
Example 3:

Input: head = [1,2], n = 2

Output: [2]
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

function solve(head, k) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  for (let i = 1; i < k + 1; i++) {
    if (!fast.next) {
      head = head.next;
      return head;
    }
    fast = fast.next;
  }

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

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

printList(solve(createList([1, 2]), 2));
// [2]

printList(solve(createList([1, 2, 3]), 1));
// [1,2]

printList(solve(createList([1, 2, 3]), 2));
// [1,3]

printList(solve(createList([1, 2, 3, 4, 5]), 2));
// [1,2,3,5]
