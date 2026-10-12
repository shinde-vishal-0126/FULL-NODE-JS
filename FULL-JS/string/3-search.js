/*
@ search
    - syntax : search(searchElement | regularExpression)
    - used for searching a string or pattern in a regular expression withing give text
    - The search() method is a JavaScript String method used to search for a pattern inside a string.
    - It returns the index of the first match.
    - If no match is found, it returns -1.
    - def :
        - A search() method searches a string for a match againset a specified string or regurlar expression and return the index of the first match, if no match found it return -1
        - search() only returns the first matching position.
    - Search() does not accept a second fromIndex/start position argument.
    - search() is useful when pattern matching is required.
    - It can accept a string, which is internally treated as a pattern.
    - It does not return the matched value; it returns only the index.
    - For simple string searching, indexOf() or includes() is often more appropriate.
*/

//  # 1. Regular expression
const text = 'Hello word hi hello word';
const index = text.search(/word/);
console.log(index);

// if not match it return -1
const index1 = text.search(/Word/);
console.log(index1);

// # 2. passing string
// * it return only first matching pattern index
const res = text.search('word');
// so search() can also acepts a string, howerver search() is  primarly useful when using regular expression
console.log(res);

// # 4.search word
let str = "apple, banana, cherry";
let result = str.search(/banana/);
console.log(result);


// # 5 pattern does not match
let result1 = str.search(/^grapes/);
// ^ the regular expression /^grapes/ measn the string must start with "grapes"
console.log(result1);


// Q. Whay search is Powerful():
// The biggest adventages of search() is regular expression supports.
const s = "Hello 123 Word";
// The regular expression /\d/ find a digit so index 6 contain the first digit
console.log(s.search(/\d/));

// # find First number
// /[0-9]/ regex
console.log(s.search(/[0-9]/));

// # case insensitive-search
let st = 'Hello WORD';
console.log(st.search(/word/i));

// # compare with indexOf();
// becase indexOf() is caseSensitive
console.log(str.indexOf("word"));
// but in search method using regularexpression i avoid case sensitivity

// Note
// IMP : search() does not accesspt fromIndex. : i.e search() method accept only one arguments.
const str2 = 'apple, apple, apple';
console.log(str2.search(/apple/));
// Even if apple accurs multiple times search return only 0 index becaseu search method return only first match.

// search() method does not return match value it return only index.

// # find the white space
const str4 = 'order Number# abc123';
// s for white space
console.log(str4.search(/\s/g));
// find the special character
console.log(str4.search(/[@#$%]/));
// find uppercaseLatter
console.log(str4.search(/[A-Z]/));

/*
# String.search()

Syntax:
string.search(searchValue)
    1. The search() method searches a string for a specified pattern.
        - No, the String.prototype.search() method in JavaScript does not support or respect the g (global) flag
    2. It is mainly used with Regular Expressions (RegExp).
    3. It returns the index of the first match.
    4. If no match is found, it returns -1.
    5. search() searches from the beginning of the string.
    6. search() only returns the position of the first match.
    7. search() does not return all occurrences.
    8. search() cannot take a second fromIndex/start position argument.
    9. search() supports Regular Expressions, making it useful for pattern matching.
    10. search() can also accept a string value.
    11. indexOf() does not support Regular Expression pattern matching.
    12. search() and indexOf() both return an index or -1,  but they have different capabilities and parameters.
    13. search() does not return the matched value. It only returns the index.
    14. For matched values use match().
    15. For simple string searching use indexOf() or includes(). For pattern/RegExp searching use search().
*/

/*
* search() vs indexOf()
    1. serch()
        - search method used to find the index of first match string
        - search metod accept the regulra expession
        - if not serach it return -1
        - searh() method does not have 2nd argument

    2. indexOf()
        - indexOf method return the  first occurrences index of the specified value or string
        - if index is not found it return -1
        - indexOf() does not accept regular expession
        - indexof(searElement, startIndex)  accept 2nd argument which start the searching of the specified element


 Feature             | `search()`                         | `indexOf()`                                                  |
| ------------------ | ---------------------------------- | ------------------------------------------------------------ |
| Purpose            | Finds the index of the first match | Finds the index of the first occurrence of a specified value |
| Regular Expression | ✅ Accepts regular expressions      | ❌ Does not accept regular expressions                        |
| Not Found          | Returns `-1`                       | Returns `-1`                                                 |
| Second Argument    | ❌ Does not accept a start position | ✅ Accepts `fromIndex`                                        |
| Case Sensitive     | ✅ Yes                              | ✅ Yes                                                        |

*/
