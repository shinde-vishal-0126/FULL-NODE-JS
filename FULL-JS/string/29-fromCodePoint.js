/*
FROMCODEPOINT()
# String.fromCodePoint(num1, num2, num3, ...)
  - String.fromCodePoint() is a STATIC method of String.
  - It returns a string created from the specified sequence of Unicode CODE POINTS.
  - It can accept one or more code points.
  - Each code point must be an integer in the valid Unicode range: 0 to 0x10FFFF
    - Decimal: 0 to 1,114,111
  - Unlike String.fromCharCode(), fromCodePoint() can handle Unicode code points greater than 65535.
  - This makes fromCodePoint() suitable for characters such as emoji and other characters outside the Basic Multilingual Plane (BMP).
  - String.fromCodePoint() returns a NEW string. It does NOT modify anything.
*/



// BASIC EXAMPLE
// 9731 is the Unicode code point for the snowman character.
console.log(String.fromCodePoint(9731));
// EMOJI EXAMPLE
console.log(String.fromCodePoint(0x1F601));

// MULTIPLE CODE POINTS
console.log(String.fromCodePoint(0x1F600, 0x1F602));
// Multiple code points can be passed.
// Each code point is converted into its corresponding character.

// CHARACTER USING DECIMAL CODE POINT
console.log(String.fromCodePoint(65));
console.log(String.fromCodePoint(66));
console.log(String.fromCodePoint(65, 66, 67));


// CHARACTER USING HEXADECIMAL CODE POINT
console.log(String.fromCodePoint(0x41));
console.log(String.fromCodePoint(0x1F600));
// Hexadecimal notation is commonly used for Unicode code points.


// CODE POINT GREATER THAN 65535
console.log(String.fromCodePoint(128512));// 128512 is greater than 65535, but fromCodePoint() supports it.
// This is one of the main differences from fromCharCode().

//
// STRING FROMCODECHAR() vs FROMCODEPOINT()
// fromCharCode() works with UTF-16 CODE UNITS:0 to 65535
console.log(String.fromCharCode(65));
// fromCodePoint() works with Unicode CODE POINTS: 0 to 0x10FFFF
console.log(String.fromCodePoint(128512));

// INVALID STRING VALUE
console.log(String.fromCodePoint("-"));
// "-" cannot be converted to a valid numeric code point.


// STRING "INFINITY"
console.log(String.fromCodePoint("infinity"));
// "infinity" is a string that cannot be converted to a number.
// IMPORTANT:
// "infinity" and Infinity are different.

// ACTUAL INFINITY
console.log(String.fromCodePoint(Infinity));
// Infinity is not a valid Unicode code point.

// NEGATIVE CODE POINT
console.log(String.fromCodePoint(-1));
// Unicode code points cannot be negative.

// DECIMAL VALUE
console.log(String.fromCodePoint(3.14));
// Code points must be INTEGER values. 3.14 is not an integer.

// ZERO
console.log(String.fromCodePoint(0));
// "\u0000"

// 0 is a valid Unicode code point.

// ==================================================
// MAXIMUM VALID CODE POINT
// ==================================================

console.log(String.fromCodePoint(0x10FFFF));
// "􏿿"

// 0x10FFFF is the maximum valid Unicode code point.

// ABOVE MAXIMUM
console.log(String.fromCodePoint(0x110000));
// RangeError 0x110000 is greater than the maximum valid Unicode code point 0x10FFFF.

// NO ARGUMENT
console.log(String.fromCodePoint());
// "" No code points are supplied, so an empty string is returned.

// NUMERIC STRING  A numeric string can be converted to a number.
console.log(String.fromCodePoint("65"));

// IMPORTANT DIFFERENCE
// String.fromCharCode(): Accepts UTF-16 code units Range: 0 to 65535
// String.fromCodePoint() Accepts Unicode code points Range: 0 to 0x10FFFF


// EMOJI EXAMPLE
console.log(String.fromCodePoint(0x1F600));
console.log(String.fromCodePoint(0x1F602));
console.log(String.fromCodePoint(0x1F44D));

// FROMCODEPOINT() + CHARCODEAT()
// charCodeAt()
// Character → UTF-16 code unit
console.log("A".charCodeAt(0));
fromCharCode() // UTF-16 code unit → Character
console.log(String.fromCharCode(65));

// fromCodePoint() Unicode code point → Character
console.log(String.fromCodePoint(65));



// UNICODE CODE POINT vs UTF-16 CODE UNIT
// IMPORTANT:Unicode code point Identifies a Unicode character.
// UTF-16 code unit A 16-bit unit used by JavaScript strings.
// Characters above 0xFFFF are represented by TWO UTF-16 code units in JavaScript strings.

const emoji = "😀";
console.log(emoji.length);
console.log(emoji.codePointAt(0));



/*
* IMPORTANT INTERVIEW POINTS

  1. fromCodePoint() is a STATIC String method.
  2. Syntax : String.fromCodePoint(num1, num2, ...)
  3. It converts Unicode CODE POINTS into a string.
  4. Valid range: 0 to 0x10FFFF
  5. It supports code points greater than 65535.
  6. It can create emoji and other supplementary characters.
  7. Invalid code point -> RangeError.
  8. Negative number -> RangeError.
  9. Infinity -> RangeError.
  10. Fractional number -> RangeError.
  11. Number greater than 0x10FFFF -> RangeError.
  12. No arguments -> ""
  13. Numeric strings can be converted: String.fromCodePoint("65") -> "A"
  14. fromCodePoint() does not modify the original data.


* GOLDEN RULE

fromharCode() : UTF-16 CODE UNIT → CHARACTER
fromCodePoint() : UNICODE CODE POINT → CHARACTER
fromCharCode  → 16-bit code unit
fromCodePoint → full Unicode code point
*/
