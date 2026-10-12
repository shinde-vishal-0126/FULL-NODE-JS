/*
@ conditional operator
Defincation -
  - The conditional operator (? : ) also called as Ternary Operator.
  - is shortHand way of writting an if...else statment. (it is a concise way to write a simple if-else statement in programming)
  - it evaluate condition and return one value if the condition is true, and another value if the condition is false.
  - it is called Ternary Operator becase it work with three operands.
    1. condition
    2. value if true
    3. value if false
  - syntax
    - condition ? expressionIfTrue : expressionIfFalse (The conditional (ternary) operator is to take three arguments.)
    -(based on the condition it return expression):  Variable name = (condition) ? value1 : value2

  @. How it work
  Condition
      │
      ▼
Is condition true?
     / \
   Yes  No
    │    │
    ▼    ▼
True   False
Value   Value
*/
// Ex. 1
let age = 20;
let result = age >= 18 ? 'eligible for vote' : 'not eligible'
console.log(result)

//? equivalent with if eles
let myAge = 17
if (myAge >= 18) {
  console.log('eligible for vote')
} else {
  console.log('Not Eligible...')
}

// ex.2
//? Nested Ternary operator
let mark = 50;
let grade = mark >= 85 ? 'GRADE A' :
  mark >= 60 ? 'GRADE B' :
    mark >= 35 ? "GRADE C" : "FALSE";
console.log(grade)

//? you can also chain multiple ternary operators:
const isMember = true;
const isStudent = false;
const price = isMember ? (isStudent ? "5 USD" : "10 USD") : "15 USD";
console.log(price); // Output: 10 USD


//?  multiple condition for Displaying Message
const status = "offline";
const message =
  status === "online"
    ? "You are online"
    : status === "away"
      ? "You are away"
      : status === "offline"
        ? "You are offline"
        : "Unknown status";
console.log(message); // Output: You are offline

// Example :
const time = 13;
const greeting =
  time < 12 ? "Good Morning" : time < 18 ? "Good Afternoon" : "Good Evening";
console.log(greeting); // Output: Good Afternoon
