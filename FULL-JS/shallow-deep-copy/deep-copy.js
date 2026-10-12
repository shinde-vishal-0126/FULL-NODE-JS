/*
@ DEEP COPY

defincation :
    - A deep copy recursively copies all values and nested structure , so they is entirely independent of the origional
    - Deep copy : both top level and nested object are copied, So no refrences shared between the origional and the copy array or object
    - i.e in deep copy in the object & array all the nested object & properties are recursively copied.
    - i.e copied object or array will not share any refrences with the origional and change made to copy will not affected the origional object
    - Object & arrays are deeply copied , Measing each nested object or array gets new refrences.
    - # Deep copy means recursively copies all nested structured, so no refrences are shared between the origional and the copy.


@ How to create deep copy in js ?

    1.Deep copy of object using the serialization and Deseralization
        - JSON.parse(JSON.strigify(obj))
            - Comman for objects and array but can only handle JSON - safe value (no function, undefined, or non - serializable data )

    2. Using Libraries
        - _.cloneDeep(boj) from Lodash -  Handle more complex objects (with non - JSON - safe data )

    3. used structuredClone(obj)  : Method in js used to make Deep copy of objects & array.
*/

const person = {
  name: 'vishal',
  age: 29,
  address: {
    city: 'pune',
    locality: 'junnar',
    village: 'wadgaon sahani',
    zip: 412401,
  },
};
// * Make deep copy using Seralization & Deseralization (only work with JSON - safe Value (Not allowed function, undefined, ))
let deepCopy = JSON.parse(JSON.stringify(person));
console.log(deepCopy);
person.name = 'akshu';
console.log(person);
console.log(deepCopy);

// * modified nested array
deepCopy.address.village = 'sawargaion';
// does not affect to the origional array
console.log(deepCopy);
console.log(person);

// ********************************************************************************************************

// @ deep copy with array using seralization & deseralization.

let arr = [
  1,
  2,
  3,
  {
    a: 10,
  },
  ['b', 'c'],
];

// * Deep copy using JSON method (using seralization & Deseralization)
const arrDeepCopy = JSON.parse(JSON.stringify(arr));
console.log(arrDeepCopy);
arr[3].a = 'vishal';
// Here does affect to the copied object becase copied object are independent
console.log(arr);
console.log(arrDeepCopy);

// * Modified copied object also does not affect to the origional array
console.log(arrDeepCopy[4].push('vishal'));
console.log(arrDeepCopy);

// ********************************************************************************************************

// @ Make deep copy usign "structuredClone()" javascript function we have to both object & array

let deepCopyObj = structuredClone(arr);
console.log(deepCopyObj);

let arrg = [
  10,
  20,
  30,
  { name: 'vishal' },
  function () {
    console.log('Hello');
  },
];
console.log(arrg);
// console.log(structuredClone(arrg))
// * In arrg array having function so "structuredClone" function does not support the function and symbol in array or object we need to filter it array & then copy
// so to copy the array we need to exclude thos function & symbl from the array then and only then it allow to make deep copy
const filterArr = arrg.filter((ele, index) => {
  return typeof ele !== 'function' && typeof ele !== 'symbol';
});
console.log(filterArr);
console.log(structuredClone(filterArr));

// ********************************************************************************************************

//  @ "structureClone()" function with object.

let newObj = {
  name: 'vishal',
  age: 25,
  address: {
    city: 'pune',
    location: 'junnar',
    zip: 412401,
  },
  function() {
    console.log('Hello word');
  },
};
// since structuredClone() does not suppoert function and symbols we can exclude them before cloning.
// console.log(structuredClone(newObj));

let filterObject = Object.fromEntries(
  Object.entries(newObj).filter(([]) => {
    return typeof value !== 'function';
  })
);

console.log(filterObject);
console.log((newObj.address.zip = 520411));
console.log(newObj);

// *********************************************************************************************************************

//  @ Write the code to make deep copy of the give object (note : does not used inbuilt method)
// i.e recursively copies all nested object and arrays (ensuring no refrences to the origaional object)

function makeDeepCopy(object) {
  // next check the type of object like Object or array or (not an object or is null )
  // if its primitive (string, number, boolean, null, undefined, symbol, function) retrun directly

  if (typeof object !== 'object' || typeof object === null) {
    return object;
  }

  //   next determin given input is object or array if the array then initialize with empty array [] & if object then initialize with empty object.
  let copiedValue = Array.isArray(object) ? [] : {};

  //   get all the keys of the object (or array indices)
  const keys = Object.keys(object);
  console.log(keys);

  //   iterate through each key in the object or index in the array
  for (let i = 0; i < keys.length; i++) {
    copiedValue[keys[i]] = makeDeepCopy(object[keys[i]]);

    // keys[i] represent the key(property_name) of the origional object.
    // object[key[i]] give a value associated with the key
    // makeDeepCopy(keys[i]) ensure that if the value is another object or array it is also deeply copied recursively.
  }
  return copiedValue;
}
const called = makeDeepCopy(newObj);
console.log(called);
const calledArray = makeDeepCopy(arr);
console.log(calledArray);

/*
@ Deep copy
    - // # explanation about above code
 make sure does not used the inbuilt method or function to make deep copy

1 so above function create deep copy of the object or array
    - i.e recursively coped all nested object and array ensuring that no reference to the original object or array.
2 base case:
    - the function first check if the input (obj as parameter ) is not object or null if true it simply return input since primitive type like num, string, boolean , null, undefined  so do not need to deep cloning
3 recursive code :
    - if objet is an object or array  so it initialize with empty object or array.
    retrieve all key from the object
- It iterates through each key, recursively calling makeDeepCopy on each property of obj, and assigns the result to the corresponding key in copiedValue.
- Return: Finally, it returns the deeply copied object or array.

*/
