/*
# sort()
    1: syntax : array.sort() or array.sort(compareFunction)

    2: The sort() method sort the element of an array in place and return the sorted array 

    3: by default element sort() as string.

    4. the sort() method in JavaScript sorts the elements of an array in place, meaning it directly modifies the original array and does not create a new one. It also returns a reference to the same array after sorting.

    5: it return the references of the sorted array (array sorted in place no copy is made)

    6: all undefined array is stored at the end of the array

    7: sort() method preserve the empty slot if source of array having empty slot and it move at the end after the undefined

    8: (sort element in place and return sorting array)  default sorting order is Ascending
    
    9: sort method built upon converting their sequence of UIF-16 code unit value
*/

const MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
console.log(MONTHS.sort())
// output
// [
//     'APRIL',    'AUGUST',
//     'DECEMBER', 'FEBRUARY',
//     'JANUARY',  'JULY',
//     'JUNE',     'MARCH',
//     'MAY',      'NOVEMBER',
//     'OCTOBER',  'SEPTEMBER'
//   ]


const NUMBERS = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];

// Sort the numbers (as strings)
const sortNumber = NUMBERS.sort();
console.log("sortNumber", sortNumber); // Output will show the sorted array
console.log("NUMBERS", NUMBERS);       // Output will show the original array which is now sorted
// Check if both references are the same
console.log("Are both references the same?", sortNumber === NUMBERS); // Should output: true

// Output[
//     1, 10, 2, 3, 4,
//     5,  6, 7, 8, 9
//   ]

/*
# NOTE :
    1: array sort() method work with string if you sort the number then array.sort() method First convert into string then convert

*/


// #  example
const num = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];
const mon = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
const numericStrings = ["1", "22", "333", "4444", "55555"];
const mixedArray = [1, "22", 333, "4444", 55555, "666", 7, "8", 90];
function compareNumbers (a,b){
    return a-b
}

const new2 = mon.join();
console.log(new2);  // converted into the string

console.log(mon.sort()); // sort based on string

console.log(num.join()); // converted into the string. 

console.log(num.sort()); // sort as string

console.log("compareArray", num.sort(compareNumbers)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

console.log(numericStrings.join()); // 1,22,333,4444,55555

console.log(mixedArray.join());  // 1,22,333,4444,55555,666,7,8,90

console.log(mixedArray.sort(compareNumbers));  //  [1, 7, '8', '22', 90, 333, '666', '4444', 55555]

console.log(mixedArray.sort()); // [1, '22', 333, '4444', 55555, '666', 7, '8', 90]

console.log(numericStrings.sort()); //   ['1', '22', '333', '4444', '55555']

console.log(numericStrings.sort(compareNumbers));  // ['1', '22', '333', '4444', '55555']

/*
# sort the array using compare function :
    1: Using a compare function gives you full control over how elements in the array are sorted!
    2: sort an array using the compare method, you pass a comparison function as an argument to the sort() method. 
    3: This function determines the sorting order by returning one of three values:
        1: Negative value: If the first argument (a) should appear before the second (b).
        2: Positive value: If the first argument (a) should appear after the second (b).
        3: Zero: If the elements are equal (their order remains unchanged).

        syntax
        array.sort((a, b) => {
            Return negative, zero, or positive value based on your comparison logic
        });

*/


// #  sort number in Ascending order 
const numbers = [4, 2, 9, 1, 7];
numbers.sort((a, b) => a - b); // Ascending: smallest to largest
console.log(numbers); // Output: [1, 2, 4, 7, 9]

// # sort number in Descending order
const numb = [4, 2, 9, 1, 7];
numbers.sort((a, b) => b - a); // Descending: largest to smallest
console.log(numb); // Output: [9, 7, 4, 2, 1]

// # sort string alphabetically
const fruits = ["banana", "apple", "cherry", "orange"];
fruits.sort((a, b) => a.localeCompare(b)); // Case-insensitive sorting
console.log(fruits); // Output: ["apple", "banana", "cherry", "orange"]


// using object by a property
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 25 }
];

// # Sort by age (ascending)
users.sort((a, b) => a.age - b.age);
console.log(users);
// Output: [
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 25 },
//   { name: "Alice", age: 30 }
// ]

// # by length:
const fruits1 = ["banana", "apple", "cherry", "date"];
fruits1.sort((a, b) => a.length - b.length);
console.log(fruits1); // Output: ["date", "apple", "banana", "cherry"]

// compare callback functions
// syntax:
// const sortedNumbers = numbers.sort((a,b)=>{return a-b})
// if(a > b) return 1 => switch the order
// if(b>a) return -1 keep the order