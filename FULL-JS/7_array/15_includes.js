
/*
# includes()
    1: includes(searchElement, fromIndex)

    2: includes() method in array is determine weather certain element are present or not in the array

    3. it return true or false if present it return true otherwise false

    4: include method work in forward direction 

    5: includes() method compare searchElement to the element of an array using sameValue zero algorithm.

    6: includes method also iterate the spare array or empty slot of the array (i.e it check if the given searchElement are present or not in array);

    7. includes() method are work with -ve index.

*/

// # example
const empty = [1,2,3]
// include value return boolean value true or false
const result = empty.includes(2);
console.log('result',result); // return true

// # example 
// include() method having the second argument using this you have to start searing  form that given index in forward direction 
// #  NOTE:  Formal index is grater then or equal to the array length of an array then false is return
const man = [1,2,3]
const res = man.includes(3,3);
console.log(res); // return false because 3 index element are not perse


// # example 
// computed index is less then or equal to zero then the entire array will be searched
const array = ["a","b","c"];
const search = array.includes("c",-100)
// The value to search for is "c".
// The fromIndex is -100.
// Since -100 is a large negative number,
// array.length + fromIndex. Here
// 3+ (-100) (it return negative value then start form the searching form he zero)
// it effectively starts the search at the beginning of the array. When the negative fromIndex is smaller than the negative length of the array, it defaults to 0.
// ex -100 is smaller then the array.length then start form the 0  -100 is smaller then the 3 ;
// "c" is present in the array at index 2.
// Thus, the method returns true.
console.log('search',search);

const array1 = ["a", "b", "c"];
const search1 = array1.includes("c", -1);
console.log('search', search1);
//The value to search for is "c".
//The fromIndex is -1.
//A negative fromIndex means the search starts at array.length + fromIndex. Here:
//array.length is 3.
//fromIndex = -1 translates to 3 + (-1) = 2.
//So, the search starts at index 2 (the last element in the array).
//At index 2, the value in the array is "c", which matches the value being searched for.
// # The method returns true because "c" is found starting at index 2.


// # example
// includes method used in spare array. undefined NaN, null, empty string 
const ab = [2,3,4,5, ,8 , '', null, undefined, NaN];
console.log(ab.includes( )); //true
console.log(ab.includes(undefined)); //true
console.log(ab.includes(null)); //true
console.log(ab.includes('')); //true
console.log(ab.includes(NaN)); //true