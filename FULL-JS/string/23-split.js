/*
# String.split()
Syntax:
string.split(separator, limit)
    - split() method is used to divide a string into an array of substrings based on a specified separator.
    - It returns a NEW array containing the separated substrings.
    - It does NOT modify the original string because strings are immutable.
    - separator is optional and can be:
        - A string
        - A regular expression
    - limit is optional and specifies the maximum number of elements returned in the resulting array.
    - If no separator is provided, the entire string is returned as a single element inside an array.
    - If the separator is not found in the string, the entire string becomes the first and only element of the array.
    - split("") splits the string into individual UTF-16 code units.
    - split() can use regular expressions as separators. */

// # Example 1: Split String into Characters
const str = "vishal shinde";
const word = str.split("");
console.log(word);



// # Example 2: No Separator : When no separator is provided, the entire string becomes one element of an array.
const strCopy = str.split();
console.log(strCopy);


// # Example 3: Basic Usage with String Separator
let str1 = "apple,banana,orange";
let result = str1.split(",");
console.log(result);


// # Example 4: Using Space as Separator
let sentence = "Hello world!";
let words = sentence.split(" ");
console.log(words);

// # Example 5: Using Limit : limit = 3 Only a maximum of 3 elements will be returned.
let str2 = "a,b,c,d,e";
let result2 = str2.split(",", 3);
console.log(result2);

//  # Example 6: Limit = 0 : If limit is 0, an empty array is returned.
console.log("a,b,c".split(",", 0));


// # Example 7: Limit Greater Than Available Elements :If limit is greater than the number of possible elements, all available elements are returned.
console.log("a,b,c".split(",", 10));

// # Example 8: Using Regular Expression as Separator
// \d+ means: \d → digit  + → one or more So the string is split wherever one or more digits are found.
let strr = "apple123banana456orange";
let resultr = strr.split(/\d+/);
console.log(resultr);


// # Example 9: Separator Not Found Since "," is not found, the entire string is returned as a single element.
const data = "Hello World";
console.log(data.split(","));


// # Example 10: Empty String as Separator : An empty string separator splits the string into individual characters.
let text = "Hello";
console.log(text.split(""));

//  # Example 11: Empty String with Non-Empty Separator ==> The original string is empty. Since separator "a" does not exist, the result contains the original empty string.
const emptyString = "";
console.log(emptyString.split("a"));

// # Example 12: Empty String Without Separator ==> No separator is provided. Therefore, the entire string, which is an empty string, is returned as one array element.
console.log("".split());


// # Example 13: String and Separator Both Empty ==> Special case: Empty string split by empty string returns an empty array.
console.log("".split(""));

// # Example 14: Consecutive Separators ==> Consecutive separators create an empty string element.
const fruits = "apple,,banana";
console.log(fruits.split(","));


// # Example 15: Separator at Beginning ==> The separator appears at the beginning, so the first element is an empty string.
console.log(",apple,banana".split(","));

//  # Example 16: Separator at End ==> The separator appears at the end, so the last element is an empty string.
console.log("apple,banana,".split(","));


// # Example 17: Multiple Spaces
// split(" ") treats every individual space as a separator.
// For one or more whitespace characters, use a regular expression.
const sentence1 = "Hello    World    JavaScript";
console.log(sentence1.split(" "));
console.log(sentence1.split(/\s+/));


// # Example 18: Original String Is Not Modified
const original = "apple,banana,cherry";
const newArray = original.split(",");
console.log(original);
// "apple,banana,cherry"
console.log(newArray);

// # Example 19: Practical Example
const fullName = "Vishal Shinde";
const nameParts = fullName.split(" ");
console.log(nameParts);
console.log(nameParts[0]);
console.log(nameParts[1]);

/*
  # Important Interview Points
    1. split() converts a string into an array.
    2. It returns a NEW array.
    3. It does not modify the original string.
    4. separator can be a string or regular expression.
    5. If no separator is provided, the entire string is returned as one array element.
    6. If separator is not found,the entire string is returned as one array element.
    7. split("") splits the string into individual UTF-16 code units.
    8. limit specifies the maximum number of elements returned in the array.
    9. limit = 0 returns an empty array.
    10. Consecutive separators can create empty string elements.
    11. A separator at the beginning creates an empty first element.
    12. A separator at the end creates an empty last element.
    13. Regular expressions can be used for powerful splitting. */


// # Common Interview Question
// What is the difference between split("") and split()?

// split("") → Splits into individual characters.
// Example:
// "Hello".split("");

// split() → Does not split the string.
// "Hello".split()
// ["Hello"]
// Technically, it splits into UTF-16 code units, which can behave unexpectedly with some emojis:
console.log("😀".split(""));
// ["\uD83D", "\uDE00"]  // two UTF-16 code units
