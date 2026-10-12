
/*
@ Switch Statemetn:
  - The switch statemet is decision making control statement used to execute one block of code for multiple alternatives.
  - it evaluate an expression once & compare its value with each case value.
  - when a matching case is found, the corresponding block of code is executed. if no case matches, the default block is executed (if present)
  - in simple word
    - The switch statement checks the value of an expression and execute the matching case.
  - syntax :
    switch(expression){
      case value1:
            // code
            break;
      case value2:
            //code
            break;
      default:
          // code.
    }
          switch(expression)
                     │
        ┌────────────┼────────────┐
        │            │            │
        ▼            ▼            ▼
   case 1        case 2      case 3
        │            │            │
        └──────Match?─────────────┘
                     │
              Execute Code
                     │
                 break
                     │
             Exit switch

Q. Why do we use switch ?
  - To perform different actions based on different values.
  - To replace multiple if...else if statement when comparing the same expression.
  - Makes code cleaner and easier to read.

Q. Why do we use break?
  - The Break statement immediately terminate the execution of the current switch statemetn after the matching case has been executed.
  - it prevent the execution from continuing into the subsequent case (fall-through)
  - why ?
    - No, break javascript continue executing every case after the first match this behavior is called fall - through

Q. What is Fall - through ?
  - Fall-through is the default dehavior of a switch statement where after a matching case is found, javascript continues executing all subsequest case until it encounters a  break, return or reaches the end of the switch block.
  let fruit = "apple";
  switch (fruit) {
      case "apple":
        console.log("Apple");
      case "banana":
        console.log("Banana");
      case "orange":
        console.log("Orange");
}

Q. When is default executed?
- The default block executed when none of the case value match the switch expression.

# interview
  - The switch statement is a decision-making control statement
  - that evaluates an expression once and compares its value with multiple case values.
  - When a matching case is found, the corresponding block of code executes.
  - The break statement is typically used to terminate the switch and prevent fall-through to subsequent cases.
*/
const area = "circle";
const PI = 3.14;
const radius = 10;
const length = 10;
const width = 20;
switch (area) {
  case "circle":
    const circleArea = PI * (radius ** 2);
    console.log("Area of Circle =", circleArea);
    break;
  case "triangle":
    const triangleArea = (length * width) / 2;
    console.log("Area of Triangle =", triangleArea);
    break;
  default:
    console.log("Invalid Shape");
}
/*
===============================================================================
             Difference Between switch and if...else
===============================================================================

+----------------------+--------------------------------------+--------------------------------------+
| Feature              | switch Statement                     | if...else Statement                  |
+----------------------+--------------------------------------+--------------------------------------+
| Definition           | Compares one expression with         | Evaluates one or more Boolean        |
|                      | multiple case values.                | conditions.                          |
+----------------------+--------------------------------------+--------------------------------------+
| Condition Type       | Equality (===) comparison.           | Any Boolean expression.              |
+----------------------+--------------------------------------+--------------------------------------+
| Best Use             | Multiple fixed values.               | Complex conditions and ranges.       |
+----------------------+--------------------------------------+--------------------------------------+
| Readability          | Cleaner for many fixed cases.        | Better for complex logic.            |
+----------------------+--------------------------------------+--------------------------------------+
| Supports Ranges      | No                                   | Yes                                  |
+----------------------+--------------------------------------+--------------------------------------+
| Default Block        | default                              | else                                 |
+----------------------+--------------------------------------+--------------------------------------+

1. switch evaluates the expression only once.
2. Comparison is performed using strict equality (===).
3. break prevents fall-through.
4. default is optional but recommended.
5. Best for fixed values, not for ranges or complex conditions.

*/

