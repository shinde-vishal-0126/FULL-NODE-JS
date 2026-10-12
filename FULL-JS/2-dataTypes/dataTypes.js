/*
@ DATA TYPES

Q. What is  DATA TYPES
    - A data type defines what kind of data can be stored and manipulated within a variable.
    - It classifies the data so the interpreter understands how to perform operations on it.
    - data type defined which type of data are stored in variable
    - A data type is a classification of data that tells the programming language how to store, interpret, and manipulate a value.
    - A data type specifies the kind of value a variable can hold.

@ TYOES IF DATA

Q. Wht is TYPES OF DATA
    - JavaScript Data Types
                              JavaScript Data Types
                                      │
              ┌───────────────────────┴────────────────────────┐
              │                                                │
              ▼                                                ▼
      Primitive Data Types                         Reference (Non-Primitive)
        (Stores Value)                              (Stores Address)

        🔢 Number      → 10, 20.5, -5, Infinity, NaN        📦 Object → { name: "Vishal", age: 26 }
        📝 String      → "Hello", 'JavaScript', `ES6`       📚 Array  → ["Apple", "Mango", "Banana"]
        ✅ Boolean     → true / false                       📅 Date   → new Date()
        ❓ Undefined   → undefined                          ⚙️ Function → function greet() {}
        🚫 Null        → null                               🗺️ Map      → new Map()
        🔢 BigInt      → 12345678901234567890n              🧩 Set      → new Set([1, 2, 3])
        🔑 Symbol      → Symbol("id"), Symbol()


# JavaScript Data Types
Primitive (Stores Value)
──────────────────────────────────────────────────────────
🔢 Number      → Stores numeric values (integers & decimals)
📝 String      → Stores text (sequence of characters) enclosed in single or Dobule Quotes.
✅ Boolean     → Stores logical values (true or false)
❓ Undefined   → Variable declared but not assigned a value, it represent absences of a value, or an Uninitialized variable.
🚫 Null        → Represents an intentional empty or missing value (it is often used to explicitly indicate that a variable or object propery has no assign value.)
🔢 BigInt      → Stores very large integers beyond Number limits (represent integer of arbitrary precision) : available since 2020
                -> let bigNumber = 123456789012345678901234567890n; (Add n at the end)
🔑 Symbol      → Stores a unique and immutable identifier

Reference (Stores Address)
──────────────────────────────────────────────────────────
📦 Object      → Stores data as key-value pairs
📚 Array       → Stores an ordered collection of values
📅 Date        → Stores and manipulates dates and times
⚙️ Function    → Stores reusable blocks of code
🗺️ Map         → Stores key-value pairs with keys of any data type
🧩 Set         → Stores a collection of unique values


! 1. primitive dataTypes
  - Fundamental data type
  - Built into data type JavaScript
  - Fixed Size (size and type of variable value are specified)
  - Immutable (An immutable value cannot be changed after it is created.)
  - Stored by Value (call by value)
  - it has no additional method
  - Think of primitive values as small individual items.
  - Changing one doesn't affect the other.
    Primitive Value
      100
       │
       ▼
    +--------------+
    | Variable Box |
    +--------------+
    !Copying
    let a = 10
    let b = a
    a ───► 10
    b ───► 10
Independent copies : Changing one doesn't affect the other.

! Non-Primitive Types
  - Derived Types (user defined data type)
  - Dynamic Size (size & type of date are not specified)
  - Mutable (A mutable object is something whose content can be changed after it is created.)
  - Stored by Reference (call by refrences)
  - Instead of storing the actual data, variables store a reference (address) to where the data lives.
  - Both variables point to the same object. If one changes.. Affect to the other.
        Variable
        │
        ▼
        Address
        │
        ▼
    +-----------------------+
    | Actual Object in Heap | : Copying Reference Types
    +-----------------------+
    let person1 = {
    name: "Vishal"
    }
    let person2 = person1
    person1
      │
      │
      ▼
    +----------------+
    | name: Vishal   |
    +----------------+
      ▲
      │
    person2 : Both variables point to the same object.
- If one changes... affect to the another.

# Easy rule to remember:
    - Primitive = Stores the value itself 📦
    - Reference (Non-Primitive) = Stores the address of the value 🏠➡️📦

# quick comparision
| Feature  | Primitive                                                | Non-Primitive                           |
| -------- | -------------------------------------------------------- | --------------------------------------- |
| Stores   | Actual Value                                             | Memory Reference (Address)              |
| Size     | Fixed                                                    | Dynamic                                 |
| Mutable  | ❌ No (Immutable)                                         | ✅ Yes (Mutable)                         |
| Copy     | Independent Copy                                         | Shared Reference                        |
| Examples | Number, String, Boolean, Null, Undefined, BigInt, Symbol | Object, Array, Date, Function, Map, Set |

Primitive vs Non-Primitive
┌─────────────────────────────┬────────────────────────────────┐
│      Primitive              │      Non-Primitive             │
├─────────────────────────────┼────────────────────────────────┤
│ Stores Value                │ Stores Reference (Address)     │
│ Simple Data                 │ Complex Data                   │
│ Immutable                   │ Mutable                        │
│ Compared by Value           │ Compared by Reference          │
│ Independent Copy            │ Shared Reference               │
│ Less Memory                 │ More Memory                    │
│ Faster Access               │ Slightly Slower Access         │
└─────────────────────────────┴────────────────────────────────┘
q. Primitive vs. Non-Primitive (Reference) Data Types

| **Feature**       | **Primitive Data Types**                                                        | **Non-Primitive (Reference) Data Types**                                                               |
| ----------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Definition**    | Store a single, simple value.                                                   | Store collections of values or complex data.                                                           |
| **Stored In**     | Value is stored directly in the variable (typically in Stack Memory).           | Reference (address) is stored in the variable (Stack), while the actual data is stored in Heap Memory. |
| **Mutability**    | **Immutable** – Values cannot be changed. Any modification creates a new value. | **Mutable** – Object contents can be changed without creating a new object.                            |
| **Comparison**    | Compared by **Value**.                                                          | Compared by **Reference (Memory Address)**.                                                            |
| **Copy Behavior** | Copying creates a **new independent value**.                                    | Copying creates a **new reference** pointing to the **same object**.                                   |
| **Memory Usage**  | Uses less memory.                                                               | Uses more memory.                                                                                      |
| **Performance**   | Faster because the value is accessed directly.                                  | Slightly slower because JavaScript follows the reference to access the actual data.                    |
| **Examples**      | `Number`, `String`, `Boolean`, `undefined`, `null`, `BigInt`, `Symbol`          | `Object`, `Array`, `Function`, `Date`, `Map`, `Set`, `RegExp`                                          |
*/
/*
@ CALL BY VALUE & CALL BY REFRENCES

Q.  What is call by refrences & call by Value
    - JavaScript always passes arguments by value,
    - but for objects,arrays, and functions that value being copied is the the refrences (Meory address) not the object itself.
    - Therefor the most accurate term is call by sharing or call by value of refrences although many people informally call its call by refrencs.

! 1. Call by value
  - Call by Value is a parameter passing mechanism in which a copy of the original value is passed to the function.
  - The function works only with this copied value. Any changes made inside the function do not affect the original variable.
  - A copy of the variable's value is passed to the function. Changing the copied value does not change the original variable.
  - Definition
    - A copy of the original value is passed to the function.
    - The original variable and the function parameter become two completely separate values.
    - If the function changes the parameter, the original variable is NOT affected.
  - Call by Value म्हणजे मूळ (original) value ची एक copy function ला दिली जाते. त्यामुळे function मध्ये केलेले बदल फक्त त्या copy वर होतात, मूळ variable वर नाही.

  function changeValue(num) {
    num = 100;
  `}
  let x = 10;
  changeValue(x)
  console.log(x);`

!2. Call by Reference (Reference Value)
  - In JavaScript, when an object, array, or function is passed as an argument, the reference (memory address) is copied, not the actual object.
  - Both the original variable and the function parameter refer to the same object in memory, so modifying its properties affects the original object.
  - Technically, JavaScript is not true Call by Reference. It copies the reference value, which is why this behavior is more accurately called Call by Sharing.
  - Definition Instead of copying the entire object,JavaScript copies the memory address (reference).
    - Both variables point to the same object.
    - Changing object properties affects everyone using that object.
  - A copy of the reference (memory address) is passed to the function. Both variables point to the same object, so changing the object's contents affects the original object.
  - Object किंवा Array function ला दिल्यावर object ची copy जात नाही, तर त्याचा memory address (reference) ची copy जाते. त्यामुळे दोन्ही variables एकाच object कडे निर्देश करतात. म्हणून object च्या properties मध्ये केलेले बदल original object मध्येही दिसतात.

  function changePerson(person) {
      person.name = "Rahul";
    }
    let user = {
        name: "Vishal"
    };
    changePerson(user);
    console.log(user.name);

# comparision
| Call by Value                     | Call by Reference (Reference Value)  |
| --------------------------------- | ------------------------------------ |
| Primitive Data Types              | Non-Primitive Data Types             |
| Copies the actual value           | Copies the reference (address)       |
| Changes don't affect the original | Property changes affect the original |
| Independent variables             | Shared object                        |
| Examples: Number, String, Boolean | Examples: Object, Array, Function    |

@ call by value vs call by Refrences

| **Feature**           | **Call by Value**                                                     | **Call by Reference (Reference Value)**                                 |
| --------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Definition**        | A copy of the actual value is passed to the function.                 | A copy of the reference (memory address) is passed to the function.     |
| **Original Value**    | Remains unchanged when the parameter is modified inside the function. | Can change if the object's properties are modified inside the function. |
| **Memory Allocation** | A new independent copy of the value is created.                       | Both variables point to the same object in memory.                      |
| **Data Types**        | Primitive Data Types                                                  | Non-Primitive (Reference) Data Types                                    |
| **Copy Behavior**     | Independent copy                                                      | Shared reference                                                        |
| **Comparison**        | Compared by value                                                     | Compared by reference                                                   |
| **Examples**          | Number, String, Boolean, null, undefined, BigInt, Symbol              | Object, Array, Function, Date, Map, Set                                 |
*/
// EX  call by value
function updateValue(num) {
  num = 100;
  console.log("Inside Function:", num); // 100
}
let number = 10;
updateValue(number);
console.log("Outside Function:", number); // 10
// Explanation:
// 'number' is a primitive. A copy of 10 is passed to 'updateValue'.
// Changing the parameter 'num' does not modify 'number' in the calling scope
// ---------------------
//EX.  call by refrences
function updateObject(obj) {
  obj.name = "Rahul";
}

let person = {
  name: "Vishal",
};
updateObject(person);
console.log(person.name); // "Rahul"
// Explanation:
// 'person' is an object. The function receives a copy of its memory reference.
// Both 'obj' and 'person' point to the same object in the heap.
// Modifying 'obj.name' mutates the heap object, affecting the original reference.

//# interview prespective answer
//? Call by Value: A copy of the original value is passed to the function. Any changes made to the parameter do not affect the original variable.
//? Call by Reference(JavaScript behavior): JavaScript does not use true call by reference.When objects, arrays, or functions are passed to a function, JavaScript copies the reference(memory address).Both variables refer to the same object, so changes to the object's properties are visible outside the function. This behavior is more accurately called Call by Sharing or Call by Value of Reference.

// -----------------
/*
@ TYPE OF OPERATOR
# Type of operator
 def : The typeof operator returns a string indicating the data type of the operand.
*/
// 1.
let str = "vishal";
console.log(typeof str);

// 2
const pi = 3.14
console.log(typeof pi)

// 3
const obj = ['apple', 'mango', 'banana'];
console.log(typeof obj)

//4.
const today = new Date();
console.log(today);
console.log(typeof today)
/*
===================================
@ Division by Zero & Arithmetic Edge Cases

A. Non-Zero Numbers Divided by Zero
    - Dividing a positive number by 0 yields Infinity.
    - Dividing a negative number by 0 yields -Infinity.

B. Zero Divided by Non-Zero Numbers
    - Dividing 0 by a positive number yields 0.
    - Dividing 0 by a negative number yields -0.

C. Zero Divided by Zero (0 / 0)
    - Yields NaN (Not a Number).
    - Mathematical Background: In math, When 0 is divided by 0, JavaScript returns NaN (Not a Number)
    - 0 ÷ 0 is an indeterminate mathematical expression because there is no single unique answer.

*/
//Q 1. Non-Zero Numbers Divided by Zero
let num = 7;
console.log(num / 0)  // कोणत्याही शून्य नसलेल्या (non-zero) संख्येला 0 ने divide केल्यास → Infinity
console.log(-7 / 0) //  कोणत्याही शून्य नसलेल्या (non-zero) संख्येला 0 ने divide केल्यास → Infinity जर संख्या नकारात्मक (negative) असेल तर:  -Infinity

//Q 2.  Zero Divided by Non-Zero Numbers
console.log(0 / 7); // कोणत्याही शून्य नसलेल्या (non-zero) संख्येने 0 ला भागले, तरी उत्तर नेहमी 0 येते.
console.log(0 / -8); // पण JavaScript IEEE 754 Floating-Point Standard वापरते, ज्यामध्ये +0 आणि -0 असे दोन प्रकारचे शून्य असतात. जेव्हा 0 ला नकारात्मक (negative) संख्येने भागले जाते, तेव्हा JavaScript -0 दाखवते.

//Q 3 Zero Divided by Zero (0 / 0)
console.log(0 / 0) // शून्याला शून्याने भागणे (0 / 0) tar ans NAN yete
// 0 / 0 चे उत्तर NaN का येते?
// NaN (Not a Number) म्हणजे वैध संख्यात्मक उत्तर मिळू शकले नाही.
/*
----------------
# TYPE CONVERSION
  1. Convert string to number
  - There are three main ways to convert a string to a number:
      1. Unary + Operator: Implicitly coerces value.
      2. Number() Constructor: Explicit wrapper conversion.
      3. parseInt() / parseFloat(): Parses characters left-to-right until it hits a non-numeric character.
  2. number to string.
    - The easiest way to convert a number to a string is by
      1. concatenating it with an empty string "" or
      2. calling String()/toString().

*/
//Q 1. convert number into string
let numberStr = "10";
// Successful Conversions
console.log(typeof +numberStr);          // "number"
console.log(typeof parseInt(numberStr)); // "number"
console.log(typeof Number(numberStr));   // "number"

// Unsuccessful Conversions
let nameStr = "vishal";
console.log(+nameStr);          // NaN
console.log(parseInt(nameStr)); // NaN
console.log(Number(nameStr));   // NaNa

//Q. 2. convert number to string
let digit = 100;
console.log(typeof (digit + "")); // "string"
console.log(typeof String(digit)); // "string"


// Q. some tricky question :
console.log("null converted in to number ", +null); // 0
console.log("undefined converted into number", +undefined); // NaN

/*
@  Deep Dive: NaN (Not a Number)

Q. what is NaN ?
    - NaN stands for not a number Not-a-Number
    - NaN (Not-a-Number) is a special numeric value in JavaScript that indicates the result of an invalid mathematical operation or a failed numeric conversion. It belongs to the number data type.
    - Definition: NaN represents a value that cannot be represented as a valid number, usually because an invalid mathematical operation or numeric conversion was attempted.
    - It is a special value in JavaScript that represents the result of an invalid or undefined mathematical operation.
    - Scope: It is a property of the global object (accessible in global scope).
    -NaN does not have a "default" or "initial" value. It is simply a predefined global constant..
    - Type: typeof NaN returns "number".
    - The isNaN() function checks whether a value is NaN after converting it to a number. It returns true if the resulting value is NaN; otherwise, it returns false.

Q. What is NaN?
  - NaN stands for Not-a-Number.
  - It is a special numeric value in JavaScript that represents the result of an invalid mathematical operation or a failed numeric conversion.
  - It belongs to the number data type.
  - typeof NaN returns "number".
  - NaN is a property of the global object.
  - Number.isNaN() checks whether a value is the special NaN value.
  - The global isNaN() first converts the value to a number and then checks if the result is NaN.

  Q Why do we need NaN ?
  - Imagine JavaScript is asked to perform a mathematical operation, but the result is impossible.
  - ex "Hello" - 10  (so can you substract 10 from 'Hello')
  - it is not possible so insted of crashing the javascript it return NaN.


Q. what is Number.isNaN() (Recommended)
- Checks whether a value is actually the special NaN value.
*/

console.log(Number.isNaN(NaN));      // true
console.log(Number.isNaN(10));       // false
console.log(Number.isNaN("Hello"));  // false
// in above example output is false because You might think it should return true because "Hello" is not a number. But here's why it returns false.
//Q.  what is "Hello" -->
// so type of hello is string  so "Hello "  is string not special NaN value

// Q. What does Number.isNaN() check?
// Number.isNaN() does not ask:"Is this value a number?"
// insted it ask
// "Is this value exactly the special NaN value?"
// Since "Hello" is a string, the answer is No.
// therefore below return false becuase Hello are not cutual pure NaN value
console.log(Number.isNaN("Hello"))

// Q check with actual NaN value
console.log(Number.isNaN(NaN)) // it return true becuase NaN is actual Nan value


//Q.  Then Why Does isNaN("Hello") Return true?
console.log(isNaN("Hello"));
// it return true because isNaN() first converts the value to a number.
// isNaN("Hello") internally js does Number("Hello")  then return NaN


/*
# interview answer
  - Number.isNaN("Hello") returns false because Number.isNaN() does not perform type conversion.
  - It only returns true if the value is exactly the special NaN value.
  - Since "Hello" is a string and not NaN, the result is false.
  - In contrast, the global isNaN() first converts "Hello" to a number, which results in NaN, so isNaN("Hello") returns true.
*/

// 1.
var name1 = "vishal";
var num2 = 200;
console.log("check it is number or not :", isNaN(name1), isNaN(num2)); // true // false

// 2. Because NaN is not equal to any value, you must check for it using isNaN() or Number.isNaN().
let x = "vishal";
console.log(isNaN(x)); // true (not a number)

let sum = 90;
console.log(isNaN(sum)); // false (it is a valid number)


// Q Mathematical Operations with NaN
// With Strings (using +): Coerces NaN to the string "NaN" and concatenates.
// With Numbers: Any mathematical operation involving NaN will result in NaN
var word = "vishal";
var word1 = NaN;
console.log(word + word1); // "vishalNaN" (Concatenation)

var no1 = 30;
var no2 = NaN;
console.log(no1 + no2); // NaN
console.log(no1 - no2); // NaN

// # NOTE: Performing any arithmetic operation (+, -, *, /, %) with NaN will return NaN.
//Q why NaN is not equal to itself
// - According to the IEEE 754 standard, NaN is never equal to any value, including itself.
// The Self-Equality Trap (NaN === NaN is false)
// NaN is the only value in JavaScript that is not equal to itself.
console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false
// Why? Consider parsing two invalid inputs. Both return NaN, but their origins are completely different, meaning they do not represent the same indeterminate state.
let val1 = parseInt("abc"); // NaN
let val2 = parseInt("xyz"); // NaN
console.log(val1 === val2); // false


// Q. How to check for NaN ?
console.log(Number.isNaN(NaN))

console.log(Number.isNaN(10))
// NaN stands for Not-a-Number. It is a special numeric value that represents the result of an invalid mathematical operation or failed numeric conversion.
/*



# NULL & UNDEFINED
! 1. A. The null Value
    - Represents the intentional absence of any object value.
    - The programmer explicitly assigns null.
    - typeof null returns "object".
    - This is a historic, unfixed bug in JavaScript. Objects were marked with type tag 0.
    - Since null represents a null pointer (all zeros), the engine read it as type 0 and returned "object".
    - Meaning: "I intentionally want this variable to have no value."

! B. The undefined Value
    - Represents an unassigned default state (variable declared but no value has been assigned).
    - Automatically initialized by the JS Engine.
    - typeof undefined returns "undefined".
    - Meaning: "Value not assigned yet."
    - JavaScript automatically gives a variable the value undefined if you declare it but don't assign anything
*/
console.log(+null);          // 0
console.log(Number(null));   // 0
console.log(parseInt(null)); // NaN (converts null to "null" first, fails on 'n')
console.log("" + null);      // "null" (String conversion)
console.log(+undefined);          // NaN
console.log(Number(undefined));   // NaN
console.log(parseInt(undefined)); // NaN
/*
Q. null vs undefined (Detailed Comparison)

| **Feature**                 | **`null`**                                                                                         | **`undefined`**                                                                                   |
| --------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Definition**              | A value **intentionally assigned** by the programmer to indicate "no value" or an empty reference. | A value **automatically assigned** by JavaScript when a variable is declared but not initialized. |
| **Meaning**                 | "No value" / "Empty value" / "Nothing intentionally."                                              | "Value has not been assigned yet."                                                                |
| **Assigned By**             | Programmer  (explicitely)                                                                          | JavaScript Engine                                                                                 |
| **Type**                    | Primitive Data Type                                                                                | Primitive Data Type                                                                               |
| **`typeof` Result**         | `"object"` *(Historical JavaScript bug)*                                                           | `"undefined"`                                                                                     |
| **Numeric Conversion**      | Converts to `0`                                                                                    | Converts to `NaN`                                                                                 |
| **Loose Equality (`==`)**   | `null == undefined` → `true`                                                                       | `undefined == null` → `true`                                                                      |
| **Strict Equality (`===`)** | `null === undefined` → `false`                                                                     | `undefined === null` → `false`                                                                    |
| **Example**                 | `let user = null;`                                                                                 | `let user;`                                                                                       |

*/
/*
@ Deep Dive: Infinity
    - Represents a value greater than any other number.
    - typeof Infinity returns "number".*/
console.log(Infinity / Infinity); // NaN
console.log(Infinity - Infinity); // NaN
console.log(Infinity + Infinity); // Infinity
console.log(Infinity % Infinity); // NaN
/* =================
# Truthy and Falsy Values/
Definition:
JavaScript automatically converts values into either `true` or `false`
when they are used in Boolean contexts such as:
- if
- while
- for
- Logical Operators (&&, ||, !)
- Ternary Operator (? :)
This process is called Boolean Coercion.
*/

// @ Falsy Values
// Examples
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(0n));         // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// @ Truthy Values
// Every value other than the 8 falsy values is Truthy.
console.log(Boolean(true));       // true
console.log(Boolean(10));         // true
console.log(Boolean(-5));         // true
console.log(Boolean("Hello"));    // true
console.log(Boolean("0"));        // true
console.log(Boolean("false"));    // true
console.log(Boolean(" "));        // true
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true

/* -
Q2: Is an empty object truthy or falsy?
- Empty objects are Truthy.
- Important Interview Note:
[]  -> Truthy
{}  -> Truthy
Many interview questions intentionally test this concept.
Example:
*/
if ({}) {
  console.log("Executed");
}
/* ============================================================================
12. Mutability vs Immutability
============================================================================
Definition:JavaScript values can be divided into:
1. Mutable
2. Immutable
Understanding this concept is important because it explains why objects
behave differently from primitive values.
*/
// # A. Mutable Values (Non-Primitive Data Types)
/*
Mutable means: The original value can be modified after creation.
Non-primitive values are mutable.These include:
- Object
- Array
- Function
They are stored in Heap Memory.
Variables contain a reference (memory address) pointing to the heap object.
*/
//# Example 1
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// //# Example 2
// let person = {
//   name: "Vishal",
//   age: 25
// };
// person.age = 26;
// console.log(person);
/*
Explanation:
The variable still points to the same object in memory.Only the object's internal data changes.
Reference remains the same. Object content changes.
*/

// # Reference Example
let obj1 = {
  city: "Pune"
};
let obj2 = obj1;
obj2.city = "Mumbai";
console.log(obj1.city); // Mumbai
console.log(obj2.city); // Mumbai
/*
Explanation:
obj1 and obj2 point to the same object in Heap Memory.
Changing one reference affects the other.
*/
// --------------
/*
? Immutable means: The original value cannot be changed.
  - Primitive values are immutable.These include:
  - String
  - Number
  - Boolean
  - BigInt
  - Symbol
  - Undefined
  - Null
They are stored directly in Stack Memory.
*/
//? Example 1
let original = "Hello";
let copy = original;
original = original + " World";
console.log(original); // Hello World
console.log(copy);     // Hello
/*
Explanation:
The string "Hello" is never modified.
Instead,JavaScript creates a completely new string
"Hello World" and assigns it to 'original'.
The variable 'copy' still points to the old value.
*/

//? Example 2
// let num1 = 10;
// let num2 = num1;
// num1 = 20;
// console.log(num1); // 20
// console.log(num2); // 10
/*
Explanation:
Changing num1 creates a new value.
num2 remains unchanged because primitive values are copied by value. */
/* --------------
@ Memory Representation

# Primitive (Immutable)
Stack
-----
num = 10
num = 20
A new value is created.
Old value is untouched.
-----------------------------
# Non-Primitive (Mutable)
Stack                  Heap
-----                  --------------------
obj  ----------->      { name: "John" }
! Changing:
obj.name = "David"
Heap becomes:
{ name: "David" }
Reference remains same.
Object data changes.
*/


/*
Quick Comparison
Property                     Primitive              Non-Primitive
---------------------------------------------------------------------------
Mutable?                     No                     Yes
Immutable?                   Yes                    No
Stored In                    Stack                  Heap
Copied By                    Value                  Reference
Can Modify Original?         No                     Yes
Examples                     String, Number         Object, Array
*/
// Q1: Why doesn't changing one string affect another?
// Strings are immutable.Changing a string creates a brand - new string instead of modifying the original.
// Q2: Why does changing one object affect another variable?
// - Because both variables store the same object reference. They point to the same object in Heap Memory.
// Q3: Which data types are mutable?
// - Object,Array,Function
// Q4: Which data types are immutable?
// - String, Number, Boolean, Null,Undefined,Symbol,BigInt

/*
@ NOTE
For objects, arrays, and functions:
The actual object/value is stored in the Heap memory.
The reference (memory address) to that object is stored in the Stack memory (as the variable's value).
Stack Memory                    Heap Memory
------------                   ------------------
user  ───────────────┐          { name: "Vishal" }
                     │
                     └──────────► Object

- user (the variable) is stored in the Stack.
- The Stack stores the reference (memory address).
- The actual object { name: "Vishal" } is stored in the Heap.


# Primitive values (Number, String, Boolean, null, undefined, Symbol, BigInt) are stored directly as the variable's value. Conceptually:
let a = 10;
let b = a;
b = 20;
Stack
------
a = 10
b = 20
*/
