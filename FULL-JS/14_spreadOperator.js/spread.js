/*
# spread operator:
1. The spread operator (...) in JavaScript is used to unpack or expand elements from arrays, objects, or iterables. (i.e  allows you to expand or spread elements )
2. It’s a powerful feature for copying, merging (i.e combining data), and expanding data structures.
3. syntax : ...spread
4. The spread operator does not create a reference to the original array
 5. This is because the new array is a separate instance with its own values, copied at the time of creation.

*/
// # use case 

// # 1. copying array : used to crete the copy of array 
let arr = [1,2,3,4];
let newArr = [...arr]

console.log("copied arr", newArr);

// # 2. merging marry : used to combine multiple array into new array (merging array)
let array = [...arr,...newArr];
console.log(array);

// 3 used with function : in function call the spread operator is used to spread the element of an array (or any iterable) as an individual argument to function
let number = [1,2,3,4,5,6,7];
console.log([...number]);
console.log(...number);
console.log('max no :',Math.max(...number));

//  # copying object 
let user ={
    name:'vishal',
    age:25,
    education : 'BE'
}
let newUser = {...user}
console.log(newUser);

// # merging object 
const person = { name: "Vishal" };
const info = { age: 25 };
const merged = { ...person, ...info };
console.log(merged); // { name: 'Vishal', age: 25 }

// # if key conflict at the time of merging then win last one
// 1. if you used spread operator in object and you are spread operator used to combined two object and both object having one same property then the in first same property override with the 2nd property
const x = { a: 1, b: 2 };
const y = { b: 3 };
const result = { ...x, ...y }; // b: 3 overwrites b: 2


// # spread operator with string
// The spread operator can be used to split  or unpack a string into individual characters in an array.
let name = 'vishal'
console.log(...name); // v i s h a l
console.log([...name]); //  ['v', 'i', 's', 'h', 'a', 'l']

/*
# what is different between rest operator and spread operator 

# 1  : Rest Operator (...)
    # Purpose:
    1.To collect multiple elements or arguments into a single array.
    # Used in:
    1.Function parameters
    2.Destructuring assignment

    # rule :
    1 .rest parameter is last formal parameter in function parameter
    2. only one rest parameter are used in function declaration 

# 2 Spread Operator (...)
# Purpose:
1.To spread (expand) the elements of an array or object into individual elements or properties.

# Used in:
Function calls
Array literals
Object literals

# rule: 
1.Spread operator can appear in any position depending on usage.
i.e Spread Operator → Can Be Used Anywhere (Depends on Context)
2. not used for destructuring 

*/

