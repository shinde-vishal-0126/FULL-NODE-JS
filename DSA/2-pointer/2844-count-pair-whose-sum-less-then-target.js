/*
@ 2844 - count pair whose sum is less then target.

    # Give a o index of length n & an integer target return the number of paris (i,j)

*/

let nums = [-1, 1, 2, 3, 1];
let target = 2;

function countOfPairs(nums, target) {
  // Sort the array in ascending order
  // Example: [-1, 1, 2, 3, 1] -> [-1, 1, 1, 2, 3]
  nums.sort((a, b) => a - b);

  let left = 0;

  // Right pointer starts from the last index
  let right = nums.length - 1;

  // Variable to store the total number of valid pairs
  let count = 0;

  // Continue until left and right pointers meet
  while (left < right) {
    // Calculate the sum of values at left and right
    let sum = nums[left] + nums[right];

    // If the sum is less than target,
    // then nums[left] can form a valid pair
    // with every element between left and right.
    if (sum < target) {
      // Number of valid pairs = right - left
      count = count + (right - left);

      // Move left pointer forward
      left++;
    } else {
      // Sum is greater than or equal to target,
      // so move right pointer backward
      right--;
    }
  }

  // Return total number of valid pairs
  return count;
}

console.log(countOfPairs(nums, target));
