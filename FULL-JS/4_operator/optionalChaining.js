/*
@ OPTIONAL CHAINING (?.)
Defincation :
  - The optional chaining operator (?.) allow you to safely access the properties or method of an object without throwing an error if an property is null or undefined.
  - if any part of the chain is null or undefined, javascript immediately return undefined insted of throwing a TypeError.

Q. How it work ?
    user
      ↓
Is user null or undefined?
       │
   Yes │
       ▼
Return undefined
    (No Error)
*/

// Q. Why do we need Optional Chaining ?
// Suppos
let user = null;
// console.log(user.name);
// it show TypeError: can not read properties of null  because user = null;
// so There no propery called name.
// using Optional chaining it return undefind insted or TypeError.
console.log(user?.name); // No error occure

// ex. 1
let userData = {
  name: 'vishal',
  address: {
    city: 'pune',
    zipCode: 412401,
  }
};
console.log(userData.age)
console.log(userData?.address?.street);
console.log(userData?.address?.zipCode)
console.log(userData?.address?.locality)

//? optional chaining with Array .
let users = [
  {
    name: 'vishal',
    age: 30
  }
]
console.log(users[1]?.name)

//? optional chaining with method
let person = {
  // method greet
  greet() {
    return 'Welcom to user'
  }
}
console.log(person.greet())
console.log(person.add?.())
// Optional Chaining(?.) म्हणजे safe property access.
// जर object किंवा property उपलब्ध नसेल, तर JavaScript error देत नाही, तर undefined परत करते.
