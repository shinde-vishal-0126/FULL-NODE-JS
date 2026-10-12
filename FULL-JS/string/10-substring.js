/*
substring()

    - syntax
        - string.substring(startIndex, endIndex);
        - substring() is used to extract a portion of a string between two indexes.
            - Returns a new string
            - Does not modify the original string
            - startIndex issu included
            - endIndex is excluded
    - substring() extracts characters between two indexes, includes the start index and excludes the end index. -
    -  (substring() are not supported to the -ve index)Negative indexes are treated as 0, and if start > end, the indexes are automatically swapped.
    - If either startIndex or endIndex is less than 0, it is treated as 0. (-ve indices are not supported in subString())
    - substring() is similar to the slice() method

*/

const str = 'javascript is awesome!';
const result = str.substring(0, 10);
console.log(result);


// J a v a S c r i p t   i s   a w e s o m e !
// 0 1 2 3 4 5 6 7 8 9 10
// substring(0, 10) means:
// start = 0  → included
// end   = 10 → excluded

// 2. if endIndex is omiteed
// if only start index if provided extraction continues until the end  of the string.
console.log(str.substring(7));
let result1 = str.substring(0);
console.log(result1);

// 3. Negative indexes
// substring() does not support negative indexes
// any -ve index treated as 0; :
console.log(str.substring(-6)); // it is treated as 0 and return whole String.

console.log(str.substring(-7, 4)); // so -7 treated as 0 so (0,4)

// 4. What happen when startIndex > endIndex
// then substring() automatcially swap the two values.
// start > end
//  ↓
// substring() swaps them
let s = 'Hello word !';
console.log(s.length);
const result2 = s.substring(6, 2);
console.log(result2);

// 5. what happen when endIndex is grater then string length ?
// the value is treated as string length
const r = s.substring(1, 50); // The value is treated as the string's length.
console.log(r);

// 6. What happens when startIndex is greater than string length?
// if both indexes are grather then the string length the result is an empty string
//start = 50 → 12
// end = 60 → 12
// substring(5, 5) ↓ ""
console.log(s.substring(50, 60)); // length is grater then the string length so it return emptys string.

// 7 same start & end always return empty string
console.log(s.substring(2, 2));


// 8. Both negative (if both value are -ve then it is treated as 0) and return empty string.
console.log(s.substring(-9, -6));

// 9 Negative start & positive End
// -5 treated as 0  so (0,5)
console.log(s.substring(-5, 5));

// substring() Does not modify original string
// string are immutable.
const rs = s.substring(0, 5);
// so original string remains unchanges.
console.log(rs);


/*
* substring() vs slice()
    1. substring()
        - extract part of string
        - return new string
        - does not modified origional string
        - does not support -ve indexes (it you give it treaed as 0)
        - start > end (automatically swap the indexes)
        - End index are excluded
        - end > length  then computed with length

    2. slice()
        - extracted part of string
        - return new string
        - does not modified origional string
        - negative indexes are supported (if you guve -ve index it counted from end.)
        - start > end  then return empty string "";
        - end indexes excluded
        - End > length then compute to length

*/
// ex of both
// # substring()
console.log('Hello word'.substring(-5)); // it is treated as zero
// start > end  ==> then it swap the element
console.log("Hello word".substring(8, 3));

// # slice()
console.log('Hello word'.slice(-5)); // it counted from the end.
console.log('Hello word'.slice(8, 3)); // it return empty string.

/*
* Important Difference
substring()
    substring(start, end)
    Negative → 0
    start > end → swap
slice()
    slice(start, end)
    Negative → count from the end
    start > end → ""
*/

/*
* substring() vs substr()
- Do not confuse these:
    substring(start, end)
        - Second argument = end index
    Whereas:
    substr(start, length)
        - Second argument = number of characters
Example:
    "Hello World".substring(0, 5); "Hello"
    "Hello World".substr(0, 5);  "Hello"
- They give the same result here, but the meaning of the second argument is different.
⚠️ substr() is deprecated. Prefer slice() or substring().



substring(start, end)
    1.start included
    2. end excluded
    3. Negative values → 0
    4. start > end → swap
    5. end > length → length
    6. start > length → effectively length
    7. start === end → ""
    8. No arguments → entire string
    9. Original string is not modified
    10. Does not support negative indexing from the end

* DEF
    - substring() extracts characters between two indexes, includes the start index and excludes the end index. Negative indexes are treated as 0, and if start > end, the indexes are automatically swapped
*/
