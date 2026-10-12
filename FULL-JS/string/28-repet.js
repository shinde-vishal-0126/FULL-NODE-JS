/*
REPEAT()
# str.repeat(count)
  - The repeat() method returns a new string containing the specified number of copies of the string, concatenated together.
  - The original string is NOT modified.
  - The count specifies how many times the string should be repeated.
  - If count is 0, repeat() returns an empty string.
  -  If count is a negative number, repeat() throws a RangeError
  - If count is Infinity or -Infinity, repeat() throws a RangeError.
  - If count is NaN, it is treated as 0,so repeat() returns an empty string.
  - If count is undefined, it is treated as 0.
  - If count is a decimal number, it is converted to an integer by truncating the decimal part.
  -  count can be a value that can be converted to a number, such as a numeric string.
  - If the requested repeated string would be too large, repeat() throws a RangeError.

*/
// BASIC EXAMPLE
const str = 'abc';
console.log(str.repeat(3));

// REPEATING WITH ZERO
const str1 = 'abc';
console.log(str1.repeat(0));
// count = 0
// Therefore, an empty string is returned.

//REPEATING WITH ONE
console.log('abc'.repeat(1));
// The original string is returned as the result.

// REPEATING WITH TWO
console.log('abc'.repeat(2));

// NEGATIVE COUNT
// console.log('abc'.repeat(-1));
// RangeError:  Negative count is not allowed.

// INFINITY
// console.log('abc'.repeat(Infinity));
// RangeError : Infinity would create an infinitely large string, so JavaScript throws a RangeError.

// NaN
console.log('abc'.repeat(NaN));
// NaN is treated as 0.

// UNDEFINED
console.log('abc'.repeat(undefined));
// undefined is converted to 0.

// DECIMAL COUNT
console.log('abc'.repeat(2.9));
// The decimal part is removed. 2.9 becomes 2.

// NUMERIC STRING
console.log('abc'.repeat('3'));
// "3" is converted to the number 3.

// EMPTY STRING
console.log(''.repeat(5));
// Repeating an empty string still produces an empty string.

// ORIGINAL STRING IS NOT MODIFIED
const str2 = 'abc';
const result = str2.repeat(3);
console.log(result);
console.log(str2);
// The original string remains unchanged.

// MULTI-CHARACTER STRING
console.log('Hello '.repeat(3));
// The complete string is repeated each time.

// PRACTICAL EXAMPLE
console.log('-'.repeat(10));
// Useful for creating separators.

// ANOTHER PRACTICAL EXAMPLE
console.log('*'.repeat(5));
// "*****"

// RANGEERROR FOR VERY LARGE RESULT
// console.log('abc'.repeat(1e10));
// RangeError The resulting string would be too large.

// IMPORTANT INTERVIEW POINTS
// 1. repeat() returns a NEW string.
// 2. repeat() does NOT modify the original string.
// 3. count = 0 -> returns ""
// 4. count = negative number -> RangeError
// 5. count = Infinity -> RangeError

// 6. count = NaN -> treated as 0
// 7. count = undefined-> treated as 0
// 8. Decimal count is truncated.
// 9. Numeric strings are converted to numbers.
// 10. Very large results can cause RangeError.

// REPEAT() vs CONCAT()
// repeat()
console.log('abc'.repeat(3));
// Used when the SAME string needs to be repeated.

// concat()
console.log('abc'.concat('abc', 'abc'));
// Used to combine strings/values.

// GOLDEN RULE
// repeat(count)
//     |
//     +-- count = 0       -> ""
//     |
//     +-- count > 0       -> repeated string
//     |
//     +-- count negative  -> RangeError
//     |
//     +-- Infinity        -> RangeError
//     |
//     +-- NaN             -> ""
//     |
//     +-- decimal        -> truncated
//     |
//     +-- huge result     -> RangeError

// repeat() = "COPY THIS STRING N TIMES"
