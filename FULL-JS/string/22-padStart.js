/*
# String.padStart()
Syntax:
string.padStart(targetLength [, padString])
    - padStart() adds padding characters to the START (left side) of a string until the string reaches the specified targetLength.
    - It returns a NEW string.
    - It does NOT modify the original string because strings are immutable.
    - targetLength specifies the DESIRED FINAL LENGTH of the string.
    - padString specifies the string/characters used for padding.
    - If padString is not provided, SPACE (" ") is used by default.
    - padString can be repeated multiple times if required.
    - If the padString is longer than the remaining required length, it is truncated to make the final string exactly targetLength.
    - If targetLength is less than or equal to the current string length, no padding is added and the string is returned unchanged.
    - Padding is always added from the START / LEFT side of the string.
    - Both padStart() and padEnd() are non-mutating methods.
*/

// # Example 1: Basic Padding
const str = "5";
console.log(str.padStart(3, "0"));
console.log(str.padStart(5, "x"));


// # Example 2: targetLength Less Than String Length
let st = "Hello";
let paddedStr = st.padStart(3, "*");
console.log(paddedStr);
/* Current string length = 5 targetLength = 3
- Since targetLength is less than the current string length, no padding is added.
- The original string content is returned unchanged. */

// # Example 3: Default Padding
const str1 = "hello";
console.log(str1.padStart(10));
/* If padString is not provided,SPACE (" ") is used by default.*/


// # Example 4: targetLength Equal to String Length
const str2 = "Hello";
console.log(str2.padStart(5, "*"));
/* Current length = 5 targetLength = 5 No padding is required. */


// # Example 5: Multi-Character Padding String
const str4 = "123";
console.log(str4.padStart(10, "abcdef"));
/* Current length = 3 targetLength = 10 Required padding = 10 - 3 = 7 padString = "abcdef"
Repeated: abcdefabcdef... Only 7 characters are required: abcdefa
Final result: "abcdefa" + "123" → "abcdefa123" */

// # Example 6: padString Is Longer Than Required
const str5 = "Hello";
console.log(str5.padStart(7, "abc"));
/* Current length = 5 targetLength = 7 Required padding = 2 padString = "abc" Only 2 characters are required. So "abc" is truncated to "ab".
Final result: "ab" + "Hello" → "abHello" */

//  # Example 7: Empty padString (can not padding)
const str6 = "Hello";
console.log(str6.padStart(10, ""));
/* An empty string cannot add padding, so the original string content is returned unchanged. */

// # Example 8: Original String Is Not Modified
const original = "123";
const result = original.padStart(5, "0");
console.log(original);
console.log(result);
/* padStart() returns a NEW string. The original string remains unchanged. */

// # Example 9: Useful Real-World Example
const hour = "9";
const minute = "5";
const time = `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`;
console.log(time);
/*
padStart() is commonly used for:
    - Formatting time
    - Formatting dates
    - Adding leading zeros
    - Formatting IDs
    - Masking sensitive information
*/


// # padStart() vs padEnd()
// padStart() → Adds padding to the BEGINNING / LEFT side.
// padEnd() → Adds padding to the END / RIGHT side.
const value = "123";
console.log(value.padStart(5, "0"));
console.log(value.padEnd(5, "0"));


/* # Important Interview Points
    1. padStart() adds padding to the START / LEFT side.
    2. targetLength represents the DESIRED FINAL LENGTH, not the number of characters to add.
    3. It returns a new string.
    4. It does not modify the original string.
    5. Strings are immutable.
    6. If targetLength is less than or equal to the current string length, no padding is added.
    7. If padString is not provided, SPACE (" ") is used.
    8. padString can be repeated when more padding is required.
    9. If padString is longer than the remaining required length, it is truncated.
    10. If padString is an empty string, no padding is added.
    11. padStart() and padEnd() are non-mutating methods.
    12. padStart() is commonly used for adding leading zeros.

targetLength → Final desired length of the complete string.
padString → Character/string used to fill the remaining space.

*/
// targetLength is converted to an integer
console.log("Hello".padStart(8.9, "0"));
// "000Hello"

// Negative targetLength → no padding
console.log("Hello".padStart(-5, "0"));
// "Hello"

// NaN → effectively no padding
console.log("Hello".padStart(NaN, "0"));
// "Hello"

// undefined padString → default space
console.log("Hi".padStart(5, undefined));
// "   Hi"
// empty string padString → no padding
// If padString is an empty string, no padding is added.
console.log("Hi".padStart(5, ''));
// "   Hi"
