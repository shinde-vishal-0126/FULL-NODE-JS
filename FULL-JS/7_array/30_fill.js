/*
# fill()
    1: syntax: fill(value, start, end)
    2: fill() method change all element in an array to static value form start index to and end index.
    3. by default start index 0 and end index is array.length
    4. it return modified array with fill static value

    5: it is mutating method (i,e It modifies the original array in place instead of returning a new array..)


*/

// # Example : 1
const arr1 = [1,2,3,4];
const new1 = arr1.fill(3,1);
// it return the modified array
console.log(new1);
// it modified the original array
console.log(arr1);

// Example : 2
console.log(arr1.fill(5,1));


// Example: 3
// # fill method fills empty slots in spares array with value as well
const temp  = Array(5).fill('girl',0);
console.log(temp);

// Example : 4
// last element are exclude
console.log([1,2,3].fill(4,-3,-2));


// Example : 5
// # if you used fill method with NaN does not happened anything with array
console.log([1,4,5].fill(4, NaN, NaN));


// # Example : 6
// if the value is an object each slot in the array will reference that array
const arr2 = Array(3).fill({});
console.log(arr2);
arr2[0].welcome = 'Welcome';
console.log(arr2)


// # in fill method callback function is invoked only for array indexes which have assigned value it not invoked for empty slots in spare arry
let grades = [10, 20, 30, 40, 50];
grades.fill(100, 2, 4);
console.log(grades); // [10, 20, 100, 100, 50]


// Reset an array:et
 arr = [1, 2, 3, 4];
arr.fill(0);
console.log(arr); // [0, 0, 0, 0]

// Fill with negative indices:
const arr = [1, 2, 3, 4];
arr.fill(9, -2); 
console.log(arr); // [1, 2, 9, 9]