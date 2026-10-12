/*
# String.valueOf()
Syntax:
value.valueOf()

# What is valueOf()?
    - The valueOf() method in JavaScript is used to return the primitive value of an object.
    - valueOf() is primarily useful during automatic type conversion of objects into primitive values.
    - It is available on many built-in objects such as:
        - String
        - Number
        - Boolean
        - Date
        - Object
        - Array
    - For primitive values, valueOf() generally returns the value itself.
    - valueOf() does NOT modify the original value.
*/

// # Example 1: String valueOf()
// For a string primitive, valueOf() returns the string itself.
let str = "Hello, World!";
console.log(str.valueOf());
console.log(typeof str.valueOf());

// # Example 2: Number valueOf()
// Number.valueOf() returns the primitive number value
let num = 100;
console.log(num.valueOf());
console.log(typeof num.valueOf());

// # Example 3: Boolean valueOf()
let bool = true;
console.log(bool.valueOf());
console.log(typeof bool.valueOf());


// # Example 4: String Object vs String Primitive
// new String("Hello") creates an OBJECT. valueOf() extracts the primitive string value from that object.
let primitiveString = "Hello";
console.log(primitiveString.valueOf());
let stringObject = new String("Hello");
console.log(stringObject);
console.log(stringObject.valueOf());
console.log(typeof stringObject);
console.log(typeof stringObject.valueOf());




// # Example 5: Number Object
let numberObject = new Number(100);
console.log(typeof numberObject);
console.log(numberObject.valueOf());
console.log(typeof numberObject.valueOf());

// # Example 6: Boolean Object
let booleanObject = new Boolean(true);
console.log(typeof booleanObject);
console.log(booleanObject.valueOf());
console.log(typeof booleanObject.valueOf());

// # Example 7: Array valueOf()
// Array.valueOf() does NOT convert the array into a primitive value. It returns the array object itself.
let arr = [1, 2, 3];
console.log(arr.valueOf());
console.log(arr.valueOf() === arr);


// # Example 8: Object valueOf()
// For normal objects: Object.valueOf() returns the object itself.
let obj = {
    name: "Vishal",
    age: 25
};
console.log(obj.valueOf());
console.log(obj.valueOf() === obj);

//  # Example 9: Date valueOf()
// Returns the timestamp in milliseconds.: The exact value depends on timezone/time representation.
// timestamp.Date.valueOf() is useful because it converts a Date object into its numeric
let date = new Date("2026-01-01");
console.log(date.valueOf());
console.log(typeof date.valueOf());






// # Example 10: Automatic Type Conversion
// JavaScript internally converts the Number object into its primitive value.
let numObj = new Number(10);
console.log(numObj + 5);

// # Example 11: Custom valueOf()
// Here we override valueOf().When JavaScript tries to convert the object into a primitive value: user.valueOf() returns: 25 Therefore: 25 + 10 = 35
let user = {
    name: "Vishal",
    age: 25,
    valueOf() {
        return this.age;
    }
};
console.log(user.valueOf());
console.log(user + 10);

// ============================================================
// # valueOf() vs toString()
// valueOf() → Used to get primitive value.
// toString() → Used to get string representation.

let number = 123;
console.log(number.valueOf());
console.log(number.toString());
console.log(typeof number.valueOf());
console.log(typeof number.toString());

/*
# Primitive Values
Primitive values include:
- String
- Number
- Boolean
- BigInt
- Symbol
- Undefined
- Null
For wrapper objects such as:
new String()
new Number()
new Boolean()
valueOf() returns the corresponding primitive value.
*/


/*
# Important Interview Points
    1. valueOf() returns the primitive value of an object.
    2. It is commonly involved in automatic type conversion.
    3. String.valueOf() returns the string value.
    4. Number.valueOf() returns the number value.
    5. Boolean.valueOf() returns the boolean value.
    6. Date.valueOf() returns the timestamp in milliseconds.
    7. Array.valueOf() returns the array itself.
    8. Object.valueOf() returns the object itself by default.
    9. valueOf() can be overridden in custom objects.
    10. valueOf() does not modify the original object/value.
    11. valueOf() is particularly useful for converting wrapper objects into their primitive values.
*/

// valueOf() means:"Give me the actual primitive value used by JavaScript during type conversion."
