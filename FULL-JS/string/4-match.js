/*
@ Match()
    - Match() method is a string method used to retrive the result of matching a string against a regular expression (RegExp)
    - string.match(regExp);
    - match() search string against a regular expession and return the matching result if a match is found it return an array, if no found it return null.
    -  match() does not modify the original string.
    - return value - most important concept
    - For all matches with capturing groups, use matchAll().
        - return value depends on match() depends on wheather the regular expression has the g flag
            - match found without g  = Detailed match array
            - match found with g = array of all matched string
            - no match = null

    - by defaul match is case-sensitive. (so to case sensitive matching used i flag)
    - flat g + i  = global + case insensitive
    - if the matching not found then it return null but if no argument it return [] empty array
    - support empty string match (str.match(''))
            */
const result = 'Hello Javascript';
console.log(result.match(/Javascript/));


// Whihout g flag
// match() method return the information about the first match only
const str = "The quick brown fox jumps over the lazy quick quick dog.";
let res = str.match(/quick/);
console.log(res);
console.log(res.index);
console.log(res.input);
console.log(res.groups);


// with g flag return all matches.
// g flag change the return structure becase global version return a simply array of matched strings. (not detailsed infromation)
let res1 = str.match(/quick/g);
console.log(res1);
console.log(res1.index);

// No match found = return null
console.log(str.match(/vishal/));


// match() with capturing Group
const s = "My birthday is 25-12-2025";
const res3 = s.match(/(\d{2})-(\d{2})-(\d{4})/);
// Capture value on group
console.log(res3);

// With g, match() returns the complete matched strings.
const res4 = s.match(/(\d{2})-(\d{2})-(\d{4})/g);
console.log(res4);


// capturing group + g flag (With g, match() returns the complete matched strings.)
const st = "John: 25, Mike: 30";
const r1 = st.match(/(\w+): (\d+)/g);
console.log(r1);

// searching digits and add g flat to find all numbers in give string.
console.log(st.match(/\d+/g));

// find all words
console.log(st.match(/\w+/g));

// find white space
console.log(st.match(/\s+/g));

// find special characters
console.log(st.match(/[@#!]/g));

// match start of string ^ (i.e string start with "Hello")
console.log(st.match(/^John+/g));

// return null because string start with vishal are not any string
console.log('Hello word'.match(/^vishal/));

// Match end of the string
console.log('Hello word'.match(/word$/)); // end of the string

// . (dot Match any single character)
console.log("cat".match(/c.t/));

// + (used to one or more character)
// * zero or more character
// ? zero or more (used for capturing group)
// ?:  zero or more (non capturing group)
//  Character Classes []
// range [R_Z]
// find all Lowercase Latters [a-z]/g
// find all digits [0-9]/g
// \d = equvalent to the [0-9]
// \D = non digit
// \w = word character
// \W non - word character
// \s = white space
// \S = non white space
//


// Named Capturing Groups (modern js support name capturing group )
const str5 = "2026-09-05";

const result5 = str5.match(
    /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
);
console.log(result5);
console.log(result5.groups);

console.log('123'.match(/1.3/));
// This is interesting. The argument is converted to a regular expression pattern. conceptually new RegExp(1.3); become patter like /1.3/  zero means any character so it return '123'

// match() With No Argument
console.log('Hello'.match());
// it return empty array not null : if the matching not found then it return null but if no argument it return [] empty array

// This finds empty matches at multiple positions.
console.log("abc".match(/(?:)/g));


/*

* Match() vs search()
    1. match() :
        - get matched value
        - return array if match / if not match return null
        -  RegExp support
        - Global match support
        - Capturing Group support
        - No match return null;

    2. Search() :
        - search() method return the index of first match pattern / string / value
        - if spefified string match it return index of that string / otherwise if not match it return -1
        - RegExp support
        - no Global matach support
        - no capturing Group
        - No match it return -1
*/
