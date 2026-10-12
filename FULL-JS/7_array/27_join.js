/*
# join():
    1: join('separator');
    2: join() method is used to join all element of an array into a  string. (by using separator like , ' ) i.e delimiter 
    : return A string that represents the joined array elements. It is often used to convert arrays into strings for display or storage.
    3: by default the element are separated by commas if no separated is provided. 
    4: the join() method create and return new string by concatenating all of the element in an array or array like object
    5: join() method used to join all element of an array into a single string (return the string with all element joined)
    6: the element are separated by a specific separator string which is provided as an argument to the method if no separator provided a comma (',') is used by default 
    7:  return A string that represents the array with the elements joined together, separated by the specified separator.
    8:  The join() method does not mutate the original array; it returns a new string.
    9: if the array length is zero the empty string is returned 
    10. If the array is empty, join() will return an empty string ("").
    11. If the array has only one element, the join() method will return that element, without any separator.
    12. join() is iterative because it processes each element in the array one by one and combines them into a string, respecting the separator between them.

*/
const element = ['fire','air','water'];
const data = element.join();
console.log(data);


// # return the string using any separator
 const data1 = element.join('-')
 console.log(data1)

 const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
 ];

 console.log(matrix.join());;
 console.log(matrix.join(';'));

  // # used on spare array the join() method iterate empty slot as if they have the value undefined
 const arr123 = [];
 console.log("data",arr123.join()); // here it return empty string.
 arr123.push(1,[3,arr123,4],2)
 console.log(arr123.join(";"))