
/*

@ ANONYMOUS FUNCTION

Q. What is anonymous function :
  - An anonymous function is a function without a name. 
  - (an anonymous function is javascript is function that does not have a name.)
  - is is usually used when the function is needed only once, or passed as a value to another function such as callback, eventListner, or array method (anonymous function are often used in case where the function does not need to be reused elsewhere, such as in callbacks or immediately) invoked function.
  - instead of being declared with specific identifier.
  - it is typically
    - assigned to variable,
    - pass as an argument to another function
    - used as an inline function expression
    - return from another function
    - or exectued immediately(IIFE)
# Characteristics of Anonymous Function :
  1. No name: Anonymous function do not have a name (only having function keyword)
  2. Usually Written as Function Expressions : Anonymous function are often defined as function expression rather then declaration(Anonymous functions are almost always used as function expressions, not function declarations)
  3. Assigned to Variables or Used Inline They are commonly used
    - stored in variable
    - passed as callback function
    - return from function
    - used directly where a functioin is exptected
    4. anonymous function can be written using the function keyword without a name

# imp
- Function expression
  - A function expression create a function as a part of expression
  - there are 2 type
    1. Anonymous function expression
      const add = functon(a,b){
      return a + b
      }
    2. Named function expression
    - The function has its own internal name.
    const add = function multiply(a,b){
    return a * b
    }

# calling an anonymous function .
  - Although the function itself has no name, it can handle using the variable that store it.
  const mul = function(a, b){
  return a * b
  }
  console.log(myl(10,20))

# Anonymous Arrow function
  - Arrow function are also anonymous unless assigned to a variable
  const greet = () =>{
    console.log('Hello word')
    }

# imp point
- Anonymous function are not accessible by function name because they don't have one
- They access through
  - variable
  - callback
  - Object proeprties
  - array Element


# why do we used anonymous function
1. callback function : anonymous function are commonly passed as callbacks.
2. Event Listners
3. IIFE (immediately invoded function expression)
4.array method


# differences between named function and Anonymous function

| Named Function                                                     | Anonymous Function                                                                                                |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Has a function name                                                | Has no function name                                                                                              |
| Declared using a function declaration or named function expression | Usually written as a function expression                                                                          |
| Easier to debug because the function name appears in stack traces  | Harder to debug because there is no function name                                                                 |
| Reusable by calling its name                                       | Reused only through the variable or reference that stores it                                                      |
| Can be declared independently                                      | Usually part of an expression                                                                                     |
| Can directly perform recursion using its own name                  | Cannot directly recurse unless it has a reference (for example, assigned to a variable or given an internal name) |

1. What is an anonymous function?
A function without a name is called an anonymous function.

Q. Can an anonymous function be called directly?
Yes, if it is stored in a variable.
const hello = function () {
    console.log("Hello");
};
hello();
- Or immediately if it is an IIFE.
(function(){
    console.log("Hello");
})();

q. Is every arrow function anonymous?
- No. An arrow function expression itself has no name, but it is commonly assigned to a variable.
*/
const myFunction = function(){
    console.log('this is anonymous function')
}
// here above function are anonymous function that assign the variable like myFunction.


/*
# just for information :
    1. A function expression is similar to and has the syntax as function declaration
        1. one can defined name function expression.
        2. we have to write function expression in another way by using anonymous function expression.

    2. anonymous function means unknown or without identification (or anonymous function means function has no name.)
*/

const x = function (a, b){
    return a * b
}
const mul = x(10,20) // call the anonymous function simply call the variable passing the required arguments.
console.log(mul) // also called as anonymous component.

/*
#

1:  To call the anonymous function we simply call the variable passing the required argument followed by.
2: anonymous function is function that does not have name instead of being declare with name like regular function it defined inline regular function.
(anonymous function some time referred function literal )

3. instead of defining the regular function we have to defined inline regular function
*/
const myFun = function (parameter){
    // function body
    // this is single statement or block of code
};

/*
 4. anonymous function also defined as arrow function, anonymous function are also commonly written using arrow function

*/

// anonymous arrow function
const greet =() =>{
    console.log('Hello word')
}
greet()  // output Hello word

// anonymous having multiple arguments (anonymous function does not have any name associate with it normally we have to used function keyword without the function name.)
// anonymous function is not accessible after the initial creation it can only access by variable it is stored in as a function value.

/*
 # why did we use the anonymous function in js

    1: A callback function
        : anonymous function are often used as callback where a function is pass as an argument to another.
*/
    setTimeout(() => {
        console.log('this is delayed by 2 second');

    }, 3000);

/*
    2. In event listeners :
        : anonymous function are commonly used in event handling
*/
    document.getElementById('btn').addEventListener('click', function(){
        console.log('button is clicked')
    })

/*
    3. IIFE (immediately invoked function expression)
        : anonymous function are used is IIFs to execute code immediately
*/
    (function(){
        console.log('this is IIFE')
    })()

/*
    4. Inline operation : Anonymous function are used in array method like map, filter, and reduce
*/
    const numbers = [1,2,3,4];
    const squared =numbers.map(function(num){
        return num * num
    })
    console.log(squared)



/*
# what is differences between name and anonymous function

    # 1. Name Function :
        1:name function has name
        2:easy to debug (show the function name in stack strace)
        3: reusable and accessible by name
        4: it can be defined standAlone
        4: it can be used for recursion

    # 2. anonymous function :
        1: does not have name
        2: used as expression (must be part of an expression or assigned to a variable)
        3: must be part of an expression and pass a value
        4: harder to debug due to lack of name
        5: anonymous function typically used for single use
        6: can not perform recursion unless assigned to a variable.


1. Anonymous functions are accessible through the reference that stores them (such as a variable or object property).
2.Anonymous functions are often defined inline as function expressions.
3. Arrow functions are another syntax for writing function expressions. Most arrow functions are anonymous, but anonymous functions are not the same thing as arrow functions. A traditional anonymous function and an arrow function behave differently (for example, this, arguments, super, and new.target work differently).
3. An anonymous function has no own name for self-reference. It can recurse if it has another reference (such as a variable) or if it is a named function expression.
*/

