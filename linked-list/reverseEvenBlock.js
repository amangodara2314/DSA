/*
Problem Description
Given a singly linked list of integers, reverse every contiguous set of nodes that have only even values.

Input format
N - An integer denoting the number of nodes in the linked list.

N integers follow where ith integer denotes the ith node value in the linked list

Output format
Return the head of the modified list

Constraints
0 <= N <= 10^5

-10^9 <= value <= 10^9

Sample Input 1
8

1 2 3 3 4 6 8 5

Sample Output 1
1 2 3 3 8 6 4 5

Explanation 1
There are two sublists of even elements, which [2] and [4->6->8]. The sublist [4->6->8] has been reversed and the single sublist [2] need not be reversed.

Sample Input 2
6

1 3 2 5 4 6

Sample Output 2
1 3 2 5 6 4

Explanation 2
There are two sublists of even elements which are [2] and [4 6]. The [4,6] sublist has been reversed and the single sublist [2] need not be reversed. Rest of the odd values remain constant.
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

function solve(head) {
  if (!head || !head.next) return head;

  let prev = null;
  let curr = head;

  while (curr) {
    if (curr.val % 2 == 0) {
      let innerPrev = null;
      let innerCurr = curr;

      while (innerCurr && innerCurr.val % 2 == 0) {
        let next = innerCurr.next;
        innerCurr.next = innerPrev;
        innerPrev = innerCurr;
        innerCurr = next;
      }
      if (prev) {
        prev.next = innerPrev;
      } else {
        head = innerPrev;
      }
      curr.next = innerCurr;
    }
    prev = curr;
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

// TEST CASE 1

printList(solve(createList([1, 2, 3, 3, 4, 6, 8, 5])));
// Expected: [1, 2, 3, 3, 8, 6, 4, 5]

// TEST CASE 2
printList(solve(createList([1, 3, 2, 5, 4, 6])));

// Expected: [1, 3, 2, 5, 6, 4]

// TEST CASE 3
printList(solve(createList([2, 4, 6, 8, 10])));
// Expected: [2, 10, 8, 6, 4]

// TEST CASE 4
printList(solve(createList([1, 3, 5, 7])));
// Expected: [1, 3, 5, 7]

// TEST CASE 5
printList(solve(createList([2, 4, 6, 1, 8, 10])));
