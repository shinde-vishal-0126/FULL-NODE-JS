/*
#  this
1. this is a special keyword that refers to the context in which a function is executed. Its value depends on how and where the function is called.

2. this keyword in such senario will point to the object using function was an invoked  (simply object left sind the dot )

3. this used to refer the current context object
* in js 2 type of binding 
    1. explicit binding 
        : explicit binding done with call, apply, and bind() method 
    2. implicit binding 
        : implicit binding when you invoke an function in an object using .(dot) notation this keyword in such senario point to the object which function is invoked.
      

1.Note: this is not a variable. it is a keyword and you can not change this to any object  
2. This object is that it contains the current context in which a function is executed.
(this is nothing but references to something like an object )
3.This object can have different values depending on where it is placed
4. this keyword refer to different object depending no how it is used ?
*/

// in an object method : this refer to the object
const obj = {
  myAge: 27,
  myName: function () {
    console.log(
      "in object method this refer to the object :",
      this,
      this.myAge
    );
  },
};
obj.myName();

// # in this example the greet method is defined using the method shortHand syntax it is more concise way to defined method in object literals
const obj4 = {
  name: "akshu",
  greet() {
    console.log("shortHand", this);
  },
};
obj4.greet();

// # alone : this refer to the Global object
console.log(this);
// in node environment this refers to the empty object
// but in Browser it refers to the window object

// #3 in a function : this refer to the Global object
function MyName() {
  console.log(this); // in function also refer to the Global object
}
MyName();

// example 2
let name1 = "vishal shinde"; // it return undefined because you have to defined with let so let variable are not attach to the window object
function display() {
  console.log("this.name", this.name1); // return the global object variable where we have to defined
}
display();

// 4 in a function : in strict mode : this is undefined
function strict() {
  "use strict";
  console.log("in strict mode this", this); // return undefined
}
strict();
/*
# fat arrow function with this keyword ?
1.This function not work with the arrow function
2. In traditional functions (function keyword): The value of this is determined by how the function is called, i.e., the calling context (e.g., an object or event handler).
3.In arrow functions: Arrow functions do not bind their own this. 
4.Arrow functions do not have their own this.
this is inherited from the parent scope (lexical scope).
Instead, they inherit this from the surrounding lexical context (the scope in which they
# in arrow function the this value are comes form its parent function 


*/
const obj1 = {
  name: "Alice",
  greet: () => {
    console.log("using arrow function", this.name); // 'this' refers to the surrounding scope, not 'obj' so it return undefined because in this case arrow function refer to it surrounding scope like window object but in object there in no name property so it return undefined
  },
};
obj1.greet(); // Output: undefined (or window object in a browser)
// the arrow function inherits this from its lexical scope, which is the global scope in this case (or outer function if there is one). Since there is no name property in the global scope, this.name is undefined.

function chai() {
  let username = "vishal";
  console.log("this inside the function", this);
  // this object are work with object (this object not work inside the function) // this return the undefined
}
chai();

const chai1 = function () {
  let username = "vishal";
  console.log("this inside the function", this.username); //  it return undefined
};
chai1();


// here this is Global context (i.e refer to the window object )
this.a = 5;
console.log(a);
// console.log(this) // return the window object .

function greeting() {
  console.log(this.a);
}
greeting();

// ex.
let user = {
  name: "vishal",
  age: 24,
  // this is normal function refer to the current context so return the vishal and 24
  getData() {
    console.log(this.name, this.age);
    console.log(this); // this is refer to its parent object not Global object
  },
  getData1: () => {
    console.log(this.name, this.age); // here arrow function return undefined because it refer to directly window object and window object does not have the name and age
    // arrow function only refer to its parent function if does not have parent function it refer to the global i.e widow object
    console.log(this);
  },
  childObj: {
    newName: "shinde vishal",
    // so this normal function refer to the childOje not the user object
    getData2() {
      console.log(this.newName, this.name);
      console.log("this", this);
    },
  },
};
user.getData();
user.getData1();
user.childObj.getData2();

// Arrow functions do not have their own this.
// Instead, they use the value of this from the surrounding lexical scope.
// If there is no surrounding context, this will refer to the global object (window).
// so this normal function are pointing to the immediate parent function

let user1 = {
  name: "vishal",
  age: 28,
  hi() {
    console.log(this.name, this.age);
    console.log(this);
  },
  //if you defined arrow function it return undefined because it refer to the window object
  h1: () => {
    console.log(this); // refer to window object because does not have its this binding it refer to surrounding lexical scop
    console.log(this.name, this.age);
  },
  get1() {
    this.newName = "akshu";
    const h2 = () => {
      console.log(this);
      console.log("hello word ", this.newName, this.name); // However, the newName: 'akshu'; statement does nothing because it’s a standalone statement and not part of the user1 object.
    };
    h2();
  },
};
user1.hi();
user1.h1();
user1.get1();

let per = {
  name: "vishal",
  age: 30,
  getData() {
    // normal function pointing to the per
    console.log("getData", this);
    // const display = () => {
    function display() {
      console.log("display", this.name);
      const getDataAll = () => {
        console.log("getDataAll", this);
      };
      getDataAll();
    }
    display.call(per);
  },
};
per.getData();

// # this keyword in class

class userData {
  constructor(n) {
    this.name = n;
  }

  getInformation() {
    console.log(this.name);
  }
}
const user5 = new userData("vishal");
console.log(user5);
user5.getInformation();

const person = {
  firstName: "vishal",
  getName() {
    let firstName = "data";

    return this.firstName;
  },
};
console.log("person.getName();", person.getName());

person.getName();

// # what is result of accessing it ref ? and why
// function makeUser() {
//   return {
//     hi: "john",
//     ref: this,
//   };
// }
// let res = makeUser();
// console.log(res.ref.hi);

// # then how to fix above example to print nam
function makeUser() {
  return {
    hi: "john",
    // ref1: this, //instead of that it make an function which refer to the this object
    ref1(){
        return this
    }
  };
}
let res1 = makeUser();
console.log( 'ref()' , res1.ref1().hi);


// # what is output in the following code 
let user6 = {
    nav : 'vishal',
    loggedMessage (){
        console.log(this.nav); // it return undefined because when loggedMessage function pass inside the setTimeout as callback function which is call after one seconde 
        
        // when the call the function after one second it no longer user6 object are available  so it pint to the window object where nav variable is not preset so return undefined
    }
}
setTimeout(user6.loggedMessage, 100)
// # how we will go and fix this 

setTimeout(function(){
    user6.loggedMessage()
},1000)


// # what will be the output 
var length = 4 
function callback(){
    console.log(this.length)
}
const object ={
length: 5,
method(fn){
    fn();
}
}
object.method(callback)

// # modified this question like we have to pass more arguments and what is output
var length = 4 
function callback(){
    console.log(this.length)
}
const object1 ={
length: 5,
method(){
    console.log(arguments);
    arguments[0]() ;
}
}
object1.method(callback,3, 4)

// # implement calculation in following way

const calc = {
    total :0,
    add (a){
        this.total += a;
        return this // here we have return this because i will need to return whole object here and only then i am able to access more of the function defined in object.
    },
    multiply(b){
        this.total *= b;
        return this;
    },
    subtract(c){
        this.total -= c;
        return this;
   }
    
}

const output = calc.add(10).multiply(5).subtract(10).add(10)
console.log(output.total) 
