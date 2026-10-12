/*
unShift()
    - syntax: array.unShift(elements.)
        - array.unshift(ele1, ele2, ele3,.....)
    - unShift() method insert or add new one or more element at the starting or beginning of an array, Modifies the original array and return new Length of the array.
    - it return new length of the array. (i.e insert the given values at the beginning of the array and return new length of the array)
    - unShift() are mutating method (it also modified the original array rather then creating new array)
    - The unshift() method is opposite of the push() method so 
        - push() method add element to the end of an array
        - unshift() method add element to the beginning of an array.
    - like push(), unshift() modified the original array, and return the new length of the array.
    - Element are inserted same order they are passed.

*/
// ex-1
const num = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];
// Here unshift method return new length of array and add give element at the end of the array
console.log(num.length)
// every existing element move one position to the right
const newNum = num.unshift(30);
console.log(newNum);
console.log(num);

// ex-2
// also using unshift method you have to push multiple value from the begging
num.unshift(40, 50, 60);
console.log(num);


// ex-3 also using spread operator you have to push one array into another array
const num1 = [5, 3, 9, 1, 7, 2, 10, 4, 6, 8];
const num2 = [11, 12, 13, 14, 15];
console.log(num1.unshift(num2))
console.log(num1)
const num3 = num1.unshift([...num2]);
const num4 = num1.unshift(...num2);
console.log(num3);
console.log(num4);
console.log(num1);

// ex-4 
// if you unsift(undefined) is possible
num1.unshift(undefined);

// ex-5 
// of you unshift(null) is possible
num1.unshift(null);
console.log(num1);

// ex-6
// if you push('')string is also possilbe
console.log(num1.unshift(''));
console.log(num1)


//ex-7 unshift() with object 
let use = [];
use.unshift({
    name: 'vishal'
})
console.log(use)


// ex-7
// unshift in loop()
console.log(num1)
let result  = [];
for(let i = 0 ; i< num1.length ; i++){
    result.unshift(num1[i])
}
console.log(result)


// ex-8 unshift() array like object 
const obj = {
    0:"B",
    1:"C",
    length:2
};

Array.prototype.unshift.call(obj,"A");

console.log(obj);

/*
Q. Why is unshift() a mutating method.
    - A mutating method change the origional array .

Q. Time complexith 
    - O(n)
    - Because every element must move one position to the right before the new element can be inserted.


Q. why unshift() slower then push()
    - in push() method add element at the end so no need to shift() element 
    - but in usshift() method add element at beggining so we need to each element by left position.
    = Beduas unshift() must shift every existing element one position to the right before inserting the new element at index 0 


Q. what is differences between push and unShift() method 
    push() :
        - push method add one or more element at the end or the array and return new length of the array
        - element are added after existing one 
        - push method are faster because no need to shift its added at the end of the array

    unShift():
        - unShift() method add one or more element at stat or beginning of the array and also return new length or the array
        - element are added before existing ones
        - unShift() are slower because it need to shift() all existing elements


Q. psun vs unshift()

| Feature                      | `push()`                                             | `unshift()`                                                |
| ---------------------------- | ---------------------------------------------------- | ---------------------------------------------------------- |
| **Purpose**                  | Adds one or more elements to the **end** of an array | Adds one or more elements to the **beginning** of an array |
| **Modifies Original Array?** |  Yes                                                 |  Yes                                                    |
| **Return Value**             | New length of the array                              | New length of the array                                    |
| **Order of Addition**        | Elements are added **after** existing ones           | Elements are added **before** existing ones                |
| **Performance**              | Faster (especially for large arrays)                 | Slower (as it shifts all existing elements)            |


Q. when should you use unshift()
    - add item at the begging of the array
    - build queue form the front
    - insert high priority item before existing one 


Q what is Differences between  arr.unshift(arr2) and arr.unshift(...arr2);
    - arr.unshift(arr2) insert arr2 as single nested array at beginning
    - arr.unshift(...arr2) insert each element of arr2 individually at the beginning.
    

*/