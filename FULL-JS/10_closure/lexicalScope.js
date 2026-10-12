/*
# lexical scope 
1: lexical scope refer to the current context of your code it can be either locally , globally or block scope defined.
2: The lexical scope in javascript means a variable defined outside the function can be accessible inside the another function defined after the variable declaration but opposite its not true i.e the variable defined inside the function will not be accessible outside the function.
i.e lexical scope in javascript is ability for a inner function scope to access the variable or function from parent scope.(but vices versa not true)
3. Lexical scope means that the scope of variables is determined by the physical placement of the code — i.e., where functions and variables are written in the source code.
4. Lexical Scope (also known as static scope)
5. The term "lexical" means that the scope is determined by the physical placement of the code in the source.
6: lexical scope is a way of managing variable access in javascript based on the physical structure.i.ee Lexical scope is process used to defined the scope of variable  and function  by its position in the source cod

# how the lexical scope work ?
1; The lexical scope in javascript means a variable defined outside the function can be accessible inside the another function defined after the variable declaration but opposite its not true i.e the variable defined inside the function will not be accessible outside the function.

# when the lexical environment is create
whenever an execution context created lexical environment is created.i.e when execution environment is create then also lexical environment is created

*/
var useName = "vishal";
// global scope
function local() {
  // local scope
  console.log(useName);
}
local();
/*
# so in above example useName variable defined outside the function so we can access those variable inside the another function because of lexical scope but in following example we can not access variable defined inside the function form outside the function
*/

function local1() {
  let name1 = "vishal";
}
console.log("name", name1); // here we can not access the variable which are inside the function
//  Uncaught ReferenceError: userName is not defined
//  so we can not access the variable inside of the function we can only access variable that are outside of this local scope
local1();

/*
# lexical scope :
    1. lexical scope is scope refer to the current context of your code 
      i.e it is process to determine the scope of variable and function based on it position in the source code
    Definition: Lexical scope refers to the region of the code where a variable is accessible, based on the position of code in the source file.
    Static / Fixed: It is static (decided at code definition time, not at runtime).
    2. lexical scope is the region in the source code were a variable is accessible (it is static scope determine at the time of writing the code)
    3. lexical scope is determine base on physical code structure (nesting of function) (Code Structure Based: Determined by the physical nesting of functions.)
    4: Variable Lifetime: Normally, variables are discarded after a function finishes execution (unless preserved by closure).
    5. When Happens: Created at the time of writing/defining the code. 
    6. Purpose: Used for basic variable visibility and scoping rules.
    7 nature are static determine at compile time

    function outer() {
      let a = 10; // 'a' is in outer's lexical scope
      function inner() {
        console.log(a); // inner has access because of lexical scope
      }
      inner();
    }
    outer();





# closure :
    1. Definition: A closure is a function that retains access to its lexical scope even after the outer function has finished executing.
        i.e A function that retains access to its outer scope after the outer function has finished executing
        - Access: Inner functions can continue to access outer variables even after the outer function has returned.
    2. access the Inner functions can access variables from the outer scope, even after the outer function has completed.
    Persistence: A returned function (closure) remembers variables from its parent’s scope.
    3. A returned function (closure) can still access a variable from its parent function even after it has finished executing.
    3. closure depends based on lexical scope but persist after outer function execution
    4: Variable Lifetime: Variables are retained (kept alive) via closure, not discarded.
    5. When Happens: closure are Formed at function creation time, but their usefulness is seen at execution/return.
    6. Purpose: Used for data privacy, function factories, memoization, and async callbacks.
    7. nature are dynamic determine at runtime

function outer() {
  let counter = 0; // stays alive because of closure
  return function inner() {
    counter++;
    return counter;
  };
}

const fn = outer();
console.log(fn()); // 1
console.log(fn()); // 2
console.log(fn()); // 3





# differences between lexical scop and closure 

| Feature                       | **Lexical Scope**                                              | **Closure**                                                               |
| ----------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Definition**                | The region in the source code where a variable is accessible   | A function that retains access to its lexical scope even after execution  |
| **Scope Rule Based On**       | Physical code structure (nesting of functions)                 | Based on lexical scope but persists after outer function exits            |
| **Access to Outer Variables** | ✅ Yes — inner functions can access variables from outer scopes | ✅ Yes — even after the outer function is done executing                   |
| **Retention of Variables**    | ❌ No — variables are discarded after function execution        | ✅ Yes — variables are **retained** via closures                           |
| **When It Happens**           | At the time of **code definition**                             | At the time of **function execution and return**                          |
| **Use Case**                  | Governs basic variable visibility rules                        | Used for **data privacy**, **function factories**, and **async behavior** |
| **Example Use**               | Explains **where** a variable is visible                       | Enables functions to **remember** state                                   |
| **Memory Persistence**        | ❌ No memory retention after function ends                      | ✅ Retains memory (lexical environment) after outer function ends          |




*/

// # example of lexical scope

//global scope
function subscribed() {
  // inner scope 2
  var name = "vishal shinde";
  //inner scope
  function displayName() {
    // display Name in closure function that The closure is a combination of function and its ability to remember variables in outer scope.
    // inner scope 1
    console.log(name);
    alert(name); // the inner function access s the 'Name' variable from its outer function
  }
  displayName();
}
subscribed();



// example 2
let a = "hello ";
const first = () => {
  // console.log(c); // so here parent function can not access the child function variable.
  let b = "How are you";
  const second = () => {
    let c = "i am fine thank you !";
    console.log(a + " " + b + " " + c);
  };
  second();
};
first();

// Lexical scoping described how the javascript engine used the location of the variable in the code to determine where that variable available
// The closure is a combination of function and its ability to remember variables in outer scope.
// The use of the closure gives the access of the outer scope variable and function  after the outer function execution complete
// Refers to the rule or mechanism that determines the visibility and lifetime of variables based on their physical location in the source code


// | Feature          | Lexical Scope 🟦                        | Closure 🟩                                                    |
// | ---------------- | --------------------------------------- | ------------------------------------------------------------- |
// | **When created** | At **code definition**                  | At **function creation** (but visible when executed/returned) |
// | **Lifetime**     | Variables discarded after function ends | Variables **retained** as long as closure exists              |
// | **Nature**       | Static (compile-time)                   | Dynamic (runtime)                                             |
// | **Purpose**      | Variable visibility                     | Data privacy, memoization, async, function factories          |
// | **Dependency**   | Independent                             | Depends on lexical scope                                      |
