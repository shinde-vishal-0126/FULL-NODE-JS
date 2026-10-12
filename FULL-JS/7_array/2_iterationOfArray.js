/*
# traversal and array (iteration of array) (traversal i.e navigate through the array)

#  Following are way to traversal/or iterate through the array
    1: for loop
    2. for in loop
    3. for of loop
    4. forEach loop
    5. map()

*/

/*
# 1. for loop :
    1: for loop (for loop in JavaScript is a control flow statement that allows you to execute a block of code repeatedly, based on a condition.
    2: for loop used to repeated section of code number of times (i.e iterate the array for given number of time.)
*/
const Names = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Edward",
  "Fiona",
  "George",
  "Hannah",
  "Ian",
  "Julia",
];
for (let i = 0; i < Names.length; i++) {
  console.log(Names[i]);
}

/*
# 2. for in loop :
    1: if you used for in loop to iterate the array and it return the index number(index value) of each and every element
    2: for in loop only return object properties (i.e iterate over the properties (including indices) of an object)
    3: i.e iterate only enumerable properties of the object. (i.e iterate over the key of an object which have their enumerable property.)
*/
for (let ele in Names) {
  console.log(ele);
}

// ex: 2
const obj = { a: 1, b: 2, c: 3 }; // normal object are enumerable object not a iterable object
for (let key in obj) {
  console.log(key);
}



/*
 # 3. for of loop :
    1: used to iterating of and array and it return value of each and every element of an array
    2: for of loop is used to iterate over the value of an iterable object such ans array, string, or other iterable object.
*/

for (let value of Names) {
  console.log(value);
}

// ex: 2
//  here show the obj1 is not iterable object so here show the error
// obj2  is enumerable object
const obj2 = { a: 1, b: 2, c: 3 };
// for (let val of obj2) {
//   console.log(val);
// }
// The error occurs because obj2 is not an iterable object.
// Objects in JavaScript (like obj2 in your code) are not directly iterable using the for...of loop. The for...of loop is specifically designed for iterables, such as arrays, strings, maps, and sets.

// # to fix above used following solution

// 1. iterate over the value of non iterable object
for (let values of Object.values(obj2)) {
  console.log(values);
}

// 2. iterate over the key of an non iterable object.
for (let keys of Object.keys(obj2)) {
  console.log(keys);
}

// 3: iterate over entries (key-value) form not iterable object
for (let [key, value] of Object.entries(obj2)) {
  console.log(key, ":", value);
}

/*
# what is differences between for in loop and for of loop 
    # 1: for in :
        1: iterate over the enumerable properties of an object 
        2: Generally used for the iterating over the object properties 
        3: return the object key (property name of the object)

# NOTE :
    1. for in loop Generally avoided with array because it iterate over the indices and include all
    2. used with only enumerable properties
*/
const obj1 = { a: 1, b: 2, c: 3 };
for (const value in obj1) {
  console.log("value", value);
}

/*
# for of loop :
    1: iterate over the value of an iterable object e.g (array, map, set etc )
    2: Generally used for the iterating over array or other iterable object 
    3. return the value of iterable object 

# NOTE :
    1: for of loop satiable for array or array like object as it iterate over the actual value
    2: for of loop not directly used on plain objects because they not iterable
    3: so you can used for of with objects by iterating over their properties using method like Object.key() , Objects.Value() , or Objects.entries()

*/
const num = [1, 2, 3];
for (const number of num) {
  console.log(number);
}

/*
#  * OBJECT.KEYS() :
    1: object.keys() return an array of a given objects own enumerable property names (i.e Iterates over the property names (keys) of the object.)
*/

const person = {
  name: "vishal",
  age: 30,
  city: "junnar",
};
for (const key of Object.keys(person)) {
  console.log(key);
  console.log(person[key]); // here return value also
}

/*
#  Object.values();
    1: Object.values() return an array of a give object own enumerable property value  (i.e : Iterates over the property values of the object.)

*/
for (const value of Object.values(person)) {
  console.log(value); // here return value
}

/*
# Object.entries()
    1: return an array of give object own enumerable popery [key, value] pairs
    2: iterates over the [key, value] pairs of the object (which is useful when you need both the property name and value together.)

*/

for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}

/*

# NOTE
    1: normal object are not iterable by default  
    2: normal objet are enumerable by default 
    3:array are iterable by default also enumerable but only for the indices

*/
