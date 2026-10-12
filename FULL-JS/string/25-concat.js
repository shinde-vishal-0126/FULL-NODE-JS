/*
# String.concat()
Syntax:
string.concat(string1, string2, ..., stringN)

# What is concat()?
    - concat() method in JavaScript is used to combine (concatenate) two or more strings into a single string.
    - It appends the provided values to the end of the original string.
    - It returns a NEW string containing the concatenated result.
    - concat() does NOT modify the original string because strings are immutable in JavaScript.
    - concat() can accept multiple arguments.
    - The arguments are converted to strings before concatenation.
    - concat() accepts values, not only strings—they are converted to strings.
    - concat() does not mutate the original string.
    - With no arguments, it returns a string with the same content.
    - + and template literals are more commonly used in modern JavaScript.
    - Be careful: "" + null / concat(null) produces "null" (a string), not actual null
*/

// # Example 1: Basic Usage
const str1 = 'Hello';
const str2 = 'World';
const result = str1.concat(', ', str2, '!');
console.log(result);

// # Example 2: Multiple Strings
const greeting = 'Hello';
const name = 'Alice';
const punctuation = '!';
const message = greeting.concat(', ', name, punctuation);
console.log(message);

// # Example 3: Multiple Arguments
let firstName = 'Vishal';
const newStr = firstName.concat(' ', 'Shinde', ' ', 'Pune');
console.log(newStr);

// # Example 4: Original String Is Not Modified
// Strings are immutable. concat() creates and returns a new string. It does not modify the original string.
const original = 'Hello';
const newString = original.concat(' World');
console.log(original);
console.log(newString);

// # Example 5: Using Array with Spread Operator
const greet = ['hello', ' ', 'Vishal', '!'];
console.log(''.concat(...greet));
// Spread operator (...) passes every array element as a separate argument. Equivalent to: "".concat("hello", " ", "Vishal", "!");

// # Example 6: concat() with No Arguments
// If no arguments are provided, concat() returns a new string with the same content.
const text = 'Hello';
console.log(text.concat());

// # Example 7: Numbers
console.log(''.concat(4, 5));
console.log('Age: '.concat(25));
// Numbers are converted into strings.

// # Example 8: Boolean
//Boolean values are converted to strings. true  → "true" false → "false"
console.log('Value: '.concat(true));
console.log('Value: '.concat(false));

// # Example 9: null
// concat(null) does NOT return actual null. null is converted to the string:
console.log(''.concat(null));

// # Example 10: undefined
// undefined is converted into the string "undefined".
console.log(''.concat(undefined));

// # Example 11: Object
//A normal object is converted to its string representation.
console.log(''.concat({}));

// # Example 12: Array
//Arrays are converted into strings. [].toString()
console.log(''.concat([]));
console.log(''.concat([1, 2, 3]));

// # Example 13: concat() vs + Operator
// Both produce the same result. concat(): first.concat(second) + operator: first + second

const first = 'Hello';
const second = ' World';
console.log(first.concat(second));
console.log(first + second);

//# Example 14: concat() vs Template Literals
// Modern JavaScript commonly prefers template literals when variables are involved.
const firstName1 = 'Vishal';
const city = 'Pune';
const usingConcat = firstName1.concat(' lives in ', city);
console.log(usingConcat);
const usingTemplateLiteral = `${firstName1} lives in ${city}`;
console.log(usingTemplateLiteral); /*


# concat() vs + vs Template Literal
    - concat() : "Hello".concat(" ", "World") → "Hello World"
    + Operator : "Hello" + " " + "World" → "Hello World"
    - Template Literal  `${"Hello"} ${"World"}` → "Hello World" */

/* # Important Interview Points
    1. concat() combines two or more strings.
    2. It returns a NEW string.
    3. It does NOT modify the original string.
    4. Strings are immutable in JavaScript.
    5. concat() accepts multiple arguments.
    6. Arguments are converted to strings.
    7. concat() with no arguments returns the same string content.
    8. concat() can concatenate numbers, booleans, null, undefined, objects, and arrays after converting them to strings.
    9. concat(null) returns "null", not actual null.
    10. concat(undefined) returns "undefined".
    11. concat() can be replaced by the + operator in most cases.
    12. Template literals are often preferred in modern JavaScript for readability. */

// # Important Note : concat() does NOT mutate the original string.
const str = 'Hello';
const result1 = str.concat(' World');
console.log(result1);
// concat() means: CONCATENATE : JOIN STRINGS : RETURN NEW STRING
