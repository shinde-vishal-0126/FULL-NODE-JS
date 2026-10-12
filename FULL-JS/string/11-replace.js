/*

# String.replace()

Syntax:
string.replace(searchValue, replacement)
    - replace() method is used to replace a specified value or pattern with a new value in a string.
    - It returns a NEW string.
    - The original string remains unchanged because strings are immutable.
    - searchValue (pattern) can be:
        * String
        * Regular Expression (RegExp)
    - replacement can be:
        * String
        * Function
    - If searchValue is a normal string, only the FIRST occurrence is replaced.
    - To replace all occurrences, use:
        * Global RegExp (/g)
        * replaceAll()
    - By default, replace() is case-sensitive.
    - If the search value is not found, it returns the original string.
*/

// Example 1: Basic replacement
const text = "Hello World";
const newText = text.replace("World", "JavaScript");
console.log(newText);
// "Hello JavaScript"
console.log(text);
// "Hello World"

// Example 2: Only first occurrence replaced
const text1 = "Hello World World";
console.log(text1.replace("World", "JavaScript"));

// Example 3: Replace all using Global RegExp
const text2 = "Hello World World";
console.log(text2.replace(/World/g, "JavaScript"));

// Example 4: Case-sensitive by default
const text3 = "Hello hello HELLO";
console.log(text3.replace("hello", "Hi"));

// Example 5: Case-insensitive replacement
const text4 = "Hello hello HELLO";
console.log(text4.replace(/hello/i, "Hi"));

// Example 6: Case-insensitive + Global
const text5 = "Hello hello HELLO";
console.log(text5.replace(/hello/gi, "Hi"));

// Example 7: Pattern not found
const text6 = "Hello World";
console.log(text6.replace("Java", "Python"));

// Example 8: Empty search string
console.log("xxx".replace("", "_"));  // Empty string matches at the beginning, so replacement is prepended.


// Example 9: Using Regular Expression

const price = "The price is $100.";
const newPrice = price.replace(/$100/, "$150");
console.log(newPrice);



// Example 10: Replace numbers
const data = "My number is 12345";
console.log(data.replace(/\d+/g, "XXXXX"));

// Example 11: Replace spaces
const sentence = "Hello World JavaScript";
console.log(sentence.replace(/ /g, "-"));


// Example 12: Replacement Function
const numbers = "10 20 30";
const result = numbers.replace(/\d+/g, (match) => {
    return Number(match) * 2;
});
console.log(result);

// Example 13: Capturing Groups
const name = "Vishal Shinde";
const result1 = name.replace(/(\w+) (\w+)/, "$2 $1");
console.log(result1);
/*
(\w+) → First capturing group
(\w+) → Second capturing group
$1 → First group
$2 → Second group
*/


// Example 14: Replace using callback
const text7 = "hello world";
const result2 = text7.replace(/\b\w/g, (char) => {
    return char.toUpperCase();
});
console.log(result2);


// Important: replace() vs replaceAll()
const str = "apple apple apple";
console.log(str.replace("apple", "orange"));

console.log(str.replaceAll("apple", "orange"));
/*
replace()
→ By default replaces first occurrence

replaceAll()
→ Replaces all occurrences
*/
// Important Replacement Patternn
/*
$& → Entire matched substring
$1 → First captured group
$2 → Second captured group
$` → Text before the matched substring
$' → Text after the matched substring
*/

const example = "Hello World";
console.log(example.replace("World", "[$&]"));



// Does NOT modify original string
const original = "Hello World";
const replaced = original.replace("World", "JavaScript");
console.log(original);
// "Hello World"
console.log(replaced);
// "Hello JavaScript"

/*
# replace() vs replaceAll()

replace()

* Replaces first occurrence by default
* Can use RegExp
* Supports replacement function

replaceAll()

* Replaces all occurrences
* Supports string replacement
* Supports global RegExp only
* Supports replacement function


# INTERVIEW POINTS

    1. replace() returns a new string.
    2. Original string is not modified.
    3. Strings are immutable in JavaScript.
    4. searchValue can be a String or RegExp.
    5. replacement can be a String or Function.
    6. String pattern replaces only the first occurrence.
    7. /g flag replaces all occurrences.
    8. /i flag performs case-insensitive matching.
    9. /gi performs global + case-insensitive matching.
    10. If no match is found, original string is returned.
    11. Empty string replacement is inserted at the beginning.
    12. replace() supports capturing groups using $1, $2, etc.
    13. replace() supports callback functions.
    14. Use replaceAll() when you simply want to replace all occurrences.
*/
