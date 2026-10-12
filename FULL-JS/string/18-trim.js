/*
# String.trim()
Syntax:
string.trim()
    - trim() method is used to remove whitespace characters from the beginning and end of a string.
    - It removes leading and trailing whitespace.
    - Whitespace includes:
        * Spaces
        * Tabs (\t)
        * Newlines (\n)
        * Other whitespace characters
    - trim() does NOT remove spaces between characters or words.
    - It returns a NEW string.
    - It does NOT modify the original string because strings are immutable in JavaScript.
    - It is commonly used for cleaning user input or external data.

# Example 1: Basic Usage */

let str = "         vishal shinde at post wadGaon sahani        ";
console.log("Length of original string:", str.length);
const newStr = str.trim();
console.log("New String:", newStr);
console.log("Length of trimmed string:", newStr.length);

// # Example 2: Spaces Inside String Are Not Removed : trim() only removes whitespace from:
// Beginning ←
// End →
// It does NOT remove spaces in the middle.
const text = "   Hello     World   ";
console.log(text.trim());

// # Example 3: Tabs and Newlines
const value = "\n\t   Hello World   \t\n";
console.log(value.trim());

// # Example 4: Original String Is Not Modified
const original = "   JavaScript   ";
const trimmed = original.trim();
console.log(original);
console.log(trimmed);

// # Example 5: String With Only Whitespace
const spaces = "      ";
console.log(spaces.trim());
console.log(spaces.trim().length);

// # Example 6: Empty String
console.log("".trim());

// # Example 7: No Whitespace : If there is no leading or trailing whitespace, trim() returns the same content in a new string value
const word = "JavaScript";
console.log(word.trim());

// # trimStart() and trimEnd()

// trimStart() ==> Removes whitespace only from the beginning
const startExample = "   Hello World   ";
console.log(startExample.trimStart());

// trimEnd() ==>  Removes whitespace only from the end
const endExample = "   Hello World   ";
console.log(endExample.trimEnd());

/*
# Comparison
    - trim() → Removes whitespace from both start and end.
    - trimStart() → Removes whitespace only from start.
    - trimEnd() → Removes whitespace only from end.
*/
// # Practical Example: User Input
const userInput = "   [vishal@example.com](mailto:vishal@example.com)   ";
const cleanInput = userInput.trim();
console.log(cleanInput);
/*

# Important Interview Points
   1. trim() removes leading whitespace.
   2. trim() removes trailing whitespace.
   3. It does NOT remove whitespace between words.
   4. It returns a new string.
   5. Original string remains unchanged.
   6. Strings are immutable in JavaScript.
   7. It removes spaces, tabs, newlines, and other whitespace characters.
   8. If a string contains only whitespace, trim() returns an empty string.
   9. trimStart() removes whitespace from the beginning.
   10. trimEnd() removes whitespace from the end.

# Golden Rule
    trim() → Remove whitespace from BOTH sides
    trimStart() → Remove whitespace from START
    trimEnd() → Remove whitespace from END

*/
