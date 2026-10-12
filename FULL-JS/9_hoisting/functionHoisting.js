/*
# function hoisting 

? what is function hoisting.
  1:def: hoisting is default behavior or mechanism in javascript or hoisting is process where javascript engine  variable and function declaration are move to the top of their surrounding scope or your code this is known as hoisting 
  2: function are hoisted but different the normal variable.
  3.function are hoisted completely i.e in variable case variable are hoisted as undefined but in case of function compleat function are copied into the surrounding scope. so does not matter call the function before or after the function declaration still it going work.
  4.  function hoisting is a behavior in javascript where function declaration are move to the top of there containing scope during the creation phase before the code is executed this means you can all a function before it is defined in the code 
5: when function declaration is hoisted its entire definition(including the body) is move to the top of its containing scope during the creation phase.
*/
// 1
display();
console.log("a", a);

function display() {
  console.log(x);
  var x = 20;
  console.log("hello");
}
var a = 10;
// x undefined
// hello
// a undefined

// 2
var myVar;
console.log(myVar); // variable also hoisted it return undefined
greet(); // here we have call before function declaration
myVar = 10;
function greet() {
  console.log("welcome"); // welcome
}

// 3
sayHello(); 
function sayHello() {
  console.log("sayHello"); // sayHello
}


// 4
functionName();
function functionName() {
  console.log("hi");  // hi
}
console.log(s); // return undefined because of hoisting it not show the error like let and const
var s = 10;
console.log(s); //10

/*
# key point about function hoisting 
1: Entire function declaration are hoisted (not just name) so you call the function anywhere within the scope (i.e The entire function is available before where it is defined (in function case the complete function copied into the scope))
2:  Like variable javascript engine also hoisting the function declaration  that means javascript engine also move the function declaration to the top of the script So during the creation phase of the execution context javascript engine places the function declaration to the heap memory

*/

// ? output based question
var x = 21;
var fun = function () {
  console.log(x); // return undefined
  var x = 20;
};
fun();

/*
# above code explanation :
1: basically hoisting is 2 step process 
    1. initialization of global code 
    2. initialization of local scope
1. first initialize the compleat code so here initialize the global scope 
    : in this global scope initialize the x as 21 and function 
2. then in second phase local scop initialize as well (so in this local phase create separate execution context for that function / local scope )
    : so initialize local scope is hoisted first in local scope on the top of its scope so in this scope x is assign to undefined  but it preset in the local scope  
    # Note
    1. when we have variable present in current scope then we will not go and check the variable in the parent or global scope then we will always prefer current scope 
    (so x are preset in local scope and this x are hoisted then the not get the value form the local scope  it print undefined in local scope)

*/
// ex.
// const fn = (x,y, ...num , z,a) => {
//     console.log(x,y) // show error like Uncaught SyntaxError: Rest parameter must be last formal parameter
// }
// fun(1,2,3,4,5,6,7)

// solution
const fn1 = (x, y, z, ...num) => {
  console.log(x, y); // show error like Uncaught SyntaxError: Rest parameter must be last formal parameter
};
fn1(1, 2, 3, 4, 5, 6, 7);

// =============================================================================================================================

/*

? function expression  are hoisting or not.?
1: Function Expressions are not hoisted like Function Declarations:  
2: In the case of function declarations, the entire function (its name and body) is hoisted. 
3. But with function expressions, only the variable is hoisted, not the function assignment.

  # What happens during Hoisting:
    1:In the creation phase, JavaScript scans your code and sets up memory for variable and function declarations.
    2: For the line var sayHi = function(){}, only the sayHi variable declaration is hoisted, not the function itself.

  # during the creation phase:
    var sayHi; // initialized as undefined

  # Execution phase:
`  1: When JS reaches the line where the function is assigned, it sets sayHi to the anonymous function.
  2: Before that line runs, sayHi is just undefined.
  3: When you do console.log(sayHi); → It prints undefined (variable is declared but not assigned).
  4:When you do sayHi(); before assignment → You get TypeError: sayHi is not a function because you're trying to call undefined.
`

*/
console.log(sayHi(10, 20)); // TypeError: sayHi is not a function
var sayHi = function (a, b) {
  return a + b;
};

// ============================================================================================================================================

/*
? arrow function are hoisted or not hoisting 
  1: also arrow function are not hoisted 
  2: arrow function like function expression are treated as variable 
  3: Arrow functions are not hoisted in a way that lets you call them before their declaration — they behave like function expressions, not function declarations.

  # Arrow Function Hoisting
  1:Arrow Functions are not hoisted like Function Declarations:
  Like function expressions, arrow functions are assigned to variables, and only the variable is hoisted—not the function definition.

# # What Happens During Hoisting
1:In the creation phase, JavaScript scans the code and sets up memory for variable and function declarations.
2,For the line var sayHi = () => {}, only the sayHi variable declaration is hoisted—not the arrow function assignment.

# During the Creation Phase
var sayHi; // initialized as undefined

# Execution Phase
1: When JavaScript reaches the line where the arrow function is assigned, it sets sayHi to the arrow function.
2: Before that line runs, sayHi is just undefined.
3:When you do console.log(sayHi); → It prints undefined (the variable exists but isn’t assigned yet).
4:When you do sayHi(); before assignment → You get
 TypeError: sayHi is not a function, because you're calling undefined.


*/

console.log(sayHi); // undefined
sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = () => {
  console.log("hello");
};

sayHi(); // ❌ ReferenceError: Cannot access 'sayHi' before initialization
let sayHi = () => {
  console.log("hello");
};

// # internal implementation
var sayHi; // hoisted → undefined
console.log(sayHi); // undefined
sayHi(10, 20); // ❌ TypeError: undefined is not a function
sayHi = function (a, b) {
  return a + b;
};

/*
i# f declared with **let** or **const**:
1:The variable is hoisted but not initialized → TDZ (Temporal Dead Zone) applies.
2: Accessing it before declaration → ReferenceError.
3:They are hoisted too, but not initialized.
4: The time between the start of the block and the actual declaration is called the Temporal Dead Zone (TDZ).
5:Any access during the TDZ throws a ReferenceError.

*/
console.log(sayHi); // ❌ ReferenceError: Cannot access 'sayHi' before initialization
sayHi(); // ❌ Won't even reach this line

let sayHi = function () {
  console.log("sayHi");
};

// note :
// 1.Function Expressions / Arrow Functions → Only variable name is hoisted (set to undefined until assignment).
console.log(multiply(2, 3)); // ❌ TypeError
var multiply = (a, b) => a * b;
// 2. Only var multiply; is hoisted (initialized to undefined), function assignment happens later.

// # Why function expression and arrow function are not hoisted  (refer above explanation )
