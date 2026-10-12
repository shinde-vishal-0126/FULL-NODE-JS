/*
# String.replaceAll()

Syntax:
string.replaceAll(searchValue, replacement)
    - replaceAll() method is used to replace ALL occurrences of a specified substring or pattern in a string.
    - It returns a NEW string.
    - The original string remains unchanged because strings are immutable.
    - searchValue can be:
        * String
        * Regular Expression (RegExp)
    - replacement can be:
        * String
        * Function
    - If searchValue is a STRING, all occurrences are replaced automatically.
    - If searchValue is a REGULAR EXPRESSION, it MUST use the global (/g) flag. Otherwise, replaceAll() throws a TypeError.
    - If the search value is not found, the original string is returned unchanged.
*/

// Example 1: Replace all string occurrences
const text = "Hello World World";
const newText = text.replaceAll("World", "JavaScript");
console.log(newText);


// Example 2: Original string remains unchanged
console.log(text);

// Example 3: Pattern not found
console.log("Hello World".replaceAll("Java", "Python"));

// Example 4: Using Regular Expression
console.log("abc".replaceAll(/b/g, "."));

// IMPORTANT: RegExp MUST have /g
// console.log("abc".replaceAll(/b/, "."));
// TypeError
// String.prototype.replaceAll called with a non-global RegExp argument
// Correct:
console.log("abc".replaceAll(/b/g, "."));
// "a.c"

// Example 5: Case-sensitive
const str = "Hello hello HELLO";
console.log(str.replaceAll("hello", "Hi"));


// Example 6: Case-insensitive using RegExp
console.log(str.replaceAll(/hello/gi, "Hi"));
// Example 7: Empty string
console.log("abc".replaceAll("", "-"));
/*
Unlike replace("", value):
replace() inserts replacement only at first empty position.
replaceAll() replaces every empty-string position.
*/


// Example 8: Replacement Function
const numbers = "10 20 30";
const result = numbers.replaceAll(/\d+/g, (match) => {
    return Number(match) * 2;
});
console.log(result);

// replace() vs replaceAll()
const value = "apple apple apple";
console.log(value.replace("apple", "orange"));

console.log(value.replaceAll("apple", "orange"));


// replace() with global regex
console.log(value.replace(/apple/g, "orange"));
/*

# replace() vs replaceAll()
    replace()
        1. Replaces only FIRST occurrence when searchValue is a string.
        2. Can replace all occurrences using RegExp with /g.
        3. RegExp does NOT require the global flag.

    replaceAll()
        1. Replaces ALL occurrences automatically when searchValue is a string.
        2. RegExp MUST have the global (/g) flag.
        3. Returns a new string.
        4. Original string remains unchanged.

# IMPORTANT INTERVIEW DIFFERENCE

    replace("apple", "orange") → Only first occurrence
    replace(/apple/g, "orange") → All occurrences
    replaceAll("apple", "orange") → All occurrences
    replaceAll(/apple/g, "orange") → All occurrences
    replaceAll(/apple/, "orange") → TypeError (missing /g)
*/
