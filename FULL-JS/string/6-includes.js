/*
String.includes()

Syntax:
string.includes(searchString, position)

    1. includes() method is used to check whether a string contains a specified substring.
    2. It returns:
        - true → if substring is found
        - false → if substring is not found
    3. includes() is case-sensitive.

    4. The second argument (position) is optional and specifies the index from where searching should start.

    5. Searching happens in the forward direction only.

    6. Negative position values are treated as 0.

    7. If position is greater than or equal to the string length, it returns false (except when searching for an empty string).

    8. Empty string "" always returns true because every string contains an empty string.

    9. includes() does NOT accept Regular Expressions. Passing a RegExp throws a TypeError.

    10. includes() does not modify the original string.

    11. includes() is useful when you only need true/false.
*/
// 1. it check wheather a string contain a specified substring or not
const str = "hello, world The quick brown fox jumps  over the lazy dog";
console.log(str.includes('javascript'));

// 2. case sensitive
// in above example str include world but it return false because it is case sensitive.
console.log(str.includes('World'));

// 3. starting postion (give 2nd argument)
// return false because it start checkong form index 10 so its return false
console.log(str.includes('world', 10));

// 4. also postion affect the result
const text = 'Hello Hello';
console.log(text.includes('Hello'));
console.log(text.includes('Hello', 1));
console.log(text.includes('Hello', 3));
console.log(text.includes('Hello', 6));
console.log(text.includes('Hello', 7));

// if the length is Grater Then string length then return false
console.log(text.includes('Hello', 20));

// 6. -ve indes treated as 0
// * if you give -ve index it is treated as 0 (and start searching form the beggining)
console.log(text.includes('Hello', -10));

// 7 Empty string
console.log(''.includes(''));
console.log(text.includes(''));
console.log("Hello".includes("")); // true
console.log("Hello".includes("", 3)); // true
console.log("Hello".includes("", 100)); // true

console.log('hello'.includes());


// 8. Does not accept regular expression it throw the error .
// console.log(text.includes(/\d/));
/*
* includes() vs search()

1. includes()
    - simple substring search
    - return boolen (if string contain given substring it return true otherwise return false)
    - regExp are not supported

2. search()
    - support RegExp
    - return index of first matching string or pattern
    - return -1 if not found.

# imp
    - includes() checks whether a string contains a specified substring and returns a boolean value. It is case-sensitive, supports an optional starting position, treats negative positions as 0, and unlike search() or match(), it does not support regular expressions.

    - includes() returns boolean.
    - It is case-sensitive.
    - It supports an optional starting position.
    - Negative position is treated as 0.
    - Empty string always returns true.
    - RegExp is NOT supported.
    - It does not modify the original string.
    - It searches in the forward direction


*/
