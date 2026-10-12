/*
# toString(): (return a string representation of a value.)
    1:The toString() method is used to convert a value (usually an object or number) into a string representation.

    2:  toString() method used in javascript to convert and return string representation of an object

    3: this toString() method available in build in javascript object like numbers, array, and objects

    4. toString() method behavior depends on the type of the object 

    5: Array object override the toString() method of the object

    6: toString() method internally call the join() method which join the array and return one string containing each array element

*/

// example
const arr = [1,2, 'a', '1a' ];
const data = arr.toString();
console.log(data); // 1,2,a,1a


// # toString() method on spare array
console.log([1, ,3, undefined, null].toString());// 1,,3, ,
// # note:
// toString() method on an array in JavaScript will return a string with commas separating each element, and if the array contains undefined, null, or sparse slots, they are treated as empty strings.



/*
# what is differences between toString() and toLocalString()

    # toString() : 
        1: convert and return the string representation of value or object 
        2: provide the default string representation for build in object and can be overridden in custom object 
        3: used to toString() for simple conversion to string


    # toLocalString():
        1: convert and return string representation of a number or data based on the local-specific formatting rule 
        2: provide detailed options for local-specific formatting including numbers and dates.
        3. toLocaleString() when you need locale-aware formatting for numbers and dates.



| Feature             | `toString()`                   | `toLocaleString()`                                   |
| ------------------- | ------------------------------ | ---------------------------------------------------- |
| **Purpose**         | Converts a value to a string.  | Converts a value to a locale-sensitive string.       |
| **Localization**    | ❌ No localization.             | ✅ Localized format based on language & region.       |
| **Usage**           | Generic string representation. | Used for displaying numbers, dates, currencies, etc. |
| **Custom options**  | ❌ Not customizable.            | ✅ Accepts locale and formatting options.             |
| **Supported types** | Works with all data types.     | Especially useful for `Date` and `Number`.           |


*/