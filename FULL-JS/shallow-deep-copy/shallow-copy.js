/*
@ COPY OBJECT

    - If you want to copy somthing it having 2 type of method for copying of object or array
        1. shallow copy
        2. deep copy

    - Both are behave differently when it come to nested structure like array or object.

@ SHALLOW COPY

    - defination :

        - shallow copy is copy only top level properties of object or array,
        - not nested array or object properties are copied
        - shallow copy create new object or array but nested structure of (array or object) still shared refrences (i.e still refer to the origional object refrences)
        - i.e top level object create new refrences but the nested object still refer to the orgional object refrences.

@ How to creae shallow copy of object or array ?

    1. Object :

        - a shallow copy create a new object
        - The top level value are copied into the new object
        - if a propery contain another object or array only it refrences are copied of if you change nested object or array in the copy the origional object also be affectd.

    2. Array :

        - A shallow create a new array
        - The top level item are copied into the new array
        - if an item in an object or another array is reference is copied, not the actual object array. there fore changing a nested object in the copied array will also affect the origional array

@ How to create a shallow copy ?

    1. Object :

            1. Object.assign({} , obj) : Create a new object and copies the properties from  the original object.
            - syntax : Object.assign(target, source)

            2. Spread Operator{...obj} : Creae a new object and copies the properties.

    2. Array :

            1. Slice() : Create a new array containing the element of the origional array.

            2. Spread Operator [...obj] : Create a new array and copies the element

*/

// ? how object and array are work ?

let obj = {
  name: "vishal",
  age: 25,
  mobile: 9970710108,
};

// * assign obj to obj2 so obj2 refrencing the same object in memory
let obj2 = obj;
console.log(obj2);
console.log(obj);
// so obj2 does not make the copy of obj it refer to the same object in memory.so any change made in obj or obj2 its affect both objects like obj & obj2
// i.e it not create copy of object so both pointing to the same object in memory (i.e Having shared state)
let address = (obj2.address = "pune");
console.log(address);
console.log(obj);
console.log(obj2);

// Object.assign(source, destination)
let newObj = Object.assign({}, obj);
// create new object & copy all properties of object
console.log(newObj);

// spread Operator
let newObje1 = { ...obj };
console.log(newObje1);

// ============================================================================================================================================

let arr = [10, 20, 30, 50, 62, 45, 21];

// usign slice() method slice()
let newArr = arr.slice();
console.log(newArr);

// using spread operator
let newArr1 = [...arr];
console.log(newArr1);

// ============================================================================================================================================

// # Ex Object .

const person = {
  name: "vishal",
  age: 25,
  address: {
    city: "pune",
    locality: "mumbial",
    zip: 412401,
  },
};

const shallowCopay = Object.assign({}, person);
console.log(shallowCopay);
// does not affected to the origioal object because age is top lever property of the object.
shallowCopay.age = 50;
console.log(shallowCopay);
console.log(person);

// if you change nested object properties it affect to the original also (becase nested object still refrences to origional object in memory)
shallowCopay.address.city = "mumbail";
console.log(shallowCopay);
console.log(person);

// ============================================================================================================================================

// # Array

let sampleArr = [
  1,
  2,
  3,
  {
    a: 10,
  },
  ["b", "c"],
];

let sampleArr2 = sampleArr.slice();
console.log(sampleArr2);
// Here nested array propery if you modify something it also affect to the origion array alos becase we have to create shallo copy and shallow copy only top lever item of array or porpreteis of object copy.
let newA = (sampleArr2[3].a = 100);
console.log(newA);
console.log(sampleArr);
console.log(sampleArr2);

// This only affect origional array not affect in shallo copy array.
sampleArr[2] = 6;
console.log(sampleArr);
console.log(sampleArr2);

// ============================================================================================================================================

// ? What happen when you have to used Object.assign() with array. ?
// When Object.assign() is used with an array, it copies the array's enumerable properties, including its elements (indexes), into the target array.
// Copies the properties/elements of arr1 into personArr.
// personArr is the target, so personArr is modified.
// It does not replace the entire array; only matching indexes are overwritten.

// Object.assign() modifies and returns the target object.

let personArr = [1, 2, 3, 4, 5];
let arr1 = ["a", "b", "c"];
let arrL = Object.assign([], personArr);
console.log(arrL);

let newAll = Object.assign(personArr, arr1);
// copies the properties of the personArr into the arr1 (it does not override the entire array  )
console.log(newAll);

// ====================================================================================

// @ create shallow copy of object and array using spread operator

let data = {
  name: "alice",
  age: 45,
  address: {
    city: "mh",
    zip: "124512",
  },
};

let dataObj = { ...data };
console.log(dataObj);

// Modified properties of the copied object
dataObj.age = 90;
// it is modified only in copied array does not affect into the origional array becase it create shallo copy
console.log(dataObj);
console.log(data);

// If you modified neste object if affect to the origional array also
dataObj.address.mobile = "9970710102";
console.log(dataObj);
console.log(data);

// # spread operator with array

let arr11 = [1, 2, 3, { name: "alice" }];
// creating shallow copy of the arr11
let arr2 = [...arr11];
console.log(arr2);
arr2[3].name = "vishal";
console.log(arr11);
console.log(arr2);

/*
# Summary :
    1. The Spread operator create a shallow copy of both objects & array.
    2. for top - level properties or elements copy are independent so mofifying one won't affect the other.
    3. for nested object or array the refrences to the same object is copied, meaning that changes to the nested data will affect both the origional and copied structure


@ when to use ?
    - use spread operator for shallow copying of object or arrays when you don't have nested structure
    - if you need to create deep copy (i.e copy nested objects / array ) you will need to use custom copy function or another method like JSON.parse(JSON.strigify(obj))
    -

@ When to used DEEP copy & SHALLOW copy
    1. shallow copy :
        - used for copying the object or array when you don't want have nested structure. so used spread operator for both object  & array

    2. Deep copy :
        - if you need to create deep copy, (i.e nested object & array also copied ) then you have to used JSON.parse(JSON.strignify(obj)) also used custom function to make deep copy.


@ DEEP COPY VS SHALLOW COPY

1. shallow copy
    - copies only the first level (Top - level) properties of objectes & element of array.
    - inner / nested object or array element are refrences to the origional array or object refrences in the memroy (i.e copied object and origional object are used same refrences object in to the memory)
    - if you change somthing into the nested array it also affected to the both copied as well as origional array or object
    - shallow copy are faster (because it only copy the first level element or properties of the object)
    - To make shallow copy of object used Object.assign({}, obj) & spread operator and slice() method for array.
    - used case : when object has only primitive value or You don't care about nested refrences.

2. Deep copy
    - copies the object / array completely like top level as well as nested object / arrays
    - whole copied object are independent (Top - level as well as nested array are also independent)
    - change in the nested object of the copy do not affect the origional
    - Deep copy are slower as compare to shallow copy (Because everything copied deeply)
    - To make deep copy used JSON.parse(JSON.stringify(obj)), structuredClone(obj) , recursion, Library Like Lodash 'cloneDeep()'
    - use case : when you need completely independent clone of the object and array.


*/
