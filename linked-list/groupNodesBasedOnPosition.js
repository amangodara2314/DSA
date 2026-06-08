/*
Problem Description
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

Input format
First line contains an integer N - Number of nodes in the linked list.

Second line contains N integers representing the linked list.

Output format
Return the head of the reordered linked list.

Sample Input 1
5

1 5 3 4 8

Sample Output 1
1 3 8 5 4

Explanation
Arranging the odd nodes first i.e. 1st, 3rd, 5th node and then the even nodes i.e. 2nd, 4th will give us 1, 3, 8, 5, 4.

Constraints
0 <= N <= 10^5

-10^9 <= Value of node <= 10^9
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
  if (!head || !head.next || !head.next.next) return head;

  let oddCurr = head;
  let evenCurr = head.next;
  let currPos = 3;
  let curr = evenCurr.next;

  while (curr) {
    let currNext = curr.next;
    if (currPos % 2 !== 0) {
      let next = oddCurr.next;
      oddCurr.next = curr;
      curr.next = next;
      oddCurr = oddCurr.next;
    } else {
      evenCurr.next = curr;
      evenCurr = evenCurr.next;
    }
    curr = currNext;
    currPos++;
  }

  evenCurr.next = null;

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
printList(solve(createList([1, 2, 3, 4, 5])));
// Expected: [1, 3, 5, 2, 4]

// TEST CASE 2
printList(solve(createList([1, 2, 3, 4, 5, 6])));
// Expected: [1, 3, 5, 2, 4, 6]

// TEST CASE 3
printList(solve(createList([1, 2, 3, 4, 5, 6, 7])));
// Expected: [1, 3, 5, 7, 2, 4, 6]

// TEST CASE 4
printList(solve(createList([1, 2, 3, 4, 5, 6, 7, 8])));
// Expected: [1, 3, 5, 7, 2, 4, 6, 8]

// TEST CASE 5
printList(solve(createList([1, 2, 3])));
// Expected: [1, 3, 2]

// TEST CASE 6
printList(solve(createList([1, 2, 3, 4])));
// Expected: [1, 3, 2, 4]

// TEST CASE 7
printList(solve(createList([1])));
// Expected: [1]

// TEST CASE 8
printList(solve(createList([1, 2])));
// Expected: [1, 2]

// TEST CASE 9
printList(solve(createList([1, 2, 3, 4, 5, 6, 7, 8, 9])));
// Expected: [1, 3, 5, 7, 9, 2, 4, 6, 8]

// TEST CASE 10
printList(solve(createList([10, 20, 30, 40, 50, 60, 70])));
// Expected: [10, 30, 50, 70, 20, 40, 60]
