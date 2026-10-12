/*
# function currying

? what is function currying ?
  1.def: The currying is function that take one argument at a time and return a new function expecting the new argument  (also it is conversion of function from callable as f(a,b)  to callable f() () this is known as function currying
  2. function currying is a technique in javascript for evaluating a function with multiple arguments transformed into a sequence of functions with a single argument.
  3. Currying creates a chain of functions, each handling a single argument.
  4. in another word 
    When function instead of taking all arguments at one time, take the first one and return a new function, that takes the 2nd one argument and return a new function, which takes third and so forth until all arguments have been fulfilled.

    =========================================================================================================================================

# how to constructed the currying ?
1. currying function are constructed by chaining closure by immediately returning by their inner function simultaneously

  =========================================================================================================================================

# function currying happen in 2 way
1. using bind() function
2. using the concept of closure.
*/

// =========================================================================================================================================

// # this is normal function
function f(a, b) {
  console.log(a, b);
}
f(10, 20);
// so above callable function are converted into the this callable function f()();
function f1(a) {
  return function (b) {
    return a + b;
  };
}
let res = f1(4);
console.log(res(5));

// =========================================================================================================================================

// # 2
function sum(n1) {
  return function (n2) {
    return function (n3) {
      console.log(n1 + n2 + n3);
    };
  };
}
sum(10)(20)(30); // Here inner function access parent functions parameter or argument so we will see in closure.

// =========================================================================================================================================

/*
# what is used of function currying 
    # why should currying used
1. using currying to make function more versatile and reusable function 
2. currying usable in senario where you want to used function with some fixed argument and providing remaining later.
2. reusability : it allow create specialized function by prefilling some argument 
3. readability : help in breaking down  complex function into smaller part 
4. create higher order function 
5. currying used to avoid same variable again and again     
6.  to make your function pure and less error pones 
7. it divides one function into multiple function so that one handle one set of responsibility

🔹 Why use Function Currying?

Reusability (function customization)

You can create specialized versions of a function by fixing some arguments.

Example: A multiplication function can become a "double" or "triple" function.

Avoid repetition (DRY principle)

Helps in reusing code without writing similar logic multiple times.

Function Composition

Makes it easier to build complex functions from smaller ones.

Partial Application

You can pass some arguments now, and others later.

Improved Readability & Maintainability
*/

// ===============================================================================================================================================

// # function currying with arrow function

let sum1 = (a) => (b) => (c) => console.log(a + b + c);
sum1(10)(20)(30);

// # also you have applied currying function like this
let result = sum1(20); // partially applied sum
result(3)(4);
// # function currying useful in senario where we have to used function with fix number of arguments and remaining provide later on

// =============================================================================================================================

// # now create carried version of calculate rectangle
function createRectangleArea(length) {
  return function (hight) {
    return length * hight;
  };
}

let area = createRectangleArea(10);
let allArea = area(10);
console.log("allArea", allArea);

// ====================================================================================================================

/*
 # 2nd approach to create currying function using bind() method 
     1. bind() method def: bind() method return function function with specified this value and optionally pre-filled the argument.but not invoke immediately return new function invoke later 
     2. by using bind() method achieved function currying.
*/

function multiply(x, y, z) {
  return x * y * z;
}
console.log("multiplication", multiply(3, 4, 5));

// # curried version of above function using
function multiply1(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

let mul = multiply1(10);
console.log("currying multiple", mul(3)(4));

// # using bind() method
function multiply1(x, y, z) {
  return x * y * z;
}

// here we have to create version of currying function using bind() method
// so bind() method essentially create copy of this multiply method and we pass some optionally pre-filled argument
// behind the senses it work like following way set the x value as 2 and pass 2nd argument to the next function call
// let multiplyByTwo = (x,y)=>{
//     let x =2
//     console.log( x*y)
// and here we  have to execute multiplyByTow method this method behave like multiply method and pass the argument
// multiplyByTwo(3,4)
// when we call the bind method it return new function (i,e give copy of the multiply method) does not invoke directly it call later

let multipleByTwo = multiply1.bind(this, 10);
let multipleByThree = multipleByTwo.bind(this, 3);
console.log(multipleByThree(4));

// #
let addition = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
let out = addition(10);
console.log(out(4)); // it return another function which expect next argument

// ===================================================================================================================================================

// # create the currying function in following output
// evaluate("sum")(4)(2)
// evaluate("sub")(4)(2)
// evaluate("mul")(4)(2)
// evaluate("div")(4)(2)

function evaluate(operator) {
  return function (a) {
    return function (b) {
      if (operator === "sum") {
        return a + b;
      } else if (operator === "sub") {
        return a - b;
      } else if (operator === "mul") {
        return a * b;
      } else if (operator === "div") {
        return a / b;
      } else {
        return "invalid operator ";
      }
    };
  };
}

let output = evaluate("mul");
console.log(output(10)(20));

// ==================================================================================================================================================

// ? how to create infinite currying
// # what is infinite currying
// 1. Infinite currying means you can keep passing arguments one by one, infinitely, until you decide to stop.
//  2 . It’s often used for flexible function calls.
// 3 infinite crying means the function keep returning another function with single argument unit you stop it (usually by calling without argument or a specific condition)
// i.e you have to pass n number of parameters (1)(2)........
// write a function which having n number of parameter
// The outer function takes one argument `a`
function infiniteCurryingAddition(a) {
  // Returns an inner function that takes another argument `b`
  return function (b) {
    // here check if the value of b is present then again call addMore() function
    // If `b` is provided (truthy value), recursively call `addMore`
    // with the sum of `a` and `b`
    if (b) {
      return infiniteCurryingAddition(a + b);
      // if the value of b is not found or undefined it return the value of a
      // If `b` is not provided (falsy value), return the accumulated sum `a`
    }
    return a;
  };
}
let output1 = infiniteCurryingAddition(2);
console.log(output1(4)(5)(6)());

// Each call returns a new function expecting the next argument.
// When we finally call it with no argument (()), it returns the accumulated result.
// Infinite currying = currying where the number of arguments is not fixed, and you keep calling until you stop.

// ===================================================================================================================

/*
 # what is difference between the partial application and currying 
1. partial application :
    1.The fixes the specific number of argument and generate new Function the return new function that expect remaining argument to be pass later.(may take multiple argument at once )
    2. partial application fix some argument of function but keep the rest open 
    3. partial function are useful for customization and reuse the code
    4. Partial application transforms a function into a new function that takes fewer arguments by "pre-filling" some of the arguments.
    5. partial application is  This process creates a function with a smaller arity (the number of arguments the function takes).
    6. Partial application refers to the process of fixing a few arguments of a function, creating a new function with fewer parameters.
    7 This allows you to "pre-fill" certain arguments and reuse the partially applied function for specific tasks.


2. currying 
    1. currying is function that break the complex function in to the series of function which take single argument and return new function which expect next argument
    2.break the function into chain of unary or nested function 
    3. create series of function for each argument and always take only one argument at time
    
  

# note :
    1. number of nested function are curried function has depends on number of arguments its received 

  =========================================================================================================================

 */
// Partial application refers to the process of fixing a few arguments of a function
function sumAll(a) {
  return function (b, c) {
    return a + b + c;
  };
}
let output2 = sumAll(4);
console.log(output2(4, 5));
// or
console.log(sumAll(4)(4, 5));
/*
1. here number of nested function are curried function has depends on number of arguments but in above example number of argument are 3 but returning nested function are 2 
2. so above not currying function we did partial application for this samAll function 
 
=========================================================================================================================================================

# what does the partial application 
 1. partial application transform a function with another function with small arity (arity meas number of arguments are function receive )
2. Partial function application is a concept in functional programming where you fix some of a function’s arguments and return a new function that takes the remaining arguments

=========================================================================================================================================

# in which factor the number of nested currying function are depends 
    1.here number of nested function are curried function has depends on the number of arguments 
*/

// # real example of partial application
function applyDiscount(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}
let res1 = applyDiscount(10); // Fix the discount to 10% for all products in a
console.log(res1(200));
// suppose you want to fix the discount at 10% for all products in a certain category, but still pass the price dynamically.

// ======================================================================================================================================

// # write a curry function to convert f(a,b,c) function into f(a)(b)(c) currying
// `curry` function takes a function `fun` as input and returns a curried version of it.
function curry(fun) {
  //  `curried` is the function that will handle the arguments in a curried manner.
  return function curried(...args) {
    console.log(args.length, fun.length);
    // Check if the number of arguments passed so far (`args.length`)
    // is equal to or greater than the number of arguments the original function (`fun`) expects.
    if (args.length >= fun.length) {
      // If we have enough arguments, call the original function (`fun`)
      // with the collected arguments and return the result.
      return fun(...args);
    } else {
      // If we do not have enough arguments, return a new function
      // that will collect more arguments.
      return function (...next) {
        // This new function will call `curriedFun` recursively,
        // combining the arguments already collected (`args`) with the new ones (`next`).
        return curried(...args, ...next);
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}
let res3 = curry(add);
console.log(res3(3, 4, 5));

// Partial application:
const add1 = res3(1); // Returns a new function waiting for the next arguments
const add2 = add1(2); // Again returns a new function waiting for one more argument
const result5 = add2(3); // Now it has all three arguments, so it returns 6
console.log("result", result5);


// =============================================================================================================== ======================================

/*
Understanding the curry function:
Input function (fun): This is the original function that takes multiple arguments.
Curried Function (curriedFun): This inner function collects the arguments provided.
Checking Argument Length: If the number of arguments collected is greater than or equal to the number of parameters the original function expects (fun.length), it calls the original function with all collected arguments.
Recursive Call: If the number of arguments is less, it returns another function that continues to collect more arguments. This allows partial application of arguments until all required arguments are collected.
*/
