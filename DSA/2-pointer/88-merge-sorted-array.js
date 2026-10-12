/*
@ 88. Merge Sorted Array
- You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
- Merge nums1 and nums2 into a single array sorted in non-decreasing order.
- The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

*/

// in this code used 3 pointer

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;

let nums2 = [2, 5, 6];
let n = 3;

function MergeSortedArray(nums1, m, nums2, n) {
  let i = m - 1; // Last valid element in nums1
  let j = n - 1; // Last element in nums2
  let k = m + n - 1; // Last position in nums1

  // Compare from the end and put the bigger element at k
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
  }

  // If nums2 still has elements, copy them
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }

  return nums1;
}

console.log(MergeSortedArray(nums1, m, nums2, n));
