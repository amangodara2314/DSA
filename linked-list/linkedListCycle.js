/*

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function createList(arr, pos) {
  if (!arr.length) return null;
  const nodes = arr.map((val) => new ListNode(val));
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  if (pos !== -1) {
    nodes[nodes.length - 1].next = nodes[pos];
  }
  return nodes[0];
}

// with hash map solution
// O(n) time and space complexity

// function solve(head) {
//   if (!head || !head.next) {
//     return false;
//   }

//   const map = new Map();

//   while (head) {
//     if (head.next && map.has(head.next)) {
//       return true;
//     }

//     map.set(head, 1);
//     head = head.next;
//   }

//   return false;
// }

// with two pointer solution
// O(n) - time complexity and O(1) space complexity

function solve(head) {
  if (!head || !head.next) {
    return false;
  }
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }

  return false;
}

// TEST CASES

const head1 = createList([3, 2, 0, -4], 1);
console.log(solve(head1)); // true

const head2 = createList([1, 2], 0);
console.log(solve(head2)); // true

const head3 = createList([1], -1);
console.log(solve(head3)); // false

const head4 = createList([1, 2, 3, 4], -1);
console.log(solve(head4)); // false
