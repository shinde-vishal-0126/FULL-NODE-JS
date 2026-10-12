/*
Map() 
  - syntax: map(callback(currentElement, index, array) thisArg)
      - callback : function executed for every array element 
      - currentElement : current value being processed.
      - index : index of current element
      - array : Orgional array on which map() was called.
      - thisArg : optional value used as this inside callback 
  - The map() method() is a iterative array method that loop through every element of an aray , perform transformation on each element and return a brand new array.
  - map method used to creating new array from existing one by applying a function to each one element of the first array 
  - The map() method in JavaScript is used to transform  each element of an array and create a new array by applying a function to each element of an existing array.
  - The map() method creates a new array by calling a callback function once for every element in the original array.
  - map method are not mutating method (because it is not modified the original array)
  - Map method are chainable method
  - The map() method both iterates over an array and transforms it.
  - It creates a new array by applying a given transformation function to each element of the original array.
  - map() Executes for Empty Elements as empty 
*/

// ex-1
let arr = [1, 2, 3, 4];
let newArr = arr.map((curEle, index, arr) => {
  return curEle * 3 + index
})
// so it is transfrom each & every element and return new array 
// Deos not modified origional array 
console.log(newArr)



// ex-2
const RANDOM_NUMBERS = [42, 7, 15, 89, 23, 56, 3, 91, 64, 37];
const data = RANDOM_NUMBERS.map((ele, index, arr) => {
  return ele > 20;
});
console.log(RANDOM_NUMBERS);
console.log(data);
// output
// data [
//     true,  false, false,
//     true,  true,  true,
//     false, true,  true,
//     true
//   ]
//# NOTE:
// - So in map function if you give any condition regarding expression so map function return new array with based on conation result like true and false
// - Map() does't remove elements it only return whatever you return, 
// - since callback returned boolean values, the new array contains boolean result 



// ex-3
const numbers2 = [2, 4, 9];
const root = numbers2.map((ele) => {
  return Math.sqrt(ele);
});
console.log(root);

// ex-4
// call map() method on non-array objects
// You can use the map() method on non-array objects by using call() or apply() to manually bind the context to an array-like object.
const KvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
const reformatObject = KvArray.map(({ key, value }) => {
  return { [key]: value };
  // [key] this is computed property name. 
});
console.log("reformatOBject", reformatObject);
console.log(KvArray);


// ex-5
// used map() on spare array spare array remains spare after map();
console.log([1, , 3, undefined, null].map((x) => {
  return x * 2;
})
); // in map() method you have perform any condition with empty then it return empty  [ 2, <1 empty item>, 6, NaN, 0 ]


// Ex-6
// using ParseInt() with map()
console.log(["1", "2", "3"].map(parseInt)); ////output [ 1, NaN, NaN ]
console.log(["1", "2", "3"].map((str) => { return parseInt(str); }));


// Q. Why undefined becomes NaN?
const a = [1, undefined]
const res = a.map((ele, index, arr) => ele * 2)
console.log(res) // if you perform any opearation with undefined it return NaN 



// Q Why null becomes 0?
// When JavaScript performs a mathematical operation, it tries to convert operands to numbers.
let b = [null, 1]
let resultb = b.map((ele) => {
  return ele * 2
})
// javascript convert if you perforam any mathematical opearation with null it return 0
console.log(resultb)




// Q is map() mutable ?
// - No, Origional array remain unchanged
const list = [1, 2, 3]
const listResult = list.map((ele, index, arr) => {
  return ele * 2
})
console.log(listResult)
console.log(list) // origional are not modified return brand new arary with result 


// Q. can map() mutate objects ?
//  YES 
const users = [{
  name: 'vishal',
  age: 23
}]
let r = users.map((user) => {
  user.name = 'shinde'
  return user
})
console.log(users) // map() method mutate the object becase object are pass by refrences.

/*
Q.when we used the map() method :
  - You should use the map() method when you need to transform an array into a new array based on a specific operation or calculation applied to each element of the original array.
  - The key here is that map() returns a new array without modifying the original array.
  - Tranfrom each element 
  - convert one data type into another data type 
  - create new array 
  - extract a property form object 
  - perform calculation on every element 


Q. When not use Map()
  - Logging value
  - Updating Dom 
  - sending api requests.
*/




// Q. why map method are chainable ?
//   - map method return new array containing the result of applying a function to each element in the original array  so since return new array you can chain other array method after using the map method
//   - i.e Map() method are chainable becuase it return new array. using this array we can also chain another method for that resultant array.
const num = [10, 20, 40, 60, 70, 5, 6, 9]
let re = num.map((ele, index, arr) => {
  return ele * 2
}).filter((ele, index) => { // re return new resulting aray and filter method filter this new array based on the condition
  return ele > 100
}).map((ele) => ele > 150) // if the map() method condtion return boolen value then result array also boolean value. 
console.log(re)




/*
Q. what is differences between froEach() method and map method in javascript 
  - foreach() and map() method used to iterate over the item of the array
forEach():
  - ForEach() method used to iterate over an array in performing an action on each element of the array
  - (i.e forEach() method execute the provided function once for each array element)
  - forEach does not create a new array and does inherently modify the original array, although the callback function can modify the elements of the original array.
  - does not create new array (it modified the original array) i.e forEach method are mutating method 
  - forEach() method are return undefined
  - forEach() method are not chainable because as you might gees it return undenied i.e (not chainable means that something you can not do with forEach)
  - used when you need to perform an action for each element of an array but not need a new array
*/
const numbers = [1, 2, 3, 4, null, undefined, ,];
const data3 = numbers.forEach((num) => {
  console.log(num * 2);
});
console.log(numbers);
console.log(data3);




/*
map 
  - map() method used to iterating over an array and transforming each element into new array
  - it create new array by applying a provided function to each element (or return new array with transform element)
  - Map() method are chainable method (i.e you can attached reduce(), sort(), filter() after performing a map method on an array)
  - Map are not mutating meted (does not change the original array)
  - map method used when you need to transform each element of an array and create new array form the result
*/
const numbers3 = [1, 2, 3, 4, null, undefined];
const doubled = numbers3.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
console.log(numbers); // Output: [1, 2, 3, 4] (original array remains unchanged)




/*
| Feature               | `map()`                                              | `forEach()`                                                       |
| --------------------- | ---------------------------------------------------- | ----------------------------------------------------------------- |
| **Purpose             | Transforms array elements                            | Executes a function for each array element                        |
| **Return Value**      | Returns a **new array**                              | Returns **undefined**                                             |
| **Original Array**    | Does **not modify** original array (unless manually) | Does **not modify** original array (unless manually)              |
| **Chainable**         | Yes (because it returns an array)                    |  No (returns undefined)                                           |
| **Use Case**          | When you need a new array of transformed values      | When you want to perform side effects (e.g. logging, DOM updates) |
| **Performance**       | Slightly better if used for transformation           | Slightly better for just iterating (no return needed)             |
| **Mutation Allowed?** | Yes (if manually mutating objects inside)            | Yes (if manually mutating objects inside)                         |




Q.Why does map() return a new array?
  - Because it is designed for data Transformation. 
  - it collect the value return by the callback function for each element into new array
  - Leaving the origional array unchanges.



Q Does map() modifiy the original array ?
  - No it does not modify the original array, However if the element are objects and you mutate those object inside the callback the origional object will be changed.



Q What is the Time complexity of map() 
  - Time Complexity: O(n) — it visits each element exactly once.
  - Space Complexity: O(n) — it creates a new array with the transformed values.




Q. What Does map() return if you forget to return from the callback ?
*/
const arr5 = [1, 2, 3];
const result = arr5.map(num => {
// return  num * 2; // no return
num * 2
});
// Because every callback invocation returns undefined implicitly.
console.log(result); // 
