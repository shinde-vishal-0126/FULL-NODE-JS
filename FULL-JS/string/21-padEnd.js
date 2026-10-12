/*
# String.padEnd()

Syntax:
string.padEnd(targetLength [, padString])
    - padEnd() adds padding characters to the END (right side) of a string until the string reaches the specified targetLength.
    - It returns a NEW string.
    - It does NOT modify the original string because strings are immutable.
    - targetLength specifies the DESIRED FINAL LENGTH of the string.
    - padString specifies the string/characters used for padding.
    - If padString is not provided, SPACE (" ") is used by default.
    - padString can be repeated multiple times if required.
    - If the padString is longer than the remaining required length, it is truncated to make the final string exactly targetLength.
    - If targetLength is less than or equal to the current string length, no padding is added and the string is returned unchanged.
    -  Padding is always added from the END / RIGHT side of the string.
*/
// # Example 1: Basic Padding
// "Hello" length = 5
// targetLength = 10
// Required padding = 10 - 5 = 5
const str = "Hello";
console.log(str.padEnd(10));
console.log(str.padEnd(10, "!"));

// # Example 2: Padding with Specific String
const str1 = "123";
console.log(str1.padEnd(8, "0"));
console.log(str1.padEnd(8, "abc"));
/* "123" length = 3
targetLength = 8
Required padding = 8 - 3 = 5
padString = "abc"
"abc" is repeated:
abcabc...
Only 5 characters are required:
abcab
Therefore:
"123" + "abcab" → "123abcab" */

// # Example 3: targetLength Less Than String Length
const str2 = "Hello, World!";
console.log(str2.padEnd(5));
/* Current string length = 13 targetLength = 5
Since targetLength is less than the current
string length, no padding is added. The string is returned unchanged. */

// # Example 4: targetLength Equal to String Length ==> Current string length = 5 targetLength = 5 No padding is required.
const str3 = "Hello";
console.log(str3.padEnd(5, "!"));

// # Example 5: Default padString : If padString is not provided, SPACE (" ") is used by default.
const str4 = "Hello";
console.log(str4.padEnd(8));

// # Example 6: padString Is Longer Than Required
const str5 = "Hello";
console.log(str5.padEnd(7, "abc"));

// # Example 7: Original String Is Not Modified The original string remains unchanged. padEnd() returns a NEW string.
const original = "Hello";
const result = original.padEnd(10, "!");
console.log(original);
console.log(result);


// # Example 8: Formatting Data
// padEnd() can be used to align text and create table-like output.
const items = [
    { name: "apple", price: 1.25 },
    { name: "banana", price: 0.75 },
    { name: "cherry", price: 2.50 }
];
for (const item of items) {
    const name = item.name.padEnd(10, " ");
    const price = item.price.toFixed(2).padEnd(5, " ");
    console.log(`${name} ${price}`);
}

// # padStart() vs padEnd()
// padStart() → Adds padding to the BEGINNING / LEFT side.
// padEnd() → Adds padding to the END / RIGHT side.
const value = "123";
console.log(value.padStart(5, "0"));
console.log(value.padEnd(5, "0"));

/*
# Important Interview Points

    1. padEnd() adds padding to the END / RIGHT side.
    2. targetLength represents the DESIRED FINAL LENGTH, not the number of characters to add.
    3. It returns a new string.
    4. It does not modify the original string.
    5. Strings are immutable.
    6. If targetLength is less than or equal to the current string length, no padding is added.
    7. If padString is not provided, SPACE (" ") is used.
    8. padString can be repeated when more padding is required.
    9. If padString is longer than the remaining required length,it is truncated.
    10. padEnd() is useful for formatting and aligning text.

Note
    - targetLength is converted to a number
    - If targetLength is 0 or negative, no padding is added.
    - If targetLength is NaN, it is treated like 0.
    - If targetLength is a decimal, it is converted to an integer.
    - If padString is an empty string, no padding is added.
    - If padString is omitted or undefined, spaces are used.
    - null as padString is converted to "null"
    - padEnd() works with multi-character strings, not just a single character
    - Unicode/emoji edge case — targetLength is based on JavaScript string length (UTF-16 code units), not necessarily what a user sees as characters.
    - padString is repeated as many times as necessary and truncated if required to reach exactly targetLength.
    - targetLength is NOT the number of padding characters. It is the final length of the entire string.

    padEnd(targetLength, padString)
             ↑          ↑
        final length   what to add

# Quick Memory Trick
    - padStart() → Padding → Start / Left
    - padEnd() → Padding → End / Right

# Important Difference
targetLength → Final desired length of the string.
padString → Character/string used to fill the remaining space.
*/
console.log("Hello".padEnd(10, "ab"));
// Current length = 5
// Target length  = 10
// Required padding = 5
// "ab" → "ababa"
// Final result
