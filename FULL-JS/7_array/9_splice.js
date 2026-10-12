/*
Splice()
    - syntax : splice(start, deletedCount, item1, item2, ......string[])
        - start (required): The index at which to start changing the array.
        - If the index is greater than the length of the array, the array will not be modified.
        - deleteCount (optional): The number of elements to remove starting from the start index.
            - If omitted, all elements from the start index to the end of the array will be removed.
            - if deleted count is zero : nothing is removed.(only insertion happen)
        - item1, item2, ...: The items to be added to the array, starting from the start index. If no items are specified, splice() will only remove elements.
    - defination:
        - The splice() method changes the contents of an array by removing, replacing, or inserting elements at a specified index.
        - It modifies the original array and returns an array containing the removed elements.
    - splice() method is used to modify the origional array
        1. removing element
        2. inserting new element
        3. replacing existing element.
- splice() changes the original array itself.
- The splice() method in JavaScript is used to modify an array by removing, replacing, or adding elements.
        - (i.e splice() method of array instances changes the content of an array by removing, replacing, or adding new element in place)
- It directly alters the original array.( splice() method are mutating method (because used to insert, remove, and replace the element in the original array)
- basically splice() method remove the element from an array and if necessary insert new element in their place (i.e Most of the time array method used for the delete element purpose)
- splice() method return an only array containing the element that were deleted.  (i.e create new array with a segment removed)
- The splice() method change the content of an array by removing, or replacing existing element and or adding new element if not element are removed an empty array return
- -ve index count from the end.
*/
// Q.what happen when you call the splice() method without arguments
// - it alway return empty array or data. ( because you not give any index count also not give any arguments)
let sub = [];
console.log(sub.splice()); // return empty array.

// ex-2
   const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const data1 = month.splice();
console.log(data1)

// Q.2. what is output if you not give 2nd argument only give first argument ?
// - if you not give second argument but give first argument then start the deleting the element form given start index to the last index element
// const data = month.splice(1); // here deleted all the element form the start index 1 to the last element of the array
// console.log(data) // Here return array containing deleted element.
console.log(month); // [ 'January' ]


// ex-2
const fruits = ["Apple", "Banana", "Cherry", "Date"];
// in following code start index is 1 and deleted count is 2
const deletedFruits = fruits.splice(1, 2);
console.log(fruits); // ;[ 'Apple', 'Date' ]
// here splice() meted return array containing the deleted element
console.log(deletedFruits); //[ 'Banana', 'Cherry' ]

// ex-3
const newMonth = month.splice(0, 0, "vishal");
// Here return the empty array because it having the deleted count as zero
//(splice method return array containing deleted element but here deleted count is zero so it return zero)
console.log(newMonth);
// return original modified array with adding new element in array
console.log(month);

// ex-4
// update March As MARCH
const Marchindex = month.indexOf("March"); // indexOf method return the index of given element
const newMarch = month.splice(Marchindex, 1, "MARCH");
console.log(month);
console.log(newMarch);

// ex-5 remove vishal form the month array
const remove = month.splice(2, 1);
console.log(remove);
console.log(month);

// ex-6  Delete JUNE form the array
const indexof = month.indexOf("June");
const removeJune = month.splice(indexof, 1);
console.log(removeJune);
console.log(month);

//ex-7 if you delete data from March to end how to done
const marchIndex = month.indexOf("MARCH");
console.log(marchIndex);
if (marchIndex != -1) {
  const deleted = month.splice(marchIndex, Infinity);
  console.log(deleted);
}
console.log("month", month);

// using splice() on spare array: splice method are work with the spare array
const arr = [1, , 3, 4, , 5,undefined, null];
console.log(arr.splice(1, 2)); //[ <1 empty item>, 3 ]
console.log(arr); //

//q how to replace element in array using splice() method:
// if you want to replace any element into the array you have to give deleted count as 2nd argument in splice method and then give 3 argument as  inserted element in the array you have also give multiple elements also
// if you don't want to add or replace the element into the array you don't give the third element ot the array.
const arr1 = [1, , 3, 4, , 5,undefined, null];
// in above array if you want to replace 3 as string like three
const newOne = arr1.splice(2,1,'three');
console.log(arr1);
console.log(newOne)

// if you don't want to add or replace the element you don't give the 3 argument in to the splice method
const newTow = arr1.splice(2,0);
console.log(newTow)
console.log(arr1)


// Q. splice() method in javascript are work with -ve index
//  Yes, the splice() method in JavaScript does work with negative indices.
//  When a negative index is used with splice(), it counts from the end of the array. For example:
// -1 refers to the last element, -2 refers to the second last element, and so on.
let arrx = [1, 2, 3, 4, 5];
// start index is -2 & deleted count is 2 s
// Remove 2 elements starting from the second-to-last element (-2)
console.log(arrx.splice(-2, 2));
console.log(arrx); // Output: [1, 2, 5]


//  if you want to add the element at end using splice method how to do ?
let abc = [1,2,3,4,5];
//  const result = abc.splice(-1,0,'vishal');// using this you are not able to add at the end
 // so you have to used the following approach
const result = abc.splice(abc.length,0,'vishal')
console.log('result', result);
console.log(abc);

// add element at beggining
let a = [1,2,3];
a.splice(0,0,'Yes');
console.log(a);

// imp Edge case
// start > length
console.log(a.splice(10,1,'A'));
// return empty array because it does not remove anything.
console.log(a)
// If start is greater than the array length, JavaScript treats it as array.length, so inserted items are appended to the end. Nothing is removed.

// start < - length
console.log(a.splice(-10,1))
// Negative indices smaller then -arr.length are treated as zero
/*
Q. why is splice() a mutating Method ?
- because it changes element, length, and order of the origional array.

Q. Time complexith
    - insert at beggining :O(n)
    - remove at beginning : O(n);
    - instert in middle : O(n);
    - remove in middel : O(n);
    - inset at end :O(1)
    - remove at end : O(1)
Q. differences between splice() vs slice()
splice()
    - Used to insert, remove, or replace elements in an array
    - it return array of remove element
    - (Mutating method)
    - splice method does not create new array it modified the original array
    - used for insert, delete, replace.
    - deleteCount specifies how many elements to remove

slice()
    - Used to extract (copy) a portion of an array
    - slice() does not modified original array
    - non mutating method.
    - A new array containing the extracted elements
    - used for extract or get the protion of array.
    - end index is exclusive (not included)
Q. when to used splice()
    - insert element
    - delete element
    - replace element
    - if you want to modifiy the origional array

slice()
    - used when copy part of an array
    - keep the origional array unchanged
    - create shallow copy
    - extract a range of element.

*/
