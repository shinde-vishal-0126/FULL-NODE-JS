/*
# findIndex()
    1: syntax: array.findIndex(callback(element[, index[, array]])[, thisArg])
            callback: A function that is executed for each element of the array. It takes:
            element: The current element.
            index (optional): The index of the current element.
            array (optional): The array being traversed.
            thisArg (optional): Value to use as this when executing callback.

    2: FindIndex() method of TypeArray instances return the index of the first element in the array that satisfied the provided testing function (i.e The index of the first element in the array that satisfies the condition in the callback.)

    3: if no element satisfied the testing function -1 is returned.

    4: Return the index of the first element in the array where predicate is true i.e findIndex() method return index of the first element in the array where the give condition is satisfied it return the index of the element not return the element of the array  if condition is not satisfied it return the -1
 
*/

// # if not give any condition it return -1 
const longArray = [
    5, 12,2584, 8, 130, 44, 3, 15, 17, 21, 6, 28, 34, 55, 89, 144, 233, 377, 610,
    987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393]
const index = longArray.findIndex((ele, index,  array)=>{
    console.log('element', ele)
    console.log('index', index);
    console.log(array);
})
console.log(index); // here return =1 because we don't have any condition

// example 2 
// Here we have to give condition return those element are Grater then 8  here two element are grater then
// but it return the index value of the 12  element is 1 
// it return the index value of  the first element which satisfied the give condition
const data = longArray.findIndex((element, index)=>{
     return element > 8
})
console.log("data", data); // return 1 so one it is index 


// using findindex an non-array object 
const arrayLike = {
    length : 3,
    "-1" : 0.1,
    0 : 2,
    1 : 7.3,
    2 : 4
}

console.log(Array.prototype.findIndex.call(arrayLike,(x)=>{
    return !Number.isInteger(x)  // return index of this result 1 
}))


/*
# differences between find() and findIndex() 

    # find() :
        1: find method return first element of array that satisfied the given test function (or satisfied the given call back function)
        3: if not satisfied the given condition by any element it return undefined.

    # findIndex() :
        1: findIndex() method return the index of first element in the array which satisfied the given condition 
        2. if not found the any element which is satisfied the condition it return -1



| Feature                 | `find()`                                                   | `findIndex()`                                                           |
| ----------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Definition**          | Returns the **first element** that satisfies the condition | Returns the **index** of the first element that satisfies the condition |
| **Return Type**         | Element (any type in the array)                            | Number (index)                                                          |
| **Return if Not Found** | `undefined`                                                | `-1`                                                                    |
| **Callback Parameters** | `(element, index, array)`                                  | `(element, index, array)`                                               |
| **Mutates Array?**      | ❌ No                                                       | ❌ No                                                                    |
| **Common Use Case**     | Get the actual element value                               | Get the position/index of a matching element                            |



# usage :
    1: finding an element with a condition : findIndex is useful when you need the index of an element that meets a specific condition rather then element itself 
    2: complex condition you can use complex condition or perform check on object properties.

# note :
        1: findIndex() stop searching once it finds the first element that satisfied the condition
        2: If the array is empty, the method immediately returns -1
        3: findIndex() — Skips Empty Slots

*/
const sparse = [1, , , 4];

const index4 = sparse.findIndex((value, idx) => {
  console.log(`Index: ${idx}, Value: ${value}`);
  return value === 4;
});

console.log("Result:", index4); // Output: 3
