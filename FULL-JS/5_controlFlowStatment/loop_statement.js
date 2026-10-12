/*
@ loop statement (we have to used loop to perform repeated action)
Defination:
 - Loop statement are used to execute a block of code repeatedly as long as a specified condition is true.
 - They help avoid writing the same code multiple times
 - Loops are commonly used to iterate over data or perform repetitive operation.
 - in simple word
  - A loop executes the same block of code multiple times until the specified condition becomes false.

  Q. why do we used loops ?
  1. To execute a block of code repeatedly.
  2. To reduce code duplication
  3. To iterate over arrays, objects, strings, and other collections.
  4. To improve code redability and maintainability.

# type of loop
  1. while loop: (while loop first check the condition and based on the run the block of code)
  2. do-while loop : (do-while loop at least run once then check the condition )
  3. for loop : (perform the repeated operation in the basis of condition)
  4. for-in-loop : (for loop used to looping the key of the objects)
  5. for-of-loop: (for of loop used the value of the object)


  /*
# 1. while loop
Defination
  - The while loop repeatedly execute a block of code as long as the specified condition is true.
  - The condition check before each iteration
  - if the conditon false initially, the loop body never execute.
    - while loop is control structure that repeatedly execute block of code as long as specified condition remain true.
    - the loop continue iterating while condition is true and it terminate the condition become false.
    - The while loop statement creates a loop(iterate) that executes a specified statement as long as the test condition evaluates to true.
  # Note :
    - If the condition never become false the loop will never end and thing might crash the runtime(Iterate the element infinite number of time)
    - It used if number of iteration not known
    - It is control flow statement that execute the part of the  program repeatedly on the basis of given boolean condition
    - If the number of iteration is not fixed it is recommended to use a while loop.
    - while loop first check the condition then execute the block of code based on the condition
  - Best Use
    - when the number of iteration is unknown
  - syntax
      while(condition){
        //code
      }
- Ex.
  */
let n = 0
while (n <= 10) {
  console.log(n)
  n++
} //1,2,3,4,5,6,7,8,9,10
// So while loop used when the number of iteration not known
//  while loop is control structure that repeatedly execute block of code as long as specified condition remain true.
// the loop continue iterating while condition is true and it terminate the condition become false.

// Q write a program to get the table of the any digits:
let no = 1
while (no <= 10) {
  console.log("5 * " + no + 5 * no);
  no++
}

/*
# 2. do...while loop
Defincation:
  - The do...while loop execute the body first and then check the condtion.
  - Therefore, the body execute at least once, even if the condtion is false.
  - i.e do...while loop are similar to the while loop but it execute the blcok at least once before checking the condition.
    - So do while loop is control flow statements execute at least  once and then check the condition after executing at least one(condition check at the end.)
    - Iterate the element an infinite number of times like a while loop but code is executed at least once whether the condition is true or false.
    - in do -while loop statement executed at least one and then check the condition when you want to guarantee the execution of the loop body at lease once
  - Best use
    - when code must execute at least one time.
  - syntax
      do{
      // code
      }while(condition)
- ex.
*/
var num = 0
do {
  console.log(num);
  num++;
} while (num <= 10)
// Basically do while loop is control flow statement that execute a part of program at least one and further execution depends upon the given boolean condition
// If the number of iteration not fixed and you must have to execute the at least one it is recommended  to use do while
// ex
let userInput = 90;
let positiveNumber;
do {
  // userInput = prompt('enter any number');
  positiveNumber = parseFloat(userInput)
} while (isNaN(positiveNumber) || positiveNumber < 0) {
  console.log('you entered a valid positive number')
}
/*
Q. Differences between while loop vs do...while loop
  - Both while and do...while loops are control flow statements used to execute a block of code repeatedly based on a condition.
  - The main difference is when the condition is evaluated.

  +----------------------+--------------------------------------+--------------------------------------+
| Feature              | while Loop                           | do...while Loop                      |
+----------------------+--------------------------------------+--------------------------------------+
| Definition           | Repeats a block of code while the    | Executes the block first and then    |
|                      | condition is true.                   | checks the condition.                |
+----------------------+--------------------------------------+--------------------------------------+
| Condition Check      | Before executing the loop body.      | After executing the loop body.       |
+----------------------+--------------------------------------+--------------------------------------+
| Execution            | May execute zero or more times.      | Executes at least one time.          |
+----------------------+--------------------------------------+--------------------------------------+
| Loop Type            | Entry-controlled loop.               | Exit-controlled loop.                |
+----------------------+--------------------------------------+--------------------------------------+
| First Iteration      | Executes only if condition is true.  | Always executes once.                |
+----------------------+--------------------------------------+--------------------------------------+
| Variable Initialization | Usually before the loop.          | Before or inside the loop.           |
+----------------------+--------------------------------------+--------------------------------------+
| Best Use             | When the loop may not need to run.   | When the loop must run at least once.|
+----------------------+--------------------------------------+--------------------------------------+
# conslusion
  1. while loop checks the condition BEFORE executing the loop body.
  2. do...while loop executes the loop body FIRST and then checks the condition.
  3. A while loop may execute zero times.
  4. A do...while loop always executes at least one time.
# interview notes
  - while is an entry-controlled loop because it checks the condition before executing the loop body,
  - whereas do...while is an exit-controlled loop because it executes the loop body first and checks the condition afterward.
/*

# 3. for loop
Defination:
  - a for loop in javas script control flow statement that allow you to repeatedly execute the block of code specified number of time it's particularly useful when you know exact number of iteration needed.
  - The for loop repeatedly execute block of code while the specified condition is true.
  - it consists of initializtion, condition, and update expression in a single statement.
  -  Used to perform repeated operations based on a condition.(Iterate the number of elements for a fixed number of times.)
  - Var num = 10; num < 10; i++
    - For loop iterate the part of program several time if the number of iteration is fixed
    - For loop allows you to efficiently write  a loop that needs to execute a specific number of times
    - But in the initial value  like i = 0 execute only the first time.
    - I.e for loop having the  three statement initialization, condition, and  increment or decrement
    - So the first statement executes only one, second statement check condition before the execution loop body, and the third  statement executes after the loop body execution.
    - In for loop initially or first time not check iteration part of the for loop.
  - Best use
    - When the number of iteration is known.
  - syntax
      if(initializtion; condition; update){
        // code.
      }
- Ex.
*/
for (let i = 1; i <= 5; i++) {
  console.log(i);
} // 1,2,3,4,5

// ? How to create infinite for loop ?
// the code for (;;) represent infinite loop.
// for (; ;) {
//   console.log('done')
// }
// ? check given number is prime number or not
// A prime number is a natural number greater than 1 that has exactly two distinct positive factors: 1 and itself.
let num6 = 7;
let isPrime = true
for (let i = 2; i < num6; i++) {
  if (num6 % i === 0) {
    isPrime = false;
    break
  }
}
if (isPrime) {
  console.log('num is prime number');
} else {
  console.log('number is not prims number')
}

/*
@ for in loop
- The for in loop is used to iterate over the enumerable property name (keys) of an object
- it can also iterate over the indexes of an array, but it is not recommended for arrays
- it work with both iterable & non-iterable objext
- Best use
  - iterating over the keys(properties) of an object
- syntax
  for(const key in object){
  // code
  }
*/
const objectes = {
  vishal: 20,
  akshay: 30,
  ak: 90
}
for (keys in objectes) {
  console.log(keys)
}

/*
@ for of loop
- The for of loop is used to iterate over the vlaue of iterable object.
- iterable object like Array, String, Map, Sets, Types Array, NodeList.
- it does not work directly with plain javascript object because plain javascript object are not iterable.
- Best use
  - iterating over value of arrays, string, map, set
- for(const value of iterable){
  // code
  }
*/
for (let char of 'viahsl') {
  console.log(char)
}

const obj = {
  visahl: 90,
  pk: 99
}
// for (const val of obj) {
//   console.log(val)
// }

// Getting value
for (const val of Object.values(obj)) {
  console.log(val)
}

// Getting keys
for (const val of Object.keys(obj)) {
  console.log(val)
}

// Gettin both key and value
for ([keys, value] of Object.entries(obj)) {
  console.log(keys + ":" + value)
}

/*
@ differences between for...in vs for...of
/*
===============================================================================
                Difference Between for...in and for...of
===============================================================================

+----------------------+--------------------------------------+--------------------------------------+
| Feature              | for...in                            | for...of                             |
+----------------------+--------------------------------------+--------------------------------------+
| Definition           | Iterates over enumerable property   | Iterates over values of iterable     |
|                      | names (keys).                       | objects.                             |
+----------------------+--------------------------------------+--------------------------------------+
| Iterates Over        | Keys / Property Names               | Values                               |
+----------------------+--------------------------------------+--------------------------------------+
| Works With           | Objects, Arrays                     | Arrays, Strings, Maps, Sets, etc.    |
+----------------------+--------------------------------------+--------------------------------------+
| Plain Object         | Yes                                 | No                                   |
+----------------------+--------------------------------------+--------------------------------------+
| Array                | Returns indexes                     | Returns values                       |
+----------------------+--------------------------------------+--------------------------------------+
| String               | Returns indexes                     | Returns characters                   |
+----------------------+--------------------------------------+--------------------------------------+
| Map                  | No                                  | Yes                                  |
+----------------------+--------------------------------------+--------------------------------------+
| Set                  | No                                  | Yes                                  |
+----------------------+--------------------------------------+--------------------------------------+
| Best Use             | Objects                             | Iterable objects                     |
+----------------------+--------------------------------------+--------------------------------------+

# interview prespective
1. The for...in loop iterates over the enumerable property names (keys) of an object. It can also iterate over array indexes, but it is primarily used for objects.
2. The for...of loop iterates over the values of iterable objects such as arrays, strings, Maps, and Sets. It does not work directly with plain JavaScript objects because they are not iterable.

*/
// # Star Pattern
for (var i = 1; i <= 5; i++) {
  var pattern =""
  for (j = 1; j <= i; j++) {
    pattern = pattern + "*"
  }
  console.log(pattern)
}
