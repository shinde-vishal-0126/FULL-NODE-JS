/*
# return multiple value form the function 

# how to return multiple value form function 
1. basically js function return single value if you want to return multiple value from a function you can pack the return value as an array or properties of an object.
2. es6 allow destructuring  assessment syntax for unpack value form array or object 

*/

function getName() {
  let firstName = "vishal";
  let lastName = "shinde";
  return [firstName, lastName];
}
let value = getName();
console.log(value);
console.log(value[0]);
console.log(value[1]);

// but if you have to multiple value form function in ES6 you have to used destructuring syntax
// here we have to used the array destructuring
const [fName, lName] = getName();
console.log("fName", fName);
console.log(lName, lName);

// # return multiple value form an function using object
function display() {
  let name = "vishal";
  let age = 38;
  let id = 34;

  // here we have to return multiple value form the function we have to used destructuring syntax
  // here we have to used object destructuring
  return { name, age, id };
}
const details = display();
console.log(details);
const { name, age, id } = display();
console.log(name, age, id);

// # NOTE
// javascript does not support function that return multiple value you can wrap multiple value into an array or array of object and return array or object
// used the destructuring assessment syntax to unpack from the array and properties from the  object

// object properties : modern javascript
const name1 = "vishal";
const neaAge = 25;
// traditional way
const person5 = {
  fullName: name1,
  age: neaAge,
};
console.log(person5);

// using shortHand notation for object properties
const person6 = { name1, neaAge };
console.log(person6);
// instead of specifying fullName:name and neaAge:age, you can simply used nama and age you can simply nama and age directly with the object literal
