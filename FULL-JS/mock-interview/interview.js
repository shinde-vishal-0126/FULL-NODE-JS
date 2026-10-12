// # 1. return only name of the students in capitalize

const students = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 20,
      grade: "A",
      subjects: ["Math", "Science", "English"]
    },
    {
      id: 2,
      name: "Bob Smith",
      age: 22,
      grade: "B",
      subjects: ["History", "Geography", "Economics"]
    },
    {
      id: 3,
      name: "Charlie Brown",
      age: 21,
      grade: "A",
      subjects: ["Physics", "Chemistry", "Biology"]
    },
    {
      id: 4,
      name: "Diana Green",
      age: 19,
      grade: "C",
      subjects: ["Art", "Music", "Drama"]
    },
    {
      id: 5,
      name: "Ethan White",
      age: 23,
      grade: "B",
      subjects: ["Computer Science", "Math", "English"]
    }
  ];
  

  const studentsName = students.map((data)=>{
    return data.name.toUpperCase();
  })
  console.log(studentsName)


// # 2. return only details those who has age more then 21

const result =students.filter((data)=>{
    return data.age > 21;
})
console.log(result)


// # 3 return those age is less 20 and id is grater then 3
const data = students.filter((student)=>{
    return student.id > 3 && student.age < 20;
})
console.log(data)



//# 4 find the factorial of the n number in recursion 

let n = 5 
function findFactorial(n){
    if(n === 0 ) return 1
return n * findFactorial(n -1)
}
console.log(findFactorial(n))





// # 5 reverse a string in javascript 
// 1
let str = 'vishal'
let reverseString = str.split("").reverse().join("");
console.log(reverseString)

// 2 
function reverseString1(str) {
    if (str === '') {
        return '';
    } else {
// The recursion unfolds as follows:
// "ello" + "h"
// "llo" + "e"
// "lo" + "l"
// "o" + "l"
// "" + "o"
        return reverseString1(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverseString1("hello")); // Output: "olleh"



// # what is function express in javascript 
// function express in javascript where you have to defined function assign into a variable it may be a name function or anonymous function 
// when a function stored inside a variable is called as function expression 

let functionExpress = function sum(a , b){
    return a + b;
}
console.log(functionExpress(10,20))



//# what is spread operator 
// spread operator allow you to expand or unpack element of an array, object or iterable into individual elements.
let a = [1,2,3,4]
let b = [5,6,7,4]
let finalArray = [a, b];
console.log(finalArray);
let finalArray1 = [...a, ...b];
console.log(finalArray1)




// # what is rest parameter
// collect element into an array
// rest parameter allow you to collect multiple argument or remaining element into a single array 
// primarily used in function definition to handle an indefinite number of arguments.
function sum1(...number){
    return number;
}
console.log(sum1(a,b));



// # what is concat method in array
// (concat combine tow or more array )
let arr = [1,2,3,4]
let arr2 = [4,5,6,7]
let margeArray = arr.concat(arr2);
console.log(margeArray);
console.log(arr);
// concat method create new array (does not modified the original array)


// # what is slice method in array 
// return the copy of section of an array form both start to end 
//  so -ve  negative index can be used to indicate an offset from the end of the array 
// it exclude the last element (it means work with end -1 or n -1 )
const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Watermelon", "Strawberry", "Kiwi", "Papaya"];
let res = fruits.slice(2, 4)
console.log(res);
let res1 = fruits.slice(-1);
console.log(res1);


// # what is fill method in javascript array 
//  array.fill('value to replace', start position, end position)
// used to fill all or part of an array with a static value.
// . It modifies the original array and returns the modified array.
// array.fill(value, start, end)
// Returns the modified array after filling.
// it exclude the last element (end -1 or n-1 )
// Negative indices count from the end of the array.
const dummy = [2,5,1,6]
let re = dummy.fill(0);
console.log(re);

let arre = [1, 2, 3, 4, 5];
arr.fill(0, 1, 4); 
console.log(arr); 
// Output: [1, 0, 0, 0, 5]

// Use Cases
//  Initialize an array with default values.
//  Reset array values.
//  Create test data.
//  Fill a portion of an array with a static value.


//#  sort() method in javascript 
// By default, the sort() method converts elements into strings and sorts them based on Unicode code points
// This can lead to unexpected results when sorting numbers.
// If a compareFunction is provided:

// The function should return:
// Negative value if a should come before b
// Positive value if a should come after b
// Zero if a and b are considered equal
let arr5 = [1,2,3,4,67,8,9,0]
const sortResult = arr5.sort((a,b)=>{
  return a -b
})
console.log(sortResult)


// #  how to access the character form the string 
let strrr = 'hi my name is vishal'
console.log(strrr[3])
// also used charAt()
console.log(strrr.charAt(10))


// # how to iterating the string 
let newStr = 'hi my name is vishal shinde'
for(let i=0;i< newStr.length;i++){
  console.log(newStr[i])
}


// # trim() method in string 
// remove the white spaces form the both end 
let newStr1 = '   vishal shinde    ';
console.log(newStr1.trim());


// # how to deep clone the object 
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  },
  hobbies: ['reading', 'traveling', 'swimming'],
  education: {
    degree: 'Bachelor of Science',
    university: {
      name: 'Harvard University',
      location: {
        city: 'Cambridge',
        state: 'Massachusetts'
      }
    }
  }
};

console.log(person);

const deepCloneObject = structuredClone(person);
console.log(deepCloneObject);

//#  what is structureClone method in javascript 
// The structuredClone() method in JavaScript is used to create a deep clone of a given object.
//  It creates a new object that is structurally identical to the original object, but completely independent from it — meaning that changes to the cloned object do not affect the original object.
// structuredClone() can also clone arrays
// Cloning RegExp
// Cloning Date
// Cloning Set
// Cloning Map
// return value of the structuredClone() method Returns a deep copy of the provided value.


// # what is indexof method  
// return the index of first occurrences of the given element

// # what is last indexOf() method 
// return index of last occurrences of the given element


//# boolean function startWith() and endWith();
// startWith() check the given string art start with the given substring or not
// endWith() check the given string end with given substring or not


// You can define a starting position for the search:
const str111 = 'JavaScript is powerful';

console.log(str111.startsWith('Script', 4)); // true
console.log(str111.startsWith('Java', 4)); // false

const st11r = 'JavaScript is powerful';

console.log(str11.endsWith('is', 13)); // true (considering the substring 'JavaScript is')
console.log(str11.endsWith('Java', 13)); // false


// # substring  method in javascript 
// extract the portion of the string between specified two indices and return new substring.
// substring(start index, end index )
// in substring startIndex is grater then end index then swap the value
let sub = 'javascript';
let r = sub.substring(4,9);
console.log(r)


//# how to find the ASCII value of the give character
// used charCodeAt('s') method
let sub2 = 'javascript';
let r2 = sub2.charCodeAt(0); // 106
console.log(r2)

// # how to find the sky value of the character
//  used fromCharCode(65)
console.log(String.fromCharCode(65)); // 65


// # how to compare two string
// The localeCompare() method in JavaScript is used to compare two strings according to the locale-specific ordering
// t allows you to perform string comparison that respects the alphabetical order of different languages.
// string1.localeCompare(string2, locales, options)
// Return Value
// Returns -1 → If string1 is less than string2
// Returns 0 → If string1 is equal to string2
// Returns 1 → If string1 is greater than string2
let s1 = 'vishal'
let s2 = 'shinde'
console.log(s1.localeCompare(s2));

// Use the sensitivity option to ignore case:
console.log('apple'.localeCompare('Apple', undefined, { sensitivity: 'base' })); // 0 (case ignored)


// # include method in javascript 
// The includes() method in JavaScript is used to check if a string or array contains a specified value or not .
let stt = 'vishal shinde'
let rrr = stt.includes('shinde')
console.log(rrr)

// # split() and join() method in javascript
// The join() method is used to convert an array into a string by joining its elements with a specified separator.
// The split() method is used to split a string into an array based on a specified separator.

// #  If the array is empty, join() returns an empty string:
// # If an element is null or undefined, it is treated as an empty string:


// # what is some method in javascript 
// The some() method in JavaScript is used to test whether at least one element in an array satisfies a given condition. It returns a Boolean (true or false).
// array.some(callback(element, index, array), thisArg)
const users = [
  { name: 'John', role: 'user' },
  { name: 'Jane', role: 'admin' },
  { name: 'Bob', role: 'user' }
];

const hasAdmin = users.some(user => user.role === 'admin');

console.log(hasAdmin); // true (because Jane is an admin)


// # what is find method in javascript 
// The find() method in JavaScript is used to return the first element in an array that satisfies a given condition. If no elements match the condition, it returns undefined.
// array.find(callback(element, index, array), thisArg)
const numbers = [1, 3, 5, 7, 8, 10];

const firstEven = numbers.find(num => num % 2 === 0);

console.log(firstEven); // 8


// # what every method in javascript 
// The every() method in JavaScript tests whether all elements in an array satisfy a given condition. It returns a Boolean (true or false)
// array.every(callback(element, index, array), thisArg)
const numberss = [2, 4, 6, 8];

const isAllEven = numberss.every(num => num % 2 === 0);

console.log(isAllEven); // true


// # splice method in javascript  
// The splice() method in JavaScript is used to modify an array by adding, removing, or replacing elements in place. It directly modifies the original array and returns an array of the deleted elements
// array.splice(start, deleteCount, item1, item2, ..., itemN)
const fruitss = ['apple', 'banana', 'cherry', 'orange'];

const removed = fruitss.splice(1, 2);

console.log(fruits); // ['apple', 'orange']
console.log(removed); // ['banana', 'cherry']


// # findindex()
// The findIndex() method in JavaScript returns the index of the first element in an array that satisfies a given condition. 
// If no elements satisfy the condition, it returns -1.



// ? javascript is single thread but how it achieves synchronous behave
//  it achieve behavior using event loop webApi, and promise, callback and async-await
//  JavaScript is Single-Threaded
// JavaScript runs on a single thread, meaning it executes one task at a time in a sequential manner. This is called the "Call Stack" model.

// How JavaScript Handles Asynchronous Tasks?
// JavaScript achieves asynchronous execution using:
// Web APIs (like setTimeout, fetch, DOM events)
// Callback Queue & Event Loop
// Promises & Async/Await


// Why does this happen?
console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);

console.log("End");
// setTimeout is handled by the Web API (not JavaScript itself).
// JavaScript does not wait for it to finish.
// After 2 seconds, the callback function moves to the Callback Queue.
// The Event Loop pushes it to the Call Stack once it's free.

// Event Loop & Callback Queue (How It Works)
// JavaScript executes synchronous code first (Call Stack).
// Asynchronous tasks (like setTimeout) are sent to the Web APIs.
// Once the delay is over, the Web API moves the task to the Callback Queue.
// The Event Loop checks if the Call Stack is empty and then moves the task from the Callback Queue to the Call Stack.
// The task gets executed.

// Asynchronous Execution Using Promises
// Promise allows non-blocking execution and better handling of async operations.

// Summary: How JavaScript Handles Asynchronous Tasks
// ✔ JavaScript is single-threaded, but achieves async behavior using:
// Web APIs (setTimeout, fetch, event listeners, etc.)
// Callback Queue & Event Loop
// Microtask Queue (for Promises & Async/Await)
// ✔ The Event Loop ensures async tasks are executed only when the Call Stack is empty.
// ✔ Promises & Async/Await help write better non-blocking code.

//#  event loop settimeout promise  is part of javascript of not 
// No, the Event Loop is not part of JavaScript itself.
// It is part of the JavaScript runtime environment, which is provided by browsers (like Chrome, Firefox) or Node.js.
// avaScript Alone is Single-Threaded
// JavaScript itself only has the Call Stack to execute code synchronously.
// It does not have timers (setTimeout), fetch(), or an event loop.


//  # Who Provides the Event Loop?
// Browsers (like Chrome, Firefox) have a JavaScript Engine (e.g., V8 for Chrome) along with a runtime environment that includes:
// Call Stack (executes JavaScript code)
// Web APIs (setTimeout, fetch, DOM events)
// Callback Queue & Microtask Queue
// Event Loop
// Node.js also provides an Event Loop, but it is built on libuv (a C++ library) instead of Web APIs


//#  How the Event Loop Works
// The Event Loop manages asynchronous operations and ensures JavaScript runs efficiently.
//# Executes synchronous code (Call Stack).
// Sends async tasks (like setTimeout, fetch) to the Web APIs.
// Once the async task completes, it moves the callback to the Callback Queue or Microtask Queue.
// The Event Loop checks if the Call Stack is empty and moves tasks from the queue back to the Call Stack for execution.

//#  Event Loop is not part of JavaScript but is provided by the browser or Node.js runtime.
// ✔ It helps manage asynchronous operations by handling callback queues & microtasks.
// ✔ Microtasks (Promises) run before Callback Queue (setTimeout, I/O tasks, etc.).


// 1. how to create pending promise using without new Promise constructor (it is possible to create using async await )
//  In JavaScript, an async function always returns a Promise. Let's explore how to create fulfilled, rejected, and pending states using async/await without explicitly using new Promise()

async function resolvePromise() {
  return "promise resolve";
}
console.log(resolvePromise().then((res) => console.log(res)));

async function rejectPromise() {
  throw new Error("rejected value");
}
console.log(rejectPromise().catch((error) => console.error(error)));

async function PendingPromise() {
  return new Promise(() => {});
}
console.log(PendingPromise());

// 2. what is type of class
class Home {
  constructor(name) {
    this.name = name;
  }
  getData() {
    return this.name;
  }
}
let p = new Home("vishal");
console.log(p.getData());
console.log(typeof Home); // function

// 3 what is type of function
function myFunction() {}
console.log("function type ", typeof myFunction);

// 4. what is type or array
let arr4 = [];
console.log(typeof arr4); // object

/*
# what is promise and its state 
promise is object or placeholder where we have to store the result of asynchronous operation like it is failure or success 
it having 3 state like 
1. pending 
2. filefield
3. rejected.
*/


// mock interview 1: // 21/01/2025

//? find the output of the following code.

let a = 12;
// let a ='vishal' // when you deal with string return NaN
// let a = false; // when you work with boolean it return true for 1 and 0 for false
console.log(a * 12); 
// exponent: The power to which the base is raised.
console.log(a ** 12);



// ? 2.
// this concept is know as Global variable leak
// to solve this used strict mode
function example() {
  // "use strict"
  salary = 50000;
  console.log(salary);
}
example(); // 50000



//? 3.
function test() {
  // which is refer to the property of the function itself
  console.log(test.abc); // undefined
  // 600
}
test();
// assign property to the function (javascript function are object so you can attached properties to them)
test.abc = 400;
test.abc = 600;
// In JavaScript, functions are first-class objects, meaning they can have properties like any other object.
// test.abc is a custom property of the function test, not a local variable.
// Since test.abc is modified between calls, its value changes accordingly.
test();




// ? tell me the output
console.log({} == {}); // false
// console.log({} === {}) // false

// Each time you use {}, it creates a new, unique object in memory.
// == checks for equality with type conversion (comparing objects, it checks if they reference the same object in memory.)
// Since {} creates a new object each time, two different {} objects do not reference the same object in memory.
// === checks for strict equality, meaning both the type and value must be the same.
// Like ==, it checks if the two objects reference the same object in memory.

// - explanation :
// Value vs. Reference:
// - In JavaScript, primitive values (like numbers, strings, etc.) are compared by their value.
// - Objects (including arrays and functions) are compared by their reference (memory location), not by their content or structure.

// * Loose Equality (==):
// == performs type coercion for primitive values. For example, 2 == '2' would be true because the string '2' is coerced to the number 2.
// However, for objects, == still checks if they reference the same object in memory.
// Even if two objects have the same structure or properties, if they are not the exact same object (i.e., the same reference), == will return false.
//  * Strict Equality (===):
// === checks both type and reference without type coercion.
// For objects, === checks if both operands reference the exact same object in memory.

// =============================================================================================================================================

// ? what is output of this code
const person = {
  name: "vishal",
};

let b = {
  // create the copy of the person object it does create references with person create using pass by value
  ...person,
};
b.name = "akshu";
console.log(person.name); // vishal

// =============================================================================================================================================

// ? what the output
// here === check value or content and its type also
let bb = 10;
let c = new Number(10); // 10
console.log(typeof c); // object
// c return the Number {10} as object so it compare with any other is return false
console.log(c);
let d = 10;

console.log(bb === c); // false
console.log(bb === d); // true

// =============================================================================================================================================


// ? what is output
function data(record) {
  // Attempt to compare record with a new object {age: 28} using loose equality (==)
  // This will not work as expected because objects are compared by reference, not by value.
  // Even though both objects have the same properties and values, they are different instances in memory.
  if (record == { age: 28 }) {
    console.log("you are adult");
  }
  // Attempt to compare record with a new object {age: 28} using strict equality (===)
  // This will also fail because the two objects are different instances in memory.
  else if (record === { age: 28 }) {
    console.log("you are still in adult");
  }
  // If neither condition above is true, this block will execute.
  // This happens because both equality checks above compare object references, not the actual content.
  else {
    console.log("no record");
  }
}

// =============================================================================================================================================


// ? what is output
console.log(+true);
// value of true is one and using + it converted into number
// So, +true converts true to 1, and the result of the console.log will be 1.
console.log(!"vishal");
// The string 'vishal' is a non-empty string, which is considered a "truthy" value in JavaScript.
// The ! operator is a logical NOT, which inverts the truthy value.
// Since 'vishal' is truthy, ! will convert it to false.
// Output: false

// =============================================================================================================================================


//? what is output

a = {
  //   "[object Object]": 600
};

b = {
  key: b,
  // "[object Object]": 700
};

var c = {
  key: c,
};

//  Here, we try to set the key b in the object a and assign it the value 600
// However, when an object (b in this case) is used as a key in an object (a), JavaScript automatically converts the object to a string.
//  JavaScript calls the toString method on b to convert it to a string. The default toString method for objects returns the string [object Object].
// a['[object Object]'] = 600;

a[b] = 600;
// we try to set the key c in the object b and assign it the value 700.
//  since c is an object, it is converted to a string [object Object] before being used as a key.
//b['[object Object]'] = 700;

b[c] = 700;

// c is an object, and when used as a key, it gets converted to the string [object Object], just like in the previous steps.
// a['[object Object]']
//  a['[object Object]'] was assigned the value 600.

console.log(a[c]);

// try to access a[b]. Since b is an object, it will also be converted to the string [object Object] before being used as a key.
// a['[object Object]']
console.log(a[b]); // 600

/* Now, we try to access b[b]. Here, b is an object, and when used as a key, it will be converted to the string [object Object].
b['[object Object]']
From the previous step, we know that the value of b['[object Object]'] was set to 700.
console.log(b[b]); //
console.log(b[c]); // 700 */

// =============================================================================================================================================


// ? in following example i want the output 
let str = 'abcdef';
let str2 = '123';
// a1b2c3def

// let str = 'abc'
// let str2 = '123456'
// a1b2c3456
function concat(str,str2){
    let result = ''
   
    let strLength = str.length;
    let str2Length = str2.length;

    let i =0
    while(i < strLength && i < str2Length){
        result = result + str[i];
        result = result + str2[i];
        i++
    }
    // append the remaining character form the str array 
    while(i < strLength ){
        result = result + str[i]
        i++
    }
 // append the remaining character form the str2 array
    while(i < str2Length){
        result = result + str2[i]
        i++
    }
    console.log(result)
}
concat(str, str2)


// - using built in method 

function combineString(str,str2){
    let result = ''
    let minLength = Math.min(str.length , str2.length);
    console.log('minLength',minLength);

    for(let i =0 ;i< minLength;i++){
        result = result + str[i] + str2[i]
        console.log(result)
    }

    if(str.length > minLength){
        result =result + str.slice(minLength)
    }else if(str2.length > minLength){
        result = result + str2.slice(minLength)
    }
    return result 
}
console.log(combineString(str,str2))

// =============================================================================================================================================

// ? what is type of null data type
console.log(typeof null); // Object

// =============================================================================================================================================

// ? how to check given object is array or object 
console.log(Array.isArray([])) // return true;
console.log(Array.isArray({})) // return false


// mock interview 2 : 22/01/2024
// ? separate the char and number form the given array 
let array = [1, 'a', 'b', "c", 6, 7, 8, '5'];
function separationOfArray(array) {
  let numberArray = [];
  let charArray = [];

  for (let element of array) {
    if (typeof element === 'number') {
      numberArray.push(element);
    } else {
      charArray.push(element);
    }
  }

  return {
    numberArray,
    charArray
  };
}
const result = separationOfArray(array);
console.log("Numbers:", result.numberArray);
console.log("Characters:", result.charArray);




//? give the example of function currying ?
function currying(operator){
  return function(a){
      return function(b){
          return function(c){
              if(operator ==='add'){
                  return a+b+c;
              }else if(operator === 'mul'){
                  return a*b*c
              }else{
                  throw new Error ('unsupported operation')
              }
          }
      }
  }
}
const calculate = currying('mul');
console.log(calculate(1)(2)(3))


// ? what is scope in javascript ?
// accessibility and visibility of the variable in program is know as scope 
// certain reagan in the program where defined variable is exist recognized or not recognized
// scop defined the context where variable, function and object can be refereed.

//? Give a example fo deep copy and shallow copy in javascript 
let object = {
  name:'vishal',
  age:34
}
// create shallow copy 
let newObj = Object.assign({}, object)
// create shallow copy
let newObj1 = {...object}

// Deep copy
let deepCopy = JSON.parse(JSON.stringify(object));



// ? what is differences between map function and forEach function
// map : return new array with transformed element based on teh callback function 
//     : does not modify the array create new array
//    :  chaining method allowed like filter reduce
// forEach() : does not return anything (undefined) simply execute the function for each element.
          //  : modified the original array if change the element inside the callback  
          // : chaining is not possible.


//? what do you mean by event bubbling ?
// event bubbling :
//  Event bubbling is a concept in the DOM (Document Object Model) where an event starts at the most specific element (the target element) and then "bubbles up" through its ancestors in the DOM hierarchy, triggering the same event handler on each ancestor.
//  This process continues until it reaches the root element of the document.
//- How Event Bubbling Works:
// Event Occurrence: When an event (like a click, keydown, etc.) occurs on a target element, the event is initially captured by that element.
// Propagation: The event then bubbles up from the target element to its parent element, then to its parent's parent, and so on, until it reaches the root element (usually the <html> or <body> element).
// Event Handlers: As the event bubbles up, any event listeners attached to these ancestor elements are triggered, provided that they are set to listen for that event type.


//? what pure function in javascript with example ?
// (Deterministic – Given the same inputs, it always returns the same output.
// No Side Effects – It does not modify external states (e.g., global variables, DOM, databases).)
// pure function if function that get same output when execute multiple time with same argument 
// does not modify variable, dom or global variable, it having constant result with same input 
// it is rely or does not modify any state 
// does not perform any sideeffect.
function add(a, b) {
  return a + b; 
}
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (Same input, same output)

//? what is impure function ?
// It is not deterministic – The same input may not return the same output.
// It has side effects – It modifies external state (e.g., global variables, DOM, API calls, databases).
let total = 0; 

function addToTotal(value) {
    total += value;  // Modifies global variable
    return total;
}

console.log(addToTotal(5));  // 5
console.log(addToTotal(5));  // 10 (Same input, different output) 



//? what is transpiling in coding 
// Transpiling is the process of converting modern JavaScript (ES6+) code into an older version (ES5 or earlier) so that it can run in older browsers that do not support the latest features.
// Babel (Most popular)
// TypeScript (also compiles to JavaScript)
// SWC (faster alternative to Babel)

// When you want to convert one type of source code into another, you're typically using a transpiler or a compiler. 
// These tools take the source code written in one language or syntax and transform it into another format or language.

//? Why is Transpiling Needed?
// New JavaScript features (e.g., let, const, arrow functions, classes, async/await) may not be supported in older browsers. 
// -Transpiling ensures backward compatibility.

// - Transpiling from TypeScript to JavaScript
// TypeScript is a superset of JavaScript that adds type annotations and other features. A transpiler like tsc (TypeScript compiler) is used to convert TypeScript code into regular JavaScript code.

// - ES6+ to ES5 (JavaScript Transpiling)
// Tools like Babel are used to convert modern JavaScript (ES6 or later) into an older version (ES5) for compatibility with older browsers that don't support newer syntax (like arrow functions, async/await, etc.).

// -SASS/SCSS to CSS
// A CSS preprocessor like SASS is used to write styles in a more feature-rich syntax. These tools transpile SCSS into regular CSS that browsers can read.
// JSX to JavaScript (React)
// In React, JSX is used to write UI components, but browsers can't directly interpret JSX. A tool like Babel or a build tool like Webpack is used to convert JSX into regular JavaScript.
//  transpilers allow developers to write code in a more expressive, efficient, or higher-level way, and then transform it into a more widely-supported or optimized version. If you're talking about converting one source code language or format to another, transpilers are probably what you're looking for.


//? what are new features in es6 please explain 
// ES6 Features List with One-Line Descriptions 🚀
// let and const – Block-scoped variable declarations (let is mutable, const is immutable).
// Arrow Functions (=>) – Shorter function syntax that inherits this from the surrounding scope.
// Template Literals – String interpolation using backticks (`Hello, ${name}!`).
// Default Parameters – Assign default values to function parameters (function greet(name = "User")).
// Destructuring Assignment – Extract values from arrays and objects into variables (const {name, age} = obj).
// Rest Operator (...) – Collects multiple elements into an array (function sum(...nums)).
// Spread Operator (...) – Expands an array or object (const arr2 = [...arr1, 4, 5]).
// Enhanced Object Literals – Shorthand for defining object properties ({ name, age } instead of { name: name, age: age }).
// Promises – Handle asynchronous operations (fetchData().then().catch()).
// Classes – ES6 class syntax for object-oriented programming (class Person { constructor(name) { this.name = name; } }).
// Modules (import/export) – Split code into reusable modules (import { func } from './module.js').
// Map and Set – New collection types (Map for key-value pairs, Set for unique values).
// for...of Loop – Iterates over iterable objects (for (let item of arr) {}).
// Object.entries() and Object.values() – Retrieve keys and values from an object.
// find() and findIndex() – Locate elements in an array based on a condition.
// includes() for Arrays – Checks if an array contains a specific value (arr.includes(3)).
// startsWith() and endsWith() – Check string prefixes and suffixes (str.startsWith("Hello")).
// Number.isFinite() and Number.isNaN() – Improved number checking methods.
// Generators (function*) – Create iterators with yield keyword (function* gen() { yield 1; yield 2; }).
// WeakMap and WeakSet – Similar to Map and Set, but with weak references.


//? what is promise and its state 
// promise are object or placeholder where we have to store the failure or success of the asynchronous operation
// it having 3 state
// pending state
// fulfilled state
// rejected state



// 1. create promise and it resolved or rejected  when i click on button
let button = document.getElementById("btn1");
let button2 = document.getElementById("btn2");

const myPromise = new Promise((res, rej) => {
  button.addEventListener("click", () => {
    setTimeout(() => {
      res("promise are resolved");
    }, 1000);
  });
  button2.addEventListener("click", () => {
    setTimeout(() => {
      rej("promise are rejected");
    }, 1000);
  });
});

console.log(myPromise)
// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

  console.log(myPromise)

  async function example(){
    const res = myPromise
    return 'vishal' 
  }
  let res = await example()
  console.log("res", res)

  console.log(example());



//?    # how to create pending promise using without new Promise constructor (it is possible to create using async await )
// In JavaScript, an async function always returns a Promise. Let's explore how to create fulfilled, rejected, and pending states using async/await without explicitly using new Promise():

// 1. 
async function fulfilledPromise() {
    return "Resolved Value";  // Implicitly resolves
}

fulfilledPromise().then(console.log); // Output: Resolved Value
// Fulfilled Promise (Resolved by Default)
// An async function automatically returns a resolved promise when it returns a value.


// 2.  Rejected Promise
async function rejectedPromise() {
    throw new Error("Rejected Value"); // Implicitly rejects
}

rejectedPromise().catch(console.error); 
// Output: Error: Rejected Value
// To create a rejected promise, simply throw an error inside an async function.


// Pending Promise (Indirectly)
// A function remains pending if it never reaches a resolution or rejection. One way to do this is using await inside an async function that never resolve
async function pendingPromise() {
    await new Promise(() => {}); // Never resolves
}

console.log(pendingPromise()); 
// Output: Promise { <pending> }



// # we can used await outside the async function
// No, await cannot be used outside an async function in regular JavaScript. It must always be inside an async function.

// However, there are two exceptions:

//  Using await at the top level in modern JavaScript environments (ES2022+ in modules)
// Using Immediately Invoked Async Functions (IIFE) to wrap await

// If your JavaScript file is an ES module (i.e., using type="module" in HTML or .mjs extension), you can use await at the top level.
// Works in ES Modules
const data = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json());
console.log(data);
//  <script type="module" src="top-level-await.js"></script>

// 2.Using an Immediately Invoked Async Function (IIFE)
// For environments where top-level await is not supported, you can wrap the code in an Immediately Invoked Function Expression (IIFE):
(async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json());
    console.log(data);
})();


// # what is type of class 
class name{
    
}
console.log(typeof name); // return type is function 


// # what is type of function 
function myFunction(){
}
// here return type as function so in javascript function is not data type so function is also object behind the senses in javascript;
console.log(typeof myFunction) 

//#  what is type of the array 
let arr = [];
console.log(typeof arr)



// # 1. get only name in capital latter
const students = [
  { name: "Alice", rollNumber: 101, marks: 87 },
  { name: "Bob", rollNumber: 102, marks: 76 },
  { name: "Charlie", rollNumber: 103, marks: 35 },
  { name: "Diana", rollNumber: 104, marks: 68 },
];

let name = [];
for (let i = 0; i < students.length; i++) {
  name.push(students[i].name.toLocaleUpperCase());
}
console.log(name);

// solution using map
let data = students.map((ele, i, arr) => {
  return ele.name.toLocaleUpperCase();
});
console.log(data);

// # return only those student whose mark are grater then 75
let marks = students.filter((ele, i, arr) => {
  return ele.marks > 75;
});
console.log(marks);

// # return only those record more then 80 marks and roll number grater then 100
let mark = students.filter((ele, i, arr) => {
  return ele.marks > 80 && ele.rollNumber > 100;
});
console.log(mark);

// # give the sum of all the makes in given array
let sum = students.reduce((acc, ele, i, arr) => {
  return (acc = acc + ele.marks);
}, 0);
console.log(sum);

//  # return only name of students who scored more then 80
let output = students.filter((ele,i,arr)=>{
    return ele.marks > 80
}).map((ele)=>{
    return ele.name
})
console.log(output);

// # return total marks for student with marks grater then 60 after 20 marks have been added to those who scored less then 60
let totalMark = students.map((ele)=>{
    console.log(ele);
    if(ele.marks < 60){
      ele.marks = ele.marks + 20
    }
    return ele
}).filter((ele,i,arr)=>{
    return ele.marks > 60
}).reduce((acc,ele)=>{
    return acc = acc + ele.marks
},0)
console.log(totalMark)

// ----------------------------------------------------------------------------------------------------------------

// # create promise and it resolve and reject when i click on button
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')

const promise = new Promise((resolve, reject)=>{
  btn1.addEventListener('click', ()=>{
    setTimeout(() => {
      resolve('promise resolve ...')
    }, 2000);
  })

  btn2.addEventListener('click',()=>{
    setTimeout(() => {
      reject('promise are reject....')
    }, 200);
  })
})
promise.then((res)=>console.log(res)).catch((err)=>console.log(err))



//  # how to create pending promise using without new Promise constructor (it is possible to create using async await )
// In JavaScript, an async function always returns a Promise. Let's explore how to create fulfilled, rejected, and pending states using async/await without explicitly using new Promise():
async function fulField(){
  return 'resolved value'
}
fulField().then((res)=> console.log(res))

async function rejected(){
  return 'reject value';
}
rejected().then((res)=>console.log(res)).catch((error)=>console.log(error))

// pending promise(indirectly)
// a function remains pending if it never reaches a resolution or rejection one way to do this is using inside an async function that never resolve
async function pendingPromise(){
  await new Promise(()=>{})
}

// # we can used await outside the async function
// No, await cannot be used outside an async function in regular JavaScript. It must always be inside an async function.

// # what is type of class 
class username{

};
console.log(typeof username); // it return function 


// # what is type of function 
function sayHi(){};
console.log(typeof sayHi); // it also return function 
// here return type as function so in javascript function is not data type so function is also object behind the senses in javascript;

// # type of array
console.log(typeof []); // object 


/*
 #what are new features in es6 please explain 

#.  ES6 Features List with One-Line Descriptions 🚀
1. let and const – Block-scoped variable declarations (let is mutable, const is immutable).
2. Arrow Functions (=>) – Shorter function syntax that inherits this from the surrounding scope.
3. Template Literals – String interpolation using backticks (`Hello, ${name}!`).
4. Default Parameters – Assign default values to function parameters (function greet(name = "User")).
5. Destructuring Assignment – Extract values from arrays and objects into variables (const {name, age} = obj).
6. Rest Operator (...) – Collects multiple elements into an array (function sum(...nums)).
7. Spread Operator (...) – Expands an array or object (const arr2 = [...arr1, 4, 5]).
8. Enhanced Object Literals – Shorthand for defining object properties ({ name, age } instead of { name: name, age: age }).
9. Promises – Handle asynchronous operations (fetchData().then().catch()).
10. Classes – ES6 class syntax for object-oriented programming (class Person { constructor(name) { this.name = name; } }).
11 . Modules (import/export) – Split code into reusable modules (import { func } from './module.js').
12. Map and Set – New collection types (Map for key-value pairs, Set for unique values).
13. for...of Loop – Iterates over iterable objects (for (let item of arr) {}).
14. Object.entries() and Object.values() – Retrieve keys and values from an object.
15. find() and findIndex() – Locate elements in an array based on a condition.
16. includes() for Arrays – Checks if an array contains a specific value (arr.includes(3)).
17. startsWith() and endsWith() – Check string prefixes and suffixes (str.startsWith("Hello")).
18. Number.isFinite() and Number.isNaN() – Improved number checking methods.
Generators (function*) – Create iterators with yield keyword (function* gen() { yield 1; yield 2; }).
WeakMap and WeakSet – Similar to Map and Set, but with weak references.
*/

// # js is single thread then how it handle the multiple api 
// avaScript + Browser = Asynchronous Power
// JavaScript runs in a single thread, but the browser or Node.js environment provides asynchronous APIs (e.g., fetch, setTimeout, XMLHttpRequest, etc.) that are non-blocking.
// These APIs are handled by the browser's Web APIs or Node's libuv system outside the JavaScript engine. Once the task is complete, the callback or Promise is queued and pushed into the event loop.
// to making multiple api call used promise.all or async-await with promise.all.
const api1 = fetch('https://api.example.com/data1');
const api2 = fetch('https://api.example.com/data2');

Promise.all([api1, api2])
  .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
  .then(([data1, data2]) => {
    console.log('Data 1:', data1);
    console.log('Data 2:', data2);
  });

  // using async
  async function fetchData() {
  const [res1, res2] = await Promise.all([
    fetch('https://api.example.com/data1'),
    fetch('https://api.example.com/data2')
  ]);
  
  const data1 = await res1.json();
  const data2 = await res2.json();

  console.log(data1, data2);
}


/*
 # how many way to handle asynchronous operation in js
 1: Callbacks
    function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData((data) => console.log(data));

2: Promises
Introduced in ES6, more readable and avoids "callback hell".
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
};

fetchData().then((data) => console.log(data));

3: Async/Await
Built on top of Promises. Introduced in ES2017. Makes async code look like synchronous.
const fetchData = async () => {
  return "Data loaded";
};

const showData = async () => {
  const data = await fetchData();
  console.log(data);
};

showData();

4.
setTimeout / setInterval
Useful for scheduling tasks, but not reliable for precise control.
setTimeout(() => {
  console.log("Executed after 1 second");
}, 1000);



# have you used a higher order function in your application
1. yes , map, filter, forEach, reduce 

# why javascript is single threaded 
Single-threaded	JS runs one task at a time — only one call stack so whole js code expected line by line single call stack .
JavaScript was designed to run in the browser, and in order to make the DOM (Document Object Model) manipulation safe, it uses a single thread.

# what make the javascript asynchronous
 but it uses asynchronous features through the browser's environment (or Node.js APIs) with the help of:
1 Not JavaScript alone — but the runtime environment (Browser or Node.js) provides:
	1.Web APIs – like setTimeout, fetch, DOM events, etc.
	2. Task Queues – to hold the callbacks.(callback queue/ macroTask queue
	3. Event Loop – to coordinate and push those tasks into the main thread when it's free. 
	 Responsible for managing async tasks and ensuring smooth execution.


# What is DOM in JavaScript?
1.DOM stands for Document Object Model.
2. It is a programming interface for web documents.
3. The DOM is a tree-like structure that represents the HTML elements of a webpage so that JavaScript can interact with them.
4. JavaScript and DOM: JavaScript uses the DOM to read, change, create, or delete elements.
5. The DOM is not part of JavaScript itself, but part of the Web API provided by the browser.
JavaScript interacts with the DOM to make dynamic changes to the webpage.

# what is differences between es5 and and 6

1. es5 :
  1. variable declare with var only
  2. traditional function expression (used function + prototype)
  3. in ES5 support for in and for loop
  4. for asynchronous propose used callback
  5. default parameter are not support manually handle inside the function
  6. Destructuring are not available 
  7. in ES5 string concatenation purpose we have to used + operator
  8. spread and rest operator are not available
  9. import export not supported 



2. es6
  1. variable declare with let and const are introduce  
  2. introduce arrow function or class keyword 
  3. ES6 support for of map and set 
  4. asynchronous purpose introduce promises and later async/await
  5. default parameter are supported in ES6
  6  Destructuring are introduced 
  7. so here used the string literals (template string with back tick )
  8 spread and rest operator and available 
  7. in es6 introduce import export 


  | Feature                      | **ES5 (ECMAScript 2009)**              | **ES6 (ECMAScript 2015)**                             |         |                                         |
| ---------------------------- | -------------------------------------- | ----------------------------------------------------- | ------- | --------------------------------------- |
| **Variable Declarations**    | `var` only                             | Introduced `let` and `const` for block-scoping        |         |                                         |
| **Function Syntax**          | Traditional function expressions       | Arrow functions `()=>{}` for concise syntax           |         |                                         |
| **Object Properties**        | Verbose syntax: `name: name`           | Shorthand: `name`                                     |         |                                         |
| **Classes**                  | Function constructor + prototype       | `class` syntax with `constructor`, `extends`, `super` |         |                                         |
| **Modules**                  | No native support (used CommonJS, AMD) | Native `import` / `export` syntax                     |         |                                         |
| **Template Literals**        | String concatenation using `+`         | Backtick (`` `Hello ${name}` ``) template literals    |         |                                         |
| **Default Parameters**       | Manual checks \`param = param          |                                                       | value\` | Function defaults: `function(a = 5) {}` |
| **Destructuring**            | Manual unpacking from objects/arrays   | Array/Object destructuring `const {a} = obj;`         |         |                                         |
| **Arrow Functions**          | Not available                          | Concise syntax with lexical `this`                    |         |                                         |
| **Spread/Rest Operators**    | Not available                          | `...args`, `...array`, `...object`                    |         |                                         |
| **Promises**                 | Not built-in                           | Native `Promise` for async operations                 |         |                                         |
| **Iterators/Generators**     | Not available                          | Introduced with `function*` and `yield`               |         |                                         |
| **Map/Set**                  | Not available                          | `Map`, `Set`, `WeakMap`, `WeakSet` introduced         |         |                                         |
| **for...of loop**            | Only `for`, `for...in`, `while`        | `for...of` for iterables like arrays, strings         |         |                                         |
| **Block Scoping**            | No block scope with `var`              | `let` and `const` provide block-level scoping         |         |                                         |
| **Symbols**                  | Not available                          | New primitive type: `Symbol()`                        |         |                                         |
| **Enhanced Object Literals** | Limited                                | Dynamic keys, method shorthand, prototype assignment  |         |                                         |

*/


