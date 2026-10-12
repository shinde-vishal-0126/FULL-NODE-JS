/*
@ 125 - valid palindrome

  # A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

  # Given a string s, return true if it is a palindrome, or false otherwise.

  # Input: s = "A man, a plan, a canal: Panama"
*/
let s = "A man, a plan, a canal: Panama";

function validPalindrome(s) {
  // To convert into lowerCase
  s = s.toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !/[a-z0-9]/.test(s[left])) {
      left = left + 1;
    }
    while (left < right && !/[a-z0-9]/.test(s[right])) {
      right = right - 1;
    }

    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }
  return true;
}

console.log(validPalindrome(s));
