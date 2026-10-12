/*
String.endsWith()

Syntax:
string.endsWith(searchString[, length])
    - endsWith() method is used to check whether a string ends with a specified substring or character.
    - It returns:
        - true → if the string ends with the specified value
        - false → otherwise
    - endsWith() is case-sensitive.
    - The second argument (length) is optional.
    - length specifies how many characters from the beginning of the string should be considered.
    -  Negative length values are treated as 0.
    - If length is greater than the actual string length, the complete string is considered.
    - Empty string "" always returns true.
    - endsWith() does NOT accept Regular Expressions. Passing a RegExp throws a TypeError.
    - endsWith() does not modify the original string.
    - Common use case:
        - Checking file extensions such as .pdf, .js, .png, etc.

*/

const str = "hello, vishal shinde";
// used to check whether a string ends with a specified substring or character
console.log(str.endsWith('shinde'));
console.log(str.endsWith('vishal'));

// case-sensitive
console.log(str.endsWith('Shinde'));

// Empty string.
// return true because empty string "" is considered to exist at every valid position in a string
console.log(str.startsWith(''));

// using postion 2nd arguments
//0123456789
let st = 'Hello word';
console.log(st.endsWith('word', 5));
console.log(st.endsWith('Hello', 5));
// Only first 5 characters are considered:
// Hello
// ^^^^^
// Does "Hello" end with "Hello"?
// → true
// in endwith having second propery specifies how many characters from the beginning of the string should be considered.
console.log(st.endsWith('Hello', 5));

console.log(st.endsWith('word', 11));


// -ve index
// so -ve index treated as o so start from the index 0
// endsWith() with a negative length does not count backward from the end. It is clamped to 0.
console.log(st.endsWith('word', -9));
console.log(st.endsWith("", -9));

// # Length grater then string length
// Here:
//length = 100
// 100 is greater than 5
// JavaScript automatically uses the maximum available length (5). Actual string length = 5
// Provided
console.log('hello vishal shinde'.endsWith('shinde', 100));

// ex. file extention
let finename = 'script.js';
if (finename.endsWith('.js')) {
    console.log('javascript file');
}
// ex does not accept the regular expression
// RegExp is NOT supported
// console.log(st.endsWith(/word/))


/*
* startWIth() vs endWith()
    - The biggest difference between startsWith() and endsWith() is their second parameter:
    1. startWith()
        - check the beginning of the string
        - startsWith(searchString, position) :
            - position → Where to start checking
        - if position is greater than the string length, JavaScript effectively starts checking at the end of the string.
        const str = "Hello";
        console.log(str.length); // 5
        console.log(str.startsWith("H", 0));   // true
        console.log(str.startsWith("H", 5));   // false
        console.log(str.startsWith("H", 10));  // false
        console.log(str.startsWith("H", 100)); // false

    2. endsWith()
        - check end of string
        - endsWith(searchString, length)
            - length → How much of the string to consider from the beginning
        - When length is greater than the actual string length, JavaScript treats it as the string's actual length (endsWith(), if length > string.length, JavaScript uses string.length instead.)
*/
