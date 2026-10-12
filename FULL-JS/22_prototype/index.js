/*
# prototype 
# What Is a Prototype in JavaScript?

1. In JavaScript, a prototype is an object
2. that other objects can inherit properties and methods from. i.e (A prototype is an object from which other objects inherit.)  
2. Every JavaScript object has a hidden internal property called [[Prototype]] (often accessed using __proto__ or through Object.getPrototypeOf()), which refers to another object — its prototype. (i.e It helps with method sharing and inheritance.)
4. It is an integral part of JavaScript's object-oriented programming model and facilitates inheritance.
5. A prototype is an object associated with every function and object in JavaScript. by default.
6. It enables inheritance, allowing one object to access properties and methods of another object.

# Why Prototypes Matter
1. JavaScript is prototype-based, not class-based (though ES6 class syntax is syntactic sugar over prototypes). This means:
2. You can share methods across instances using prototypes.
3. It enables inheritance between objects. and also JavaScript uses a prototype chain to resolve property and method lookups.


 # prototype in js covering 
    1. Function prototypes
    2. Prototype chain
    3. Object creation
    4. Inheritance using Object.create
    5.Modifying prototypes with __proto__ or Object.setPrototypeOf
    6. Built-in object prototypes
*/

// # function prototype 
function person(name){
    this.name = name
}
console.log(person.prototype)
// You can attach methods to this prototype:
person.prototype.sayHello = function () {
  console.log("Hello, I am " + this.name);
};


// # prototype chain 
// it is useFull for When accessing a property:
const p = new Person("Vishal");
p.sayHello(); // Looks for sayHello on p → Person.prototype → Object.prototype → null
// If it's not found on the object, JavaScript looks up the chain (called prototype chain) until it reaches null.


// # __proto__ vs prototype
//1. __proto__: Refers to the prototype of an instance object (used for lookup).
//2.  prototype: A property of constructor functions, used when creating new instances.


// # Prototypes of Built-in Objects
// Arrays → Array.prototype
// Dates → Date.prototype
// Functions → Function.prototype
// Objects → Object.prototype

// p1 (instance)
//    |
//    └──> Person.prototype
//              |
//              └──> Object.prototype
//                          |
//                          └──> null

// Constructor Function
function Person(name, age) {
  this.name = name;         // own property
  this.age = age;           // own property
}

// Add method to prototype
Person.prototype.sayHello = function () {
  console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

// Add another property to prototype
Person.prototype.species = "Human";

// Create an instance
const p1 = new Person("Vishal", 25);

// Own properties
console.log(p1.name);  // Vishal
console.log(p1.age);   // 25

// Inherited from prototype
p1.sayHello();               // Hi, I'm Vishal and I'm 25 years old.
console.log(p1.species);     // Human

// Check prototype link
console.log(p1.__proto__ === Person.prototype); // true

// Explore prototype chain
console.log(Object.getPrototypeOf(p1));         // Person.prototype
console.log(Object.getPrototypeOf(Person.prototype)); // Object.prototype
console.log(Object.getPrototypeOf(Object.prototype)); // null


// Own properties go directly on the object.
// Shared methods/properties go on the prototype.
// __proto__ links an object to its prototype.
// Prototype chain is used to find missing properties/methods.

// #  What is __proto__ in JavaScript?
// __proto__ is a reference to the prototype of the object — meaning the object it inherits from.


// Analogy
// Imagine you're a student (p1), and your teacher (Person.prototype) has notes (sayHello() method).

// You don’t have the notes, but you know how to find the teacher and ask.

// In JavaScript:

// p1.__proto__ → points to Person.prototype

// That’s how p1 gets access to sayHello().

// p1 ---> __proto__ ---> Person.prototype ---> __proto__ ---> Object.prototype ---> null
