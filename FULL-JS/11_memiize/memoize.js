/*
# what is memoize ?
1.Memoization is an optimization technique 
2. in programming that involves storing the results of expensive function calls and reusing those cached results when the same inputs occur again.
2.It helps improve performance by avoiding redundant computations.
3. JavaScript, memoization is often implemented by wrapping a function in another function that maintains a cache of previously computed results.

# Why Use Memoization?
Improves Performance: Reduces repeated computations for the same inputs.
Ideal for Expensive Operations: Useful for operations involving recursion, heavy calculations, or API calls.
Saves Time: Trades off a small amount of memory (for caching) to save significant computation time.

? How Memoization Works:

A cache (usually a Map or an object) is used to store results.
Before executing the function:
Check if the result for the given inputs already exists in the cache.
If it exists, return the cached result.
If not, compute the result, store it in the cache, and then return it.


# Disadvantages:
1.Memory Usage: Stores results in memory, which can grow significantly for many unique inputs.
2. Limited Use Case: Not useful for functions with side effects or inputs that frequently change.

# implement caching memoize function in javascript 
# polyfill of memoize.
*/

function calculations(a, b) {
  for (let i = 0; i < 100000; i++) {}
  return a + b;
}

// This defines a function named myMemoize that takes two parameters:
// fun: The function that you want to memoize (i.e., cache the result of).
// context: An optional context (this value) in which to execute the fun.
function memoize(fun, context) {
  // Initialize a cache object to store the computed results for specific arguments.
  let cache = {};
  // Return a new function that will act as the memoized version of the provided function.
  return function (...args) {
    // Convert the arguments into a string key to uniquely identify the combination of arguments.
    let argKey = JSON.stringify(args); // serialize argument for the unique key ( // This serialized string is used as a unique key to store the result in the cache object.)

    // Check if the result for the current arguments is already in the cache.
    // If the result is not in the cache, compute it by calling the original function and store it in the cache.
    // The 'context' specifies the context in which the function should be executed.
    if (!cache[argKey]) {
      cache[argKey] = fun.apply(context || this, args);
    }
    // return the cache result if available otherwise compute the result
    return cache[argKey];
  };
}

let result = memoize(calculations);
console.time("result");
result(1100, 1200); // execute the function and cache the result
console.timeEnd("result");

console.time("result");
result(1100, 1200); // retrieve the result form the cache.
console.timeEnd("result");


// # memoize function using Map object

function memoization(fun, context) {
  // Create a new Map to store cached results
  // Keys = arguments passed, Value = result of function
  let map = new Map();

  // Return a new function (closure) that wraps around the original function
  return function (...args) {
    // Convert the arguments array into a string (unique key)
    // This helps us store/retrieve results based on input
    let argKey = JSON.stringify(args);

    // If the result for these arguments is not already cached
    if (!map.has(argKey)) {
      // Call the original function with provided context (if any) and arguments
      // Store the result in the cache (map)
      map.set(argKey, fun.apply(context || this, args));
    }

    // Return the cached result (whether newly stored or previously stored)
    return map.get(argKey);
  };
}

let mapResult = memoization(calculations);
console.time("map");
mapResult(5000, 4000);
console.timeEnd("map");

console.time("map");
mapResult(5000, 4000);
console.timeEnd("map");

// # using call method

function cache(fun, context) {
  let cache = {};
  return function (...args) {
    let argKey = JSON.stringify(args);
    if (!(argKey in cache)) {
      cache[argKey] = fun.call(context || this, ...args);
    }
    return cache[argKey];
  };
}
let mapResult1 = cache(calculations);

console.time("second call");
console.log(mapResult1(10000, 30000)); // returns cached result
console.timeEnd("second call");
