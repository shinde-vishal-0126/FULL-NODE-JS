/*
@ 977. Squares of a Sorted Array

# Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

*/
let nums = [-4, -1, 0, 3, 10];

function SquareOfSortedArray(nums) {
  let left = 0;
  let right = nums.length - 1;

  // create new array to store sorted value.
  let result = new Array(nums.length);
  let index = result.length - 1;

  while (left <= right) {
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left = left + 1;
    } else {
      result[index] = rightSquare;
      right = right - 1;
    }
    index = index - 1;
  }
  return result;
}

console.log(SquareOfSortedArray(nums));
