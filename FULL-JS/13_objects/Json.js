/*
# json
1. javascript object notation 
2. json is data interchange format derived form the js object
3. object can easily converted into ja object or js object to json 
4. json is light-weight data interchange format
5. json is string representation of data.
6. json key are display in double inverted commas like "name" (make sure single inverted commas are not work) and value are depends on the data type but key are in double inverted commas 
7. json are always in string format.
8. json key must be double-quoted string and value can be string , boolean, numbers, array , null or other objects. (i.e Supports only specific data types: strings, numbers, objects, arrays, booleans, and null.)
9. json is does not have method is data interchange format 
10. used primary for data exchange over the network (api, or server response)
11. immutable in its raw form (a string) need to be parse into object for manipulation 
12. can be converted to js object using JSON.parse(obj)  and again converted into to json using JSON.stringify(obj)
*/
let person = {
    name:"vishal",
    age:28,
    education:"BE"
}
console.log(person)
// used to convert into the json object
let json = JSON.stringify(person);
console.log(json); // {"name":"vishal","age":28,"education":"BE"}

// convert into the js object (normal object)
let obj = JSON.parse(json)
console.log(obj);



/*
# javascript object :
1. object is collection of key-value pair in memory where used in js code 
2. An object in JavaScript is a collection of key-value pairs, where each key (also called a property) maps to a value.
3. It’s used to store and group related data and functionality (methods).
4. javascript object are actual object 
5. In JavaScript, object keys must be either strings, symbols, or numbers.
6. If you define a key as an identifier (e.g., keyName), JavaScript automatically treats it as a string.
7. If you use a key with special characters (e.g., spaces, hyphens, or reserved words), the key must be enclosed in quotes (either single ' or double " quotes).

const obj = {
  "first name": "John", // Quotes are necessary because of the space
  "1stAge": 30, // Quotes required for keys that start with a number
  "key-with-hyphen": "value",
};

8. JavaScript object keys are always strings, and if they aren't valid identifiers (i.e., they contain special characters or spaces), they must be quoted (either single or double quotes).
9 Numbers and symbols can be used as object keys, but they are automatically converted to strings when used as keys.
10. Supports any valid JavaScript data type, including functions, undefined, and regular expressions.
11. JavaScript objects can have methods (functions) associated with them
12. Used in JavaScript programs for creating and manipulating data structures and logic
13. Mutable and directly editable in JavaScript.
14. JavaScript objects can hold Date objects natively.

*/


// # How to covert object into json object ?
const jsonObj = JSON.stringify(person);
console.log(jsonObj); // it return in json format


// # how to convert json object into normal javascript object ?
const normalObj = JSON.parse(jsonObj);
console.log(normalObj);


/*
# differences between json and js object 
1. js object:
    1. Native data structure used to store key value pair
    2. js object contain function or method, undefined , symbol
    3.const person = {
        name: "Vishal",
        age: 25,
        greet() {
            console.log("Hello");
        }
        };
    4. in js object quotes around key are optional 
        1. trailing commas are not allowed
        2. function and method are allowed 
        3. single quotes are allowed
    5. js object used to normal us to manipulate and store data
    6. js object is actual data where we used in code for manipulation



2. json object:
    1. json is data format used to storing and exchanging data (usually client and server)
    2. json does not have method and function it only support data
    3. {
        "name": "Vishal",
        "age": 25,
        "greet": function() { console.log("Hello"); } // ❌ Not allowed
        }
    4. in json objects quotes around key required (only double quotes)
        1. trailing commas are not allowed 
        2. function and method are not allowed 
        3. single quotes are not allowed 
    5. used to transmit data.
    6. json object is string representation of data 


*/

// # what is output 
const setting = {
    username: 'vishal',
    level :19,
    health :90 
}
// # what happen if you give 2nd argument 
// here as an stringify here only level and health properties are stringify()
const data = JSON.stringify(setting, ["level", 'health'])
 


// # what is differences between json.stringify

// 1. JSON.stringify()

// Converts a JavaScript object/array/value 👉 into a JSON string.

// Use when you want to store or send data (like to a server or in localStorage).


// 2. JSON.parse()

// Converts a JSON string 👉 back into a JavaScript object/array.

// Use when you receive data (like from a server or from localStorage).

// | Feature   | `JSON.stringify()`            | `JSON.parse()`                |
// | --------- | ----------------------------- | ----------------------------- |
// | Input     | JavaScript object/array/value | JSON string                   |
// | Output    | JSON string                   | JavaScript object/array/value |
// | Usage     | Save or send data             | Read or use data              |
// | Direction | JS → JSON                     | JSON → JS                     |
