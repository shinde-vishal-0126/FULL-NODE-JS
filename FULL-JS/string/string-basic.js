/*
@ STRING

Q. what is string ?

  - string in js are fundamental data type that represent sequences of character useful for holding the data represented in text form.
  - string data type
  - string are zero index based
  - In JavaScript, a string is a primitive data type used to represent text.
  - You can create strings using single quotes ('), double quotes ("), or backticks (`).
  - Strings in JavaScript are immutable, meaning you cannot change individual characters directly.

@ what are properties of the string

Q. how to find the length of the string

  1: length: (properties that return the length of the string) : (i.e that represent the number of characters.)
*/
let str = "vishal shinde";
// To find the length of the string using length property
console.log("length:", str.length);

/*
=======================================================================================================================

Q. How to create string ?

  - to create string use
  1. string literal
  2. string constructor

*/
// / 1.using string literal
let firstName = "vishal";
let lastName = "shinde";
console.log("fullname:", firstName + lastName);

// using string constructor
let newStr = new String("vishal shinde");
console.log("string constructor:", newStr);

/*
=======================================================================================================================

Q. how to find the individual character form the given string
  - 2 way to find the individual character form the given string like
    - 1. using charAt() method
    - 2. using array like object where individual character correspond to numerical index*/

// using 1. charAt() method
const string = "vishal shinde";
const index = string.charAt(6); // indexing start form the zero
console.log(index);

// using array like object where individual character correspond to numerical index
const as = str[0];
console.log(as);

/*
=======================================================================================================================

# comparing a string
use less or Grater then operator or compare the string

| Character | Unicode / ASCII Value |
| --------- | --------------------- |
| `"a"`     | `97`                  |
| `"b"`     | `98`                  |

so b is grater then a

*/
const a = "a";
const b = "b";
if (a < b) {
  console.log("${a} is less then ${b}");
} else if (a > b) {
  console.log("${a} is Grater then ${b}");
} else {
  console.log("${a} are equal ${b}");
}

/*
=======================================================================================================================

# Escape character
in javascript escape character it allow you to include special character in your code

1. back slash (\)  escape character turns a special character into a string character
Also if you want double quotes inside double quotes you have to use escape characters.
2. single quote
3. double quotes

| Escape | Meaning         | Example                      |
| ------ | --------------- | ---------------------------- |
| `\'`   | Single quote    | `'It\'s fine'` → `It's fine` |
| `\"`   | Double quote    | `"She said, \"Hello\""`      |
| `\\`   | Backslash       | `'C:\\Users\\Vishal'`        |
| `\n`   | New line        | `'Line1\nLine2'`             |
| `\t`   | Tab             | `'Hello\tWorld'`             |
| `\r`   | Carriage return | `'Hello\rWorld'`             | : It moves the cursor back to the beginning of the current line, without moving to a new line.

*/

let s = 'hey, hi, how are you? " \n I \t am fine and you "';

console.log(s);
