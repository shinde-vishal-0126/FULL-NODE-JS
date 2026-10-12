/*
# String.charCodeAt(position)
Syntax:
string.charCodeAt(position)

    - charCodeAt() method returns an integer representing the UTF-16 code unit of the character at the specified index.
    - The returned value is generally between 0 and 65535.
    - JavaScript strings use zero-based indexing.
    - Valid indexes are: 0 to string.length - 1
    - If the index is out of range, charCodeAt() returns NaN.
    - Negative indexes also return NaN.
    - The position argument is optional. If omitted, the default position is 0.
    - charCodeAt() does not modify the original string.
IMPORTANT:
    - charCodeAt() returns a UTF-16 CODE UNIT, not necessarily the complete Unicode code point.
*/

// Example 1: Basic Usage
const str = "Hello, World!";
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(7));

// Example 2: Default position No argument means: "Hello".charCodeAt(0)
console.log("Hello".charCodeAt());

// Example 3: Negative Index
console.log(str.charCodeAt(-1));

// Example 4: Out of Range
console.log(str.charCodeAt(100));

// Example 5: Last Character
console.log(str.charCodeAt(str.length - 1));

// Example 6: Loop through String
let word = "JavaScript";
for (let i = 0; i < word.length; i++) {
    console.log(word[i], word.charCodeAt(i));
}

// Example 7: Decimal Index
// 1.9 is converted to 1.
// Character at index 1 = e
// Unicode/UTF-16 code unit = 101
console.log("Hello".charCodeAt(1.9));

// Example 8: NaN as Position ==>  NaN is converted to 0.
console.log("Hello".charCodeAt(NaN));

// charAt() vs charCodeAt()
const str2 = "A";
// charAt()→ Returns character as a string
console.log(str2.charAt(0));
// charCodeAt() → Returns UTF-16 numeric code unit
console.log(str2.charCodeAt(0));
// Out of range
// if the charAt() out of range it return empty string
console.log(str2.charAt(100));
// if charCodeAt() outof range it return NaN
console.log(str2.charCodeAt(100));

/*

# charAt() vs charCodeAt() vs codePointAt()
- charAt() → Returns character as a string
- charCodeAt()→ Returns UTF-16 code unit
- codePointAt()→ Returns Unicode code point
*/
const value = "A";
console.log(value.charAt(0));
console.log(value.charCodeAt(0));
console.log(value.codePointAt(0));



// # Important Unicode / Emoji Difference
// For normal English characters: charCodeAt() usually works as expected.
const letter = "A";
console.log(letter.charCodeAt(0));
// However, some Unicode characters such as emojis use TWO UTF-16 code units.
const emoji = "😀";
console.log(emoji.length);
console.log(emoji.charCodeAt(0));
console.log(emoji.charCodeAt(1));
// The emoji is represented by two UTF-16 code units. Therefore charCodeAt() gives separate values.
// codePointAt() returns the complete Unicode code point
console.log(emoji.codePointAt(0));
/*
# charCodeAt() vs codePointAt()

charCodeAt()
    * Returns UTF-16 code unit
    * Works character by character based on UTF-16 units
    * Emoji may produce two separate values

codePointAt()
    * Returns Unicode code point
    * Better for handling emoji and characters outside BMP
 */

const emoji2 = "😀";
console.log(emoji2.charCodeAt(0));
console.log(emoji2.codePointAt(0));
// # Out of Range Comparison
const str5 = "Hello";
// charAt(100) → ""
// charCodeAt(100) → NaN
// codePointAt(100) → undefined

/*
# Practical Example: Character Comparison
*/
const char = "A";
if (char.charCodeAt(0) >= 65 &&
    char.charCodeAt(0) <= 90) {
    ```
console.log("Uppercase letter");
```;
}

/*
# Interview Quick Points
    1. charCodeAt() returns a number.
    2. It returns a UTF-16 code unit.
    3. Valid index:
        - 0 to string.length - 1
        - Negative index → NaN
        - Out-of-range index → NaN
    4. Default index → 0
    5. Decimal indexes are converted to integers.
    6. It does not modify the original string.

- charAt() returns a character.
- charCodeAt() returns a numeric UTF-16 code unit.
- codePointAt() is better for complete Unicode code points such as emoji.

* NOTE :
    - charCodeAt() returns the UTF-16 code unit at the specified index. For characters represented by surrogate pairs, such as many emojis, codePointAt() is more appropriate for retrieving the complete Unicode code point.
*/
