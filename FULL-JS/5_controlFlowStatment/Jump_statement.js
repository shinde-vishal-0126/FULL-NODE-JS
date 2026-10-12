/*
# jump statement
Defination
  - jump statement basically used to move the cursor pointer out of loop or may be jump to the next iteration.or may be exit the function.
  - Jump statement are used to alter the normal flow of program execution.
  - They can terminate loop, skip the current iteration, or exit the function.
@ type of jump statement
  1.break statement
  2. continue
  3. return

# 1. break :
  - The break statement is used to exit a loop (such as for, while , do-while loop, exit switch statement ) and cursor pointer goes to the out of loop.
  - Or Break statemetn is used to immediately terminate the execution of a loop or a switch statement.
  - Once the break statment is encountered, control move to the first statement after the loop or switch.
  - break statement are used with
    1. for loop
    2. while loop
    3. do... while loop
    4. switch statement.
  - syntax
    break;
  -Ex.
*/
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exits the loop when i is 5
  }
  console.log(i); // Will log 0 to 4
}
/*
# 2. continue :
Defination:
  - The continue statement skip the current iteration of loop and immediately jump to the next iteration.
  - continue statement does not terminate the loop
  - continue statement are used with
    1. for loop
    2. while loop
    3. do..while loop
  - syntax
    continue;.
*/
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Skips the iteration when i is 5
  }
  console.log(i); // Will log 0 to 4 and 6 to 9
}
/*
# 3. return
Defination:
  - The return statement is used to exist the function and optionally return a value to the caller.
  - The return statement immediately terminates the execution of a function.
  - it can optionally return a value to the function caller.
  - any code return after return inside the same function will never execute.
  - used with
    - function
  - syntax
    return;
*/
function sum(a, b) {
  return a + b; // Exits the function and returns the sum
}
console.log(sum(5, 3)); // Outputs 8


// Q. differences between break, continue, return

// +------------+--------------------------+--------------------------+----------------------------+
// | Feature    | break                    | continue                 | return                     |
// +------------+--------------------------+--------------------------+----------------------------+
// | Purpose    | Exit loop/switch         | Skip current iteration   | Exit function              |
// | Used In    | Loop, Switch             | Loop                     | Function                   |
// | Stops Loop | Yes                      | No                       | Yes*                       |
// | Skip Iter. | No                       | Yes                      | No                         |
// | Return Val | No                       | No                       | Yes (Optional)             |
// | Continues  | After loop/switch        | Next iteration           | Back to caller             |
// +------------+--------------------------+--------------------------+----------------------------+
