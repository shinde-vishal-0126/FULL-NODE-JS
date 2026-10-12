/*
# String.at(index)
Syntax:
string.at(index)
    - The at() method is used to access a character at a specified index in a string.
    - It supports both positive and negative indexes.
    - Positive index:
        - Starts counting from the beginning.
    - Negative index:
        - Starts counting from the end of the string.
    - If the specified index is out of range, it returns undefined.
    - It is similar to bracket notation ([]), but has one major advantage: at() supports negative indexing.
    - The at() method does not modify the original string.
    - at() can also be used with Arrays.
*/
const str = "Hello, World!";
console.log(str.at(0));   // "H"
console.log(str.at(7));   // "W"

// Negative Indexing
// Negative indexing starts from the end.
// -1 → Last character
// -2 → Second last character
// -3 → Third last character

console.log(str.at(-1));  // "!"
console.log(str.at(-2));  // "d"
console.log(str.at(-5));  // "o"

/* # Index Visualization
================================================
String:
H  e  l  l  o  ,     W  o  r  l  d  !
0  1  2  3  4  5  6  7  8  9  10 11 12
Negative indexes:
-13 -12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 */

// Out of Range it return undefined for both +ve and -ve index
console.log(str.at(15));
console.log(str.at(-20));
/* Valid indexes:
Positive: 0 → string.length - 1
Negative:-string.length → -1 */

// # More Examples
const str1 = "JavaScript";
console.log(str1.at(0));
console.log(str1.at(4));
console.log(str1.at(-1));
console.log(str1.at(-2));
console.log(str1.at(20));
console.log(str1.at(-20));

// # at() vs Bracket Notation []
const value = "Hello";
console.log(value.at(0));
console.log(value[0]);
console.log(value.at(-1));
console.log(value[-1]);
// Out of range
console.log(value.at(100));
console.log(value[100]);


// Main difference:
// 1. at() → Supports negative indexing
// 2. [] → Does NOT support negative indexing

// # at() vs charAt()
// at()
// 1. Supports positive indexes.
// 2. Supports negative indexes.
// 3. Out of range → undefined.
// charAt()
// 1. Supports positive indexes.
// 2. Does NOT support negative indexes.
// 3. Out of range → "".
console.log(value.at(-1));
console.log(value.charAt(-1));
console.log(value.at(100));
console.log(value.charAt(100));


// # Decimal Index
// Decimal values are converted to integers. 1.9 → 1
console.log("Hello".at(1.9));

// # at() with Array
const arr = [10, 20, 30, 40];
console.log(arr.at(0));
console.log(arr.at(-1));
console.log(arr.at(-2));


// # Original Value Is Not Modified
const original = "Hello";
const result = original.at(1);
console.log(result);
console.log(original);

// # Interview Comparison
// | Feature           | at()      | charAt() | []        |
// | ----------------- | --------- | -------- | --------- |
// | Positive index    | Yes       | Yes      | Yes       |
// | Negative index    | Yes       | No       | No        |
// | Out of range      | undefined | ""       | undefined |
// | Works with Arrays | Yes       | No       | Yes       |
