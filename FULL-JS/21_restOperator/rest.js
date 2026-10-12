/*
# rest operator 
1.The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
2. The rest operator (...) in JavaScript is used to collect multiple elements or argument into a single array or object.
3. function example(...args) {
  args is now an array
}
4. It provides a way to collect all remaining arguments into a single array.
5. it provide more flexible way to work with function that can accept varying number of argument

# key characteristics of rest parameter
1. rest operator must be last formal parameter (i.e Notice the rest parameter must appear at the end of the argument list.)
2. rest parameter has prefix with three dots
3. Gather all the remaining argument and put it into the array and a function definition can have only one rest operator else the code throw syntax error in both case
4. also rest parameter used for array, object and iterable object destructuring
5. The Rest Parameter is used in function definitions to gather all remaining arguments into a single array.
6.  the rest parameter syntax (...) is also used in destructuring (both arrays and objects) to collect the "remaining" elements or properties into a new variable.

*/

// ==========================================================================================================================================

// # In short:
// Spread: takes an array/object and spreads it into individual items.
// Rest: takes individual items and gathers them into an array/object.

// =================================================================================================================================

// # useCase

//  # 1. in Function Parameters (Collect arguments)
function sum(...num) {
  // ...num gathers all arguments into an array.
  console.log(num); // [1, 2, 3, 4]
  return num.reduce((acc, ele) => acc + ele);
}
console.log(sum(1, 2, 3, 4));

// =========================================================================================================================

// # 2. used for array destructuring
let arr = [1, 2, 3, 4, 5, 6];
const [first, last, ...rest] = arr;
console.log(first, last, rest); // gathers the remaining elements into a new array.

// ===============================================================================

// # 3 object destructuring
// it is possible to use rest parameters when destructuring objects or when an object is passed as an argument. Let me give you an example:
const person = { name: "Vishal", age: 25, city: "Pune" };
const { name, ...rest1 } = person;
console.log(name); // "Vishal"
console.log({ ...rest1 }); // { age: 25, city: "Pune" }  gathers the remaining properties into a new object.

// =====================================================================

// # destructuring with string
// The rest operator can be used to collect the remaining characters after destructuring a string into parts.
let str = "vishal";
const [a, b, c, d, ...rest4] = str;
console.log(a, b, c, d, rest4);

// #
function sum(...args) {
  return args
    .filter(function (e) {
      return typeof e === "number";
    })
    .reduce(function (pre, curr) {
      return pre + curr;
    });
}
let result = sum(10, "Hi", null, undefined, 20);
console.log(result);


// =================================================================================================================

/*
# differences between rest operator and spread operator 
1. both rest and spread operator used ...(three dots ) syntax but the purpose are completely apposite 
    1 rest collect multiple value into single array    (i.e direction are gathering)
    2 spread operator used to one value into multiple  ( i.e direction is separating)  

# 1 rest operator:
    1.The Rest Parameter is used in function definitions to gather all remaining arguments into a single array.
    2. also used in  destructuring in both array and object to gather all remaining element or properties of an object into an array or object 
    3. To collect any number of arguments into an array.
    # Rules:
        1. Must be last in the parameter list.
        2. You can only have one rest parameter.
        3. Only used in function parameter definitions. and array destructuring




# 2 spread operator :
1. spread operator is used to unpack, or spread or expand the element or an array or properties of an object  into individual item
2. The Spread Operator is used to unpack (expand) iterable elements (like arrays or strings) into individual items.
3.To expand an iterable into individual values.
# Commonly used:
    1. In arrays: [...arr1, ...arr2]
    2. In function calls: myFunc(...args)
    3. In object cloning: {...obj}
    To copy , merging the one array or object into another object or extract data structure.
4. in is used in Anywhere in expressions


| Feature    | Rest Parameter                      | Spread Operator                      |
| ---------- | ----------------------------------- | ------------------------------------ |
| Purpose    | Collect multiple args into an array | Expand elements from an array/object |
| Location   | Function parameter list             | Function calls, arrays, objects      |
| Shape      | Packs values                        | Unpacks values                       |
| Appearance | Last in function params             | Anywhere in expressions              |
| Example    | `function f(...args) {}`            | `f(...[1, 2])` or `[...arr]`         |


*/
