/*

Syntax:
string.startsWith(searchString, position)
    1.startsWith() method is used to check whether a string starts with a specified substring.
    2. It returns:
        - true → if the string starts with the specified substring
        - false → otherwise
    3. startsWith() is case-sensitive.
    4. The second argument (position) is optional.
    5. position specifies the index from where the checking should begin.
    6. Negative position values are treated as 0.
    7. If position is greater than or equal to the string length, the result is generally false (except for an empty search string).
    8. An empty string "" always returns true because an empty string exists at every valid position.
    9. startsWith() does NOT accept Regular Expressions. Passing a RegExp throws a TypeError.
    10. startsWith() does not modify the original string.
    11. startsWith() checks only at the specified position. It does NOT search the entire string.
*/
const str = "Vishal Shinde FullStack Developer";
// check string start with specified substring
console.log(str.startsWith('Vishal'));

// startWith Having 2nd argument postion (start searching from the given postion)
console.log(str.startsWith('Vishal', 8));

// if you give -ve index is treated as 0 (if you give -ve index it treated as 0)
console.log(str.startsWith('Vishal', -8));

// startWith is case-sensitive method
console.log(str.startsWith('vishal'));

// (Position greater than string length) if the position length is grater then give string length it return false
console.log(str.startsWith('Vishal', 23));

// startWith() method does not serch entire string
let value = 'vishal shinde';
console.log(value.startsWith('shinde'));

// empty - string
// it return true Because an empty string "" is considered to exist at every valid position in a string
console.log(value.startsWith(''));

// RegExp does not support
// console.log(value.startsWith(/[a-z]/))

// Real time example
let url = 'https://example.com';
console.log(url.startsWith('http'));

/*
* startWith() vs includes()
    1. startWith()
        - used to check it the give string start with specivied value or not
        - it return true or false (if the string start with give string otherwise false)

    2. includes()
        - includes() method check wheater string contain specifed sbustring or not.
        - it return true or fasle.

# imp
    - method name is startsWith().
    - It returns a boolean (true/false).
    - It is case-sensitive.
    - It supports an optional position argument.
    - Negative position is treated as 0.
    - Empty string returns true.
    - It does NOT search the entire string.
    - It checks whether the string begins at the specified position.
    - RegExp is NOT supported.
    - It does not modify the original string.
    - startsWith() does not search. It directly checks whether the specified substring starts exactly at the given position.

*/
