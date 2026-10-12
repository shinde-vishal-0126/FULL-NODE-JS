/*
# String.toLowerCase()
Syntax:
string.toLowerCase()
    - toLowerCase() method is used to convert all uppercase characters in a string into lowercase characters.
    - It returns a NEW string.
    - It does NOT modify the original string because JavaScript strings are immutable.
    - If the string already contains lowercase characters, they remain unchanged.
    - Numbers, spaces, and special characters are not affected.
    - toLowerCase() takes no arguments.
    - It is useful for case-insensitive comparisons.
*/

// # Example 1: Basic Usage
let str = "VISHal Shinde";
const newStr = str.toLowerCase();
console.log("New String:", newStr);
console.log("Original String:", str);


// # Example 2: Already Lowercase they remains unchanges.
const str1 = "hello world";
console.log(str1.toLowerCase());
// "hello world"

// # Example 3: Numbers and Special Characters (does not affected) Numbers and special characters remain unchanged.
const str2 = "HELLO 123! @JavaScript";
console.log(str2.toLowerCase());


// # Example 4: Case-Insensitive Comparison
const input = "HELLO";
const expected = "hello";
console.log(input.toLowerCase() === expected.toLowerCase());

// # Example 5: Search Ignoring Case
const text = "Hello JavaScript";
console.log(
    text.toLowerCase().includes("javascript".toLowerCase())
);
// # Original String Is Not Modified

const original = "HELLO";
const lower = original.toLowerCase();
console.log(original);
console.log(lower);

// # toLowerCase() vs toLocaleLowerCase()
// toLowerCase() → Converts string to lowercase using default Unicode rules.
// toLocaleLowerCase() → Converts string based on locale-specific rules.
// For normal use cases: toLowerCase() is commonly used.


/*
# Interview Points
    1. toLowerCase() converts uppercase characters to lowercase.
    2. Returns a new string.
    3. Does not modify the original string.
    4. Strings are immutable in JavaScript.
    5. Numbers and special characters are unaffected.
    6. Takes no arguments.
    7. Commonly used for case-insensitive comparison.
*/
