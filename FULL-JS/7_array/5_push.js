/*
push()  
    - used to insert the element at the end of the array
    - syntax : array.push(element);
        - return new length of the array 
    - The push() method is one of the most commonly used array methods in JavaScript. 
        - It is used to add one or more elements to the end of an array. 
    - It modifies the original array and returns the new length of the array. (i.e append value to array0)
    - Push() method add specified element at the end of the array
    - push() method are mutating method (i.e they are modified the original array rather then creating new array)
    - i.e push method mutating method because when you push element it add new element at the end and it return new array length instead of creating new array .
    - i.e it modified the original array or modified original array with new element and new length
*/


// Ex.1
const num = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];
console.log(num.length)
const newNum = num.push(30);
// Here push method return new length of array and add give element at the end of the array
console.log(newNum);
// so here modified the origional array adding by new element at the end.
console.log(num);


// ex. 
// also using push method you have to push multiple value
num.push(40, 50, 60);
console.log(num);



//Ex.1
//  also using spread operator you have to push one array into another array
const num1 = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];
const num2 = [11, 12, 13, 14, 15];
const num3 = num1.push(...num2);
const num4 = num1.push(...num2);
console.log(num3);
console.log(num4);
console.log(num1);



//ex-3
//  also add the undefined value to the array 
num1.push(undefined);
console.log(num1)

// ex-4
// This adds the value null to the end of the array and logs the new length of the array, which is now 13.
console.log(num1.push(null));

//ex-5
//  also work with empty string.
// also call push method on nonArray object using the call method
// like Array.prototype.push.call(arraylinked, 1,2 ,2)
console.log(num1);
num1.push('');
console.log(num1);



// push() using call() : push is generic method  it can work array-like object 
const obj = {
    0 : 'A',
    1: 'B',
    length:2
}
Array.prototype.push.call(obj, 'c');
console.log(obj)
// call() changes the this value.


// Q. Why is push() a mutating Method ?
// A mutating method changes the original array 


// Q. pusing one array into another array 
let y = [1,2,3]
let z = [4,5,6]
let ry = y.push(z)
let zy = y.push(...z)
console.log(ry)
console.log(y)



// Q push() with Arguments Object 
function xyz(){
    Array.prototype.push.call(arguments,100,800)
    console.log(arguments)
}
xyz(1,1,2)

/*
Q. What is the difference between arr.push(arr2) and arr.push(...arr2)?
    -  arr.push(arr2) adds arr2 as one nested array element.
    - arr.push(...arr2) adds each element of arr2 individually.


Q. What is the time complexity of push()?
    - O(1) for adding a single element at the end (amortized).
    - O(k) when adding k elements in one call.


Q. When Should You Use push()?
 - Use push() when you want to:
    - Add an element to the end of an array.
    - Add multiple elements at once.
    - Build an array dynamically.
    - Append user input.
    - Collect results in loops.
    - Merge arrays using the spread operator.



    */