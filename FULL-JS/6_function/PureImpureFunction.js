
/*

@ PURE FUNCTION & IN-PURE FUNCTION
# pure function & impure function
  - pure and impure function are concept in js used to differentiate between function based on their behavior and side effect.
q. what is pure function ?
  - A pure function always returns the same output for the same input, no matter how many times it's called.
  - A pure function is a function that always return same output for the same input and does not produce any side effect, its result depends on only on its input arguments.
  - a pure function in js script is a function that always produce same output for the same input (i.e give input the function always produce the same output)
  - does not have any side effect (i.e does not modify any external state or variable which is outside the function)
  - also it does not modify andy external state or interact with outside the word.(.i.e no api call, no dom manipulation, no change the global variable)
  - pure function is Deterministic : its behavior is predictable and only depends on it input arguments.

# characteristics of pure function
- Always return the same output for the same input
- DeterMinistic.
- Depends only on its parameters
- Does not Modify external variables
- Does not Perform DOM manipulation
- Does not Make api call
-  Does not read/write files
- Does not access the curretn Time (Date.now())
- Does not generate Random value (like Math.random())
- it does not modify the input data (it does not mutate its argument)
- it does not rely on or modify the external state (i.e it does not have side effect like changing global variable Dom manipulation)
- There’s no randomness, no time dependency, and no reliance on external state.


# Why deterministic matters in pure functions?
  - Defination
    - A deterministic function is a function that always produces the same output for the same input, no matter how many times you execute it.
    - simple word : same input : same output(Always);
    - A Deterministic function result depends only on its input arguments not on external factors such as tiem, random numbers or global variables.

@ why Does Determinism Matter in pure Function ?
  - A deterministic function always produces the same output for the same input. This makes pure functions reliable, predictable, and easier to work with.
  1:Predictable behavior : A deterministic function always behaves the same way
    function add(a , b){
    return a + b;
    }
    console.log(add(2,3))
    console.log(add(2,3))
    console.log(add(2,3))
  - Every time you pass 2 and 3 the resutl alway 5
  - so
    - easy to understand
    - Easy to predict the output
    - No unexpected behavior

  2:Easier to debug and test
    - sine the output never change for the same input, testing become very simple
     function square(num){
    return num * num;
    }
    square(4)
    square(4)
    square(4)
  - if test fails you know the problem is the function itself no because of some external state
  - so
    - easier unit testing
    - Easier debugging
    - Fewer bugs

  3:No side effects
  - pure function do not modify anything outside the function
  function multiply(a,b){
  return a * b
  }
  - the function
    - does not change global variable
    - does not modify objects
    - does not call api
    - Does not manipulate the Dom
  - it simply return a value
  so
    - safe to reuse
    - no accidental canges to application state
    - Easier Maintences
  4:Great for functional programming
  - Functional Programming relies heavily on pure function
  - so it is deterministic
    - result are predictable
    - Function can be composed togather
    - code become easier to understand.

5. safe for Memoization (Caching)
  - Since the same input always produce the same output js can cache the result
  - so it
    - improve the performances
    - avoid un-necessary calculation.

6. safe for parallel execution
  - Because pure function don't share or modify external state, multiple copies can run simultaneously without interfacing with each other
    - so for
      - better performances
      - No race condition
      - Easier concurrent Programming.

Determinism is important in pure functions because it guarantees that the same input always produces the same output. This makes functions predictable, easier to test, easier to debug, free from side effects, reusable, suitable for functional programming, and enables performance optimizations such as memoization and safe parallel execution.
*/
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
console.log(add(5.6)) //(it always produce same result for same inputs.)


/*
 # what is impure function in js
  - An Impure Function is a function that either produces side effects or depends on external state instead of depending only on its input arguments.
  - impure function in js is function that violates one or more principle of a pure function
  - impure function relies on and modify an external state
  - impure function has side effect (i.e it modify the external state or interact with the outside word  i.e make api call, chage global variable , dom manipulation and perform i/o operation)
  - impure function are non-deterministic  : returns a different value every time — it’s not deterministic.
    - An impure function may be non-deterministic, but it is considered impure if it has side effects or depends on external state.

# impure function why is it impure
- May return different outputs for the same input.
- May depend on external state.
- May modify global variables.
- May modify objects or arrays passed as arguments.
- May perform API calls.
- May manipulate the DOM.
- May perform file or database operations.
- Has one or more side effects.
    1. it perform a side effect
    2. also it modify the external state like global variable or it may be depends on the external state .
    3. the output does not depends on the input it depends on the current state not just the input to the function
*/

let counter = 0;
function increment() {
  counter++
  return counter;
}
console.log(increment());
console.log(increment());




/*
@ differences between PURE VS IN-PURE function

| Feature                       | Pure Function                                                              | Impure Function                                           |
| ----------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------- |
| **Definition**                | Always returns the same output for the same input and has no side effects. | Produces side effects or depends on external state.       |
| **Output**                    | Same output for the same input.                                            | May or may not return the same output for the same input. |
| **Depends On**                | Only input arguments.                                                      | Input arguments and/or external state.                    |
| **Deterministic**             | ✅ Yes                                                                      | ❌ Not necessarily.                                        |
| **Side Effects**              | ❌ No                                                                       | ✅ Yes                                                     |
| **Modifies Global Variables** | ❌ No                                                                       | ✅ May modify them.                                        |
| **API Calls**                 | ❌ No                                                                       | ✅ Yes                                                     |
| **DOM Manipulation**          | ❌ No                                                                       | ✅ Yes                                                     |
| **Random Values**             | ❌ No                                                                       | ✅ May use `Math.random()`.                                |
| **Current Time**              | ❌ No                                                                       | ✅ May use `Date.now()`.                                   |
| **Easy to Test**              | ✅ Yes                                                                      | ❌ Harder                                                  |
| **Easy to Debug**             | ✅ Yes                                                                      | ❌ Harder                                                  |
| **Reusable**                  | ✅ High                                                                     | ❌ Lower                                                   |

 # why prefer pure function
   | Reason                     | Explanation                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------- |
| **Easier to Debug**        | Depends only on input, making bugs easier to locate.                                        |
| **Predictable**            | Same input always produces the same output.                                                 |
| **Reusable**               | Can be used anywhere because it has no side effects.                                        |
| **Easy to Test**           | Produces consistent results, making unit testing straightforward.                           |
| **No Side Effects**        | Doesn't modify global variables, objects, or external state.                                |
| **Functional Programming** | Works well with `map()`, `filter()`, `reduce()`, and other functional programming concepts. |
| **Memoization**            | Results can be cached for improved performance.                                             |
| **Parallel Execution**     | Can safely execute concurrently because there is no shared mutable state.                   |


@ differences between determinitic vs non deterministics
| Function                              | Deterministic | Pure | Reason                                                |
| ------------------------------------- | ------------- | ---- | ----------------------------------------------------- |
| `add(a,b)`                            | ✅             | ✅    | Same input → Same output, no side effects             |
| `square(x)`                           | ✅             | ✅    | Depends only on input                                 |
| `console.log(name)`                   | ✅             | ❌    | Same output but has a side effect (writes to console) |
| `Math.random()`                       | ❌             | ❌    | Output changes every time                             |
| `Date.now()`                          | ❌             | ❌    | Depends on current time                               |
| `fetch()`                             | ❌             | ❌    | Depends on server response                            |
| `database.get()`                      | ❌             | ❌    | Depends on database state                             |
| `increment()` using a global variable | ❌             | ❌    | Depends on and modifies external state                |

| Deterministic            | Non-Deterministic                   |
| ------------------------ | ----------------------------------- |
| Same input → Same output | Same input → Different output       |
| Depends only on input    | Depends on input + external factors |
| Predictable              | Unpredictable                       |
| Easy to test             | Harder to test                      |
| Usually pure             | Usually impure                      |

A non-deterministic function is a function that does not always return the same output for the same input. Its result depends not only on its input arguments but also on external factors such as time, random values, global state, user input, APIs, databases, or other changing data sources.


Pure Function: A function that always returns the same output for the same input and has no side effects.
Impure Function: A function that has side effects or depends on external state instead of only its input arguments.


@ differences between predicatable vs non-predictable
| Predictable              | Unpredictable                            |
| ------------------------ | ---------------------------------------- |
| Same input → Same output | Same input may produce different outputs |
| Easy to know the result  | Difficult to know the result             |
| Deterministic            | Non-deterministic                        |
| Easier to test           | Harder to test                           |
| Usually pure             | Often impure                             |

Predictable means that a function always behaves consistently. For the same input, it always produces the same output, making its behavior easy to understand, test, and debug.
A non-predictable function may produce different outputs for the same input because its behavior depends on changing external conditions rather than only on its input arguments.
*/
