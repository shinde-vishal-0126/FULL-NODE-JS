/*
# some():
    1:syntax: array.some(callback(element, index, array), thisArg )
            callback – Function to test each element.
            element – The current element being processed.
            index (optional) – Index of the current element.
            array (optional) – The array some() was called upon.
            thisArg (optional) – Value to use as this when executing the callback.

    2: The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if the callback returns a truthy value for any element; otherwise, it returns false.

    3: true if at least one element passes the test. false if none of the elements pass the test.

    4. are not mutated method(it does not modified the original array)

    5: it is iterative method it call a provided callback function once for each element in an array


    
# NOTE :
    1: some() method will stop iterating as soon as it fined the element that satisfied the condition 
    2: it not check the remaining condition once the condition is met 
*/
// Example
// # here check if any one element are present in the array that are even number
const newarr = [1, 2, 3, 4, 5, 6, 7];
const even = (element) => {
  return element % 2 === 0;
};
console.log(newarr.some(even));

// # testing with array of  object
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 35 },
];
const hasAdult = users.some((user) => user.age >= 18);
console.log(hasAdult); // Output: true (since Alice and Charlie are adults)

// checking with specific value
const array = ["apple", "banana", "cherry"];
const containsBanana = array.some((fruit) => fruit === "banana");
console.log(containsBanana); // Output: true (since 'banana' is in the array)


// some() method using on spare array
console.log([1, ,2].some((x)=>{
    return x === undefined
}));

console.log([1, , 1].some((ele)=>{
    return ele !== 1
}));

console.log([1, undefined, 1].some((x)=>{
     return x === undefined
}));
  