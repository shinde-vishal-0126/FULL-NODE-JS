/*

# closure:

1: A closure it the combination of function bundled toGather (enclosed) with references to its surrounding state (or the lexical scope or environment).
2: in other word  closure is function give you access to an outer function scopes form an inner scope.
3. javascript closure are created every time a function is created at function creation time 
4.  This allows the inner function to access variables defined  or outer function scope after the outer function has finished executing.
5. Closure is nothing  but an ability of a function to access variables and functions that are lexically out of its scope; this is called closure (So the inner function has the  references of its outer function.)

*/

function makeFunc() {
  var name = "vishal";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
var myName = makeFunc();
// myName return display function so this is inner function of makeFunc() so here we have to print the name
console.log(myName);

myName();

/*
# in javascript every time we create new Function it binds itself to its environment or lexical scope 
so it does not matter if you call one directly here or if you return it form this function its still going to have the access to its parent scope or say it global scope or lexical scope of its parent  
i.e you have return like return displayName; also you have to call function like displayName() instead of returning 

# so what is used of this syntax 
 1: closure makes it possible for a function to have private variables javascript closure is used to control what is and is not in the scope of perticular function along with which variable are shared between sibling function in the same scope

*/

// ========================================================================================================================================

/*
# when closure is created .
1:In javascript closure are created every time a function is created at function creation time.
Closures are created at function creation time, not execution time, and they allow inner functions to “remember” the variables of their outer functions.
2. because javascript every time we create new Function it binds itself to its environment or lexical scope  or environment
2: so  A closure in JavaScript is a function that retains access to variables and functions in the outer (enclosing) scope, even after the outer function has finished executing.
3: Closures allow you to create private data and encapsulate functionality within a function, making it a powerful and essential concept in JavaScrip
4: Closures are a key feature in JavaScript, enabling powerful patterns like data encapsulation, currying,  memoization, and function factories.
  They are essential for asynchronous operations (like callbacks, promises, event handlers).
# How closures are formed:
5:When a function is defined inside another function, it gets access to the outer function's variables. Even when the outer function has finished executing, 
6. the inner function retains access to those variables, creating a closure.
 

========================================================================================================================================


# How closures are formed:
When a function is defined inside another function, the inner function automatically gets access to the outer function’s variables.
Even if the outer function has returned, the inner function still has access → this retained access is the closure.

*/
// ========================================================================================================================================
/*
 # just briefly explain what is propose of closure , 
 # how is defined or  Purpose of a Closure in JavaScript
1:A closure is function that allow you  to remember and access variables from its outer scope into the inner scop even after the outer function has executed.
i.e  (closure is function give you access to an outer function scopes form an inner scope.)
# It helps in:
1: Data Encapsulation (or data hiding) – Hiding variables from the global scope. ()
    Data Privacy / Encapsulation (Private Variables)
    JavaScript doesn’t have built-in private variables (like some other languages).
    Closures let you create variables that are hidden from the outside world but accessible to inner functions.
    Encapsulation = Hiding internal details and exposing only what's necessary.
2: Maintaining State – 
     Preserving values across function calls. (Preserve scope/context) (Keep data alive between function calls)
    Maintaining State in Asynchronous Code
    In callbacks, event listeners, promises, and async functions, closures help you remember the variables you need.
3: Creating Private Variables (hide data) – Preventing direct access to internal data
4. Stateful functions : normal function as stateful function 
5. Memoization & Caching
    closures let you store results (like in a cache) and reuse them later.
    The cache is stored in the lexical scope of the function.

# in short The purpose of closure is to:
Keep variables alive even after the outer function has returned.
Provide data privacy (like private variables).
Enable powerful patterns like memoization, currying, and function factories.
Make async code and callbacks work with remembered state.

| Use Case                     | Benefit                         |
| ---------------------------- | ------------------------------- |
| Private variables            | Encapsulation                   |
| Custom function generators   | Flexibility                     |
| Async operations             | Preserve scope/context          |
| Stateful functions           | Memory without global variables |
| Currying/Partial application | Clean, reusable function logic  |



========================================================================================================================================

# any other mechanism is js we have to used for data hiding 
	1. Yes! In addition to closures, JavaScript provides several other mechanisms for data hiding and encapsulation.
	2.  IIFE (Immediately Invoked Function Expressions): A traditional pattern to create scoped/private data.
	3.  Modules (ES6 Modules) : When you export only what’s needed, everything else inside a module is private by default.
	4. Private Fields (#) in Classes (ES2022+) : JavaScript classes now support true private fields using #.



========================================================================================================================================

# What Are Function Factories?
A function factory is a function that creates and returns other functions.
They usually take some parameters (configurations).
They use closures to "remember" those parameters.
Each returned function is customized based on the input.

function multiplier(factor) {
  // factory function
  return function(x) {
    return x * factor;  // closure remembers 'factor'
  };
}

const double = multiplier(2); // creates a "double" function
const triple = multiplier(3); // creates a "triple" function

console.log(double(5)); // 10
console.log(triple(5)); // 15

# note
multiplier is the factory.
It produces new functions (double, triple) that remember their own factor.
This works because of closures.

*/




/*

===============================================================================================================================================

# How a Closure is Defined
    1: A closure is created when an inner function is returned from an outer function, and the inner function retains access to the outer function's variables.
*/
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    // innerFunction is closure function
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const closureFunction = outerFunction("Hello");
closureFunction("World"); // Output: Outer: Hello, Inner: World

// innerFunction forms a closure by remembering outerVariable, even after outerFunction has executed.


// ========================================================================================================================================

// # output based question
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count); // 1
  }
  console.log(count); //
})();

// ========================================================================================================================================



// # 2 write a function that would allow you to do this
// var addSix = createBase(6);
// addSix(10);
// addSix(21)
function createBase(num) {
  return function (num1) {
    console.log(num + num1);
  };
}
var addSix = createBase(6);
addSix(10);
addSix(21);

// ========================================================================================================================================


// # time optimization question
function find(index) {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}
console.time("6");
find(6);
console.timeEnd("6");

console.time("12");
find(12);
console.timeEnd("12");

// so optimize the above function using closure
// # solution
function find1() {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}
let closure = find1();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(12);
console.timeEnd("12");


// ========================================================================================================================================


// # block scope and setTimeout what is log
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // print 3,3,3
  }, 1000);
}
// var has function scope  first time run this var value is 0 but this is not going print right over because setTimeout only run after then completely code run successfully the i reference to memory and js encounter the current value of the i is e
// the run quickly and compleat before any of the setTimeout callback execute
// When the callbacks finally run after 1000 ms, they all access the same i, which is now 3 (because loop finished).
// Because var is function scoped, all 3 setTimeout functions share the same variable i, and by the time they run, i = 3.

/*
 1 first iteration i=0  (i is declared with var available in globally)
   scheduled setTimeOut  callback run after 1000 ms 
   closure remember references:  setTimeout remembers i (not value, but reference to variable)
2: 2nd iteration i =1 : i is updated to 1
    setTimeout scheduled	Another callback is registered for 1000ms
    Still same i variable	All closures still point to the same i
3. iteration 3  i = 2	i becomes 2
setTimeout scheduled	Another callback is added for 1000ms
After loop ends: i = 3 : Loop finished	 : i has become 3
Callbacks waiting	:All 3 callbacks are waiting to run
all remember i = 3	Because they refer to same variable
*/

// # your are not allowed used let so this done using closure like iife

// let creates a new block-scoped i on each iteration → each setTimeout gets a different i.
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Outputs: 0, 1, 2
  }, 1000);
}
// # and using iife
// Because it captures the value of i during that iteration and saves it as a local variable j inside the function scope.
// Each setTimeout now uses its own copy of j, not the shared i.
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j); // Outputs: 0, 1, 2
    }, 1000);
  })(i);
}
// When using var, the variable i is hoisted and shared across all iterations, so all callbacks access the final value of i.
//Using let creates a new i for each iteration (block scope), so each setTimeout captures the correct value of i.
// IIFE can be used to create a new scope for each iteration and pass the current value of i to the function.
//  here it create new reference for every time when the loop are iterate and i will be local variable inside the function rather then taking form outer function scope

// ========================================================================================================================================


// # how will you use closure to create private counter.
function counter() {
  let _counter = 0;
  // _ defined this is convention to create private counter
  function add(increment) {
    _counter = _counter + increment;
  }
  function retrieve() {
    return _counter;
  }
  return {
    add,
    retrieve,
  };
}
// outside this you are not able to get this counter variable the we have to access this using the closure

let c = counter();
c.add(8);
c.add(8);
console.log(c.retrieve());


// ========================================================================================================================================


// # make this run only one
let view;
function likeTheVideo() {
  view = "vishal shinde";
  console.log("like to ", view);
}
likeTheVideo();

let hi;
function likeTheVideo1() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("function already called");
    } else {
      hi = "vishal shinde";
      console.log("like to", hi);
      called++;
    }
  };
}

let done = likeTheVideo1();
done();
done();

// 

// implementation to run only one
function once(fun) {
  let run = false;
  return function (...args) {
    if (run) {
      console.log("already run this function ");
      return;
    } else {
      run = true;
      return fun(...args);
    }
  };
}

let run = once(likeTheVideo);
run();
run();
run();

/*
# what is difference between closure and scope 
closure:
1. whenever you have to create function within another function so inner function is closure function which can access all the variable and function inside the outer function when the outer function are lexically out of scope
2.Definition: A closure is a function that remembers and can access variables from its lexical scope (the scope in which it was created) even after that outer scope is no longer active.
3. Key Feature: Closures "close over" their environment, meaning they capture the variables and functions of their enclosing scope.
4. scope in closure 
Local Scope: Variables declared inside the closure.
Outer Function Scope: Variables from the function where the closure is defined.
Global Scope: Variables accessible globally.

scope :
1.  scope defined what variable you have to access 
2. Definition: Scope refers to the accessibility and visibility of variables and functions in a specific part of the program.
3. Key Feature: Scope determines where you can access a variable or function.
Types of Scope:
Local Scope: Variables defined within a specific function or block.
Global Scope: Variables accessible throughout the program.
Block Scope (introduced with let and const): Variables confined to a block (e.g., inside an if or for block).

 # How Do Closures Affect Garbage Collection?
 1. closure can affect garbage collection by extending lifeTime of variable in js.
 2. A closure keeps a reference to variables from its outer function, even after the outer function has finished execution. This can prevent JavaScript from garbage collecting those variables.

*/
function createClosure() {
  let largeArray = new Array(1000).fill("data");
  return function () {
    console.log(largeArray.length);
  };
}
// closure is created
let closureFn = createClosure();
// so here largeArray are not garbage collector When a closure captures variables, those variables stay in memory as long as the closure exists.
// Normally, after createClosure() runs, largeArray should be removed.
// But the inner function (closure) still has a reference to largeArray.
// Since closureFn keeps the function alive, largeArray stays in memory.

// # how to avoid memory leaks with closure
// 1.if you no need closure you should remove references to free up memory
closureFn = null; // so here references is removed and largeArray can be garbage collected.

// # Does a closure avoid Garbage collection
// 1.yes closure can prevent garbage collection in JavaScript by keeping references to variables in their outer scope, even after the outer function has finished executing. This can lead to memory leaks if not handled properly.

// # How Closures Affect Garbage Collection
// In JavaScript, garbage collection removes variables that are no longer needed. 
// However, if a closure retains a reference to an outer function’s variables, they won’t be collected.
//2 When a closure captures variables, those variables stay in memory as long as the closure exists.
