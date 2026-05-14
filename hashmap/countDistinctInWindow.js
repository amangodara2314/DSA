/*
Problem Description
Given an array of N elements and an integer B, you have to find the count of distinct numbers in all windows of size B.

You have to return an array of size N-B+1 where i'th element in the array is the number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1. If B > N, return an empty array.

Input format
There are 2 lines of input

First line contains two space separated integers N and B.

Second line contains N space separated integers representing the array A.

Output format
Return the array space separated in the first line.

Function definition
You have to implement the given function. It accepts three arguments - n, b and the input array. You have to return the new array as described.

Sample Input 1
6 3

1 2 1 3 4 3

Sample Output 1
2 3 3 2

Explanation
First range will be [1,2,1] , in which number of distinct elements are 2

Second range will be [2,1,3], in which number of distinct elements are 3

Third range will be [1,3,4], in which number of distinct elements are 3

Fourth range will be [3,4,3], in which number of distinct elements are 2

Constraints
1<=N<=100000

1<=B<=100000

1<=Ai<=10000
*/

const countDistinctInWindow = (arr, b) => {
  let left = 0;
  let result = [];
  let freq = new Map();

  for (let right = 0; right < arr.length; right++) {
    const element = arr[right];
    freq.set(element, (freq.get(element) || 0) + 1);

    if (right - left + 1 > b) {
      const leftElement = arr[left];
      freq.set(leftElement, freq.get(leftElement) - 1);

      if (freq.get(leftElement) === 0) {
        freq.delete(leftElement);
      }

      left++;
    }

    if (right - left + 1 === b) {
      result.push(freq.size);
    }
  }

  return result;
};

console.log(countDistinctInWindow([1, 2, 1, 3, 4, 3], 3));
