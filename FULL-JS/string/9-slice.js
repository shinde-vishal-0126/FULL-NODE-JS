/*
# String.slice()

Syntax:
string.slice(startIndex[, endIndex])
    - slice() extracts a portion of a string and returns it as a NEW string.
    - The original string is NOT modified.
    - startIndex:
        - Starting index of extraction.
        - Included in the result.
    - endIndex: (End Index Is Excluded) moste imp point
        - Ending boundary of extraction.
        - NOT included in the result.
        - Optional.
            - If omitted, extraction continues to the end.
    - Negative indexes are supported.
    - Negative index counts backward from the end of the string.
    - If startIndex > endIndex,slice() returns an empty string "".
    - If startIndex >= string.length, slice() returns "".
    - If endIndex > string.length, endIndex is treated as string.length.
    - If a negative index goes beyond the beginning, it is treated as 0.
    - slice() does NOT modify the original string.
*/
//   01234
const str = 'Hello word';
// if you not pass any startIndex, or endIndex it whoel string or return new whole string.
console.log(str.slice());

// ex with startIndex, endIndex
// startIndex = 0 (included)
// endIndex  = 5 (excluded)
console.log(str.slice(0, 5));

// only start argument (Everything from index 6 to the end is returned.) conceptually str.slice(6, str.length)
console.log(str.slice(6));

// -ve start index
//  012345678910
// 'Hello word'
// 10987654321
console.log(str.slice(-5));

// -Negative Start + Negative End
// -5 → 6
// -1 → 10
console.log(str.slice(-5, -1));

// -ve End
// A negative end is converted to string.length + end.
const st = 'Hello word';
console.log(st.length - 2);
console.log(st.slice(2, -2));

// both -ve
// -1 so last element are exclude
console.log(str.slice(-6, -1));

// Negative Start Greater Than Negative End
// if start > end then it return empty string '' (slice() does not swap the values.)
console.log(str.slice(-5, -10));

// Start and End Equal
// return empty string  Because there is no character between the same starting and ending boundary.
console.log(str.slice(2, 2));


// End Greater Than String Length
// 100 is greater than 5, so it is treated as 5.
console.log(str.slice(0, 100));

// Start Greater Than String Length
// There is no character at index 50
console.log(str.slice(90));

// ex Negative Value Beyond Beginning
// it calculate
// length + (-50)
// = 5 - 50
// = -45
// Since the calculated index is less than 0, it is treated as 0
// so
// str.slice(-50) behave like  str.slice(0)
const str3 = 'Hello';
console.log(str3.slice(-100));

// Both Negative Beyond Beginning
// Both values become effectively 0: 0
// -50 → 0
// -30 → 0
// str.slice(0, 0)
console.log(str3.slice(-50, -30));

// empty string
//  because empty string "" is considered to exist at every valid position in a string

console.log("Hello".slice(0, 0)); // ""
console.log("Hello".slice(3, 3)); // ""
console.log("Hello".slice(5, 2)); // ""

/*
* slice() vs substring()

    1. slice();
        - slice() method use to extract the protion of a string.
        - Negative index supported in slice() method
        - if start > end it return '' (empty string)
        - end are excluded
        - Notice the second argument means length, whereas slice() uses an end position.

    2. substring()
        - sbustring() methos also used to extract the portion of  a string
        -  negative index are not supported
        - start > end then swap a value
        - End excluded

imp :
    slice() extracts from start up to, but not including, end. Negative indexes count backward from the end, and the original string remains unchanged.
    Say original string, not original array.
    end is excluded.
    - Negative end means string.length + end, then clamped to 0.
    - start > end → ""; JavaScript does not swap them.
    - Your variable names strrr / str3 and str1112 / str11112 need to be consistent.
    - end > string.length → treated as string.length.
    -  start > string.length → "".
    - Negative start beyond the beginning → treated as 0.
    - slice() does not modify the original string.
    - "Hello World".slice() if you not pass any parameter it return entire string.
*/
