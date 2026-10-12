/*
# `trimStart()` Method
    - The `trimStart()` method removes **whitespace from the beginning (left side)** of a string.
Syntax
string.trimStart()
- Important Points
    - `trimStart()` removes whitespace from the start/left side of the string.
    - It returns a new string.
    - It does not modify the original string because strings are immutable in JavaScript.
    -  Whitespace includes:
        * Spaces
        * Tabs (`\t`)
        * New lines (`\n`)
        * Other JavaScript whitespace characters
    - It does not remove whitespace from the end/right side.
    - It does not remove whitespace between words.
    - If there is no whitespace at the beginning, it returns the **same string content**.
    - trimLeft() is an alias of `trimStart().
    - The leading spaces are removed,but the spaces at the end rem
    - Only the beginning is checked, so the trailing spaces remain.
        * Leading spaces → removed
        * Spaces between `Hello` and `World` → remain
        * Trailing spaces → remain

# `trim()` vs `trimStart()` vs `trimEnd()`

| Method        | Removes whitespace from |
| ------------- | ----------------------- |
| `trim()`      | Both start and end      |
| `trimStart()` | Start / left side only  |
| `trimEnd()`   | End / right side only   |

*/
// example 1 : The leading spaces are removed, but the spaces at the end remain.
let str = " vishal shinde at post wadGaon sahani ";
console.log("Length of original string:", str.length);
const newStr = str.trimStart();
console.log("newStr:", newStr);
console.log("Length of trimmed string:", newStr.length);

// No whitespace at the beginning : Only the beginning is checked, so the trailing spaces remain
let str1 = "Hello World ";
console.log(str1.trimStart());
// Whitespace between words
let str4 = " Hello World ";
console.log(str4.trimStart());
// Notice that:
// Leading spaces → removed
// Spaces between Hello and World → remain
// Trailing spaces → remain

let str6 = " Hello World ";
console.log(str6.trim()); // "Hello World"
console.log(str6.trimStart()); // "Hello World "
console.log(str6.trimEnd()); // " Hello World"
