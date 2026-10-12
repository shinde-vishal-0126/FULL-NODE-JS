/*
# set object
1. set object used to store the unique value.
2. A Set object in JavaScript is a collection of unique values.
3. Unlike arrays, Set objects do not allow duplicate values.
4. The values can be of any data type, including primitive values or object references.

# Key Characteristics of Set:
1. Unique Values: Each value must be unique; no duplicates are allowed.
2. Order of Insertion: Elements are iterated in the order they were added.
3. Any Data Type: Values can be of any type, including objects and primitives.
*/
const set = new Set();
console.log(set);

// # we can also initialize set with an iterable (like array)
let set1 = new Set([1, 2, 3, 4, 5, 6]);
console.log(set1);

// # adding value  : using add() method
set.add("shinde");

set.add([10, 20]);
set.add({ name: "vishal" });
console.log(set);

// # checking the value  using has() method
// The has() method checks if a value is present in the Set.
console.log(set.has({ name: "vishal" }));

console.log(set.has(10)); // Output: true
console.log(set.has(30)); // Output: false

// # remove the value 
// The delete() method removes a specific value.
let deleted = set.delete('shinde');
console.log('deleted', deleted)
console.log(set.has('shinde')); // Output: false

// # clearing the set();
// The clear() method removes all values from the Set.
set.clear();
console.log(set.size); // Output: 0


// - Iterating Over a Set:
// You can iterate over the values of a Set using for...of or the forEach() method
const set2 = new Set(["apple", "banana", "cherry"]);

// # using for of loop
for (const value of set2) {
  console.log(value);
}

// # forEach() method 
set2.forEach((ele)=>{
    console.log(ele)
})

// # how to convert setInto the array 
let newArray = Array.from(set2)
console.log(newArray)

// # the spread operator (...).
// Using spread operator
// const spreadArray = [...mySet];
// console.log(spreadArray); // Output: [1, 2, 3]

// # how to convert set into the object 
const mySet = new Set(["apple", "banana", "cherry"]);
const obj = {};
[...mySet].forEach((value, index) => {
  obj[index] = value;
});

console.log(obj);
// { '0': 'apple', '1': 'banana', '2': 'cherry' }

// # using reduce method 

const reduceSet = [...mySet].reduce((acc,ele,index )=>{
    acc[index] = ele;
    return acc
},{})
console.log(reduceSet);



// Using the values() Method: (in each iterator you have to used the next() method then get the value)
// The values() method returns an iterator of all the values in the Set.
const mySet2 = new Set(["apple", "banana", "cherry"]);
const iterator = mySet2.values();
console.log('iterator',iterator);
console.log(iterator.next().value); // Output: true
console.log(iterator.next().value); // Output: false

// the keys() method is available, but it behaves the same as the values() method. This is because a Set only contains values (without keys), and both keys() and values() return an iterator over the values.
const keysIterator = mySet.keys();
console.log('key',keysIterator);
console.log(keysIterator.next().value); // Output: 1
console.log(keysIterator.next().value); // Output: 2
console.log(keysIterator.next().value); // Output: 3


/*
# Summary of Methods:
1. add(value): Adds a new value to the Set.
2. delete(value): Removes a value from the Set.
3. has(value): Checks if a value exists in the Set.
4. clear(): Removes all values from the Set.
5. size: Gets the number of elements in the Set.
6. forEach(callback): Executes a callback function for each value in the Set.
7. values(): Returns an iterator object of values in the Set.
8. keys(): Returns an iterator object of keys in the Set (same as values() in Set).
9. entries(): Returns an iterator object of [value, value] pairs.
[Symbol.iterator](): Allows iteration over the Set using a for...of loop.
*/