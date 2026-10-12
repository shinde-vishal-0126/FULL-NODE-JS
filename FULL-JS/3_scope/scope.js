/*
# scope:
  - scope determine accessibility and visibility of the variable
  - scope is certain region in the program were defined variable exists and can be recognized or beyond can not be recognized so scope determine accessibility and visibility of the variable in the program
  - scope in js is refer to the context in which variable are declared and accessed so it determine visibility and lifetime of variable.
  - Scope is the region of a program where variables, functions, and classes are accessible.
  - Scope determines:
    1. Visibility (where variables can be accessed)
    2. Accessibility (who can use them)
  - Scope is the accessibility boundary of variables,functions, and classes in JavaScript
# type of scope
  1. functional scope (local scope)
  2. block scope
  3. global scope
  4. Module Scope (for variables inside ES6 modules)
# 1. Global scope :
  - so js engine execute the script it create global execution context and assign variable in global execution context that you defined outside the function
  - so this variable having global scope or call global variable
  - global variable access anywhere inside the program
  - Variables declared outside every function and block belong to the Global Scope. They are created inside the Global Execution Context.
  */
let a = "Hi"; // global variable defined outside the function
function Hi() {
  console.log("say", a);
}
Hi();
console.log(a); // access anywhere in the program

/*
# 2. local scope : i.e functional scope
  - variable are declared inside the function call as function scope of local scope
  - variable declared inside the function using let, const, and var are confined to that function
  - They can not be access outside the function
  - Every function creates a new scope. Variables declared inside a function cannot be accessed outside that function.
  - Inside a function: var, let const are all local to that function. */

function say() {
  var mes = "Hi,"; // var are defined inside the function so its having functional scope i.e local scope it will access only within function
  console.log(mes);
}
// console.log(msg); //  Uncaught ReferenceError: msg is not defined (i.e it will not access to the outside function)
say();

// ===================================================================================================


/*
# 3. block scope:
- so let and const keyword that allow to declare variable block scope
- when ever you see curly bracket {} it is blocked it can be on area within if , else, witch, condition or for, do, while loop
- variable declared with let and const inside the block ({}) are only accessible within the block
- var does not support block scope and leak into surrounding function or global scope   */

function block() {
  let b = "Hello";
  if (true) {
    let c = "bye";
    console.log(b + c);
  }
  //   console.log(b + c); // Uncaught ReferenceError: c is not defined because c having block scope outside the block c are not able to access
}
block();

// ===================================================================================================

/*
# what is global scope and script in browser when the run the script ?
!Global scope in browser
  - Means variable or function you defined are attached to the global or window object  any thing declared outside any function or block is global
  - if you defined any variable with var outside the function it create global scope in browser
  - When a browser loads JavaScript using a <script> tag, it creates an environment to run that code.

  - The browser has a global object called window Anything attached to window can be accessed anywhere in the page.
      var name = "John";
    console.log(window.name); Because var declared outside a function becomes a property of window
  -

!script scope:  Script Scope (specific to browser environments)
- if you declare variable using let and const in a script it stay inside the script tag not the window or global scope
- They are global variables, but they are NOT added to window Because let and const create a script scope, not a window property
(i.e script tag specified to the js file are loaded into html document vai script tag)
- if you create variable using const and let it located inside the script scope in browser (it is also type of another global scope)
- script scope are specific to js file that are loaded into on html document vai script tag
- Each script loaded into the page its own scope, meaning variables and function declared within a script are only available within the script unless they are explicitly declared as global
- Think of script scope as a private area created for each <script> file. */

let m = "Hi";
var d = "GoodBye";
function display() {
  const n = "Hello";
  let s = "bye";
  if (true) {
    console.log(m + n + s);
  }
  console.log(m + d);
}
display();

/*
# In ES Modules
  - <script type="module"> or import/export
  - Top-level variables belong only to that module.
  - They are NOT added to the global scope.
  - They can only be shared using export/import.
  */
// module.js
export const moduleScopedVar = "I am module-scoped";

// main.js
import { moduleScopedVar } from "./module.js";
console.log(moduleScopedVar); // Accessible here

/*
#  summary
    1: Global Scope: Variables declared outside any function are accessible anywhere in the script.
    2: Local/Function Scope: Variables declared inside a function are accessible only within that function.
    3: Block Scope (ES6 - let and const): Variables declared inside a block {} are only accessible within that block.



#  Strict Mode:
In strict mode, var declarations that leak into the global scope are restricted, making your code more secure.
Example: "use strict";

# differences between scope and lexical scope

# scope :
    1. refers to the region or context where variable and function are accessible.
    2. determine variable accessibility and  visibility (e.g global , local , block)
    3. scope are defined at runtime: it depends on how and when code is executed.
    4. scope are  controlled by execution context
    5. variable are declared using var, let, const
    6. dynamic in term of entering or existing during execution


# lexical scope :
    1. lexical scope are also know as static scope
    2. scope is determine by the position of variable and function in the source code
    3. define at compile time not runtime
    4. inner function can access variable of their outer function
    4. controlled by code structure and closure
    5. predictable and does not change based on how function are called.




| Feature                | **Scope (General Concept)**                                        | **Lexical Scope (Specific Type of Scope)**                              |
| ---------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| **Definition**         | The overall concept that controls **variable accessibility** in JS | A type of scope based on **where code is physically written**           |
| **Scope Types**        | Global, Function, Block (ES6+), Module                             | Lexical — defined at write-time based on nesting                        |
| **When Defined**       | Created at **runtime** depending on how code is executed           | Determined at **compile time** (code structure)                         |
| **Determines What?**   | Where variables can be accessed or referenced                      | Which outer variables a function can "see"                              |
| **How It's Used**      | General rule in JS variable resolution                             | Used to form **closures** and determine variable access in nested funcs |
| **Dynamic or Static?** | Can refer to dynamic behaviors (like `with`, `eval`)               | **Always static** — fixed at code definition                            |
| **Example**            | `var`, `let`, and `const` follow block/function/global scope rules | Inner functions accessing variables from outer functions                |




/*
 # CLOSURES
- Definition : A Closure is a function bundled together with its lexical environment.
- It allows an inner function to remember variables from its outer function even after the outer function has finished execution.
*/
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const increment = outer();
increment();
increment();
increment();


/*
# SCOPE CHAIN
JavaScript searches variables in this order
Current Scope
      ↓
Parent Scope
      ↓
Grandparent Scope
      ↓
Global Scope
      ↓
ReferenceError
*/

let globalVar = 1;
function one() {
  let parentVar = 2;
  function two() {
    let childVar = 3;
    console.log(globalVar);
    console.log(parentVar);
    console.log(childVar);
  }
  two();
}
one();

/*
# LEXICAL SCOPE

  -lexical scope is nothing but static scope
  - Lexical Scope means JavaScript resolves variables based on WHERE THE FUNCTION IS DEFINED NOT WHERE THE FUNCTION IS CALLED. This is also called Static Scope.
  - Lexical Scope is the rule that JavaScript uses to resolve variables based on the physical (lexical) location where functions are defined in the source code.
  - The Golden rule : JavaScript looks at where a function is defined (written), NOT where it is called.
  - Lexical Scope (also called Static Scope) means that JavaScript determines where a variable comes from based on where the code (functions and variables) is written, not where the function is called. */
let x = 10;
function first() {
  console.log(x);
}
function second() {
  let x = 20;
  first();
}
second();


/*
Q Why is it called "Lexical"?
  - The word lexical means related to the written source code.
  - JavaScript decides the parent scope by looking at where functions are physically written. It does not depend on where they execute. */

//1.
let value = 10;
function first() {
  console.log(value);
}

// 2.
function second() {
  let value = 20;
  first();
}
second();
