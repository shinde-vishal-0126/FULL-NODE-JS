/*
# String.trimEnd()
Syntax:
string.trimEnd()
    - trimEnd() removes whitespace characters from the END (right side) of a string.
    - It returns a NEW string.
    - It does NOT modify the original string because strings are immutable.
    - It removes trailing whitespace such as:
        * Spaces
        * Tabs (\t)
        * Newlines (\n)
        * Other whitespace characters
    - It does NOT remove whitespace from the beginning of the string.
    - It does NOT remove whitespace between words.
    - If there is no whitespace at the end, the returned string has the same content.
    - trimRight() is an alias of trimEnd().
*/

// # Example 1: Basic Usage
let str = "         vishal shinde at post wadGaon sahani        ";
console.log("Length of original string:", str.length);
const newStr = str.trimEnd();
console.log("New String:", newStr);
console.log("Length of trimmed string:", newStr.length);

// # Example 2: Only End Whitespace Is Removed
// Beginning spaces remain. Only spaces at the end are removed.
const text = "   Hello World   ";
console.log(text.trimEnd());

// # Example 3: Internal Spaces Are Not Removed : Spaces between Hello and World remain unchanged.

const text1 = "Hello     World     ";
console.log(text1.trimEnd());

// # Example 4: Tabs and Newlines
const text2 = "Hello World   \t\n";
console.log(text2.trimEnd());

// # Example 5: No Whitespace at the End : There is nothing to remove.
const text3 = "Hello World";
console.log(text3.trimEnd());

// # Example 6: Original String Is Not Modified
const original = "Hello World   ";
const result = original.trimEnd();
console.log(original);
console.log(result);

// # trim(), trimStart(), trimEnd()
// 1. trim() → Removes whitespace from BOTH beginning and end.
// 2. trimStart() → Removes whitespace from the BEGINNING.
// 3. trimEnd() → Removes whitespace from the END.

const value = "   Hello World   ";
console.log(value.trim());
console.log(value.trimStart());
console.log(value.trimEnd());

// # trimRight() ==> trimRight() is an alias of trimEnd(). ==> Both produce the same result.
const value1 = "Hello World   ";
console.log(value1.trimEnd());
console.log(value1.trimRight());

/* # Important Interview Points

    1. trimEnd() removes trailing whitespace.
    2. Trailing means whitespace at the END / RIGHT side.
    3. It returns a new string.
    4. It does not modify the original string.
    5. Strings are immutable.
    6. It does not remove whitespace from the beginning.
    7. It does not remove whitespace between words.
    8. trimRight() is an alias of trimEnd().
    9. trimEnd() can remove spaces, tabs, newlines, and other whitespace characters from the end.
    10. If there is no whitespace at the end of the string, trimEnd() returns the same string content unchanged. */
