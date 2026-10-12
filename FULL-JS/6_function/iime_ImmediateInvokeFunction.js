/*
@ what is iife (immediately invoked function expression )
  -An IIFE (immediately invoded function expression) is a javascript function that is defined and executed immediately after it is created.
  - unLike a normal function an IIFE does not need to be called separately it Javascript function that run as soon as it is defined. (It runs as soon as JavaScript reaches it.)
    syntax : (function (){
    code inside IIFE
    })())
    or
    (() => {
    // Code
    })();
  - it is self contained block of code
  - immediately invoked function expression is javascript function that is defined and executed immediately. after it creation
  - it is way to create self -contained block code that not interfere with the surrounding code and executed immediately
  - used to create scope for variable avoiding polluting the global variable
  - () it executed it immediately after it defining.
  - it is also known as a self-executing anonymous function

@ Why are parentheses used ?
  - Normally
  function greet(){}
  - is a function declaration to execute it immediately, javascript must first treate it as a function expression so
  - wrapping it in  parentheses convert it into a function expression.
  (function(){
  console.log("Hello")
  })()
  - The last () immediately invoke (call the function )
*/
// ? example 1
(function () {
  console.log('This function run immediately..')
})();

// ? example 2  with parameters.
(function (name) {
  console.log(`Hello, ${name}!`);
})("Alice");

/*
@ Why do we use IIFE?
  1. avoid polluting the global namespace or  scope ; create a private scope. (Avoid Global Namespace Pollution)
  2 execute the code immediately (used for the initialization logic )
  3. encapsulate the variable : variable inside the iife are not accessible from outside.
  4. Module Pattern (Before ES6 Modules) : Before import and export, developers used IIFEs to create private and public members
  5. Async IIFE : Useful when you want to use await without creating a separate async function.
*/
// ? 1 Avoid Global namespace pollution (variable declared inside the IIFE can not be accessed outside it)
// (function () {
//   let count = 0;
//   console.log(count)
// })()
// console.log(count) // count is not defined output so IIFE create private scope.

// ? 2. Execute code immediately (useful for initializtion code that should run only once.)
// (function () {
//   console.log('Application started....')
// })()

// ? 3. Encapsulate variable
// (function () {
//   let password = '123'
// })()
// console.log(password)  // ReferencesError (variable defined inside the IIFE are not accessible outsie the function)

// ? 4. Module pattern (Before ES6 Module import and export developers used IIFE to create private and public members.)
const Module = (function () {
  let privateVar = 'i am private';
  function privateMethod() {
    console.log(privateVar);
  }
  return {
    getPrivateVar() {
      return privateVar
    },
    show() {
      privateMethod()
    }
  }
})()
console.log(Module.getPrivateVar());
// Module.show()

// ? 5 Async IIFE (Useful when you want to used await without creating a separate async function)
(async function () {
  const data = await Promise.resolve('Hello');
  console.log(data)
})();

/*
@ What is IIFE vs Normal Function

| Feature               | Normal Function                                                           | IIFE (Immediately Invoked Function Expression)                                                                                         |
| --------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Definition**        | A function that is declared and called whenever needed.                   | A function that is defined and executed immediately after it is created.                                                               |
| **Syntax**            | `function greet() {}`                                                     | `(function(){})();`                                                                                                                    |
| **Execution**         | Executes only when explicitly called.                                     | Executes automatically as soon as it is defined.                                                                                       |
| **Function Call**     | Must be called separately using `greet()`.                                | No separate function call is required.                                                                                                 |
| **Reusability**       | Can be called multiple times.                                             | Normally executes only once.                                                                                                           |
| **Hoisting**          | Function declarations are fully hoisted.                                  | IIFE is a function expression, so it is not fully hoisted.                                                                             |
| **Scope**             | Creates a local scope only when it is called.                             | Creates a private/local scope immediately upon execution.                                                                              |
| **Global Namespace**  | May pollute the global namespace if global variables are used.            | Helps avoid global namespace pollution by keeping variables private.                                                                   |
| **Parameters**        | Parameters are passed when the function is called.                        | Parameters are passed immediately during execution.                                                                                    |
| **Return Value**      | Returns a value when called.                                              | Can also return a value immediately.                                                                                                   |
| **Typical Use Cases** | Reusable business logic, utility functions, calculations, event handlers. | Initialization code, one-time execution, creating private scope, module pattern.                                                       |
| **Modern Usage**      | Very common in all JavaScript applications.                               | Less common today because `let`, `const`, and ES6 modules provide better scoping, but still useful and frequently asked in interviews. |
| **Example**           | `function greet(){ console.log("Hello"); } greet();`                      | `(function(){ console.log("Hello"); })();`                                                                                             |


@ Adventages of IIFE
  1. Prevent Global variable pollution
  2. Create a private scope
  3. Execute code immediately
  4. Used for one time initialization
  5. Support the module pattern
  6. can be asynchronous using async IIFE

@ DisAdventages
  1. Can not reused after execution
  2. May reduce readability if overused
  3. less necessary today because of let, const and ES6 module.

  # interview
  An IIFE (Immediately Invoked Function Expression) is a function expression that is created and executed immediately after its definition. It is mainly used to create a private scope, avoid polluting the global namespace, execute initialization code once, and implement the module pattern.
*/

// # Differences between Function Declaration & IIFE
// ? function Declaration : so in function declaration function is declared first and called later
// function hi() {
//   console.log('Hello')
// }
// hi()

// ? IIFE in immediate invoke function expression : the function is created and exeucte immediately.
(function () {
  console.log('Hello')
})()

  // # output based question
  (function (x) {
    return (function (y) {
      // first x find in inner scope if not found then it look into its parent scope and x exits in the parent scope and this happen because of closure
      console.log(x); // 1 // The inner function first looks for x in its own scope.
    })(2);
  })(1); //This happens because of Lexical Scope and Closure.

//@  closure:  A closure is the combination of a function and the lexical environment in which it was created. It allows the function to access variables from its outer (enclosing) scope even after the outer function has finished executing.

/*
# Key point
  - IIFE : immediately invoked function Expression
  - it return immediately after being defined
  - it crete private/ local scope
  - it help avoid global namespace pollution.
  - it was commonly used before ES6 modules
  - Today let, const & ES6 modules have reduce the need of IIFE but They are still useful.

*/
