
/*
@ decision making statement: (conditional statements)
- Decision Making Statements are used to execute different blocks of code based on a specified condition.
- They evaluate a Boolean expression (true or false) and decide which block of code should be executed.
-  These statements control the program flow according to the result of the condition.
- In Simple Words:
  - Decision Making Statements help the program make decisions.Depending on whether a condition is true or false, JavaScript executes different code.

@ Type of Decision making (conditional expression)
# 1: If statement
  - the if statement evaluate the condition inside the () if the condition is evaluated to true the code inside  the body of if is executed else the code is not executed
  - Executes a block of code only if the specified condition is true
# 2: If-else statement
  - if the condition is true the code inside if is executed else code inside else block is executed
  - Executes one block of code if the condition is true, otherwise executes another block.
# 3: if...else if...else Ladder
  - sometime we might want to keep tracking a set of condition one by one until one matches we use if else if form achieving this.
  - if else if ladder Used when multiple conditions need to be checked.
  - JavaScript checks each condition from top to bottom.
  - As soon as one condition becomes true, its block is executed and the remaining conditions are skipped.
# 4: Switch statement.
  - switch statement evaluates an expression matching the expression value to a case clause,
  - and executes a statement associated with that case, and as well as a statement in case that follows the matching case.
  - Evaluates an expression and compares its value with each case.
  - When a matching case is found, its corresponding block is executed.
  - If no case matches, the default block is executed (if provided).
*/
/*
# if statment
Defincation:
  - The if statement execute a block of code only when the specified condition evaluate to true
  - if the condition is false, the code inside the if block is skipped.
  - syntax
    if(condition){
        // block of code
    }
  - Ex.
*/
let tommarow = 'rain'
if (tommarow == 'rain') {
  console.log('Take a raincoate')
}

/*
@ Nested if
  - A Nested if statement is an if statement placed inside another if or else block. It is used when a second condition should be checked only after the first condition evaluates to true.
  - A Nested if statement means writing one if statement inside another if statement. It is used to check multiple dependent conditions.
  - Nested if is used when one condition depends on another condition. If the outer condition is true, then JavaScript checks the inner condition.
  - syntax
    if(condition){
      //outer if
      if(condition){
      // inner if
      }
    }
  - flow
  Condition 1

      │
      ▼

Is Condition 1 True?

      │
 ┌────┴────┐
 │         │
Yes        No
 │          │
 ▼          ▼
Check      Stop
Condition2
 │
 ▼
Execute
- ex.
*/
let age = 20;
let hasLicense = true;
if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive.");
  }
}
/*
# if...else statement
Defination:
  - The if...else statement executes one block of code if
  the condition is true.
  - Otherwise, it execute the else block.
  - The if statement execute statement if specified condition is truthy , If the condition is falsely  so another statement can be executed
  - syntax
    if(condition){
      // true block
    }else{
      // flase block
    }
- Ex.
*/
let today = 'sunny';
if (today == 'rain') {
  console.log('Take a raincote')
} else {
  console.log('No need to rainCoate....')
}

/*
# Nested if...else
  - A Nested if...else statement is an if...else statement placed inside another if or else block.
  - It is used to evaluate multiple dependent conditions, where the inner if...else is executed only after the outer condition has been evaluated.
  - Nested if...else means writing an if...else statement inside another if or else statement. It is used when one condition depends on another condition
  - A Nested if...else statement is used to check multiple related conditions one after another. The inner if...else executes only after the outer condition is evaluated
  - syntax
    if(condition){
      // condition 1 or block of code
      if(condition){
        // execute if the condtion 1 and condition 2 are true
      }else{
        // execute if condition 1 is ture but condtion 2 is false
      }
    }else{
      // execute if the condition 1 is false
    }
- flow diagram
                Condition 1
                     │
             Is it true?
               /        \
            Yes          No
             │            │
             ▼            ▼
        Condition 2    Outer else
             │
       Is it true?
        /        \
     Yes          No
      │            │
      ▼            ▼
 Inner if      Inner else

 ! Easy rule
  - Nested if...else is used when the result of one condition determines whether another condition should be checked.
 - Ex.
*/
let age1 = 10;
let hasLicences = true;
if (age1 >= 18) {
  if (hasLicences) {
    console.log('You can Drive it')
  } else {
    console.log('You need Driving Licence')
  }
} else {
  console.log('You are not eligible to derive...')
}

// ex 2
let mark = 85;
let attendes = 80;
if (mark >= 35) {
  if (attendes >= 76) {
    console.log('pass')
  } else {
    console.log('Attendance is too low')
  }
} else {
  console.log('Fail')
}
// Q. write a program that work out weather of a given year is leap year so leap year having the
// - 366 day (leap year mean exactly divided by 4 also divided by 400 expect it divided by 100 then it
// is not leap year)
let year = 2024;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log('Leap Year')
    } else {
      console.log('Not Leap Year')
    }
  } else {
    console.log('Leap Year')
  }
} else {
  console.log('not Leap year')
}

/*
@ if-else and else-if ladder
Defination :
  - Used When multiple condition need to be checked.
  - javascript evaluate each condition from top to bottom As soon as one condition become true it corresponding block is executed.
  - The remaining condition are skipped.
  - syntax
  if(conditon 1){
  }else if(conditon 2){
  }else if(condition 3){
  }else {
    // return conditon
    }
  - Ex.
*/
let name = "vishal";
let age = 20;
if (name === "vishal" && age === 27) {
  console.log("Incorrect Age");
}
else if (name === "shinde" && age === 20) {
  console.log("Incorrect Name");
}
else if (name === "vishal" && age === 20) {
  console.log("Given Data is Vishal's Data");
}
else {
  console.log("Invalid Data");
}


/

