/*
# call-apply-bind() method in js

1. all, apply and bind method are super important method in js those are available for all the js function which are used to set this keyword independent how the function is called.
2. also this apply, call bind method used to tie a function to an object and call a function at belongs to that object.
3. so call, apply, bind method used to explicit binding in js on call the call, apply , bind method (i.e n JavaScript, the call(), apply(), and bind() methods are used for explicit binding of the this keyword.)
4. These methods allow you to explicitly set the value of this when invoking or defining a function
5. In JavaScript, call(), apply(), and bind() are methods used to control the value of this when invoking a function.
6. These methods are particularly useful for borrowing methods from one object and using them with another object.
7. call(), apply(), and bind() methods are used to control the value of this within a function, or the execution context of the function

# How to done explicit binding in javascript ?
1.To done the explicit binding in javascript by using call() apply() and bind() method in javascript


1.JavaScript provides the call(), apply(), and bind() methods for setting the this context within a function.
2. These methods are especially useful when working with object-oriented code or handling different function contexts.
3.The bind(), call(), and apply() methods are fundamental concept in JavaScript for controlling function execution contexts.
4.call(), apply(), and bind() methods allow you to manipulate the this keyword in JavaScript functions. 

# def 
1. The call() and apply() methods are used to immediately invoke a function with a specified this value and arguments,
2. bind() method returns a new function with a specified this value that can be called later.

    1. These methods are essential for function borrowing, setting this context, and partially applying functions.
    2. These methods are powerful tools for controlling the behavior of functions in JavaScript and offer flexibility, code reusability, and can make your code easier to read and maintain.

*/

/*
# call() :

1. The call() method invokes a function with a specified this value and arguments provided individually.
2. function.call(thisArg, argument1, argument2,...)
3. so we can do function borrowing form other object and used it with data of some other object
4. in javascript each and every method has access to this special function which is call with 2 arguments first one is references this object and second one is arguments

*/
let person = {
  name: "vishal",
  age: 29,
};

function display(age) {
  console.log(this.name + " " + age); // return return undefined because display() function point to the window object
}
display(); // undefine
// so set explicitly this object to the function i,e allow you to manipulate the this keyword in JavaScript functions. (control the this context within a function)
display.call(person, 29);
// also in call method we have to pass the argument individually.

/*
# apply method()

1. The apply method invoke the function with specified this value and argument provided argument as an arry or like like object
2. function.apply(thisArg, [arguments])
3. in javascript each and every method has access to this special function which is apply with 2 arguments first one is references this object and second one is array of arguments
*/

function display(message, greet) {
  console.log(this.name + " " + message + " " + greet);
}
// once we have call it print undefined because is point to the window object so
display("hi", "good-morning");
// set this object context with display method used apply method and argument pass an an array
display.apply(person, ["hi", "how are you "]); // here return an argument as an array

/*
# bind() method
1.bind() method return new function with specified this value and optionally pre-filled arguments (i.e individually not as an array), so it does not invoke the function immediately but return new function which can be call later.
2. function.bind(thisArg[, arg1, arg2, ...])
3. bind() returns a new function, it doesn't call the original function.
4.Great for event handlers, callbacks, or preserving this context in asynchronous code.
5. bind method return new function which are reusable function 

*/

function display(message) {
  console.log(this.name + " " + this.age + " " + message);
}
display("welcome");
// set this context for this function as object
const newFun = display.bind(person);
console.log(newFun); // so here bind method return new function we we can call later
newFun("Thanks"); // here we have to pass argument optionally

// # output based question

/*
# Differences between call(), apply() and bind() method
    # call():   execute function immediately with specified this value and Accept argument individually

    # apply(): execute function immediately with specified this value and accept argument an an array or array like object 
    
    # bind(): return new function that can be call later Accept argument individually but does not invoked function immediately
 
*/
function sayHi(age) {
  console.log(`${this.name} is ${age} `);
}
console.log(sayHi.call(person, 28));
console.log(sayHi.bind(person, 29)); // it return function which we can call later (return following function)
// function sayHi(age){
//     console.log(`${this.name} is ${age} `)
// }

// # call with function inside object
const age = 10;
var person1 = {
  name: "vishal",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

var person2 = {
  age: 28,
};
console.log(person1.getAge.call(person2));

//# call printAnimals such that it print all animals in object

const animal = [
  { species: "lion", name: "king" },
  { species: "whale", name: "Queen" },
];

function PrintAnimal(i) {
  this.print = function () {
    console.log("#" + i + " " + this.name + ":" + this.species);
  };
  this.print();
}
// here we need to loop through the data and pass index as argument to printAnimal function
for (let i = 0; i < animal.length; i++) {
  PrintAnimal.call(animal[i], i);
}

//#  how to append an array to another array using apply method with push
let array = [1, 2, 3];
let array2 = [4, 5, 6, 7];
//  array.push(array2); // it create new array inside the array  like [1,2,3,array(4)]
//   console.log(array)
// by using apply method
array.push.apply(array, array2);
console.log(array);

// using apply method enhances the built in function like Math.max
let arr = [10, 20, 30, 40, 50];
console.log(Math.max(arr)); // it return NaN because Max method require individual element not array of element
//  like
console.log(Math.max(...arr));
// so using the apply method we have to enhance the built in method
console.log(Math.max.apply(null, arr));

//# bound function
function f() {
  console.log(this); // context is hard fix like window object
}
let user = {
  g: f.bind(null),
};
user.g();
//  return to the window object

// # bind chaining
function f() {
  console.log(this.name);
}
f = f.bind({ name: "vishal" }).bind({ name: "akshu" });

f(); // return vishal
// once function is bind to the perticular object it always bound to that perticular object  so bind() chaining does not exists

// # fix the line 22 to make code properly

function checkPassword(success, failed) {
  let password = prompt("password?", "");
  if (password == "vishal") success();
  else failed();
}

let us = {
  name: "vishal",

  loginSuccessFul() {
    console.log(`${this.name} logged in`);
  },
  loginFailed() {
    console.log(`${this.name} failed to login`);
  },
};
// checkPassword(us.loginSuccessFul, us.loginFailed)
checkPassword(us.loginSuccessFul.bind(us), us.loginFailed.bind(us));

// # partial application for login function
function checkPassword1(ok, failed) {
  let password = prompt("password?", "");
  if (password == "vishal") ok();
  else failed();

  }

  let use = {
    name: "vishal",
    login(result) {
      console.log(this.name + (result ? "login successFul" : "login failed"));
    },
  };


checkPassword1(use.login.bind(use,true ), use.login.bind(use, false))

/*
# how to do call(), apply() and bind() method with arrow function:
1. we can not manipulate the the context of the arrow function  with the help of call() apply() and bind() method
2. because arrow function does not have its own  this context it refers to the widow object

*/

let age1 = 10;
var person22 ={
    name: 'vishu',
    age:29,
    getArrow : () => console.log(this.age),
    getAge: function(){
        console.log(this.age)
        console.log('.....',this)
    }
}
var person222 = {age: 24}
person22.getAge();
person22.getArrow.call(person222);  
person22.getAge.call(person222)

