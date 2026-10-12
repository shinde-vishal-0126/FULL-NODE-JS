/*
# String.localeCompare()
Syntax:
string.localeCompare(compareString [, locales [, options]])

# What is localeCompare()?
  - localeCompare() is used to compare two strings in a locale-sensitive manner.
  - It compares the reference string (the string on which localeCompare() is called) with the compareString.
  - It returns a NUMBER indicating the relative sort order of the two strings.
  - The result tells us whether the reference string comes:
      - Before compareString
      - Equal to compareString
      - After compareString
  - The exact numeric value is NOT guaranteed to be -1 or 1.
  - The important results are:
    - Negative number → reference string comes BEFORE compareString.
    - 0 → reference string is EQUAL to compareString.
    - Positive number → reference string comes AFTER compareString.
  - localeCompare() is commonly used for sorting strings.

  # Return Value
    - Negative number → Reference string comes BEFORE compareString.
    - 0 → Reference string is EQUAL to compareString.
    - Positive number → Reference string comes AFTER compareString.
IMPORTANT:
    - Do NOT depend on exactly -1 or 1.
    Use:
      - result < 0
      - result === 0
      - result > 0

*/
// # Example 1: Basic Comparison
// Negative number :"apple" comes before "banana"
// Positive number "banana" comes after "apple"
// "apple" and "apple" are equal.
const str1 = 'apple';
const str2 = 'banana';
console.log(str1.localeCompare(str2));
console.log(str2.localeCompare(str1));
console.log(str1.localeCompare('apple'));

// # Example 2: Using the Result Correctly
const result = 'apple'.localeCompare('banana');
if (result < 0) {
  console.log('apple comes before banana');
}
// Do not write: result === -1 because localeCompare() does not guarantee that the result will be exactly -1.

// # Example 3: Case Sensitivity
const str3 = 'apple';
const str4 = 'Apple';
console.log(str3.localeCompare(str4));
// The result can depend on the locale and comparison options.Therefore, do not assume a fixed positive or negative value.

// # Example 4: sensitivity: "base"
// sensitivity: "base" → Ignores differences in case and accents when comparing the strings. apple Apple are considered equal

console.log('apple'.localeCompare('Apple', undefined, { sensitivity: 'base' }));

// # sensitivity Options
// base → Only base characters are considered.
// "a" and "A" → considered equal
// "e" and "é" → considered equal
// accent → Base characters and accents are considered, but case differences are ignored.
// Example: "a" and "á → different
// "a" and "A" → considered equal
// Base characters and case are considered, but accents are ignored.
// "a" and "A" → different variant → Base characters, accents, and case are considered. This provides the most detailed comparison.

//# Example 5: Accent Comparison
//With sensitivity: "base", accent differences are ignored.
console.log('resume'.localeCompare('résumé', undefined, { sensitivity: 'base' }));
console.log('resume'.localeCompare('résumé', undefined, { sensitivity: 'accent' }));
// With sensitivity: "accent", the accent difference is considered.

// # Example 6: ignorePunctuation
// ignorePunctuation: true → Punctuation characters are ignored during comparison.
const value1 = 'Hello, World';
const value2 = 'Hello World';
console.log(value1.localeCompare(value2, undefined, { ignorePunctuation: true }));

// # Example 7: Numeric Sorting
// numeric: true allows numeric parts of strings to be compared numerically. Without numeric comparison,  lexicographic ordering can produce:
const numbers = ['2', '10', '1'];
numbers.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
console.log(numbers);

// # Example 8: Locale
// The second argument specifies the locale. "de" → German locale Different locales can have different sorting rules.
const word1 = 'ä';
const word2 = 'z';
console.log(word1.localeCompare(word2, 'de'));

// # Example 9: Sorting an Array of Strings
// localeCompare() can be used inside sort() to compare strings according to locale-sensitive sorting rules.
const fruits = ['banana', 'Apple', 'cherry', 'apple'];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);

// # localeCompare() vs ===
// === Checks whether two strings have exactly the same value.
// Example: "apple" === "apple" → true
// localeCompare() : Compares the relative sorting order. Example: "apple".localeCompare("banana") → negative number
// localeCompare() is NOT simply an equality operator.

// # localeCompare() vs indexOf()
// indexOf() → Finds the position of a substring.
// localeCompare() → Compares two strings according to sorting order.
// "Hello World".indexOf("World") → 6
// "apple".localeCompare("banana") → negative number

/*
 # Important Interview Points
    1. localeCompare() compares two strings.
    2. It performs a locale-sensitive comparison.
    3. It returns a number.
    4. Negative number  → reference string comes before compareString.
    5. 0 → strings are considered equal.

    6. Positive number  → reference string comes after compareString.
    7. Do NOT assume the result is exactly -1 or 1.
    8. localeCompare() is useful for sorting strings.
    9. The locales argument can specify language/locale specific comparison rules.
    10. The options argument allows customization of the comparison.
    11. sensitivity controls how case and accents are handled.
    12. ignorePunctuation can ignore punctuation.
    13. numeric: true can be used for numeric comparison inside strings.
    14. localeCompare() does NOT modify the original strings.
*/

// # Common Options
// "base" → Ignores case and accents.
// "accent"→ Considers accents but ignores case.
// "case" → Considers case but ignores accents.
// "variant" → Considers base characters, accents, and case.
// ignorePunctuation: true → Ignore punctuation.
// numeric: true → Compare numeric portions numerically.

// localeCompare()
// String
//    ↓
// Compare
//    ↓
// Number

// Negative → BEFORE
// Zero     → EQUAL
// Positive → AFTER
