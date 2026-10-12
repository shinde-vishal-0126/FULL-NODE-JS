
/*
# concat()
    1: syntax: array.concat(arry1, array)

    2: The concat() method in JavaScript is used to merge two or more arrays. 

    3: This method does not modify the original arrays but instead returns a new array that contains the elements of the original arrays combined.

    3: concat method used to merge two or more array Does not modified the original array(concat it is non-mutating method)v return new array

    4: The **concat()** method is used to merge two or more arrays (or values) into a new array. It does not modify the original arrays — it's non-mutating.

*/

const array3 = ['a','b','v'];
const array2 = ['d','e','f'];
newArray = array3.concat(array2);
// return new array
console.log(newArray);
console.log('Does not modified the origan arry', array3);
console.log(array2);

// # Concatenating value to an array
const letters = ['a','b','c'];
const newConcat = letters.concat(1,[2,3]);
console.log(newConcat);

// concatenating nesting array
const abc =[[1]];
const abc2 = [2,[3]];
const abcd = abc.concat(abc2);
console.log(abcd); // return new array
// push method return length of the new array or modified array
const newArray1 = abc[0].push(4);
console.log('newArray',newArray1);
const de = abc.concat(abc2);
console.log(de);


// concatenating on spare array
const array123 = ['a','b','c', , 2];
const concatArray = array123.concat([4,5,[6]]);
console.log(concatArray);
const concatArray1 = array123.concat(3,[,[5],]);
console.log(concatArray1);


// Concatenating with an Empty Array
const array1 = [1, 2, 3];
const emptyArray = [];
const result = array1.concat(emptyArray);
console.log(result);  // Output: [1, 2, 3]