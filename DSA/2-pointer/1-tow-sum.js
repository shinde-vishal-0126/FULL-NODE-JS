/*
@ LeetCode 1: Two Sum
- Given an array nums and an integer target, return the indices of two numbers such that:nums[i] + nums[j] === target
- You may assume that exactly one solution exists.
*/

let nums = [2, 7, 11, 15];
let target = 9;

function twoSum(nums, target) {
  // used map to store the complement value
  let map = new Map();

  // iterate the nums array
  for (let i = 0; i < nums.length - 1; i++) {
    // 0, 1, 2,  3
    // 2, 7, 11, 15
    //    i=1
    // complement = 9 -7
    // 2

    // set (2:0)
    let complement = target - nums[i];
    console.log(complement);
    if (map.has(complement)) {
      console.log([map.get(complement), i]);
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}

console.log(twoSum(nums, target));
