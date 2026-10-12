/*
# map 
1. map object is built in js object used to store the key value pair  or (collection or key value pair) where key and value are any data type 
2. in map insertion order is preserved (map object maintain the order of their entries ) it means when you iterate over the map entries in order whit they are inserted 

# key characteristic of map 
1. key in map are unique 
2. preserve order : entries are iterated in the order they are inserted 
3. any data type of key : unlike object where key are string or symbol map allow to be any data type including object, functions and primitives 
4. map object have size property that return the number of key value pair present in the map 
*/

// # how to create map

let map = new Map([["1", "data"]]);
console.log(map);
// 1. set value to the map
map.set("name", "vishal");
map.set("age", 30);
console.log(map);

// 2 get the value form map
let data = map.get("age");
console.log(data, map.get("name"));

// 3. has() method check if the specific property are exist in the map or not
console.log(map.has("name"));
if (!map.has("education")) {
  map.set("education", "BE");
}
console.log(map);

// // 4 removing key value pair of it key in object
// console.log(map.delete('education'))
// console.log(map);

// // 5 remove whole map object using the clear() method
// console.log('clear', map.clear() )
// console.log(map);

// # iterating ove the map
// we have to iterate ove the map using
// 1. for of loop
// 2. forEach() method
// 3. map.value() method
// 4. map.keys() method
// 5 map.entries() method

// # for of loop
for (let [key, value] of map) {
  console.log(key, value);
}

// # iterating using forEach()
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// #  In a Map object, the methods keys(), values(), and entries() are used to interact with the map's keys, values, and key-value pairs, respectively. Here's how each of them works:

//# 1 map.keys() :  returns a Map Iterator of the keys in insertion order.
let key = map.keys();
for (let keys of key) {
  let value = map.get(keys);
  console.log("return both", value, keys);
}

// console.log(key);
// console.log(key.next().value);
// console.log(key.next().value);
// console.log(key.next().value);

// # 2 map.values() : returns a Map Iterator of the values  in insertion order.
let values = map.values();
console.log(values);
for (let val of values) {
  console.log(val);
}

// console.log(values.next().value);
// console.log(values.next().value);
// console.log(values.next().value);

// # 3 map.entries() : return a map iterator of the key and value in insertion order
const entries = map.entries();
console.log("entries", entries);
console.log(
  entries.forEach((ele) => {
    console.log("ele", ele);
  })
);

// console.log(entries.next().value);
// console.log(entries.next().value);
// console.log(entries.next().value);

// example :
const myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

// Using `keys()`
for (const key of myMap.keys()) {
  console.log(key); // Output: 'a', 'b', 'c'
}

// Using `values()`
for (const value of myMap.values()) {
  console.log(value); // Output: 1, 2, 3
}

// Using `entries()`
for (const [key, value] of myMap.entries()) {
  console.log(`${key}: ${value}`); // Output: 'a: 1', 'b: 2', 'c: 3'
}

/*
  # Summary:
  set(key, value): Adds or updates a key-value pair.
  get(key): Retrieves the value associated with the key.
  has(key): Checks if the Map contains the specified key.
  delete(key): Removes a key-value pair.
  clear(): Clears all key-value pairs in the Map.
  size: Returns the number of key-value pairs.
  forEach(callback): Executes a callback for each key-value pair in the Map.
  toString(): Returns a string representation of the Map.
 key() : return key of the give map object
 value() : return the value of the give map object
 entries() : return the key value pair of the map object

*/

/*
# how to convert map object into the normal object
1. Using Object.fromEntries()
Object.fromEntries() is a built-in method that transforms an iterable (like a Map) into an object. Each key-value pair in the Map becomes a key-value pair in the resulting object
*/

const myObject = Object.fromEntries(myMap);
console.log(myObject); // Output: { a: 1, b: 2, c: 3 }

//#  note
// we are not able to defined in following way like
const myMap1 = new Map({ name: "vishal", age: 28 }); // TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))

// # 2.
// Using forEach() with a loop
// If you want to manually create an object, you can iterate through the Map using the forEach() method and assign the values to an object.

const myObj1 = {};
myMap.forEach((key, value) => {
  myObj1[key] = value;
});
console.log("myObj", myObj1);

// 3 Using reduce()
// You can also use reduce() to convert a Map to an object.
console.log("myMap", myMap);
console.log("spread map object like", [...myMap]);

const ReduceData = [...myMap].reduce((acc, [key, value])=>{
 acc[key] = value
 return acc
},{})
console.log('reduce data', ReduceData);


// # how to Converting Map to Array:
// 1. You can convert a Map to an array using Array.from() or the spread operator (...)
const entriesArray = Array.from(map);
console.log(entriesArray);
// Output: [['name', 'Alice'], ['age', 30]]

// 2 Using spread operator
const spreadArray = [...map];
console.log(spreadArray);
// Output: [['name', 'Alice'], ['age', 30]]


/*
# what is difference between map() and set() 
# 1. map (): 
    1. map is collection of key value pair 
    2. map used you need to associate value with key 
    3. store key value pair (each key are unique but value may be duplicate)
    4. also maintain insertion order
    Keys can be any type: object, function, primitive



    # useCase
    1. used you need to  associating value  with key 
    2. Storing configuration settings, metadata, or other key-value data

    # defined
    const map = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ]);

#method
    set(key, value): Adds or updates a key-value pair.
    get(key): Retrieves the value associated with a key.
    delete(key): Removes a key-value pair.
    has(key): Checks if a key exists.
    clear(): Removes all key-value pairs.
    size: Returns the number of key-value pairs.

# Iterates over key-value pairs. like for of loop, forEach method and map.keys() , map.values() and map.entries()
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}


# Set() 
1.collection of unique value  i.e A Set is a collection of unique values (no duplicates).
2. Used when you need to store distinct items without duplicates.
3.Stores only values.
4. Each value must be unique.
5.Each entry in a Set is a unique value.
Stores only values, no keys
All values are unique
Maintains insertion order

# useCae
Removing duplicates from an array.
Checking if an item exists in a collection.

#  initialize :
const set = new Set([1, 2, 3, 4]);

#  Methods:
add(value): Adds a value to the Set.
delete(value): Removes a value.
has(value): Checks if a value exists.
clear(): Removes all values.
size: Returns the number of values.


# Iterates over values.
for (const value of set) {
  console.log(value);
}

| Method      | Description                           |
| ----------- | ------------------------------------- |
| `for...of`  | Loop over values directly             |
| `forEach()` | Callback for each value               |
| `values()`  | Returns iterator over values          |
| `entries()` | Returns `[value, value]` pairs        |
| `[...set]`  | Spread into array for more operations |



*/