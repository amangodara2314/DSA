/*
    Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

    Example 1:

    Input: nums = [1,2,3,1]

    Output: true

    Explanation:

    The element 1 occurs at the indices 0 and 3.

    Example 2:

    Input: nums = [1,2,3,4]

    Output: false

    Explanation:

    All elements are distinct.
*/

const containsDuplicate = function (nums) {
  if (nums.length == 1) return false;
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const updatedCount = (map.get(num) || 0) + 1;

    if (updatedCount > 1) return true;

    map.set(num, updatedCount);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
