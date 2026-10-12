/*
# array 
    1: array: Collection of multiple type of data stored in single variable (references type in javascript)
    2: javascript array is an object that represent a collection similar type of element.
    3: Each value(name) will be called element
    4:  in array each element is represent by an index which start with zero(0)
    5: non-primitive type
    6: iterable : array object where you can used the for loop
    7:array like object : any object with length property and used indexes to access them
    8: array as object : array in javascript are specific type of object that has numeric key(indices) and length property
    (then indices are automatically maintained and the length property is automatically update when you add or remove element form the array)

    9: type of operator return object type for both array and normal object.
    10: Javascript array is data structure that allow you to store and organize multiple value within a single variable
    11: it is versatile (flexible, powerful, and can be used for multiple purposes. like  Can store any data type, Can grow or shrink in size, Used for looping, mapping, filtering, etc.) and dynamic object
    12: it can hold various dat types including numeric, string, object, and ever other array
    13: array in javascript are zero indexed the first element are access with index 0

#  How to create array
    1. using literal annotation
    2. using Array() constructor
    3. also using Array.prototype.split("")
*/

// 1. using literal annotation method
var myArray = ["a", "b", "c", "d"];
console.log("myArray", myArray);

// 2.  create array using  array constructor
let newArray = new Array();
newArray = [10, 20, 30, 40, 50];
console.log("newArray", newArray);

// 3. also create Array using the Array.prototype.split("") method
// By using the split method you have to create Array
//  (note: it is possible when you defined string )
const fruits = "apple, banana, mango, papaya";
console.log("fruits", fruits);
// it is possible when only you defined the string not number
const fruitsArray = fruits.split(",");
console.log("fruitsArray", fruitsArray);

//another example
const number = "1,2,3,4,5,6";
const numberArray = number.split(",");
console.log(numberArray);

// example
let years = "vishal";
console.log(years["2"] !== years["02"]); // it is not equal return true

// #  Trickly question based on array constructor
const array = new Array(10);
console.log("length of the array", array.length); // [ <10 empty items> ]
console.log("output:", array[1]); // undefined
console.log(0 in array); // false

const oldArray = new Array("10"); // length: 1
console.log("length:", oldArray.length);
// first element: refer to the element at index 0
// last element or tail : refer to the element at the last which can be obtained using array.length-1


// #  accessing element :array element access using zero-based index.
// Tricky question
// in array used to get the character using  square bracket or zero based indexing like arr[0]
//  but you give negative index in square bracket it return undefined
const arr = [10, 20, 30];
console.log(arr[0]); // 10

console.log(arr[-1]); // undefined // es20 get 

console.log(arr.at(-1)); // return 30

// # if you try ot access based on element it is not possible it  always return undefined because we can access the element based on index not a element
let fruit = ["apple", "banana", "mango"];
console.log(fruit["apple"]); // it return undefined. because you have to access element based on indexing not a element

//#  modifying element : modifying elements : you can modify array elements by assigning new value to specific indices
let names = ["vishal", "shinde", "at", "post"];
let newArr = (names[4] = "akshu");
// console.log(newArr); return akshu
console.log(names); //[ 'vishal', 'shinde', 'at', 'post', 'akshu' ]


//#  how we create empty array or element ?
let array1 = [];
console.log(array1);

/*
# array traversal/ iterating over arrays
    1:for of loop: for of loop is used to iterate over the value of an iterable object such as arrays, string, or other iterable object
    2: for in loop: for in loop is used to iterate over the properties (including indices ) of an object
    3: forEach loop: forEach method call the provided function once for each element of the array. the provided function may perform any kind of operation on the element of the given array.

    4: map() method: map() create a new array form calling a function for every array element
    : map not change the original array.
*/