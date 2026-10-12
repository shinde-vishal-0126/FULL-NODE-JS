
/*
# reduceRight()
    1: syntax: array.reduceRight(callback(accumulator, currentValue, index, array), initialValue)
                                    | Parameter      | Description                                                     |
            | -------------- | --------------------------------------------------------------- |
            | `callback`     | Function to execute on each element (from right to left)        |
            | `accumulator`  | Accumulates the return values                                   |
            | `currentValue` | The current element being processed                             |
            | `index`        | (Optional) Index of the current element                         |
            | `array`        | (Optional) The array `reduceRight()` was called on              |
            | `initialValue` | (Optional) Value to use as the first argument of the first call |


    : The reduceRight() method in JavaScript applies a callback function against an accumulator and each element in the array from right to left (i.e., from the last element to the first) to reduce the array to a single output value.
    
    2: the reduceRight() method is a function in javascript that used to apply a reducer function to each element in the array but in reverse order it is similar to reduce() method but it start processing the array form rightmost element (the lase element) and work towards the leftmost(the first element) and return as single accumulated value.

    3. The reduceRight() method applies a function against an accumulator and **each value of the array from right to left, to reduce it to a single value.

    4:this method is very similar to the reduce method but main difference is that : reduceRight() process the array element right to left and  reduce method process the element left to right

    # about initial value : a value  to use as the first argument to the first call of the callback if no initial value is supplied the last element in the array will be used as the initial accumulator value and iteration will start from the second-to-last element

*/

//#  Example 
const array = [1, 2, 3, 4];
const sum = array.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 10
// n the example, reduceRight() starts from the rightmost element (4) and accumulates the sum as it moves left:

// First iteration: accumulator = 0, currentValue = 4 → accumulator = 4
// Second iteration: accumulator = 4, currentValue = 3 → accumulator = 7
// Third iteration: accumulator = 7, currentValue = 2 → accumulator = 9
// Fourth iteration: accumulator = 9, currentValue = 1 → accumulator = 10

// #  Example 2
const nestedArray = [[0, 1], [2, 3], [4, 5]];
const flatArray = nestedArray.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue),[]);
console.log(flatArray); // Output: [4, 5, 2, 3, 0, 1]

// # example 3
const words = ['world', 'hello'];
const sentence = words.reduceRight((accumulator, currentValue) => accumulator + ' ' + currentValue);
console.log(sentence); // Output: "hello world"

// # using reduceRight() with spare array
// # NOTE : reduceRight() method skip the spae array 
console.log([1,2,3, ,4,5,6].reduceRight((a,b)=>{
    return a + b
}))


// # BUt reduceRight() method does not skip the undefined method()
console.log([1,2 , undefined, 5].reduceRight((a, b)=>{
    return a + b
})); // here return NaN because here undefined (so reduce right method does not skip the undefined ) 



/*
# what is differences between reduce() and reduceRight() method in js

    # reduceRight():
        1: reduceRight() process the array form the last element to the first element
        2: reduceRight() use when the order of processing need to be preserved, such as evaluating expression in reverse order of reversing string/array
        3: if the initialValue is not provided then reduceRight() the last element of the array is used as the initial value of the accumulator, and the reduction starts with the second last element.
        4: reduceRight() method used to apply the reducer function to each and every element in the array but in reverse order  and return result as single accumulator value.

*/
const nestedArray2 = [[0, 1], [2, 3], [4, 5]];
const flatArray2 = nestedArray2.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flatArray2); // Output: [4, 5, 2, 3, 0, 1]


/*
    # reduce()
        1: reduce() process the array form the first element to the last element
        2: reduce() use when you need to process element in natural order of the array .
        3: if the initial value not provided then reduce() the first element of the array is used as the initial value of the accumulator and the reduction start with the second element.
        4: reduce() method used to apply the reducer function to each and every element in the array and resulting the single accumulator value


*/

const nestedArray1 = [[0, 1], [2, 3], [4, 5]];
const flatArray1 = nestedArray1.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flatArray1); // Output: [0, 1, 2, 3, 4, 5]

/*

| Feature                    | `reduce()`                                    | `reduceRight()`                                   |
| -------------------------- | --------------------------------------------- | ------------------------------------------------- |
| **Direction of Execution** | Left to Right (`[0] ➡ [1] ➡ [2] ➡ ...`)       | Right to Left (`[n] ⬅ [n-1] ⬅ [n-2] ⬅ ...`)       |
| **Purpose**                | Reduces array to a single value from start    | Reduces array to a single value from end          |
| **First Element Used**     | First element (or `initialValue` if provided) | Last element (or `initialValue` if provided)      |
| **Use Case**               | Summing numbers, chaining operations in order | Reversing or evaluating expressions right-to-left |
| **Syntax**                 | `arr.reduce(callback, initialValue)`          | `arr.reduceRight(callback, initialValue)`         |

*/