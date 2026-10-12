/*
# find();
    1: syntax : array.find(callback(element, index, array), thisArg?) 
            find() having call back function

    2: def: The find() method returns the first element in an array that satisfies a provided testing function. If no match is found, it returns undefined. (i.e find() method is used to find() the first element in an array that satisfied a provided testing function it return the first matching element or undefined if no element is found.)

    3: find() method return the first element in the array that satisfies a given condition or provided testing function. i.e find() method return the value of the first element in the array where predicates is true and f the value are not satisfied with give condition it return undefined.

    4. find() method are non mutating method(does not modified the original array ) (it just perform read operation on array) and return the first element into the array that satisfied the provided callback function

    5: in find method the found element in the array if some element in the array satisfied the given condition but only return first element that satisfied the given condition 
*/

// # example
const array = [5, 12, 8, 130, 44];
const find = array.find((ele, index) => {
  return ele > 10;
});
// here return the first element that satisfied the give condition
console.log(find);

// # example
// if not satisfied the condition then return undefined
const notFind = array.find((ele, index) => {
  return (ele = 0);
});
console.log(notFind); // undefined

/*
# NOTE :
    1:  only problem with the fined method is that it return only one element to satisfied the condition
    2:   find() method used for the searching and filtering
*/

// # for element and index condition
var demo = [10, 20, 30, 40, 56, 78, 88, 99, 48];
const data = demo.find((ele, index) => {
  console.log("element", ele);
  console.log("index", index);
});
// here return undefined because it does not satisfied any condition
console.log(data); // undefined


// # example 
const longArray = [
    5, 12, 8, 130, 44, 3, 15, 17, 21, 6, 28, 34, 55, 89, 144, 233, 377, 610,
    987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393]
const newData = longArray.find((ele, index, array) => {
    return ele < 1000
})
// it return only 5 because find method return first element that match the given condition 
// so instead of returning the multiple value it return only first occurrences of the return result
console.log(newData); // return 5 

// # example array of object return  first Match in the give array object 
const fruits = [
    { name: 'Apple', quantity: 10 },
    { name: 'Banana', quantity: 5 },
    { name: 'Orange', quantity: 8 },
    { name: 'Mango', quantity: 15 },
    { name: 'Pineapple', quantity: 3 },
    { name: 'Grapes', quantity: 12 },
    { name: 'Strawberry', quantity: 6 },
    { name: 'Blueberry', quantity: 20 },
    { name: 'Peach', quantity: 7 },
    { name: 'Cherry', quantity: 25 }
];
const fData = fruits.find(({name})=>{
    return name === 'Orange'
})
console.log(fData) // { name: 'Orange', quantity: 8 



// # find the prime number of the given array 

function findPrimeNumber(number, index, arr){
     // Start checking from 2
    let start = 2;
     // This condition should ideally be used to loop through possible divisors from 2 up to the square root of ele
    while(start <= Math.sqrt(number)){
        // If the number is divisible by 'start', it's not a prime number
        //Checks if ele is divisible by start with a remainder of 0
        if(number % start ++ < 1){
            return false;
        }
    }
    // If no divisors are found and the number is greater than 1, it's prime
    return number >1;
}
const numbers = [4, 6, 8, 22, 29, 35];
const firstPrime = numbers.find(findPrimeNumber)
console.log(firstPrime)


// # ex 5  (using find on spare array)
const arr =[0,1, , , 5,6]
// if you not defined any condition then it by default return last element for the element and index 
// used find method on spare array it return undefined.
let un = arr.find((ele, index)=>{
    console.log(ele);
    console.log(index)
})
console.log(un) // undefined

const ne = arr.find((element, index)=>{
    if(element === 0){
        console.log('deleted element are ', arr[5])
        delete arr[5]
    }
    return element
})
console.log(ne);


/*
# note 
    1: The .find() method stops searching the array as soon as it finds the first element that satisfies the given condition (i.e., the callback returns true).
    2. find() — Skips Empty Slots
*/
const sparse = [1, , , 4];

const found = sparse.find((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
  return value === undefined;
});

console.log("Result:", found); // Output: undefined
