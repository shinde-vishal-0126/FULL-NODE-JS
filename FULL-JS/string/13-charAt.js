/*
# String.charAt(position)

Syntax:
string.charAt(position)

    - charAt() method is used to retrieve the character at a specified index from a string.
    - It returns a NEW string containing a single character (UTF-16 code unit).
    - JavaScript strings use zero-based indexing.
    - If the specified index is out of range, it returns an empty string "".
    - Negative indexes are NOT supported. Negative indexes return an empty string.
    - If index >= string.length, it returns an empty string.
    - The position argument is optional. If omitted, the default position is 0.
    - charAt() does not modify the original string.

   */


// Example 1: Basic usage
const str = "Hello, World!";
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(7));

// Example 2: Default position
console.log(str.charAt()); // No argument means: str.charAt(0)

// Example 3: Negative index
console.log(str.charAt(-1)); // charAt() does NOT support negative indexing.

// Example 4: Index out of range it also return empty string
console.log(str.charAt(100));

// Example 5: Last valid index
console.log(str.charAt(str.length - 1));

// Example 6: Decimal index
console.log("Hello".charAt(1.9)); // Decimal value is converted to an integer. 1.9 → 1

// Example 7: NaN : NaN is converted to 0.
console.log("Hello".charAt(NaN));


// Example 8: Original string unchanged
const text = "Hello";
const result = text.charAt(1);
console.log(result); // "e"
console.log(text);   // "Hello"

/*
# charAt() vs at()
charAt()
    1. Returns character at specified index.
    2. Does NOT support negative indexing.
    3. Negative index → ""
    4. Out of range → ""
    5. Default index → 0
at()
    1. Returns character at specified index.
    2. Supports negative indexing.
    3. Negative index counts from the end.
    4. Out of range → undefined
   */
const value = "Hello";
console.log(value.charAt(-1));
console.log(value.at(-1));

console.log(value.charAt(100));
console.log(value.at(100));

// if not provided index so it default value is 0
console.log(value.charAt());
console.log(value.at());
/*

# charAt() vs Bracket Notation []

Both can access characters using positive indexes. The main difference is their behavior for invalid indexes.
*/
const str1 = "Hello";
console.log(str1.charAt(1));
console.log(str1[1]);

// Out of range
console.log(str1.charAt(100));
console.log(str1[100]);

// Negative index
console.log(str1.charAt(-1));
console.log(str1[-1]);
/*

# Comparison Table

| Feature          | charAt() | at()      | []        |
| ---------------- | -------- | --------- | --------- |
| Positive index   | Yes      | Yes       | Yes       |
| Negative index   | No       | Yes       | No        |
| Negative result  | ""       | Character | undefined |
| Out of range     | ""       | undefined | undefined |
| Default argument | 0        | undefined | N/A       |

/*

# Important Unicode Note
- charAt() works with UTF-16 code units.
- For normal English characters, this is usually not a problem. However, some characters such as emojis may use more than one UTF-16 code unit.
*/
const emoji = "😀";
console.log(emoji.length);

console.log(emoji.charAt(0)); // Returns only part of the UTF-16 representation
console.log([...emoji][0]);

// * charAt() works fine.
// * at() is more modern and supports negative indexing.


/*
# INTERVIEW QUICK POINTS

    - charAt() returns character at a specified index.
    - Uses zero-based indexing.
    - Negative index returns "".
    - Out-of-range index returns "".
    - Default position is 0.
    - Does not modify the original string.
    - Returns a string, not undefined.
    - at() supports negative indexing.
    - [] notation returns undefined for invalid indexes.

    - charAt() does not support negative indexing. If a negative index is provided, it returns an empty string ("").
*/
