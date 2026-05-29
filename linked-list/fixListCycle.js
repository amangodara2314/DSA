/*

Problem Description
Given only the head of a linked list, check whether the linked list contains a cycle or not. If the linked list does not contain a cycle, return false, otherwise remove the cycle and return true.

Assume that cycle doesn't start on the head node.

Assume 0-based indexing.

Input format
First line contains an integer N - Number of nodes in the linked list.

Second line contains N integers representing the linked list.

Third line contains one integer K - The index to which the tail connects to, i.e, the start of the cycle (-1 in case of no cycle).

Output format
Return true or false depending on whether the linked list contains cycle or not. If the answer is true modify the linked list and remove the cycle.

Sample Input 1
5

1 2 3 4 5

2

Sample Output 1
true

1 2 3 4 5
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

function solve(head) {
  if (!head || !head.next) {
    return false;
  }

  const map = new Map();

  while (head) {
    if (head.next && map.has(head.next)) {
      head.next = null;
      return true;
    }

    map.set(head, 1);
    head = head.next;
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
