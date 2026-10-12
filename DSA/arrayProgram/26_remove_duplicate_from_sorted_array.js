/*
* LeetCode 26 — Remove Duplicates from Sorted Array
    - Problem: Given a sorted array nums, remove duplicates in-place such that each unique element appears only once.
    - Return the number of unique elements
    - Input: nums = [1,1,2]
    - Output: 2
    apprach : 2 pinter -> Because the array is already sorted, duplicate elements are adjacent.
*/

// make sure array are sorted
//          0  1  2
let nums = [1, 1, 2, 2, 3, 4, 4]
//             i
//                 j
// [1, 2, 3, 4, 4, 4 ]
//              i
//                      j
function removeDuplicates(nums) {

    if (nums.length === 0) return 0

    let i = 0;
    // 1
    for (let j = 1; j < nums.length; j++) {
        // console.log(nums.length)
        if (nums[i] !== nums[j]) {
            i = i + 1
            nums[i] = nums[j]
        }
    }
    return i + 1
}

console.log(removeDuplicates(nums))
