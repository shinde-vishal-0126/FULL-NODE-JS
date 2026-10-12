/*
# filter():
    1: syntax : array.filter(callback(element, index, array), thisArg)
        | Parameter  | Description                                                                 |
        | ---------- | --------------------------------------------------------------------------- |
        | `callback` | Function to test each element. It should return `true` to keep the element. |
        | `element`  | The current element being processed in the array.                           |
        | `index`    | *(Optional)* The index of the current element.                              |
        | `array`    | *(Optional)* The original array.                                            |
        | `thisArg`  | *(Optional)* Value to use as `this` inside the callback.                    |

    2. The filter() method in JavaScript is used to create a new array containing all elements of the original array that pass a specific test (condition) provided by a callback function.
    3. filter method take each and every element of an array and it applied conditional statement against state if the condition return true and the element get pushed into the output array if the condition return false the element does not get pushed into the output array.'
    i.e filter method return only those element from the array which is fulfilled the provided criteria
    4: This method is part of the Array prototype and returns a new array containing only those elements that satisfy or  the condition provided in the callback function.
    6:  filter() method create shallow copy of a portion of give array
    7: filter()  method does not modify the original array  it return new array containing the element that satisfy the filtering condition
    8: if no element pass the test an empty array will be returned.
    9: filter method are iterative method call a provided callback function once for each element in the array. construct new array
    10.  in  filter method and map method if you give conditional operator then it return true and false value.
    11. empty slots are skip by the filter method 

*/
// # example 1
const Array = [
    5, 12, 2584, 8, 130, 44, 3, 15, 17, 21, 6, 28, 34, 55, 89, 144, 233, 377, 610,
    987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393]
const data = Array.filter((ele, index, array) => {
    console.log(ele);
    console.log(index);
    console.log(array)
})
console.log(data); // Here return the empty array because it does not have any filtration criteria


// # example 2
const newData = Array.filter((ele, index, array) => {
    return ele > 1000
}) // If you do not give initial value it take first element as initial value
// not modified the original element
// here return the new array of the element
console.log('mewData', newData);
// Output
// mewData [
//     2584,   1597,  2584,
//     4181,   6765, 10946,
//    17711,  28657, 46368,
//    75025, 121393
//  ]


//?  How filtered method work ?
// filter method create shallow copy of the portion of the given array and filtered down to just

// # Example :
const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
const len = names.filter((ele, index, array) => {
    return ele.length >= 6
})
console.log(len);


// # example
// find all prime number in array
// prime number grater then one that has no positive divisors other than one itself 
const prime = [5, 12, 2584, 8, 130, 44, 3, 15, 17, 21, 6, 28, 34, 55, 89, 144, 233, 377, 610,
    987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393];

function isPrime(element, index, array){
    if(element <= 1){
        return false;
    }
    for(let i=2; i < element ; i++){
        if(element % i === 0){
            return false;
        }
    }
    return true;
}

const result = prime.filter(isPrime);
console.log(result);
//output 
//     [
//         5,   3,   17,
//        89, 233, 1597,
//     28657
//   ]


// # example
// filtering the invalid entries form the json
const just = [
    {
        id: 13
    },
    { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }, {}, { id: null }, { id: NaN }, { id: undefined }]

let invalidEntries = 0;
function filterJsonById(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true
    }
    invalidEntries++
    return false
}
const arrayByid = just.filter(filterJsonById);
console.log('arabyId', arrayByid);


// # example  Filtered () array content based on search criteria
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

function filteredByName(ele, query){
    return ele.filter((element)=>{
        return element.toLowerCase().includes(query.toLowerCase())
    })
}
console.log(filteredByName(stdName,'al'));
console.log(filteredByName(stdName, 'Bo'))


// #  example
// used filter in undefined
// Define an array with elements: 1, an empty slot, and undefined
console.log([1, , undefined].filter((x) => {
    // The filter callback checks if the element is strictly equal to `undefined`
    return x === undefined;
})); //[undefined]


// #  Define an array with elements: 1, an empty slot, and undefined
console.log([1, , undefined].filter((x) => {
    // The filter callback checks if the element is not equal to `2`
    return x !== 2;
}));
// [1, undefined]

// # Empty Slots: The empty slot (hole) at index 1 in both arrays is ignored by the filter() method, as it’s neither undefined nor any other value.



// following example test the behavior of the filter method when the array is modified 
const NAMES = ["ALICE", "BOB", "CHARLIE", "DAVID", "EVE", "FRANK", "GRACE", "HEIDI", "IVAN", "JUDY"];
const modifiedWord = NAMES.filter((word,index, array)=>{
    array[index+ 1] += 'extra';
    return word.length < 10
})
console.log(modifiedWord);


// # append new word with array
const names1 = ["ALICE", "BOB", "CHARLIE", "DAVID", "EVE", "FRANK", "GRACE", "HEIDI", "IVAN", "JUDY"];
const appendWord = names1.filter((word,index,arr)=>{
    arr.push("new");
    console.log(arr);
    
    return word.length < 6
})
console.log('appendWord', appendWord)



/*
# what is differences between map() and filter() method 

    # filter():
        1: filter method used to create new array by containing all element of original array that satisfied the given condition in callback function (Used to create a new array containing only the elements that pass a specific condition or test.)
        
        2:  Returns a new array with elements that pass the test.

        3: The callback function should return a boolean value (true or false).

        4. Use when you need to remove elements from an array based on a condition.

        5. in filter method length of the return array many be not same as the original array (because filter when you want to select elements based on a condition,  )


    # map()
        1: map method used to transform each and every element in the array and create new array with the transform element 

        2: Returns a new array with elements that have been transformed by the callback function.
        
        3. The callback function should return the new value for each element.

        4. Use when you need to create a new array with each element transformed in some way.
        
        5. but in map method length of the new array always same as original array 



    | Feature                 | `map()`                                          | `filter()`                                                |
| ----------------------- | ------------------------------------------------ | --------------------------------------------------------- |
| **Purpose**             | Transforms each element in an array              | Filters elements based on a condition                     |
| **Return Value**        | Returns a new array with the same length         | Returns a new array with fewer or same number of elements |
| **Callback**            | Must return the **transformed value**            | Must return `true` or `false`                             |
| **Used For**            | Mapping one array to another (e.g., modify data) | Selecting only elements that meet a condition             |
| **Original Array**      | Remains unchanged                                | Remains unchanged                                         |
| **Output Array Length** | Same as input array                              | May be shorter than input array                           |


*/