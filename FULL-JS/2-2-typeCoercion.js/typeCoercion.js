/*
@ TYPE CONVERSION (TYPE COERCION) IN JAVASCRIPT

!Def - Type Coercion is the automatic or implicit conversion of values from one data type to another
- (e.g., converting a string to a number, or a boolean to a string) when performing operations.
- Type Conversion means converting a value from one data type to another.
- converting a string to a number,
- Since JavaScript is a dynamically-typed language, it performs type coercion automatically at runtime when operations are applied to variables of mismatched types.

# 2 type of coversion
                Type Conversion
                           │
          ┌────────────────┴────────────────┐
          │                                 │
          ▼                                 ▼
+----------------------+         +----------------------+
| Implicit Coercion    |         | Explicit Coercion    |
| (Automatic)          |         | (Manual)             |
+----------------------+         +----------------------+
| Done by JavaScript   |         | Done by Programmer   |
| Automatic Conversion |         | Manual Conversion    |
| No Function Needed   |         | Uses Functions       |
+----------------------+         +----------------------+
| 5 + "5"              |         | Number("5")          |
| "10" - 2             |         | String(100)          |
| true + 1             |         | Boolean(1)           |
+----------------------+         +----------------------+


# 1. Implicit Type coercion
    - Implicit Coercion is performed automatically by the JavaScript engine
whenever different data types are used together in an expression.
    - The programmer does NOT manually convert the values. JavaScript decides how to convert them.
    - Flow
        - Different data type - javascript Engine - Automatically convert - return result.


# 2. Explicit Coercion (Manual Type Conversion)
    - Explicit Coercion is performed manually by the programmer using
JavaScript's built-in conversion functions.
    - Flow
        - Orgional value - programmer chooses conversion - Number()
                                                         - String()
                                                         - Boolean()
                                                         - BigInt()
                                                              |
                                                            converted value.



# String Coercion
    - String coercion is triggered when the binary + operator is used & at least one of the operands is a string.
    - in this case javascript behaves as string concatination rather then addition.
    - EX.
*/
console.log(1 + "2");
console.log('Hello' + true)
console.log(null + 'value')
console.log(undefined + 'Hi')
console.log(NaN + 'Yes')


/*
# Numeric Type coercion
    - Numeric coercion is triggered by :
        1. Mathematical operation Substraction (-) , Multiplication (*) , Division (/) , Module (%)
        2. comparison operatorn :  < , >, <=, >=
        3. Unary + operator (e.g +val)

    - Standard convertion Mapping to Numbers
        1. true : 1
        2. false : 0
        3. null : 0
        4. undefined : NaN
        5. "" (empty string) : 0
        6. Numeric string ("42") : 42
        7. Non Numeric String ('Vishal') : NaN

    - Ex.

*/
console.log("5" - 2) //(String coerced to Number 5)
console.log("10" * "20") // 20 (Both strings coerced to Numbers)
console.log("10" / "3") // (Both strings coerced to Numbers)
console.log(true + 1) //  (true coerced to 1)
console.log(false + 3) // (false coerced to 0)
console.log(undefined + 8) // NaN (undefined coerced to NaN)
console.log(null - 8) // null coercion as 0
console.log("430") //  42 (unary + coerces "42" to number 42)
console.log(+'vishal shinde') //NaN (non-numeric string coerced to NaN)


/*
# Boolean Coercion
    - Boolean coercion occure in logical context where a boolean value is expected
    - such as if statement, loop condition, or with Logical operator like &&, || , !

    1. Falsy value (evaluate to false)
        - false, zero (0, -0, 0n), "" (empty string), null, undefined, NaN

    2. Truthy value (evaluate to true)
        - All other value including empty array [], empty object {}.

    - Double Negation (!!) Operator Trick
        - Developer Frequently use !! to explicitly convert a value into its boolean equivalen .
    - Ex.

*/
console.log(!!"Hello") // truthy string
console.log(!![])  // empty array is truthy
console.log(!!null) // null is falsy value
console.log(!!0)
console.log(!!{}) // empty object is truth value

/*
# Loose Equality vs Strict Equlity
    - Most imp topic is how comparison operators under type coercion rules


# 1. Strict Equality(===);
    - Rule :
        - Compare both the value & the type.
        - so no type coercion is performed
        - Explanation NaN === NaN is false
        - Ex.

*/
console.log(5 === "5") // strict equality check both type as well as value
console.log(true === 1)  // return becase it check boolean vs number
console.log(null === undefined)
/*

# Losse Equality (==);
- Definition:
- The Loose Equality (==) operator compares two values after performing
- automatic type conversion (Type Coercion) if the operands have different
data types.
  - It compares only the values, not the data types.
  - Rule
  - compare only values after performing type coercion if type are different
  -  Loose Equality Coercion Steps: Comparing Number and String: Converts the string to a number.
  -    5 == "5" - "5" is converted to 5  5 == 5 (returns true).
  - Comparing Boolean and other types: Converts the boolean to a number (true to 1, false to 0).
    true == "1" → true becomes 1, "1" becomes 1  → 1 == 1 (returns true).
  - Comparing Null and Undefined: Special case: null == undefined is hardcoded to return true.
  - They do not coerce to numbers under == comparison; they only equal each other or themselves.
  - Comparing Objects and Primitives: Converts the object to a primitive using valueOf() or toString().

*/
console.log(5 == "5");           // true (string coerced to number)
console.log(true == 1);          // true (boolean true coerced to 1)
console.log(null == undefined);  // true (specifically defined equality)
console.log(false == "");        // true (false -> 0, "" -> 0)
console.log(0 == "");            // true (0 -> 0, "" -> 0)
console.log(0 == "0");           // true (0 -> 0, "0" -> 0)

// Q1: What is the output of [] + [] and why?
// Answer: "" (an empty string). Explanation: The + operator triggers string coercion. Since arrays are non-primitive, they are converted to primitives using toString(). [].toString() returns "". Thus, "" + "" results in "".

// Q2: What is the output of [] + {} and why?
console.log([] + {})
// Answer: "[object Object]" (as a string).
// Explanation: The + operator triggers coercion.
// The empty array [] is converted to primitive string "", and the empty object {} is converted to primitive string "[object Object]". Concatenating them results in "" + "[object Object]" = "[object Object]".

// Q3: What is the output of {} + []?
// Answer: It depends on how it is executed!
console.log({} + [])
// In a browser console (at the start of a line): It returns 0. The {} is treated as an empty code block (which does nothing), followed by + [] (unary + on an empty array). +[] coerces [] to "", and +"" yields number 0.
// Inside an expression (e.g. console.log({} + [])): It returns "[object Object]". The {} is treated as an object literal, coerces to "[object Object]", and concatenates with "" from the array.


// Q4: Explain the result of "5" + 3 vs "5" - 3.
// Answer: "5" + 3 results in "53"
//  (string concatenation), whereas "5" - 3 results in 2 (numeric subtraction).
// Explanation: The + operator has a dual purpose of string concatenation and numeric addition.
// If one operand is a string, it prioritizes concatenation.
// The - operator is strictly mathematical, so it coerces "5" to the number 5 before subtracting.

// Q1. What is Type Coercion?
// Type Coercion is the automatic conversion of one data type into another
// performed by the JavaScript engine.

// Q2. What is Type Casting?
// Type Casting is the manual conversion of one data type into another
// using functions like Number(), String(), and Boolean().

// Q3. Which operators usually perform implicit coercion?
// +, -, *, /, %, ==, <, >, <=, >=, &&, ||

// Q4. Which built-in functions perform explicit coercion?
// Number()
// String()
// Boolean()
// BigInt()


