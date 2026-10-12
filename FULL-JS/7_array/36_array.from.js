/*
# array.from()
    1: syntax: Array.from(arrayLike, map_function, thisArg)

    2: Array.form() is static method

    : The **Array.from()** method creates a new, shallow-copied Array instance from:

    3: Converts  array-like or iterable objects to a new array instance.

    4: create new , shallow copy, array instances form an iterable or array like objects return or create new array instances; does not modified original array or arraylike object 

    5: //  arrayLike : an array like or iterable object to convert to an array 

    6: array.form() method are iterable.
    7: Array.form() it is not mutating method (does not modified original array.)

map function: 
# what is iterable object in javascript:
    1:String,
    2: nodeList
    3:argument object
    4: set
    5: map
    6: custom object with length property

# what is return Array.form() method ?
Array.form() method return the new array instances;
*/


// # this converted into the array
const str = "Hello";
const arr = Array.from(str);
console.log(arr); // [ 'H', 'e', 'l', 'l', 'o' ]
console.log(str); // Hello

// # convert set into the array
const set = new Set([1,2,3,4]); 
const newSet = Array.from(set);
console.log(newSet);// [ 1, 2, 3, 4 ]

// # array from a map 
const map = new Map([[1,2],[2,4],[4,8]])
console.log(Array.from(map)); // [ [ 1, 2 ], [ 2, 4 ], [ 4, 8 ] ]

// Example :
const mapper = new Map([
    ["1","a"],
    ["2","b"]
]);
console.log(Array.from(mapper.values())); // [ 'a', 'b' ]
console.log(Array.from(mapper.keys())); // [ '1', '2' ]


// # Array from an array-like object
function f(){
    return Array.from(arguments)
}
const data = f(1,2,3);
console.log('data', data);// data [ 1, 2, 3 ]

// using arrow function and array.form();
console.log(Array.from([1,2,3], (x)=>{
    return x + x
}))// [ 2, 4, 6 ]

/*
 # When to Use Array.from()
    1: To convert non-array iterables (e.g., strings, NodeLists, Sets, Maps) into true arrays.
    
    2: When you need to transform or map items in one step while creating an array.

    3: To easily generate arrays with a specific size and initialized values.

Generate an array of numbers from 1 to 10
const sequentialNumbers = Array.from({ length: 10 }, (_, index) => index + 1);
console.log(sequentialNumbers);
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


# what is differences between array.from() and array.of()
    : both are used to create new array.

# array.of():
    1: create new array instances with variable number of arguments (regardless of number or type of arguments.) 


# array.from():
    1: convert and create array like or iterable object to new array instances.


| Feature                | `Array.of()`                                   | `Array.from()`                                                           |
| ---------------------- | ---------------------------------------------- | ------------------------------------------------------------------------ |
| **Purpose**            | Creates an array from **individual values**    | Creates an array from an **iterable or array-like** object               |
| **Input Type**         | Individual values (not iterable)               | Iterable (e.g., string, Set) or array-like (e.g., `arguments`, NodeList) |
| **Mapping Function**   | ❌ Not supported                                | ✅ Optional second argument (map function)                                |
| **Use Case**           | Safe way to create arrays with specific values | Convert strings, Sets, Maps, or `arguments` to arrays                    |
| **Array-like Support** | ❌ No                                           | ✅ Yes                                                                    |
| **Returns**            | New array of passed values                     | New array from iterable or array-like input                              |
| **Mutates Original?**  | ❌ No                                           | ❌ No                                                                     |


*/