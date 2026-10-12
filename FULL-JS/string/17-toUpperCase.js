/*
# String.toUpperCase()
Syntax:
string.toUpperCase()
    - toUpperCase() method is used to convert all lowercase characters in a string into uppercase characters.
    - It returns a NEW string.
    - It does NOT modify the original string because strings in JavaScript are immutable.
    - Characters that are already uppercase remain unchanged.
    - Numbers, spaces, and special characters are not affected.
    - toUpperCase() takes no arguments.
    - It is commonly used for case-insensitive comparisons.

# Example 1: Basic Usage
*/

let str = "vishal shinde";
const newStr = str.toUpperCase();
console.log("New String:", newStr);
console.log("Original String:", str);

// # Example 2: Mixed Case
const str1 = "JavaScript Is Awesome!";
console.log(str1.toUpperCase());

// # Example 3: Numbers and Special Characters : Numbers and special characters remain unchanged.
const str2 = "hello 123! @javascript";
console.log(str2.toUpperCase());

// # Example 4: Already Uppercase (in remains unchanged)
const str3 = "HELLO WORLD";
console.log(str3.toUpperCase());

// # Example 5: Case-Insensitive Comparison
const input = "hello";
const expected = "HELLO";
console.log(input.toUpperCase() === expected.toUpperCase());

// # Original String Is Not Modified
const original = "hello";
const upper = original.toUpperCase();
console.log(original);
console.log(upper);

/*
# toUpperCase() vs toLocaleUpperCase()

   - toUpperCase() → Converts characters using default Unicode rules.
   - toLocaleUpperCase() → Converts characters based on locale-specific rules.
   - For normal use cases: toUpperCase() is commonly used.

# Interview Points
   1. toUpperCase() converts lowercase characters to uppercase.
   2. Returns a new string.
   3. Does not modify the original string.
   4. Strings are immutable in JavaScript.
   5. Numbers and special characters remain unchanged.
   6. Takes no arguments.
   7. Commonly used for case-insensitive comparisons.

# NOTE

| Method                | Purpose                              |
| --------------------- | ------------------------------------ |
| `toLowerCase()`       | Converts string to lowercase         |
| `toUpperCase()`       | Converts string to uppercase         |
| `toLocaleLowerCase()` | Locale-specific lowercase conversion |
| `toLocaleUpperCase()` | Locale-specific uppercase conversion |



   */
