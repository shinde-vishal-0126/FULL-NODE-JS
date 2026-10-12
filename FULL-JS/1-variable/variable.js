/*
@ VARIABLE & VALUE
- In js value & variable are fundamental concept that from the basis of programming
Q. What is variable ?
  - Variable is container or storage location to store/ hold the value.
  - it has name & can be used to store and manipulte data in prograom
  - So container are location in memory used to stored value. Also a container is a reserved space in the computer's memory (RAM) allocated to store data
  - Js variable is just name of storage location in memory.
----------
Q. What is value ?
  - Value is a pices of information that a program work with, it can be number, text, true/false or more coplex data.
! Note :
  - In js variable type change or checked at run - time so it is dynamically type language.(Allow you to change the variable type at run time).
  - JavaScript is a dynamically typed language, meaning variable types are checked at runtime. This allows you to assign any type of value to a variable and change it later
    - let myVar = 30;     // Initially a Number
    - myVar = "Vishal";   // Reassigned to a String (Totally valid in JavaScript)

  ! var myName = 'Vishal';
        └─ var      => Keyword (declares the variable name in scope)
        └─ myName   => Identifier / Variable Name (acts as the pointer/reference)
        └─ 'Vishal' => Value (the actual data stored in memory)
-------
Q. What is variable lifeCycle ?
  - Variable life cycle contain
  1. declaration :
    - Declaration: The JavaScript compiler registers the variable identifier in its enclosing scope (global, function, or block). No value is bound yet.
    - let x; // Declaring 'x
  2. initialization
    - The variable is allocated memory and bound to an initial value (either explicitly or defaults to undefined).
    - var is automatically initialized to undefined when hoisted.
    - let is initialized to undefined or a specified value only when the declaration statement is executed.
    - const must be initialized immediately at declaration.
    - x = 10; // Initializing 'x' with the value 10
    - x = 20; // Re-assigning 'x' to 20
  3. Assignment
    - Assignment (Re-assignment): Binding a new value to an already declared and initialized variable
--------
Q. How many way to defined variable in js ?
  - 3 way to defined variable in js
  1. var → Function-scoped or Globally-scoped
  2. let → Block-scoped
  3. const → Block-scoped
----------
Q. differences between VAR VS LET VS CONST
| **Feature**                                | **var**                         | **let**                                  | **const**                                      |
| ------------------------------------------ | ------------------------------- | ---------------------------------------- | ---------------------------------------------- |
| **Introduced In**                          | Old JavaScript (ES5)            | ES6 (2015)                               | ES6 (2015)                                     |
| **Scope**                                  | Function scope                  | Block scope (`{}`)                       | Block scope (`{}`)                             |
| **Can be used outside `{}` block?**        | ✅ Yes                           | ❌ No                                  | ❌ No                                          |
| **Can declare without a value?**           | ✅ Yes                           | ✅ Yes                                 | ❌ No, value is required                       |
| **Default value if not assigned**          | `undefined`                     | `undefined`                              | Not possible                                    |
| **Can access before declaration?**         | ✅ Yes, but value is `undefined` | ❌ No, gives **ReferenceError**        | ❌ No, gives **ReferenceError**                 |
| **Hoisted?**                               | ✅ Yes, with `undefined`         | ✅ Yes,but cannot use before declaration|✅ Yes, but cannot use before declaration       |
| **Temporal Dead Zone (TDZ)**               | ❌ No                            | ✅ Yes                                  | ✅ Yes                                         |
| **Can declare the same variable again?**   | ✅ Yes                           | ❌ No                                   | ❌ No                                          |
| **Can change (reassign) the value?**       | ✅ Yes                           | ✅ Yes                                  | ❌ No                                          |
| **Can change object/array contents?**      | ✅ Yes                           | ✅ Yes                                  | ✅ Yes (only contents, not the variable itself)|
| **Creates property on `window` (Global)?** | ✅ Yes                           | ❌ No                                   | ❌ No                                          |
| **Best use**                               | Old code only                   | When value needs to change                | When value should stay the same                 |
| **Recommended?**                           | ❌ Avoid                         | ✅ Yes                                  | ✅ Best choice                                 |
------------
# var
    - Var keyword : function scope / global scope
    - variable declare with VAR are scoped to the enclosing function.
    - They ingnore block boundries like if, for, while blocks) and splill out into the parent function or global scope.
    - Introduced in :  var was introduced in ES5 (the older version of JavaScript). Before ES6, it was the only way to declare variables.
    - Scope : var is function-scoped. If it is declared inside a function, it can only be used inside that function. If declared outside any function, it becomes a global variable.
    - Accessible Outside Block ({}) : Yes. var ignores block scope. If you declare it inside an if, for, or while block, it can still be accessed outside the block.
    - Initialization Required? : No. You can declare a var variable without assigning a value.
    - Default Value : If no value is assigned, JavaScript automatically sets it to undefined.
    - Access Before Declaration : Yes. Because of hoisting, you can access it before the declaration, but the value will be undefined.
    - Hoisting : The declaration is moved to the top of its scope during compilation. Only the declaration is hoisted, not the assignment.
    - Temporal Dead Zone (TDZ) - var does not have a Temporal Dead Zone.
    - Re-declaration : Allowed. You can declare the same variable multiple times in the same scope
    - Reassignment : Allowed. You can change its value anytime.
    - Loop Behavior : In a for loop, all iterations share the same variable, which may cause problems with asynchronous code like setTimeout()
    - Global Object (window) : If declared globally in a browser, var becomes a property of the window object
    - Memory Allocation : Memory is allocated during the creation phase and initialized with undefined
    - Best Use Case :Mainly used in old JavaScript code. Rarely used in modern applications.
    - Recommendation : Avoid using var in modern JavaScript because it can cause unexpected bugs due to function scope and hoisting.
-----------
# let
    - Let keyword : Block scope
    - Variables declared with let are scoped to the nearest block ({}) in which they are declared.
    - They do not ignore block boundaries. They can only be accessed inside the block where they are declared.
    - Introduced in : let was introduced in ES6 (2015) to solve the problems caused by var.
    - Scope : let is block-scoped. If declared inside an if, for, while, or any {} block, it is accessible only within that block.
    - Accessible Outside Block ({}) : No. Variables declared with let cannot be accessed outside the block where they are declared.
    - Initialization Required? : No. You can declare a let variable without assigning a value.
    - Default Value : If no value is assigned, JavaScript automatically sets it to undefined after the declaration is executed.
    - Access Before Declaration : No. Accessing a let variable before its  declaration throws a ReferenceError because of the Temporal Dead Zone (TDZ).
    - Hoisting : let is hoisted, but it is not initialized until the declaration is reached.
    - Temporal Dead Zone (TDZ) : Yes. The variable exists in memory but cannot be accessed from the beginning of the block until its declaration.
    - Re-declaration : Not Allowed. You cannot declare the same let variable again in the same scope.
    - Reassignment : Allowed. You can change the value of a let variable anytime.
    - Loop Behavior : In a for loop, let creates a new variable for each iteration, avoiding closure issues with asynchronous code like setTimeout().
    - Global Object (window) : If declared globally in a browser, let does not become a property of the window object.
    - Memory Allocation : Memory is allocated during the creation phase, but the variable remains uninitialized until the declaration executes.
    - Best Use Case : Use let when the variable’s value needs to change during program execution.
    - Recommendation : Use let whenever a variable needs to be reassigned. It is safer than var because it is block-scoped.
  --------
# const
    - Const keyword : Block scope
    - Variables declared with const are scoped to the nearest block ({}) in which they are declared.
    - They do not ignore block boundaries and cannot be accessed outside the block where they are declared.
    - Introduced in : const was introduced in ES6 (2015) to declare variables whose reference should not change.
    - Scope : const is block-scoped. It is accessible only inside the block where it is declared.
    - Accessible Outside Block ({}) : No. Variables declared with const cannot be accessed outside the block.
    - Initialization Required? : Yes. A const variable must be initialized when it is declared.
    - Default Value : Not Applicable. Since initialization is mandatory, there is no default value.
    - Access Before Declaration : No. Accessing a const variable before its declaration throws a ReferenceError because of the Temporal Dead Zone (TDZ).
    - Hoisting : const is hoisted, but it is not initialized until the declaration is reached.
    - Temporal Dead Zone (TDZ) : Yes. The variable exists in memory but cannot be accessed until its declaration.
    - Re-declaration : Not Allowed. You cannot declare the same const variable again in the same scope.
    - Reassignment : Not Allowed. Once a value is assigned, it cannot be  reassigned. Attempting to do so throws a TypeError.
    - Loop Behavior : In a for loop, const creates a new binding for each iteration, but the variable itself cannot be reassigned inside the loop.
    - Global Object (window) : If declared globally in a browser, const does not become a property of the window object.- -
     - Memory Allocation : Memory is allocated during the creation phase, but the variable remains uninitialized until the declaration executes.
    - Best Use Case : Use const for variables whose value should not be reassigned, such as configuration values, API URLs, or constants.
    - Objects and Arrays : Although a const variable cannot be reassigned, the properties of objects and the elements of arrays can still be modified because only the reference is constant.
    - Recommendation : Use const by default. Only use let when you know the variable’s value will change later.
-----------
# EX.
*/
//  # 1. Var
// Variables declared with var are scoped to the enclosing function. They ignore block boundaries (like if, for, while blocks) and spill out into the parent function or global scope.
function varDemo() {
  var z; // declare without initialization return default value as undefined.
  var x = 20;
  console.log("var z inside the block :", z);
  console.log("var x inside the block ", x);
  if (true) {
    var x = 40; // redeclare/updating x in the same function
    var y = 20; // // var is NOT block-scoped, so y leaks/spills outside this block
    console.log("var x inside block:", x); // 40
    console.log("var y inside block:", y); // 20
  }
  console.log("var y outside block:", y); // 20 (Accessible outside block!)
  console.log("var z value:", z); // undefined (accessed without initialization)
}
varDemo();
// ----------------
// # 2. Let
//  Variables declared with let are block-scoped, meaning they are only accessible within the block {} in which they are defined.
function letDemo() {
  if (true) {
    let x = 20;
    let u; // Declared without initialization (defaults to undefined inside scope)
    console.log("let x inside block:", x); // 20
    x = 40; // Updating is allowed
    // let x = 40; // SyntaxError: Identifier 'x' has already been declared (cannot redeclare in same scope)
    console.log("let x after update:", x); // 40
    console.log("let u initialized default:", u); // undefined
  }
  // console.log(x); // ReferenceError: x is not defined (cannot access outside block)
}
letDemo();
//-------------
// # const
// Variables declared with const are block-scoped, must be initialized upon declaration, and their reference cannot be updated or reassigned.
function constDemo() {
  // const name; // SyntaxError: Missing initializer in const declaration
  const name = "x";
  console.log("const name:", name);

  // name = "vishal"; // TypeError: Assignment to constant variable.
}
constDemo();
/*

@ Hoisting & Temporal Dead Zone (TDZ)

Q. What is Hoisting in jS ?
  - Hoisting is a Javascript Mechanisum or Default Behaviour in Which variable and function declaration are moved to the top of their scope before code execution.
    - Hoisting is JavaScript's default behavior of moving declarations to the top of their current scope during the compilation phase.
    - Var Hoisting :
      - var hoisting: The declaration is hoisted to the top and initialized with the default value of undefined.
      - Variables declared with var are hoisted to the top of their enclosing function or global scope.
      - However, only the declaration is hoisted, not the initialization.
      - This means that if you try to access a var variable before its declaration, it will return undefined instead of throwing an error.
  - Example:
    console.log(a); // undefined (due to hoisting)
    var a = 10; // Declaration is hoisted, but initialization happens here
          Memory Creation Phase (Hoisting)
            ───────────────────────────────────────────────────────────
            aVar
            │
            ├── Memory is reserved
            └── Initialized with undefined

            Execution Phase
            ───────────────────────────────────────────────────────────
            console.log(aVar);
            ✅ undefined

            var aVar = 10;
                    │
                    └── Value becomes 10

            console.log(aVar);
            ✅ 10
    - Let & Const Hoisting :
      - let and const are also hoisted to the top of their block scope, but they are not initialized.
      - let & const hoisting: The variables are hoisted, but they are not initialized. They enter the Temporal Dead Zone (TDZ).
      - This means that if you try to access a let or const variable before its declaration, it will throw a ReferenceError.
      - This period between the start of the block and the declaration is known as the Temporal Dead Zone (TDZ).
      - During this time, the variable exists in memory but cannot be accessed.
        Memory Creation Phase (Hoisting)
        ───────────────────────────────────────────────────────────
        aVar
        │
        ├── Memory is reserved for aVar
        ├── NOT initialized
        └── Value = <uninitialized>
        Execution Phase
        ───────────────────────────────────────────────────────────
        Start of Block Scope
                │
                ▼
        ┌──────────────────────────────────────────────┐
        │    Temporal Dead Zone (TDZ)                 │
        │                                              │
        │ console.log(aVar);                           │
        │ ❌ ReferenceError                            │
        │ Cannot access 'aVar' before initialization   │
        └──────────────────────────────────────────────┘
                │
                ▼
        let aVar = 10;
                │
                ├── Variable gets initialized
                └── TDZ Ends
                │
                ▼
        console.log(aVar);
        ✅ 10

Q. What is Temporal Dead Zone (TDZ) ?
    - The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs with variables declared using let and const.
    - It refers to the time between the start of a block and the point where the variable is declared, during which the variable exists in memory but cannot be accessed.
    - If you try to access a let or const variable before its declaration, it will throw a ReferenceError.
    - The TDZ is the region of the code / period of time from the start of the block scope until the line where the variable is officially declared and initialized. Accessing the variable inside the TDZ throws a ReferenceError.
    - ex
    {
  // TDZ starts here
  // name exists, but cannot be accessed
  console.log(name); // ❌ Error
  let name = "Vishal";
  // TDZ ends here
  console.log(name); // ✅ Vishal
}
- Temporal Dead Zone (TDZ) is the time between entering a block scope and the execution of a let or const declaration.
 During this time, the variable is hoisted but remains uninitialized, and accessing it throws a ReferenceError.
-------------
# Note :
  - Hoisting means JavaScript allocates memory for declarations before executing the code.
  - TDZ is the period during execution from the start of a block until a let or const variable is initialized. During this period, the variable is hoisted but uninitialized, so accessing it throws a ReferenceError.
  - Hoisting is the process of allocating memory   before execution begins.
  - TDZ is the runtime period during execution where a hoisted let or const variable exists but cannot be accessed until its declaration is executed.
  - Hoisting is a compile-time behavior where JavaScript allocates memory for declarations before execution.
  - The Temporal Dead Zone (TDZ) is a runtime period during execution where a hoisted let or const variable exists but remains uninitialized, so accessing it before its declaration results in a ReferenceError

-------------
Q. Does a let variable default to undefined if it is declared without initialization? If yes, then how is it different from var?
   - Both var and let default to undefined when declared without an initializer.
   - The difference is that var is initialized to undefined during the hoisting (memory creation) phase,
   - whereas let is initialized to undefined only when execution reaches its declaration.
   Before that point, a let variable is in the Temporal Dead Zone (TDZ), so accessing it throws a ReferenceError
-------------
Q. Can you explain the difference between hoisting and the Temporal Dead Zone (TDZ) in JavaScript?

| Feature                       | Hoisting                                                                                       | Temporal Dead Zone (TDZ)                                                              |
| ----------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Definition**                | JavaScript moves declarations to memory before execution starts.                               | The time between entering a block scope and initializing a `let` or `const` variable. |
| **When it happens**           | During the **Memory Creation (Compilation)** phase.                                            | During the **Execution** phase.                                                       |
| **Purpose**                   | Allocates memory for variables and functions before code execution.                            | Prevents access to `let` and `const` variables before they are initialized.           |
| **Applies to**                | `var`, `let`, `const`, function declarations, and classes.                                     | Only `let`, `const`, and classes.                                                     |
| **Initialization**            | `var` is initialized to `undefined`; `let` and `const` are hoisted but remain uninitialized.   | Variable remains uninitialized until its declaration statement executes.              |
| **Access before declaration** | `var` can be accessed (`undefined`); `let`/`const` cannot.                                     | Accessing a variable in the TDZ throws a `ReferenceError`.                            |
| **Error**                     | No error for `var`; `let`/`const` are still hoisted but cannot be accessed because of the TDZ. | `ReferenceError: Cannot access 'x' before initialization`.                            |
| **Scope**                     | Works according to the variable's scope (global, function, or block).                          | Exists only within the block scope of `let` and `const`.                              |


*/
/*

@ VARIABLE SHADOWING
    - Shadowing means an inner scope declares a variable with the same name as a variable in an outer scope.
    - The inner variable hides (shadows) the outer variable within its own scope.
    - There are two types:
        1. Legal Shadowing : The inner variable hides the outer variable only inside its own block
        2. Illegal Shadowing : A var declaration inside a block conflicts with an outer let or const.

Q. What is variable shadowing in JavaScript?
    - Variable shadowing occurs when a variable declared within a certain scope (e.g., a function or block) has the same name as a variable declared in an outer scope.
    - In such cases, the inner variable "shadows" or overrides the outer variable within its scope, making the outer variable inaccessible in that inner scope.
    - This can lead to confusion and bugs if not managed carefully, as it may not be immediately clear which variable is being referenced.

    - Variable shadowing occurs when an inner scope declares a variable with the same name as one in the outer scope.
    - The inner variable shadows (hides) the outer variable within its block.
    - Shadowing does not cross scope boundaries; once we exit the inner scope, the outer variable's value is restored or overridden by the inner variable's value if it was modified.
-------------
Q. How does variable shadowing work in JavaScript?
    - When a variable is declared in an inner scope with the same name as a variable in an outer scope, the inner variable takes precedence within that inner scope.
    - The outer variable is still present in memory, but it is not accessible while inside the inner scope.
    - Once the execution leaves the inner scope, the outer variable becomes accessible again.
    - Example:
      var x = 10; // Outer variable
      function example() {
      var x = 20; // Inner variable shadows outer variable
      console.log(x); // 20 (inner variable)
      }
      console.log(x); // 10 (outer variable)
    - In this example, the inner variable x (20) shadows the outer variable x (10) within the function example.
    - When console.log(x) is called inside the function, it refers to the inner variable, not the outer one.
    - Once the function execution is complete, the outer variable x (10) remains unchanged and accessible outside the function.
-------------
Q. What is illegal shadowing in JavaScript?
    - Illegal shadowing occurs when a variable declared in an inner scope attempts to shadow a variable declared in an outer scope, but the outer variable is declared with const or let.
    - Since const and let are block-scoped and cannot be redeclared in the same scope,
    - trying to declare a variable with the same name in an inner scope will result in a SyntaxError.
    - Example:
        let x = 10;
        function example() {
        let x = 20; // Legal shadowing
        console.log(x); // 20 (inner variable)
        }
    - In this example, the inner variable x (20) legally shadows the outer variable x (10) within the function example.
    - However, if we tried to declare another let or const variable with the same name in the same scope, it would result in a SyntaxError.
    - Illegal shadowing occurs when a var declaration tries to shadow a let or const variable,
    - but because var is function-scoped, it gets hoisted to the enclosing function scope and conflicts with the existing let/const declaration.
    - Example:
        function illegalShadowingDemo() {
        let name = "Vishal";
        if (true) {
        // ❌ SyntaxError
        var name = "Shinde";
        }
    }
  -  SyntaxError: Identifier 'name' has already been declared
-------------

Q. comparision
| Scenario                                       | Allowed? | Reason                                                                        |
| ---------------------------------------------- | -------- | ----------------------------------------------------------------------------- |
| `var` → `let` (inner block)                    | ✅ Yes    | Different scopes (function vs. block).                                        |
| `let` → `let` (inner block)                    | ✅ Yes    | Inner `let` shadows the outer `let`.                                          |
| `const` → `const` (inner block)                | ✅ Yes    | Inner `const` shadows the outer `const`.                                      |
| `let` → `var` (same function after hoisting)   | ❌ No     | `var` is hoisted to the function scope and conflicts with the existing `let`. |
| `const` → `var` (same function after hoisting) | ❌ No     | Same reason as above.                                                         |
-------------
Q. Differences between   Legal Shadowing  vs Illegal Shadowing  ?

| Feature            | Legal Shadowing                                                                                   | Illegal Shadowing                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Definition**     | An inner scope declares a variable with the same name as an outer scope without causing an error. | A `var` declaration conflicts with an existing `let` or `const` in the same function scope after hoisting. |
| **Allowed?**       | ✅ Yes                                                                                             | ❌ No                                                                                                       |
| **Error**          | No error                                                                                          | `SyntaxError: Identifier has already been declared`                                                        |
| **Reason**         | Variables exist in different scopes.                                                              | `var` is hoisted to the function scope and clashes with `let`/`const`.                                     |
| **Common Example** | `var` → `let`, `let` → `let`, `const` → `const`                                                   | `let` → `var`, `const` → `var`                                                                             |
*/
let x = 10; // Outer variable
function example() {
  let x = 20; // Inner variable shadows outer variable
  console.log(x); // 20 (inner variable)
}
console.log(x); // 10 (outer variable)
// -------------
//# Legal shadowing
function demo() {
  var name = "vishal"
  if (true) {
    let name = "shinde"; // Shadows outer variable
    console.log(name)
  }
  console.log(name)
}
demo()
// -------------
//#  Illegal shadowing
// A var declaration inside a block conflicts with an outer let & const
function demo1() {
  // let age = 90;
  if (true) {
    var age = 30;
    console.log(age);
  }
  console.log(age)
}
demo1() //
// variable.js:418 Uncaught SyntaxError: Identifier 'age' has already been declared
// WHY ?
// - var ignores the block and is hoisted to the enclosing function scope.
// js treate as like
function demo1() {
  // var name;
  let name = "Vishal"; // ❌ Duplicate declaration
}
// -------------

/*
Q. Can you change properties of an object declared with const?
    - Yes
    - const guarantees that the variable reference (the memory address stored in the stack) will not change.
    - It does not make the properties of the object in heap memory immutable.
    -  To make the object completely immutable, you can use Object.freeze(obj).
-------------
*/
const obj = { age: 30 };
obj.age = 31; // Allowed
// obj = { age: 32 }; // Throws TypeError
x = 10
console.log('x....:', x)
/*
Q. What happens if you declare a variable without any keyword (e.g. x = 10)?
    -  If declared without var, let, or const, it becomes a property of the global object (window in browsers, global in Node.js) in non-strict mode.
    -  In strict mode ("use strict"), it throws a ReferenceError because implicit global variable creation is forbidden.
    .............
-------------
Q. Why is var shadowing let illegal?
    - var is function-scoped, while let is block-scoped.
    - var ignores block boundaries and is hoisted to the enclosing function scope.
    - If a let variable with the same name already exists in that function scope, --> the hoisted var declaration creates a duplicate declaration.
    - Since JavaScript does not allow a var and a let with the same name in the same scope, it throws a SyntaxError.
    function demo() {
    let age = 25;
    if (true) {
    var age = 30; // ❌ SyntaxError
    }
}
    - JavaScript internally treats it like this after hoisting:

    function demo() {
    var age;      // Hoisted to function scope
    let age = 25; // ❌ Duplicate declaration
}
- var shadowing let is illegal because var is function-scoped and gets hoisted to the enclosing function scope,
-  where it conflicts with the existing let declaration of the same name, resulting in a SyntaxError.
-------------
Q. Explain the difference between Global, Function, and Block scope. ?
    1.Global Scope:
        - Variables declared outside any function or block {}. They are accessible from anywhere in the file/application.
    2.Function Scope:
        - Variables declared with var, let, or const inside a function. They are only accessible within that function.
    3.Block Scope:
        - Variables declared with let or const inside curly braces {} (e.g. if block, loops, switch). They cannot be accessed outside of that block.
-------------
Q.  How do let and const protect against accidental variable overrides in loops?
    - let and const prevent accidental variable overrides because they are block-scoped, whereas var is function-scoped.
    - With var, a variable declared inside a loop is not limited to the loop.
    - After the loop finishes, the variable still exists in the surrounding function or global scope, which can accidentally overwrite or interfere with other variables.
    - With let and const, the variable exists only inside the loop block. Once the loop ends, the variable is no longer accessible, reducing the risk of accidental modification.
*/
