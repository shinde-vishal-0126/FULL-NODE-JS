/*
@ INDEXOF

  - indexOf() method syntax string.indexOf(searchValue, fromIndex);
  - indexOf() searches for a specific value inside a string
  - it return the index of the  FIRST occurrencess of the specific vlaue.
  - it the value is not found it return -1
  - indexOf() is case-sensitive.
  - fromIndex specifies where the shearch should start.
  - if the fromIndex is -ve, it is treated as 0
  -  index of search in FORWARD direction
  - it return the index of the first occurrence found from the specified starting position.
  -  index of does not modifiy the origional array .

*/

let str = "hello word";
// return index of first occurrnes of specified search value.
console.log(str.indexOf("word"));
console.log(str.indexOf("Word"));
console.log(str.indexOf("Hello"));
console.log(str.indexOf("o"));

// # indexOf(searchIndex, fromIndex )
console.log(str.indexOf("o", 8));
console.log(str.indexOf("o", 7));

// # Negative fromIndex
const str1 = "The quick brown fox jumps over the lazy dog";
// if you give -ve index  to fromIndex it is treated as 0
console.log(str1.indexOf("quick", -8));
console.log(str1.indexOf("lazy", -100));

// Q find all occurrences of the give element

const st =
  "The quick brown fox jumps over the lazy dog. If the dog braked, was it really lazy?";
const word = "dog";
let position = [];

let pos = st.indexOf(word);
while (pos != -1) {
  // count = count + 1;
  position.push(pos);
  pos = st.indexOf(word, pos + 1);
}
// console.log(count);
// return count;
console.log(position);

// return the value using empty search string.
// This is an important special case. When searching for an empty string:
// the result is generally the normalized fromIndex, as long as it is within the string's length.
console.log("Hello word".length);
console.log("Hello word".indexOf(""));
console.log("Hello word".indexOf("", 0));
console.log("Hellow word".indexOf("", 3));
console.log("Hello word".indexOf("", 8));

// Example 6:
// However  2nd argument value is Grater then or equal to the string length then the return value is the string length
console.log("Hello word!".indexOf("", 11)); // return 11
// 2nd argument is grater then then the string length there return the value of the string length.
console.log("Hello word!".indexOf("", 13)); // return 11
console.log("Hello word!".indexOf("", 22)); // return 11

// return 2
console.log("Hi".indexOf("", 100));
// return length
console.log("Hello word".indexOf("", 11));

// Q. using indexOf() method you have to find the occurrence of the element in the give array.
const string = "To be, or not to be, that is the question ";
let count = 0;
let postion = string.indexOf("e");
while (position != -1) {
  count++;
  position = string.indexOf("e", position + 1);
}
console.log(count);

/*
indexOf() returns the index of the first occurrence.
If the value is not found, it returns -1.
It does not support regular expressions.
It accepts an optional second argument (startIndex).
*/
