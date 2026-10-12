/*
 # arrow function :
 - An arrow function is a shorter syntax for writing function expressions introduced in ES6.
 - It uses the => syntax, does not have its own this, arguments, or prototype, supports implicit return for single expressions, and cannot be used as a constructor with the new keyword.
  - arrow function is type of function introduced in ES6 (ecmascript2015) that provide a shorter, clean syntax  and  more concise way to defined function in js.
  - it used (fat arrow) => syntax it especially useful for creating small, inline function. (i.e arrow function is useful for writing small, one time use function are commonly used in callbacks and array method.)
  - it used the arrow (=> syntax and commanly used for )
    - small function
    - callback function
    - array Method
    - Situation where you want to inherit this from surrounding sopc
    - arrow function are always function expression  they are not function declaration.
*/

// normal function
function sum(a, b) {
  return a + b
}
sum(4, 5)

// so this function are converted into the arrow function


const sum = (a, b) => {
  console.log(a + b);
  return a + b;
};
sum(10, 20);

// ? if function body has only one expression
// - if the function body contain only one expression you may ommit {}  and return
// # 2.  if function body consist of a single expression the braces {} and the return keyword are omitted.
const sum1 = (a, b) => console.log(a + b);
sum1();

// # 3.  if there is only one parameter the parentheses () around the parameter list can be omitted.
// or one parameter (it there is only one parameter parentheses are optioanl)
let add = (a) => `the value of a ${a}`;
console.log(add());

// # 4 if there is not parameter use an empty set of parentheses
const sum2 = () => `if no parameter add empty set of parenthesis`;
console.log(sum2);

//@ multiple statemetn (if the function contains multiple statement braces are required)
const multiply = (a, b) => {
  console.log('multiply');
  return a * b
}
/*
# key characteristics of arrow function
    1: short syntax:
        : arrow function syntax are cleaner and shorter syntax as compared to regular function.
        function square(x){
      return x*x;
        }
      2: implicit return:
        : for single expression function the return statement implicit For a single expression, return is automatic.
          const double = n => n * 2;
    3. Lexical this
        - This is the most important feature.
        - Arrow functions do not create their own this. Instead, they inherit this from the surrounding (lexical) scope.
        const person = {
      name: "Vishal",

      normalFunction() {
          console.log(this.name);
      },

      arrowFunction: () => {
          console.log(this.name);
      }
  };

    person.normalFunction();
    person.arrowFunction();
    3: no this binding :
        : arrow function do not have their own this they inherit this from their enclosing context(lexical scope)
    4: arrow function can not used as constructor : arrow function can not be used with new
      Arrow functions cannot be used with new.
        const Person = (name)=>{
    this.name = name;
};new Person("Vishal");


  TypeError:
Person is not a constructor
  Arrow functions don't have
  prototype
constructor behavior
their own this

    5: no argument object : arrow function does not have their own argument object
      No Own arguments: Arrow functions don't have their own arguments.
      - or, in some environments, it may refer to an outer function's arguments if one exists. The key point is that arrow functions do not create their own arguments object.
        const test = () => {
        console.log(arguments);
        - nstead, use rest parameters.
        const test = (...args) => {
          console.log(args);
      };

      test(1,2,3);
};

test(1,2,3);


6. No prototype
*/

let sayHi = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
  console.log("hi");
};
sayHi(1, 2, 3);

function normalFunction() {
  console.log(arguments);
}
normalFunction(1, 2, 3);

/*
# what is differences between arrow function and normal function

# 1. arrow function :
    1: arrow function syntax , making them sorter and cleaner(They are inherently anonymous function)

    2. this binding in arrow function are lexical : (it inherit this form the surrounding scope where the arrow function is defined)

    3. Arrow function does not have their own arguments objects.(used rest parameter ...rest) to access the arguments.

    4. single line expression they return value implicitly without needing the return keyword.

    5. arrow function can not used with the new keyword and do not have a prototype property

    6. suitable for callback , one line expression, and scenarios where this inheritance is needed.


# 2 normal function
    1.use the function keyword making them more verbose than the arrow function (they can be either name function or anonymous function)

    2: this binding are dynamic : it depends how the function is called (as a method , globally or with call, apply and bind method)

    3. normal function have an arguments object that contain all pass arguments.

    4. explicit return : for all cases you must use the return keyword to return a value

    5. normal function can be used with the new keyword to create new object

    6. suitable for methods, object defination, and scenario where dynamic this binding is required.
| Arrow Function                                        | Normal Function                                           |
| ----------------------------------------------------- | --------------------------------------------------------- |
| Introduced in ES6                                     | Available since the beginning of JavaScript               |
| Shorter syntax                                        | More verbose syntax                                       |
| Always a function expression                          | Can be a function declaration or a function expression    |
| Does not have its own `this`                          | Has its own `this` based on how it is called              |
| Does not have its own `arguments`                     | Has its own `arguments` object                            |
| Supports implicit return for single expressions       | Requires `return` to return a value                       |
| Cannot be used with `new`                             | Can be used as a constructor                              |
| Has no `prototype`                                    | Has a `prototype` property                                |
| Best for callbacks, array methods, and lexical `this` | Best for object methods, constructors, and dynamic `this` |




*/

// example of normal function

// normal function used the function keyword
function square() {
  // normal function having the arguments object return all pass arguments.
  console.log(arguments);

  // explicit return (you must used return keyword )
  return num * num;
}
square(40);

// # example of arrow function

// syntax of arrow function it does not have function name keyword as well as function name it represent with the help of flat arrow
const square = (num) => {
  return num * num;
};

// 2 - implicit return keyword
const abc = (num) => num + num;

// 3. no argument object :
const ab = (num) => {
  console.log(arguments); // not having argument object used spread operator to get the argument
};

// this binding
// normal function having its own this binding

let user = {
  name: "vishal shinde",
  // arrow function refer to its lexical scope because it does not have own this
  rc1: () => {
    console.log(this.name);
  },

  // normal function having own this dynamic binding
  rc2() {
    console.log(this.name);
  },
};
user.rc1();
user.rc2();


// 2. Arrow Function (❌ Cannot be used with new)
const PersonArrow = (name, age) => {
  this.name = name;
  this.age = age;
};

const user2 = new PersonArrow("Sara", 30); // ❌ Error: PersonArrow is not a constructor


//  Normal Function (Constructor Function)
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hi, I’m ${this.name}, ${this.age} years old.`);
  };
}

const user1 = new Person("Vishal", 25);
user1.sayHello(); // Output: Hi, I’m Vishal, 25 years old.



/*
 # Why Arrow functions cannot be used as constructors because:
  1:They do not have their own this, arguments, or prototype super
new.target.
  2:They inherit this from their surrounding (lexical) scope.
  3:So you cannot use new with an arrow function.

*/
