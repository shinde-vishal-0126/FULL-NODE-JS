/*
# higher order function 

1. A higher order function is a function that take one or more function as an arguments or return a function as result

2. Def: function which takes another function as an argument is called as HOF (Higher order function )

3. In javascript higher order function is super flexible function 

# It can do two special things so higher order function that either:
    1. Accept the another function as an argument 
        So just like regular function number or string take as input or as an parameter or argument so just like higher order function take another function as an argument  
    Think of it like a function that can invite another function to party.
    
    2 .Return function 
        Higher order function also give you back new function 
        or higher order function it return result as new or another function

# So most real like example of the higher order function 
 map, filter, and reduce are higher-order functions that take callback functions to process arrays.

*/

//example in map higher order function
const number = [1, 2, 3, 4, 5];
function double(x) {
  return x * 2;
}
const doubleNumbers = number.map(double);
console.log(doubleNumbers);

// ex with filter function
function isEven(x) {
  return x % 2 === 0;
}
const eveNum = number.filter(isEven);
console.log(eveNum);

/*

1. So higher order function as function that can work with another function either by taking them as input or create the new function as output 

2. They make your code more flexible and powerful by allowing you function to bundling a block to solved different kind of problem 

3. Higher order function commonly used in javascript task such as array manipulation e.g map , filter, event Handling  , and asynchronous programming function  like setTimeout and  promise;

4. Using higher order function you wire more maintainable and modular code  and prompt the separation of concern and reside te code block to perform specific task 



# What is the difference between Higher Order function and callback function ?
    #  callback function 
    : A callback function is a function that is passed as an argument to another function to be called back at a later time.
    
    # Higher order function     
     the higher order function is function where which takes another function as an argument is called as HOF or return function as result 


#  Why Use Higher-Order Functions?
    1. Code Reusability: Encapsulate reusable logic in functions.
    2. Abstraction: Makes code cleaner and more expressive.
    3. Functional Composition: Combine small functions to build more complex behavior.
    4. Callbacks and Promises: Essential for asynchronous programming (e.g., setTimeout, then in Promises). 
    5.Modularity and Composability
    6.They help in breaking down complex logic into smaller, reusable pieces. By using higher-order functions, you can compose simpler functions into more complex ones, which promotes clean and modular code.
    7.Avoiding Code Duplication

Since higher-order functions allow you to pass different behavior as arguments, you can avoid repeating similar code. For example, instead of writing a custom loop each time, you can use higher-order functions like map, filter, or reduce to handle collections in a consistent and declarative manner.
Improved Readability

Using higher-order functions can improve the readability of the code by expressing operations in terms of the functions that they execute. This is especially true when used with well-named functions (e.g., filter, map, compose).
*/

function createAdder(x) {
  // here createAdder is higher order function it return function as result
  return function (y) {
    return x * y;
  };
}
const data = createAdder(5);
const result = data(5);
console.log("result", result);
