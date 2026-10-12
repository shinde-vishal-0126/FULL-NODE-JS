/*
@ LeetCode 167 — Two Sum II: Input Array Is Sorted
  - Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
  - Return the indices of the two numbers as [index1, index2], where:
    - 1 <= index1 < index2 <= numbers.length
    - There is exactly one solution.
    - You cannot use the same element twice.
     - Your solution should use constant extra space.

*/
//  0,   1  2,  3
let nums = [2, 7, 11, 15];
// i   j
let target = 9;
function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left + 1, right + 1];
      
    }
  }
}

console.log(twoSum(nums, target));
