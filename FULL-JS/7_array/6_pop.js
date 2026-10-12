/*
Pop();
    - syntax: array.pop()
    - pop() method remove the last element of an array 
    - pop() method return the remove element of an array
    - pop() method are mutating method (i.e it change the original array or length of the array rather then creating new array)
    - pop() method does not create new array.
    - if array is Empty then it return undefined and original array is not modified 
    - Def : It is used to remove the last element from an array. It modifies the original array and returns the removed element.
    - The pop() method removes the last element from an array, modifies the original array, and returns the removed element. 
    - If the array is empty, it returns undefined.
*/

// ex-1
const NUMBERS = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8, null, undefined];
console.log(NUMBERS.length); // 10
// pop method return remove element form the array
const Remove = NUMBERS.pop();
console.log(Remove); //

// so it modified the origional array 
console.log(NUMBERS);
// Here return the modified length or the array
console.log(NUMBERS.length);

//ex-2 
// in POP() method if the array is empty then it return undefined and does not modified the original array
const array = [];
const removeElement = array.pop();
// Here return the undefined became it having the empty array
console.log(removeElement);
// Here empty array so not modified the original array
console.log(array);


// ex-3 Removing Multiple element at a time 
// - Remove Multiple element are not possible pop() remove only one element at a time.
console.log(NUMBERS.pop());


/*
Q. Why is pop() a mutating Method.
    - A mutating method changes the original array. insted of creating new array 
    - so it is mutating method modifiied original array by removing the last element

Q. What does pop() return 
    - pop() Method return remove Element from an array.

Q. Time complexity 
    - removing last element very efficient
    - Because 
        - read the last element Decrease the array length it does not shift other element 
    - O(1)

Q. What happen if you call pop() on empty array
    - Nothing is removed, the array staty empty and undefined is return 

Q. can pop() remove multiple element at once 
    - No 
    - Each call  removes only one element 
    - To remove multiple element call Pop() method multiple times or used method like slice().

Q. when should you ussed pop() ?
    - Remove the last element();
    - implement a stack(lio);
    - Process element form end
    - remove temporary item 

Q. pop() vs push()

push()
    - add element(one or more) at the end.
    - parameter: one or more element 
    - return new array length 
    - Not create new array 
    - Time complexity o(1)
    - if the empty array it insert new element are return length of new array.

push()
    - remove the last element 
    - parameter: does not have parameter
    - return remove element form the array
    - not create new array 
    - Time complexity O(1)
    - if array is empty return undefined and origional array are not modified.
    
*/


//Q. also pop() method work on array like objects
// pop() are generic method it can work on array-like object using call();
const obj = {
    0: 'A',
    1: 'B',
    2:'c',
    length:3
}
const removed = Array.prototype.pop.call(obj);
console.log(removed)


// Q Pop() method with Arguments 
function test(){
const removed = Array.prototype.pop.call(arguments);
console.log(removed);
console.log(arguments);
}
test(10,20,30);

