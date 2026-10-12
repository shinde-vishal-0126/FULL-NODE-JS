/*
@ 344 - Reverse String

  # Write a function that reverses a string. The input string is given as an array of characters s.
  
  # You must do this by modifying the input array in-place with O(1) extra memory.

*/

let s = ["h", "e", "l", "l", "o"];
//        i               j

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {

    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
  return s;
}
console.log(reverseString(s));
