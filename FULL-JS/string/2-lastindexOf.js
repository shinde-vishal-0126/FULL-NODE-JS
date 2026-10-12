/*
Q. LASTINDEXOF()

  - syntax: string.lastIndexOf(searchVlaue, fromIndex);
  - LastIndexOf() searches for specified value in a string starting from the END and moving  BACKWARD.
  - it return the index of LAST occurrences of the specified value.
  - if the value not found, it return -1
  - The search happen BACKWARD but the return index is based on the normal FORWARD indexing of the string.
  - it is CASE-SENSITIVE.
  - fromIndex is optional: it specifies the index position where the background search start
  - if fromIndex is omitted, searching start from the end of the string.
  # IMP
    - if fromIndex is negative, it is treated as 0;
    - if the fromIndex is Grater then or equal to the string length, searching start from the end of the string.

*/

let str = "Hello world, welcome to the universe.";
let index = str.lastIndexOf("welcome");
console.log(index);

// # searching backward using fromIndex
// so lastIndex() start searching backward from the given index.
let index1 = str.lastIndexOf("welcome", 45);
console.log(index1);

// EX it start searching from  the BACKWARD OR FROM LASTINDEX.
const st = "hello hello hello";
console.log(st.lastIndexOf("hello"));
// IMP
// - its start from searching in BACKWARD but retun the index value from the FORWARD.
console.log(st.lastIndexOf("hello", 10));
console.log(st.lastIndexOf("hello", 5));

// # Negative fromIndex
// A negative fromIndex is treaed as 0;
let str2 = "Hello word";
console.log(str2.lastIndexOf("o", -1));
// why it return -1 because negative index become 0 so it behave approximately like
// it only search backward from index 0;
console.log(str2.lastIndexOf("o", 0));

// EX.
let str3 = "Hello word";
let index3 = str3.lastIndexOf("H", -5);
// why ?
//  fromIndex is -5 so is treated as 0   so it return as 0
//  Then it check from the index 0
console.log(index3);

// # Empty string with LastIndexOf()
console.log("camel".lastIndexOf("", 2)); // return index as 2 because it check from the index 2 and it found empty string at index 2
console.log('camel'.lastIndexOf("", 0)); // return index as 0 because it check from the index 0 and it found empty string at index 0
console.log('camel'.lastIndexOf("")); // return index as 5 becaue after completing string it having empty string so it return the index as 5


// # default fromIndex
// - if you don't provide fromIndex it will searches form the end of the string.
const str4 = "Hello world, welcome to the universe.";
console.log(str4.lastIndexOf("o"));

/*
* difference between indexof() vs LastIndexOf()
Both are CASE-SENSITIVE.
Both have optional fromIndex parameter.

1. indexOf()
  - searches for specified value in a string starting from the BEGINNING and moving FORWARD.
 - it return the index of FIRST occurrences of the specified value.
 - if the value not found, it return -


2. LastIndexOf()
 - searches for specified value in a string starting from the END and moving  BACKWARD.
 - it return the index of LAST occurrences of the specified value.
 - if the value not found, it return -1
*/
