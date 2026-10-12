/*
# Chek Given string is palindrom or not ?
*/

let s = "madam";
// let s = 'level'
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      console.log("Not Palindrom");
      return;
    }
    left = left + 1;
    right = right - 1;
  }
  console.log("palindrom string");
}
isPalindrome(s);
