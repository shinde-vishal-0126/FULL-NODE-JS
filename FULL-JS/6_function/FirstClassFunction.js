/*
@ first class function

Q.what is first class function in js
Defination
  - A First-Class Function (also called a First-Class Citizen) is a feature of JavaScript where functions are treated like any other value (such as numbers, strings, booleans, or objects).
  - Since functions are values, they can be:
    1. Assigned to variables
    2. Passed as arguments to other functions
    3. Returned from other functions
    4. Stored inside arrays or objects (Be stored in data structures like arrays or objects:)
  - If a language allows functions to be used anywhere a normal value can be used, then functions are called First-Class Functions, and the language supports First-Class Functions.
  - first class citizen is also known as first class object or first class function
  - first class function is refer to entity that can be treated as value or  in the same way other types like string, number, and object
  - first call function means  that function can be treated  like value or variable this function is known as first calss function
  - Like, the function is assigned to variable, also the function passed as as arguments to another function, can be used manipulated and return from those function and basically everything that variable can do a function also do and .( First-class functions when functions in that language are treated like any other value
  - in language function can be treated as variable  in this cases function can pass argument to another function, manipulate and return those functions when ever variable can do everything function can do.
  - first class function means in programming language where function can treated like variable or value so that function call as first class citizen

@ What does "First-Class Citizen" mean ?
  - A First-Class Citizen is any entity in a programming language that can be used and manipulated just like any other value
  - In JavaScript, functions are first-class citizens because they can be:
    1. stored in variables
    2. Passed to functions
    3. Returned from functions
    4. Stored in objects and arrays
  - so First class citizen is a javascript term that refers to the characteristics of the programming language or feature that treats a particular entity as equal to the another entity in terms of how it can be manipulated and used within the language
  */
//# 1 function can be assigned to variable
function displayName(name) {
  console.log("name", name);
}
// here function assigned to the variable
const calledFunction = displayName("vishal");
calledFunction;

//#  also assigned to variable.
const myFunction = function (name) {
  console.log(name);
};
myFunction("shinde");

//# 2 Function can be pass as an argument to other function
function operation(fun, a, b) {
  return fun(a, b);
}
function add(a, b) {
  return a + b;
}
// here pass add function as an argument to the operation function
const newFun = operation(add, 10, 20);
console.log(newFun);

// # 3. Function can return form the another function
let num = 10;
function multiply(factor) {
  return function (number) {
    const result = number * factor;
    console.log(result);
  };
}
// const doneMultiply = multiply(10);
// doneMultiply(6)
// also defined
multiply(10)(8);

//# 4 function can be stored in data structure
// also you have function stored in data structure like array or object
function square(num) {
  return num * num;
}
function displaySquare(fn) {
  console.log("square are" + fn());
}
displaySquare(square);

const operations = [
  function () {
    console.log("Add");
  },
  function ()
  {
    console.log("Subtract");
  }
]
operations[0]();
operations[1]();

// # Functions can be stored inside objects
const calculator =
{
  add: function (a, b)
  {
    return a + b;
  }
};
console.log(calculator.add(10, 20));

/*
# Why are First-Class Functions important? (why is useful....)
- Because they make JavaScript powerful and flexible.
- Many important JavaScript concepts depend on first-class functions, such as:
1. Callbacks
2. Higher-Order Functions
3. Closures
4. Promises
5. Async/Await
6. Event Handling
7. Functional Programming

# interview deefination:
- A first-class function is a function that is treated like any other value in JavaScript. It can be assigned to variables, passed as arguments, returned from other functions, and stored in data structures such as arrays and objects.

# key points
  - javascript treats function as value
  - function are object in javascript
  - Function can be assingned, passed return , and stored.
  - The feature is called First-class function or first class Citizens.

# a small Technology note :
  - First class Function & First class Citizens are closely related but not exactly the same.
  - First class Citizen is a general Language concept (any value with full capabilities)
  - while first class function means that function are first class citizen in js .
*/
