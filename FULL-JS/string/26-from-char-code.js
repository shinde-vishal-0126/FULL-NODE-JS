/*
# String.fromCharCode()
Syntax:
String.fromCharCode(num1, num2, num3, ...)

# What is String.fromCharCode()?
    - String.fromCharCode() is a STATIC method of the String object.
    - It is used to create a string from one or more UTF-16 code units.
    - It converts numeric character codes into characters.
    - It returns a NEW string.
    - Since it is a static method, it is called using String.
    - syntax. String.fromCharCode(65)
    -  It can accept multiple numeric arguments.
    - Each argument represents a UTF-16 code unit.
    - The resulting string contains characters corresponding to those UTF-16 code units.

  */

// # Example 1: Basic Usage
console.log(String.fromCharCode(65));
console.log(String.fromCharCode(66));
console.log(String.fromCharCode(67));

// # Example 2: Multiple Character Codes
// Each number is converted into its corresponding character.
console.log(String.fromCharCode(65, 66, 67));

// # Example 3: Creating "Hello"
const str = String.fromCharCode(72, 101, 108, 108, 111);
console.log(str);

// # Example 4: Special Characters
console.log(String.fromCharCode(189, 43, 190, 61));

// # Example 5: Space Character
console.log(String.fromCharCode(72, 105, 32, 33));

// # Example 6: No
// If no arguments are provided, it returns an empty string.
console.log(String.fromCharCode());

// # Example 7: Relation with charCodeAt()

const text = 'Hello';
console.log(text.charCodeAt(0));
console.log(String.fromCharCode(72));
// charCodeAt() Character ↓ UTF-16 Code Unit
// fromCharCode() UTF-16 Code Unit ↓ Character

// # charCodeAt() vs fromCharCode()
// charCodeAt ()String ↓ Character Code
// fromCharCode() Character Code ↓ String

// # Example 8: Round Trip Conversion
const character = 'A';
const code = character.charCodeAt(0);
console.log(code);
const convertedCharacter = String.fromCharCode(code);
console.log(convertedCharacter);

// # Important: It Works with UTF-16 Code Units
// String.fromCharCode() works with  UTF-16 code units. The common range is: 0 to 65535
// For characters outside the BMP,such as many emojis, use: String.fromCodePoint()

// # Example 9: Emoji Problem
// This does NOT correctly represent 😀 because 128512 is outside a single UTF-16 code unit range
// For full Unicode code points: Use fromCodePoint()
console.log(String.fromCharCode(128512));
console.log(String.fromCodePoint(128512));

// # fromCharCode() vs fromCodePoint()
// String.fromCharCode() → Works with UTF-16 code units.
console.log(String.fromCharCode(65));

// String.fromCodePoint(128512) Works with full Unicode code points.
console.log(String.fromCodePoint());

/*
# Important Interview Points

  1. fromCharCode() is a STATIC String method.
  2. It is called using String.fromCharCode().
  3. It converts numeric UTF-16 code units into characters.
  4. It can accept multiple numbers.
  5. It returns a new string.
  6. String.fromCharCode(65) returns "A".
  7. The opposite operation can be performed using charCodeAt().
  8. charCodeAt() converts: Character → UTF-16 Code Unit
  9. fromCharCode() converts: UTF-16 Code Unit → Character
  10. fromCharCode() works with UTF-16 code units, not arbitrary Unicode code points.
  11. For full Unicode code points and emojis, String.fromCodePoint() is generally more appropriate.
  12. Calling fromCharCode() with no arguments returns an empty string.
*/

// # Quick Memory Trick
// charCodeAt() Character → Number
// fromCharCode() Number → Character

// | Method                   | Input              | Output           |
// | ------------------------ | ------------------ | ---------------- |
// | `charAt()`               | Index              | Character        |
// | `charCodeAt()`           | Index              | UTF-16 code unit |
// | `String.fromCharCode()`  | UTF-16 code unit   | Character/String |
// | `String.fromCodePoint()` | Unicode code point | Character/String |

// | Method                   | Takes              | Returns          | Range             |
// | ------------------------ | ------------------ | ---------------- | ----------------- |
// | `charAt()`               | Index              | Character        | `0` to `65535`*   |
// | `charCodeAt()`           | Index              | UTF-16 number    | `0` to `65535`    |
// | `String.fromCharCode()`  | UTF-16 number      | Character/String | `0` to `65535`    |
// | `String.fromCodePoint()` | Unicode code point | Character/String | `0` to `0x10FFFF` |
