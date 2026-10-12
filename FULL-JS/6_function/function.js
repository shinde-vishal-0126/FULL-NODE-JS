import sayHello from 'sayHello';
/*
@ function
Q. what is function in js
- function in js block of reusable code that to perform a particular or specific task or set of task;
- function used to organize code into modular and manageable pieces and promote code reuse and make program more readable.
- i.e using function you have to organized code (separation of logic) avoid the separation of task.
- before we used function we need to defined it
# Function in js we have learn
1. function defination
2. function calling
3. function parameter
4. function argument
5. return keyword
6.anonymous function

Q what is function defination : (also call as function declaration)
- declare a function using the function keyword followed by the function name, function parameter(if any) and the function body
- list of parameter are enclosed with parentheses. like function sum(a,b,c){ function body }
- js defined the function enclosed with {} curly brackets
# function declaration : function is keyword and sum is function name and inside the parentheses pass list of parameter
*/
function sum(a, b) {
  const total = a + b;
  console.log(total);
}
// function calling with function name and parenthesis
sum(3, 4); // this is function calling or function invocation and 3 and 4 are arguments.

// # function scope
var num1 = 20,
  num2 = 3,
  name = "vishal shinde";
function multiply() {
  return num1 * num2;
}
multiply(); // 60

// # a nested function example
function getScore() {
  var num1 = 10, num2 = 3
  function add() {
    return name + 'scored' + (num1 + num2)
  }
  return add()
}
getScore()

//Q.function scope output based question
for (let i = 0; i < 5; i++) {
  // here i have let so every time this for loop runs it create another block scope for this setTimeout function then first time is 0 then 1, 2, 3, 4
  //  let is block-scoped.
  // Each iteration of the loop creates a new binding of i.So, each setTimeout captures a different i (0, 1, 2, 3, 4).
  setTimeout(function () {
    console.log(i)
  }, i * 1000)
}
// output is 0,1,2,3,4
// instead of let you have var so var does not have block scope so var print 5,5,5,5,5 because the setTimeout function is execute at that time var are compleat the loop so it reach to the 5
//  var is function-scoped, not block-scoped.All iterations share the same variable
// i. By the time setTimeout callbacks are executed (after the loop has completed), i is already 5
// # Fix with IIFE (Immediately Invoked Function Expression) for var:
// If you still want to use var, you can create a closure with an IIFE:
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  })(i);
}
/*
// Q. what is function parameter and function arguments ?
! 1. function parameter :
  - function parameter are the name listed in the function declaration or defination
  - or whatever value pass as an function calling and so receive this value inside our function this is call as parameter.
  - A parameter is a variable declared inside the parentheses of a function definition.
  - It acts as a placeholder for the value that will be passed when the function is called.
  function functionName(parameter1, parameter2) {
    // function body
}

! 2. function argument:
  - function argument are real value pass to the function at the time of calling a function
  - where we call a function and pass the value inside this is called as argument
  - An argument is the actual value you pass to the function when calling it.
  - greet("Vishal");

# note
- A parameter and an argument are closely related, but they are not the same thing.
- Parameter → A variable listed in the function definition that receives a value.
- Argument → The actual value you pass to the function when calling it.

# Parameter vs Argument
| Parameter                           | Argument                         |
| ----------------------------------- | -------------------------------- |
| Declared in the function definition | Passed during the function call  |
| Acts as a placeholder               | Actual value                     |
| Variable                            | Data/value                       |
| Exists inside the function          | Exists when calling the function |

*/
//#  function parameter is name listed in the function declaration like a and b are parameter
function add(a, b) {
  return a + b;
}
add(5, 5);
// function argument are actual or real value pass to the function at the time of function calling.

/*
Q. What is Default Parameters in JavaScript (ES6)
  - Default Parameters were introduced in ES6 (ECMAScript 2015). They allow you to assign a default value to a function parameter.
  - If no argument (or undefined) is passed when the function is called, the default value is used.
  - default parameter are introducing ES6 for providing more concise way to handle default function parameter
  - default function parameter allow name parameter to be initialized with default value.
  - (i.e at the time of function declaration you have to initialize the parameter with default value this is called as default value)
  - if no value or undefined passed.
  - A default argument is a parameter that has been assigned a default value in the function declaration.
  - default parameter allow you to specify the default value for function parameter in the function declaration it-self if the argument are not provided then function is called the default value.
  - default function parameter allow named parameter to be initialized with default value if no value or undefined is passed

# note (Key point)
- Provide a cleaner and more concise way to handle default values.
- The default value is assigned at the time of function declaration.
- The default value is used only when: No argument is passed. or undefined is passed explicitly.
- If any other value (including null, 0, false, or "") is passed, the default value is not used.

*/
// here we have to add default argument as b =90 if no value or undefined it take the default value.
function multiple(a, b = 90) {
  const total = a * b;
  console.log(total);
}
multiple(10);

/*
Q. why do we use function
- function is block of reusable code (i.e define code once and used it many time ) also you can used same code many time with different argument to produce different result
- function is block of code basically used to perform some specific task.
- function eliminates the need of writing the same code again and again.(i.e do not repeat yourself.)

Q. What is function declaration ?
- A function declaration is a way to define a named function in JavaScript. It's one of the most common and traditional ways to create a function.
function functionName(parameters) {
  Function body
  Code to execute
}
Q. what is function expression ?
- when you store a function inside a variable its called a function expression.
! - A Function Expression is a way of creating a function by assigning it to a variable. The function becomes the value of that variable, and you can call it using the variable name.
- A Function Expression is a function that is created and assigned to a variable. The function can be anonymous (without a name) or named, and it can be invoked using the variable name.
- function expression is another way to defined a function as part of an expression it can  be either name or anonymous name it become name function expression
- A function expression is another way to define a function in JavaScript. Instead of using the function keyword alone like in a function declaration, you assign the function to a variable.
- Function Expression  (when you stored a function inside a variable its called as a function expression)
- Function expression simply means create function and put it into the variable .called as function expression
- EX.
const greet = function(name) {
    console.log("Hello " + name);
};
greet("Vishal");

# How it Works
  - create variable like const greet
  - The variable greet will hold a fufnction
  - assing function (function may be anonymoos or name function)
# Named function expression
  const greet = function getName(name) {
    console.log("Hello " + name);
};
  - The function is stored inside greet variable
  - call this function using variable name like greet('vishal')

# anonymous fucnation expression
const square = function(number) {
    return number * number;
};
console.log(square(5));

# When to Use Function Expressions\
- Function expressions are commonly used when:
1. Passing a function as a callback.
2. Assigning functions to variables.
3. Creating functions conditionally.
4. Working with event handlers.
5. Returning functions from other functions.
*/

// # 1 named function expression
const greet = function sayHello(name) {
  console.log("Hello, " + name);
};
greet("Vishal"); //  Works
sayHello("Vishal"); //  Error: sayHello is not defined outside

// # 2 Can Be Anonymous:
// You can define a function without a name:
const greet1 = function (name) {
  console.log("Hello, " + name + "!");
};
greet1("Vishal"); // Output: Hello, Vishal!

const square = function (num) {
  return num * num;
};
square(5);

// # example 3
// function expression is know as you have to create function and put it into variable
function sum(a, b = 20) {
  // this is called as anonymous function because this function does not have any name
  //if you defined the function expression so you need to return keyword
  return a + b;
}
const Total = sum(20);
//this is function expression called just normal function like
// This anonymous function is assigned to the variable or pass as a callback function.
console.log(Total);
/*
Q. what return keyword ?
- when js reaches a return statement the function will stop execution.
- once reaches to return keyword after that does not executing anything and function often compute a return value and the return value back to the caller
- i.e in function you have to used return keyword. it stop the execution of function and return value and that return value pass to the callers.
- The return keyword is used inside a function to send a value back to the place where the function was called.
- It also immediately stops the execution of the function.
- The return keyword is used to return a value from a function to its caller. Once a return statement is executed, the function terminates, and any code after it is not executed.
- ex.
function functionName() {
    return value;
}
# How it work ?
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);
- The function is called.
- Parameters receive the values.
- The return statement executes.
- stop the exeuctiion of the funcation and
- The value 30 is returned to the caller.
*/
function mul(a, b) {
  return a * b;
  //when javascript reach the return statement it stop the execution and return value and this return value pass to the caller
}
const result = mul(20, 30);
console.log("result");

/*
@ javascript function as Object
- function are Object:
 -Function in js are first-class-function because they have properties and method like other objects
- This means a function is not only executable code, but it also has its own properties and methods, just like any other object.
- Because functions can be assigned to variables, passed as arguments, returned from other functions, and also have properties and methods, they are called First-Class Objects (First-Class Functions).
- function properties include length and prototype

@ Why are Functions Objects?
- Since a function is an Object it can
  - have properties
  - Have Method
  - Be assigned to variable
  - Be passed as argument
  - Be return from other function.

@ function properties :
- javascript function have several built in properties
- The most comman one
  - length
  - prototype
  - name

1. Length Property :
  - The length property of a function indicate the number of named parameters in the function declaration.
  - it does not count
    - the rest parameters
    - and parameter with default value0
  - The number of excludes the rest parameter and only include parameter before the first one with a default value

2. prototype property :
  - Every normal function automatically has a prototype proepry
  - The prototype property is an object that is used when the function is used as constructor with the new Keyword.
  - it references the function itself when used with new. property reference are actual function object
  - Object created using new inherit form this prototype object
    function add(x,y){
    return x * y
    }
    console.log(add.prototype) // output{}

# calling a function :
  - A function can be called in 2 way
    1. Normal function call
    2. constructor call
  - function can be called normally or using new keyword to invoke them as constructor

  // ? normal function call
  function add(x,y){
  return x + y
  }
  const total = add(10,20);
  console.log(total)
  - The return value of the function is return directly

  // ? constructor call (using new)
  function person(name){
  this.name = name;
  }
  const obj = new person('vishal');
  console.log(obj)
  - when new is used javascript
    - create a new empty object
    - Link it to person.prototype.
    - Execute the function with this referring to the new object
    - return the new object (unless the function explicitly return another object)

//

# new.target property in js
  - new.target tells whether a function was called using the new keyword.
  - new.target property allow you to detect whether a function was called with new
    - Without new → new.target is undefined.
    - With new → new.target refers to the constructor function.
  function add(x,y){
  console.log(hi, new.target);
  return x + y
  }
  const result =  add(20,30);
  console.log(result) hi undefined

 const obj = new add (10,20); //output hi, [Function : add] or [class/function reference] depeding on the js engine.

 function person(name){
 if(!new.target){
  throw new Error('use new keyword)
 }
   this.name = name;
 }
 const p = new Person('vishal')
 // This prevent accidentally calling the constructor without new.

# Function name property:
- The name property of a function  return the name of the function
-  or hold the name of the function
- as it was declared it is read only
const fun1 =  function(){}
const object = {
fun2 : function (){}
}
console.log(fun1.name) // output fun1
console.log(object.fun2.name) output fun2

cosnt fun1 = function () {
console.log(fun1.name);
}
fun1


# Function Method
- Functions are objects so they also have built in methods
- some imp method
1. call()
2. apply()
3. bind()
5. toString()

function greet(){
console.log('Hello')
}
console.log(gteet.toString())


# interview
  - In JavaScript, functions are special objects. They can be executed like functions, but they also have properties (such as length, prototype, and name) and methods (such as call(), apply(), and bind()). Because of this, functions are considered first-class objects in JavaScript.
*/
/*
@ what is differences between function declaration and function expression

# function declaration
- syntax:
function greet() {
console.log("Hello");
}
- A Function Declaration is a function created using the function keyword with a function name.
- JavaScript stores the entire function before execution.in memory creation pahse
- function declaration are fully hoisted.
- Function Declarations are hoisted and available before the code runs.
- In function declarations, the function must have a name.

# function expression
syntax:
const greet = function() {
console.log("Hello");
};
- A Function Expression is a function assigned to a variable.
- in function Expression only variable are hoisted in memeory creation phase
- Function Expressions are only defined when the execution reaches that line.
- In function expressions, you can have: An anonymous function: or Or a named function:

| Feature                      | Function Declaration                            | Function Expression                              |
| ---------------------------- | ----------------------------------------------- | ------------------------------------------------ |
| **Syntax**                   | `function greet() {}`                           | `const greet = function() {}`                    |
| **Hoisting**                 |  Fully hoisted (name + body)                    |  Only variable is hoisted (not the function)     |
| **Called before definition** |    Yes                                          | ❌ No (TypeError or ReferenceError)             |
| **Function Name Required**   | ✅ Yes                                          | ❌ Optional (can be anonymous)                    |
| **Assigned to Variable**     | ❌ No                                           | ✅ Yes                                            |
| **Used Inside Block**        | ⚠️ May behave unexpectedly in older JS versions | ✅ Safe to use inside blocks                      |
| **Common Use Cases**         | Utility or top-level functions                   | Closures, callbacks, conditional functions       |
| **Readability**              | ✅ Easier to read and scan                       | ✅ Flexible, especially in functional programming |
| **Can be anonymous**         | ❌ No                                            | ✅ Yes                                            |

// #

| Function Declaration                 | Function Expression                            |
| ------------------------------------ | ---------------------------------------------- |
| Declared using `function` keyword    | Function assigned to a variable                |
| Has a function name                  | Can be anonymous or named                      |
| Fully hoisted                        | Not fully hoisted                              |
| Can call before declaration          | Cannot call before initialization              |
| Created during memory creation phase | Created during execution phase                 |
| Suitable for reusable functions      | Suitable for callbacks and closures            |
| Can be used with `new`               | Can be used with `new` (normal functions only) |
| Has `prototype`                      | Has `prototype` (normal functions only)        |

? Function Declaration: A named function declared using the function keyword. It is fully hoisted, so it can be called before its declaration.
? Function Expression: A function assigned to a variable. The variable is hoisted, but the function is created only when the assignment executes, so it cannot be called before initialization.

# Anonymous Function Expression
- The funcation has no name.
- const add = function(a.b){
return a + b
}


# key point Remember
1. Function are Object, Having Properties & method
2.length returns the number of declared parameters (excluding rest parameters and parameters after the first default parameter).
3. prototype is used when creating objects with new.
4. name returns the function's name.
5. new.target tells whether a function was called using the new keyword.
*/
