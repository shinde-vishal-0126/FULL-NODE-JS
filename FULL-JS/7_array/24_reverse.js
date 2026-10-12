/*
# reverse():

    1: syntax: reverse():

    2: reverse() method in javascript is used to reverse the element of an array in place.

    3:reverse method change the original array

    4. reverse() method return reference to the same array with its element reverse.

    5. note array reverse in place and no copy created (original array change and having with the same references)

    6:The reverse() method in JavaScript reverses the elements of an array in place, meaning it directly modifies the original array. It does not create a new array but instead returns a reference to the same array after the elements have been reversed.

*/
//  # example 
const words = ['apple', 'banana', 'cherry'];
const reversedWords = words.reverse();
console.log(reversedWords); // Output: ['cherry', 'banana', 'apple']
console.log(words); // Output: ['cherry', 'banana', 'apple'] (The original array is also reversed) (also return references to the same array) 
// also return the references to the original array


// #  Example 
const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
const reversedObjects = objects.reverse();
console.log(reversedObjects); // Output: [{ id: 3 }, { id: 2 }, { id: 1 }]
console.log(objects); // Output: [{ id: 3 }, { id: 2 }, { id: 1 }] (The original array is also reversed)


// # using reverse in spare array
// spare array always safe after calling the reverse method;
// empty slot copied over their respective new indices as empty slot
console.log([1,2, , 3].reverse());