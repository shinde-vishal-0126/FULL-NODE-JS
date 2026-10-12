/*
Shift()
    - syntax: array.shift()
        - does not accespt any parameters.
        - Array has element - return the removed first element  
        - Array is empty - return undefined.
    - shift() method are remove the first element of an array (so Every element has moved one position left.)
    - shift() method return the remove element form the array
    - shift () method are the mutating method (its change the length of the original array or modified the original array)
    - in shift() method if the array is empty then it return the undefined & if the array is empty then not modified the original array
    - The shift() method is the opposite of the pop() method. 
        - POP() method remove the last element 
        - shift() method remove the first element 
    - like pop(), shift() modifies the original array, but unlike pop(), it must move every remaining element one position to the left so making it slower
    - The shift() method remvoe the first element from an array , modifies the origional array and return the removed element.  if the array is empty it return undefined.
    - shift() method no new array created. (The origional array Modified)

*/

// ex-1
const NUMBERS = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];
console.log(NUMBERS.length); // 10
const Remove = NUMBERS.shift();
// pop method return remove element form the array
console.log(Remove); //
console.log(NUMBERS);
// Here return the modified length or the array
console.log(NUMBERS.length);



//ex-2
//  in POP() method if the array is empty then it return undefined and does not modified the original array
 const array = [];
 const removeElement =  array.shift();
 // Here return the undefined became it having the empty array
 console.log(removeElement);
 // Here empty array so not modified the original array
 console.log(array);


// # Example
// using shift() method in while loop 
// shift() method used in condition inside while loop 
// shift() method in while loop remove the next element form an array until array is empty
const name = ['vishal','shinde', 'at','post'];
while(typeof( i = name.shift()) !== 'undefined'){
    console.log(i)
}


// Q, Does shift() work with Different Data types ?
const arr = [
100,
"JavaScript",
true,
null,
undefined,
{
name:"Ram"
},
[1,2,3]
];
// Yes 
console.log(arr.shift())
// Arrays in JavaScript can contain any data type, and shift() always removes the first element regardless of its type.


// Q. Shift() on array like object 
// Like push() & pop() shift() is a generic method
// it work on array-like objects using call()
const obj = {
    0: "A",
    1: "B",
    2: "C",
    length: 3
};

const remove = Array.prototype.shift.call(obj);
console.log(remove)

// Queue Example 
// Queue used 
    // - push() : insert at rear
    // - shift() : remove from front. 
const queue = [];
queue.push(10);
queue.push(20);
queue.push(80);
console.log(queue)
console.log(queue.shift());
// This is called as FIFO : first in first out.
/*
Q. Why is shift() a Mutating method.
    - A mutating method change the origional array 
    - so shift method remove the first element of an array 
    - so the original array changes. Therefore shift() is mutating method.


Q. What does  Shift() return 
    - it return remove element 


Q. which method pop() or shift() are fast as performances wise for removing the element ?
    pop method
        - porp method are fast as compare to the shift' because by using pop method you have to remove the last element of the array so there is no need to shifting the element 
    shift method: 
        - but using shift() method you have to remove the starting element of the array so you need to shift all remaining element one position to the left.


Q what is differences between pop() and shift()

    pop():
        - pop method remove the last element of an array 
        - pop method return the remove element of an array 
        - in pop method array is empty then it return undefined and not modified the original array
        - pop method are associated with array and remove the last element 
        - Generally pop() method performances are fast because it remove the last element of an array so not required to shift element


    shift() :
        - shift() method remove the first element of an array
        - shift() method return remove element of an array
        - shift() method array is empty then it return undefined
        - shift() method are associated with linked list and remove the element form front
        - Generally shift() method performance are slower because need to shift all remaining element one position to the left. 


| Feature                | `pop()`                                    | `shift()`                                   |
| ---------------------- | ------------------------------------------ | ------------------------------------------- |
| **Purpose**            | Removes the **last** element from an array | Removes the **first** element from an array |
| **Return Value**       | The **removed** last element               | The **removed** first element               |
| **Modifies Original?** | ✅ Yes                                      | ✅ Yes                                     |
| **Position Affected**  | End of the array                           | Beginning of the array                      |
| **Performance**        | 🔼 Faster (no re-indexing required)        | 🔽 Slower (needs to reindex elements)       |



Q. When should you used shift()
    - Remove the first element of an array
    - implement a queue(FIFO)
    - process item in the order they were added
    - Remove the oldes item from a list 


Q. Which data structure commonly used shift();
    - A QUEUE (FIFO)  first-in-first-out is commmonly implemented using operation like push() (enqueue) and shift() (dequeu) while shift() models queue behaviour it is still an array method in js.. 
    */

