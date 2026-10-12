/*
# Hoisting 

? what is hoisting in javascript ?

  1. hoisting in javascript is default behavior and mechanism during the creation phase javascript engine move your variable and function declaration to the top of their scope before execution the code  this is known as hoisting 
  2. This is process during the creation phase javascript engine move the variable and function declaration to the top of their containing scope(either locally or globally) before code execution or compilation phase this is know as hoisting.
. 3. this means that no matter where function and variable are declared they are move to the top of their scope regardless of weather their scope it global or local
*/
console.log(count); // undefined.
var count;

// here References the myName variable before the declaration
// so first line of code does not case the error the reason the javascript engine moves the variable and declaration to the top of their scope and initialize with  special value with undefined
console.log("myName :", name);
var name;
name = "vishal shinde";
//  So typically code look like in execution phase  but during the execution phase of the global execution context the javascript engine place the variable myName in the memory and initialize its value.

// ===================================================================================================================

/*
? so in var case variable are hoisted but what about let and const
1. let and const : 
    1: variable declare with let and const are also hoisted to the top of their scope but they are not initialize.
    2: They remains in a temporal dead zone (TDZ) from start of the block until the declaration is encounter. (TDZ starts at beginning of the scope and ends at initialization.)
    3: accessing them before their declaration return in referencesError. 
    4. let and const are hoisted, but not initialized. They stay in TDZ until initialization.”  

*/
console.log(counter); //It shows the reference error : can not access ‘counter ’, before initialization.
let counter; //  1: if you defined variable with let and const is hoisted in script tag i.e Temporal dead zone

//  =======================================================================================================================
/*


 ? what is temporal dead zone 
    1: Temporal dead zone is a concept in javascript that refer to the time period between the start of block scope and point at when the declared variable is initialized.
    2:TDZ is time period between start the block of scope and initialization of let and const variable. 
        {
          TDZ starts here
          console.log(x); // ❌ ReferenceError
          let x = 5;      // TDZ ends here
        }
    3: temporal dead zone is term to described the state where variable are in the scope but they are not yet accessed until it is initialized
    4. The TDZ starts at the beginning of the block where the variable is declared and ends when the variable is initialized..
 */

// =======================================================================================================================

/* 
? Write a function that defined temporal dead zone
*/

function showTDZ() {
  console.log("Function started");

  try {
    console.log(counter); // ❌ ReferenceError (TDZ)
  } catch (e) {
    console.log("Error accessing 'counter' before declaration:", e.message);
  }

  let counter = 10; // TDZ ends here

  console.log("After initialization, counter =", counter); // ✅ 10
}

showTDZ();

// =======================================================================================================================
/*
# used of hoisting 
1: hoisting enable us to extract value of variable and function even before initialization. 
2. without getting the error and this happening due to first phase of execution context is creation phases

*/
