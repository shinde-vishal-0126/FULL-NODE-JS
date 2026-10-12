/*
# slice()
        1: syntax: slice(start , end)

        2: the Slice() method in javascript used to extract a portion of an array or string and return new array or string  without modifying the original one.
            i.e slice method used with array or string also.
        3.slice() method in js used to create shallow copy of a portion of an array into new array.

        4: it return new array

        5: it does not modified the original array 

        6. you can used it to extract the segment of the array and work with it new array 

        7. in slice() method both argument like start and end are optional

        8. if you not provided any argument it create shallow copy of the array (i.e create new array with existing array)

        9. in end argument last element are excluded

        10. slice() method are work with -ve index 

        11. it the array out of bound index then return empty array as result

*/

// #  example 
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(1, 4);
//slice(1, 4) extracts elements from index 1 to 3 (index 4 is excluded)
console.log(newArray); // Output: [2, 3, 4]
console.log(array); // Output: [1, 2, 3, 4, 5] (Original array is unchanged)


// #  omitting end parameter 
const array1 = [1, 2, 3, 4, 5];
const newArray1 = array1.slice(2);
console.log(newArray1); // Output: [3, 4, 5]


// # shallow copy of the entire array
const array3 = [1, 2, 3, 4];
const newArray3 = array3.slice();
console.log(newArray3); // Output: [1, 2, 3, 4]

// # Example :
const newAnimal = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(newAnimal.slice(2));
console.log(newAnimal.slice(2, 4));
console.log(newAnimal.slice(2, -1)); // [ 'camel', 'duck' ]


// #  calling slice() method on non-array object
const arrayLinks = {
    length: 3,
    0: 2, 1: 3, 2: 4, 3: 33
}
console.log(Array.prototype.slice.call(arrayLinks,1,3))

// # using slice() on spare array (slice method work on spare array)
console.log([12,3,4, ,6].slice(1,4));


// If the startIndex provided to the slice() method is less than the negative length of the array, it is clamped to 0. This means that the slicing starts from the beginning of the array.
const arr1 = [10, 20, 30, 40, 50]; // array in less then the length then it start from the zero
console.log(arr1.slice(-10)); // [10, 20, 30, 40, 50]
console.log(arr1.slice(10)); // []


const arr2 = [10, 20, 30, 40, 50];
// arr.length + (-10) = -5 (so here calculated starting position is less then zero the start the searching form the give index as 2 so give element not found it return the empty array)
console.log(arr2.slice( 2,-10)); // []
console.log(arr2.slice( 2,10));


/*
| Case | Condition                       | Description                          | Example         | Result                 |
| ---- | ------------------------------- | ------------------------------------ | --------------- | ---------------------- |
| 1    | `start >= arr.length`           | Start is out of bounds               | `slice(10)`     | `[]`                   |
| 2    | `start < -arr.length`           | Too negative, clamped to 0           | `slice(-10)`    | `[10, 20, 30, 40, 50]` |
| 3    | `start = 0`                     | From beginning                       | `slice(0)`      | `[10, 20, 30, 40, 50]` |
| 4    | `start > 0 && start < length`   | Normal case                          | `slice(2)`      | `[30, 40, 50]`         |
| 5    | `end > start`                   | Slices from start to end-1           | `slice(1, 4)`   | `[20, 30, 40]`         |
| 6    | `end <= start`                  | End before or at start → empty array | `slice(3, 2)`   | `[]`                   |
| 7    | `end > arr.length`              | Treated as array.length              | `slice(2, 10)`  | `[30, 40, 50]`         |
| 8    | `end < 0`                       | `arr.length + end` used              | `slice(1, -1)`  | `[20, 30, 40]`         |
| 9    | `start < 0`                     | `arr.length + start` used            | `slice(-3)`     | `[30, 40, 50]`         |
| 10   | `start < 0`, `end < 0`          | Both are from the end                | `slice(-4, -1)` | `[20, 30, 40]`         |
| 11   | `start = end`                   | Always returns empty array           | `slice(2, 2)`   | `[]`                   |
| 12   | `start > end (after resolving)` | Returns empty array                  | `slice(2, -3)`  | `[]`                   |
| 13   | `end` omitted                   | Goes till end of array               | `slice(1)`      | `[20, 30, 40, 50]`     |


*/