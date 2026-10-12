/*
# array.of()

    1: array.of(element)

    2: array.of() method in javascript is used to create new instances with a variable number of arguments.regardless of the number or type of the arguments.


    3: It ensures that the arguments passed are treated as elements of the array,not as a length specifier (which happens when using the Array() constructor with a single number argument).

    4: Array.of() static method create new array instances with a variable number of arguments regardless of the number or type of arguments

    5:  it is different from the  ARRAY constructor (array.of() which behave differently depending upon number of arguments)return new array instances
*/

const array = Array.of(7);
console.log(array); // [ 7 ]

const array2 = Array.of(1, 2, 3);
console.log(array2); // Output: [1, 2, 3]

/*
# what is differences between array.of() and array constructor;

# array.of():
    1: multiple argument create an array with provided element 
    i.e create new array instances with variable number of arguments regardless number and type of arguments

    2. create a array with one numeric element.

    3: array.of(element) always creates an array with provided argument as element when single argument is passed to array() it create an array with that length(create an array with that single number as an element)
    Array.of(7) creates an array with a single element [7].

*/
const array3 = Array.of(7);
console.log(array3); // Output: [7]

/*
# array constructor:
    1: constructor create an array of the specified length.

    2. if you pass the multiple argument then it create an array with the provided element

    3. create an new array instances behavior various based on the number and type of the argument.

    array(7) create and array with 7 empty slots (is an array of length 7)
    */

const array1 = Array(7);
console.log(array1); // Output: [ <7 empty items> ]


const array4 = Array(1, 2, 3);
console.log(array4); // Output: [1, 2, 3]

const d = Array(4,5,6)
console.log(d)


// # if you not pass any argument it return empty array
const arr5 = Array.of();
console.log(arr5); // []
