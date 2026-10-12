/*
# at()

    1: Array.prototype.at(index);

    2: The at() method in JavaScript is used to access elements at a specific index in arrays, strings, or other iterable objects, and it allows you to use negative indices to count from the end.
    3: at() method take an integer value and return the item at that index. also positive and negative integers (-ve integers count back from the last item in the array)

    4: The method returns undefined if the index is out of range or not found the index.
*/
//example1 :
const array = [5,6,7,8,13];
// Here at method return item of the given index
// if  the give index is not match  it return undefined
const findItem = array.at(5);
console.log('finedItem',findItem);


//# example
const find = array.at(-2); // count back from element
console.log(find);


//example
const find1 = array.at(-100); // return undefined because of index out of bound
console.log(find1);


// # example 
// return the last value of the array
const cart = ['apple','banana','pear'];
function lastElement(arr){
    return cart.at(-1)
}

// comparing method
const colors = ['red','green','blue'];
const last = colors[colors.length -1];
console.log(last);

//  calling at() method on not array object 
const obj ={
    length : 2,
    0:'a',
    1:'b',
    2:'c'
}
console.log(Array.prototype.at.call(obj,0));


// # When to Use:
// Use at() when you need to access elements in a collection with support for negative indexing.