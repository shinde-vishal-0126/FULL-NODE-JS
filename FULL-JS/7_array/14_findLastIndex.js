
/*
# findLastIndex() :
    1: syntax: (callback(element[, index[, array]])[, thisArg])
                callbackFn: A function to test each element. It takes the following arguments:
                element: The current element being processed.
                index: The index of the current element.
                array: The array findLastIndex was called upon.
                thisArg (optional): Value to use as this when executing callbackFn.

    2: The findLastIndex() method returns the index of the last element in the array that satisfies a provided testing function.

    3: if no element satisfied the condition it return -1  here start the execution in reverse order and return revers first element index that satisfied the given condition

*/

// #  Example: 1
const array = [5,12,8,130,44];
const index = array.findLastIndex(element => element > 10);
// here return 44 as last index which is Grater then 10 because it iterate through and return value 
console.log(index); // Output: 4

// # Example: 2
const array11 = [5, 12, 8, 130, 44];
const index1 = array11.findLastIndex(element => element > 200);
console.log(index1); // Output: -1

//Example : 3
const arraylikeObj = {
    length: 3,
    0:2,
    1:7.3,
    2: 4,
    3:3 // here is ignore because its length is 3
}

const num = Array.prototype.findLastIndex.call(arraylikeObj,(ele)=>{
    return Number.isInteger(ele);
});
console.log(num)


/*
 # useCase:
    1: this method useFul when you want to locate the last occurrences of an element That satisfied a condition.
    2. if the array is empty the method immediately return -1
    3. findLastIndex() — Also Skips Empty Slots



# differences between find() , findIndex() and findLastIndex() method in js

| Feature               | `find()`                                    | `findIndex()`                               | `findLastIndex()`                          |
| --------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------ |
| 🔢 **Returns**        | The **value** of the first matching element | The **index** of the first matching element | The **index** of the last matching element |
| 🔁 **Search Order**   | Left to right (start to end)                | Left to right (start to end)                | Right to left (end to start)               |
| ❌ **If Not Found**    | Returns `undefined`                         | Returns `-1`                                | Returns `-1`                               |
| 🧪 **Callback**       | Predicate function for condition            | Predicate function for condition            | Predicate function for condition           |
| 🕳️ **Sparse Arrays** | Skips empty slots                           | Skips empty slots                           | Skips empty slots                          |
| 📅 **Introduced In**  | ES6 (2015)                                  | ES6 (2015)                                  | ES2023                                     |

*/

const sparse = [1, , , 4];

const lastIndex = sparse.findLastIndex((value, idx) => {
  console.log(`Index: ${idx}, Value: ${value}`);
  return value < 4;
});

console.log("Result:", lastIndex); // Output: 0
