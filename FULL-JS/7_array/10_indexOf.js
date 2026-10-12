/*
indexOf() method
  - syntax : indexOf(searchElement, fromIndex)
    - seachElement (required) : the element you want to search
    - fromElement (optional) : the index where searching begin.
  - indexOf() method is used to search for specified element in an array (or substring in a string) and return indes of its first occurrences.
    - search for left to right
    - return first matching index
    - return -1 if the element not found
    - does not modify the origional array
  - indexOf() method return first index at which given element can found in the array. if not found the element or not present element in the array  it return -1;
      i.e (i.e return the first (latest index) index of an  given element in the array) (i.e return the index of first occurrences of the given element.)
  - indexOf() method searching in forward direction (Works from left to right)
  - indexOf() method show only the first matching element in a give array (if double element present it also show the first matching)
  - indexof() method start searching form the -ve index but using different approach defined in following
  - indexOf() method are not mutating method (because it does not modified the original array it return the index of first occurrences of a specified element in an array)
*/
const NAMES = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Edward",
  "Fiona",
  "George",
  "Hannah",
  "Ian",
  "Julia",
  "Alice", // Duplicate name
];

// if element present then return the index of first occurrences of the element in the array
const data = NAMES.indexOf("Alice"); // 0
console.log(data);
//if element not present then indexOf() method return -1
const data1 = NAMES.indexOf("vishal"); // -1
console.log(data1);


// example 2
//  if you want to start searching form the perticular index you have to used the 2nd parameter of the indexof() method
const name = NAMES.indexOf("Alice", 5);
console.log(name);

//  example 3
const array = [2, 9, 9];
const newArray = array.indexOf(2);
console.log(newArray); // 0

//! Q The indexOf() method in javascript does work with -ve indices.
// No , No, indexOf() in JavaScript does not work with negative indices to search from the end.
// When you pass a negative number as the start index in indexOf(), JavaScript treats it as:
    // start = array.length + start;
    // So it's adjusted to a positive index, and searching still happens left to right, not from the end.

    // If you do not provide fromIndex, it defaults to 0. If you provide a negative fromIndex, it is treated as array.length + fromIndex.
    // The search still proceeds forward from that calculated index.

//  Behavior with Negative fromIndex:If you pass a negative value for fromIndex, the starting position is calculated as array.length + fromIndex.
//  However, the search will only proceed forward from this calculated position, not
let arrr = [10, 20, 30, 40, 50];
// Searching for 30 starting from -3 (array.length + (-3) = 5 - 3 = 2)  so starting index is 2
console.log(arrr.indexOf(30, -3)); // Output: 2 (index of 30)
// Searching for 10 starting from -3
console.log(arrr.indexOf(10, -3)); // Output: -1 (10 is not found from index 2 onward)

// No fromIndex → starts from index 0
console.log(arrr.indexOf(30)); // 2


// ! What if -ve index to small
const arrg = [10,20,30];
let res = arrg.indexOf(10, -100)
console.log(res);
// in above example -ve index to small so for -ve index calculatipn prespective
// arrg.length + -100;
// 3 + (- 100);
// -97   it also return -ve to small index then it reated as zero (i.e start searching from the zero )


//!  Negative fromIndex adjusts the starting point but does not reverse the search direction.
// If the adjusted fromIndex is out of bounds (e.g., less than 0), the search starts at 0.
//example 4
// here return -1 because 2 are not present in -1 index position
const a = array.indexOf(2, -1); // (5 + (-1)) = 4 so start index is 2
console.log(a); // -1  (so at 2nd position 2 are not present so it return -1 )

//example 4
const b = array.indexOf(2, -3);
console.log(b); // 0

// # example 5
//! you can not used indexOf() for search NAN so its return -1
const arr = [2, NaN, 4];
// # NaN === NaN is false, so indexOf(NaN) doesn't work. Use arr.findIndex(Number.isNaN) instead if needed.
const c = arr.indexOf(NaN);
console.log(c); // -1
// so correct approach to find
console.log(arr.indexOf(Number.isNaN))

// if length > formindex
// Since fromIndex >= arr.length, JavaScript doesn't search at all and immediately returns:
console.log(arr.indexOf(2,5))

// # example 6
//! you can not used indexOf() to search for empty slot in spars array
const app = [2, , 4, , null, undefined, ""];
// here return -1 because index of not used for the search empty slot in array
// indexof() method are not able to find the empty slot in array it return -1 indexOf() skips holes.
const dd = app.indexOf(); // app.indexOf() without an argument is not valid. There is an actual undefined store at index.
console.log(dd); // because empty slot is not undefined.

// # also index of method are not able to find undefined in array so it return -1
  const d = app.indexOf(undefined);
  console.log(d); // 5
  // indexOf() method return index of the null value
  const d2 = app.indexOf(null);
  console.log(d2); // 4
  // indexOf() method return the index of the empty string
  const d3 = app.indexOf('');
  console.log(d3)// 6



// # find the occurrences and count of the element in give array
const stdName = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Edward",
    "Fiona",
    "George",
    "Hannah",
    "Ian",
    "Julia",
    "Alice",
    "Bob",
    "Alice"

  ];

  let count = 0;
  let occurrences = [];
  let element = 'Alice';
  let index = stdName.indexOf(element);
  while(index !== -1){
    occurrences.push(index);
    index = stdName.indexOf(element, index+1);
    count++;
  }
  console.log(occurrences);
  console.log(count);

