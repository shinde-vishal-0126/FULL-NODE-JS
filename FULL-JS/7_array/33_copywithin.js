
/*
# copywithin():

    1: syntax: arr.copyWithin(target, start, end)

        | Parameter | Description                                                     |
        | --------- | --------------------------------------------------------------- |
        | `target`  | The index to copy the sequence **to**.                          |
        | `start`   | The index to start copying **from** (default is `0`).           |
        | `end`     | The index to stop copying **before** (default is `arr.length`). |


        1: target: The index at which to copy the elements. If it's negative, it is treated as an offset from the end of the array.

        2: start (optional): The index at which to begin copying elements from (inclusive). If omitted, it defaults to 0. If negative, it counts from the end of the array.

        3: end (optional): The index at which to stop copying elements (exclusive). If omitted, it defaults to the array length. If negative, it counts from the end of the array.

    2: The **copyWithin()** method is a mutating method that copies a sequence of elements within an array to another position in the same array, without changing its length.

    3:  The copyWithin() method in JavaScript is used to copy a portion of an array to another location within the same array, without modifying its length.

    4: copy within method used to shallow copy part of an array to another location within same array without modifying its length

    5. it modified the original array i.e copywithin method return it without modifying it length it is mutating method (modifies the original array) The method modifies the original array in place.

    6: The copied elements overwrite the existing ones in the target range.
    The length of the array does not change
    (it exclude the last element)
*/

let arr = [1, 2, 3, 4, 5,6];
const news = arr.copyWithin(0,3);
// zero is target index , start copy element index from 3re element ot the th element 
// return modified array
console.log(news);
// it return original arry
console.log(arr);

let arr1 = [1, 2, 3, 4, 5];
arr.copyWithin(0, 1, 3); // [2, 3, 3, 4, 5]


//example
// # here copy or move all the element to the right by two position
console.log([1,2,3,4,5].copyWithin(2));//[ 1, 2, 1, 2, 3 ]  


// # copyWithin() method is mutating method it does not alter the length of this but it will change the 
// content of this and create new properties or delete existing property
console.log([1,2,3,4,5].copyWithin(-2,-3,-1));//[ 1, 2, 3, 3, 4 ]  


//  copyWith() propagate empty slots
console.log([1, , 3].copyWithin(2,1,2)); //[ 1, <2 empty items> ]