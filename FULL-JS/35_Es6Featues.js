
/*
# ES6 -2015
1.let and const
2.template literal
3.object properties
4.array destructuring
5.object destructuring 
6.spread operator (...) expand or spread an element of iterable 
7.rest parameter (...) it allow you to access the infinite number of argument as 8.an array followed by variable name
9.exponentiation operator **

*/


/*
# ES8 - 2017
1. string padding (padStart(), padEnd())
2. Object.values()
3. object.entires()
4. trailing commas in function parameter list and calls => (this feature allow to have trailing commas in function declaration  function call, array literal and object literal)

*/

/*

# Es9-2018
1.rest/spread operator
2. promise.prototype.finally();

# ES10 - 2019
1.Array.prototype.flat()
2.Array.prototype.flatMap();
3.object.fromEntries();
4.symbol.prototype.description
5.Optional catch binding
6.string.prototype.trimStart();
7.string.prototype.trimEnd();
*/


//# ES11 2020
// 1. BigInt BigInt in javascript is a data type used to represent and perform operation on large integers that exceed the limits of regular numbers
    // create Big Int using the 'n' suffix
    // create using BigInt() constructor
    const anotherLargeNumber = BigInt(228282928292282992828229020202002929n)
    console.log(anotherLargeNumber);
    const maxNumber = Number.MAX_SAFE_INTEGER;
    // here we have to defined max safe number of i you want to work beyond this max number then you have to used the BigInt() number
    // if at end you have to give suffix and n then this is BigInt num.
    console.log(maxNumber)

//#  Nullish coalescing operator ??
// in javascript the nullish coalescing operator (??) is a logical operator that provide a concise way to handle nullish (null or undefined) value it return its right hand operand when its left hand operand is null or undefined otherwise it return the left hand operand 

// in javascript there are few falsy value when i have defined this value it return as false so here using the nullish coalescing operator ?? we have to defined only null and undefined as falsy value other wise any another value can be access.

//# optional chaining operator
// it provide a concise way to access properties of an object without worrying about the existence of intermediate properties it a perticular useful when working with nested objects or accessing properties of objects that may be null or undefined 
const person = {
    name:'vishal',
    address:{
        city:"new York",
        zipCode: 12345
    }
}
// accessing nested property without optional chaining 
// const city = person.address;
const city = person.address ? person.address.city :'city is not available'
console.log(city)
// using ?.with optional chaining operator 
// also used here nullish coalescing operator
const city1 = person.address?.city ?? 'city not available'



//# promise.allSettled


// ES6-2021
// 1. replaceAll(current value, replacing content) replaceAll in javascript is function that replace all occurrences of a specified value with another value in a give string.
// ex
// replacing multiple space with a single space 
const text ='vishal    shinde,      hi,'
const newText = text.replaceAll(/\s+/g, " ");
console.log(newText)



// # logical assignment operators (||==, &&=,??=)
// 1.  logical or assignment operator ||== this operator assign the value of its right hand side operand to its left hand side operand if the left hand operand operand evaluate to a falsy value (false,null, undefined , 0 ) otherwise it leave the left-hand side operand unchanged

// # logical assignment operators (||==, &&=,??=)
// 1. logical or assignment operator &&== this operator assign the value of its right hand side operand to its left hand side operand if the left hand operand operand evaluate to a true value (false,null, undefined , 0 ) otherwise it leave the left-hand side operand unchanged


// # numeric separator (_) : under score used to numeric separator 



/*

# Es6 - 2022
Array.findLast() : allow you to find element from the last to first of the array based on the condition 
Array.findLastIndex()
Array.prototype.toReversed();
Array.prototype.toSorted(comparison function);
Array.prototype.toSpliced(start, deletedCount, ...items);
Array.prototype.with(index, value) : the with method in javascript is used to change the value of an element at specific index in an array it take two argument the index of the element to be changed and the new value  it return new array with the changed value element leaving the original array unchanged.
const replaceWith = myLastName.endsWith(2, 'vishal');
console.log('original', myLastName);
console.log('new', replaceWith)

*/