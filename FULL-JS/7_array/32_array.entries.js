/*
# entries()

    1: entries()
    2: entries method() in js is  used to return new array iterator object that contain key, value pairs of an array or an objects.
        i.e It returns a new Array Iterator object.
    3: The **entries()** method is used to get an iterator that contains key-value pairs (index and element) from an array (or other iterable objects like Maps).
    
    4: entries() object return new array iterable object that object contain the key/value pair for each index in the array

    5: return new iterable iterator object
    6: entries() method are non-mutating method 
    7: entries() method it is iterative() method.
    8: This method is perticular useful when you need to iterate over both the indices and value of an array

    9: It is primarily used for iterating over the entries (key-value pairs) of arrays, Map objects, and Set objects.

*/

const a = [1, 2, 3, 4, 5];
for (const [index, element] of a.entries()) {
  console.log(`Then index is ${index} and value are ${element}`);
}

// # If you call the entries() method on an empty array in JavaScript, it will return an empty iterator, meaning that no elements will be returned when you try to iterate over it.
const emptyArray = [];
const iterator2 = emptyArray.entries();

for (const [index, value] of iterator2) {
  console.log(index, value);
}
// Nothing will be printed)

// # using for of loop
const array = ["a", "b", "c"];
const arrayEntries = array.entries();
for (const entries of arrayEntries) {
  console.log(entries);
}

//iterating spare array
for (const element of [1, , "a"].entries()) {
  console.log("element", element);
}

// iterating the entries() method on non-array objects
const arrayLIke = {
    length:3,
    0:"a",
    1:"c",
    2: "d",
    3:"e", // ignored by entries() since length 3
}
for(const entry of Array.prototype.entries.call(arrayLIke,)){
    console.log(entry);
}


//# For Map Objects
// In Map objects, entries() returns an iterator of key-value pairs.
const map = new Map();
map.set('a', 1);
map.set('b', 2);

const iterator = map.entries();
for (const [key, value] of iterator) {
  console.log(key, value);
}


// # For Set Objects
// or Set objects, each entry is only a value (no key), but entries() still returns an iterator of key-value pairs, where the key and value are the same.
const set = new Set([1, 2, 3]);
const iterator1 = set.entries();

for (const [key, value] of iterator1) {
  console.log(key, value);
}
// 1  1
// 2  2
// 3  3