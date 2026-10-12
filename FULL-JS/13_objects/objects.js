/*
# object 
1. object are fundamental part in js provide way to group of related data and function together
2. non-primitive data type (or reference type )  compare reference
3. Def : js object is collection of key-value pair where each key is string and value can be any data type including other object.
4. object can have properties and method making it versatile for various case.
5. object is collection of properties and property is an association between ke and a value.property value can be function in case this property called as method 
6.in addition object are predefined in the browser also you can defined your own object

# object literal 
1. Object literal is simply key: value pair data structure.
2. Storing variable and function together in one container, we can refer this as an objects

# To access the value form an object 
1.using dot(.) notation
2. using [] bracket notation

# note:
1. js object are not iterative 
2. js object does not length property
3. javascript object are enumerable so we can used the for in loop to iterate over the key of the enumerable properties
(Enumerable properties are those properties of an object that can be listed or iterated over using a loop or certain methods like Object.keys().)It iterates over the enumerable properties of an object.
4. The loop retrieves the keys (property names) of the object one at a time.
5:  if you compare 2 objects you have to compare it address not value of the object (i.e address compare)

#  What is Enumerable?
1. Enumerable means the properties of an object can be listed (looped over) using a loop like for...in. 
    1. Applies to object properties (keys). 
    2. Checked using propertyIsEnumerable or Object.keys() or for...in.

# What is Iterable?
1. Iterable means the entire object can be looped using a for...of loop. It must have the method Symbol.iterator.
    1. Applies to objects like arrays, strings, sets, maps.
    2. Regular objects are not iterable unless you define Symbol.iterator.


# differences between iterator and enumerable 
| Feature            | Enumerable                  | Iterable                            |
| ------------------ | --------------------------- | ----------------------------------- |
| What it applies to | Object properties (keys)    | Whole object (like arrays, strings) |
| How to loop        | `for...in`, `Object.keys()` | `for...of`, spread `[...]`          |
| Method requirement | No special method needed    | Must have `[Symbol.iterator]()`     |
| Example types      | Plain objects `{}`          | Arrays, strings, sets, maps         |


# what is pass by value and pass by references (or differences pass by value and pass by reference)

1. pass by value :
    1. Applies to: Primitive types (number, string, boolean, undefined, null, symbol, bigint)
    2. Behavior: A copy of the value is passed to the function.
    3. Changes do not affect the original variable.


2. pass by reference 
    1. Applies to: Non-primitive types (objects, arrays, functions)
    2.Behavior: A reference (memory address) is passed.
    3. Changes affect the original variable.


| Aspect            | Pass by Value       | Pass by Reference           |
| ----------------- | ------------------- | --------------------------- |
| Affects original? |  No                 |  Yes                       |
| Type              | Primitives          | Objects, Arrays, Functions  |
| What is passed?   | A copy of the value | A reference to the original |

*/
// in pass by Value : copy the primitive value created and pass to the function or assign to the variable
// if any change made in copy do not affected to the original array
let a = 10;
function passByValue(a) {
  return (a = 20);
}
console.log("modified value", passByValue(a));
console.log("original value:", a);

// in pass reference pass the references of memory location to the function or assign to the variable
// if any change made in object through this references it affect to the original object
const obj = {
  id: 1,
  name: "vishal",
  address: {
    city: "pune",
  },
};
console.log("obj", obj);
let object = obj; // create copy of the object with its references.
console.log(object);
object.address.country = "india";
console.log(object);
//  in above we have to add new property in copied  object then it also added into the original object
console.log(obj.address.country);
console.log(object.address.country);
// here country property added into the both object

/*
# to avid this situation and you want to make object as pass by value you have to create copy of an object in following way 
1, Object.assign(targetArray, sourceArray)
2. using spread operator

# Object.assign(target, source....)
1.used to copies the properties from one or more source object to a target object
2. grate why to copy or merge object in js 
3. return target object
3 if you used Object.assign() to copy or merge object into single object but if the merge object if it having the same key in source object so at that time it get 2nd key and value as result it override the first key which is similar to to another object

*/

const newObj = Object.assign({}, obj);
console.log("newObj", newObj);
console.log("before name", newObj.name);
console.log("update the name", (newObj.name = "akshu"));
console.log("after updating name", newObj.name);
console.log("original object ", obj.name);

// # spread operator
// 1. create copy of object
const newOne = { ...obj };
console.log("newOne", newOne);
console.log("before..", newOne.name);
newOne.name = "akshu sawant";
console.log("after updating", newOne.name);

// # how to compare object
// 1 object are compare by reference (i.e tow object are equal only if they are refer to the same object or same memory location )
// independent object are not equal if they are look like same

let obj12 = {
  name: "vishal",
  education: "BE",
};

let obj123 = {
  name: "vishal",
  education: "BE",
};

let obj1234 = obj123;
console.log(obj12 === obj123); // return false because two object compare based on it references not a value or its content
const isEqual = obj123 === obj1234 ? true : false;
console.log("isequal", isEqual);
const isEqual1 = obj12 === obj123 ? true : false;
console.log("isequal1", isEqual1);

// # how to create object
// object create by using object literal

let person = {
  name: "vishu",
  age: 29,
  "it-a-feature": false,
  greet() {
    console.log("name :" + this.name);
  },
  welcome: function () {
    console.log("welcome : " + this.name);
  },
};

// # to access the function and properties of object
console.log(person.name);
person.greet();
person.welcome();

// # how to access the property of object like 'it-a-feature'
// 1. it is not possible to access the property using . (.) donation so you have to access this property using the bracket [] notation
console.log(person["it-a-feature"]);
// # what happen if you try to access using . dot notation
// console.log(person."it-a-feature");//  SyntaxError: Unexpected string (at objects.js:165:20)

// # also you have to access the properties of an object using bracket []
console.log("access property using bracket notation : ", person["name"]);
// # how to access the function
// here function of any object you can  access using the square bracket () parenthesis
person["welcome"]();
person["greet"]();
// here function of any object you can  access using the square bracket () parenthesis

// # what if you want an object as value inside the object
//i.e inside the one object having another object
let bioData = {
  fullName: {
    firstName: "vishal",
    lastName: "shinde",
  },
  age: 45,
  getData() {
    console.log(
      `full-name ${this.fullName.firstName} ${this.fullName.lastName}`
    );
  },
};
bioData.getData();
console.log("get object data using dot notation :", bioData.fullName.firstName);
// also you have to access using
console.log("used another way", bioData.fullName["firstName"]);

// # how to add and modify the properties of an object.
let name = "username";
let age = "userNameAge";
let myObj = {
  [name]: "vishal",
  [age]: 39,
  address: {
    city: "pune",
    country: "ind",
  },
  getData() {
    console.log(this.username, this.userNameAge);
  },

  getInfo: function () {
    console.log("welCome " + this.username + " from " + this.address.city);
  },
};
console.log("myAge", myObj);

// # using the . dot notation you have to add the properties in your object
myObj.address.city = "mumbai";
myObj.address.zip = 412401;
myObj["getData"]();
myObj.getInfo();
// add new data
myObj.job = "SED1";
console.log(myObj);

// # also add data using bracket notation
myObj.address["locality"] = "wadGaon sahani";
console.log(myObj);

// # also update the function or add the function
myObj.display = function () {
  return `${this.job} ${this.username}`;
};
console.log(myObj.display());
myObj.getInfo(); // before updating the function

myObj.getInfo = function () {
  return "thanks for updating";
};

// after updating the getInfo() function look like
console.log(myObj.getInfo());

// # if you defined object in following way you can not access using dot notation you need to used the square bracket notation
let my = "name";
const data = {
  "first-name": "vishal", // if you defined the object key name as first-name then you have to assign as string otherwise it show the references error
  lastName: "shinde",
  [my]: "vishu",
};
console.log(data);
// if you try to access this property using dot notation it show the references error
// console.log(data."first-name") // SyntaxError: Unexpected string (at objects.js:253:18)
console.log(data["first-name"]);
console.log(data.lastName);

// # note : inside the squareBracket notation you have to write your variable as well as expression
console.log("fullName", data["last" + "Name"]); // this is expression and here you have to access the lastName

// also here you have to access the variable using bracket notation :
console.log(data[my]);
console.log("new data", (data.age = 28)); // by using dot notation you have to add the data in object
console.log(data);

// if you want to add the dynamic value using the bracket notation then you have to used the following way
console.log((data["last-date"] = 45));
console.log(data);

// # ES8 having the object method to get the properties, value and entries in object
// 1.Object.values();
// 2. Object.keys()
// 3. Object.entries();

// # Object.values() :
// 1. This object method return an array containing all the objects own property values.
// i.e or Object.values() is a built-in JavaScript method that returns an array of the values of an object’s own enumerable properties.

// # how to work with nested objet and array
const person1 = {
  id: 1,
  name: "Alice",
  age: 30,
  subjects: ["Math", "Science"],
  address: {
    street: "123 Main St",
    city: "Springfield",
    state: "IL",
  },
  isActive: true,
};
// for normal object and in nested object have different approach
let value = Object.values(person1);
console.log(value);

// # To work with nested object and array used following approach
let val = Object.values(person1).forEach((val) => {
  if (typeof val === "object" && val !== null) {
    Object.values(val).forEach((ele) => {
      console.log(ele);
    });
  } else {
    console.log("val", val);
  }
});

//# Object.keys() :
// 1: Object.keys() method return the array containing all the objects own properties (i.e return the key of objects )
// i.e Object.keys() is a built-in method that returns an array of keys (property names) from an object's own enumerable properties.

// return array containing all properties of an object
let keys = Object.keys(person1);
console.log(keys);

// # for nested object work in following way
let key = Object.keys(person1).forEach((keys) => {
  let value = person1[keys];
  if (typeof value === "object" && value !== null) {
    Object.keys(value).forEach((key) => {
      console.log(key);
    });
  } else {
    console.log(keys);
  }
});

// # Object.entries()
// 1. Object.entries() method return an array containing all object data .
// 2. Object.entries() method return each and every property or key value in separate array
// 3.  Object.entries(): This method takes an object and returns an array of arrays, where each inner array contains two elements: the key and the value.
// 4. Object.entries() returns an array of [key, value] pairs from an object’s own enumerable properties

// # first get top level element data
// let entries  = Object.entries(person1);
// console.log(entries)

// if you want to return nested level of array element then used following approach
let entries1 = Object.entries(person1).forEach((ele) => {
  console.log(ele);
});

// # also you have to done and get each and every key and value pair
let entries2 = Object.entries(person1).forEach(([key, value]) => {
  console.log([key, value]);
  console.log(key, value);
});

// # alo you have to all deep level of nested
let entries3 = Object.entries(person1).forEach(([key, value]) => {
  // console.log(key, value)
  if (typeof value === "object" && value !== null) {
    Object.entries(value).forEach(([keys, values]) => {
      console.log(keys, values);
    });
  } else {
    console.log(key, value);
  }
});

// # note
// 1 if you are work with nested object and you want to the every nested property or value then you need to pass (actual value) value as argument in object.keys or object.entries () to get the nested value.like
// let entries3 = Object.entries(person1).forEach(([key,value])=>{
//     // console.log(key, value)
//     if(typeof value === 'object' && value !== null){
//         Object.entries(value).forEach(([keys, values])=>{
//             console.log(keys, values)
//         })
//     }
//     else{
//         console.log(key,value)
//     }
// })

// # also used in this way
// let key = Object.keys(person1).forEach((keys)=>{
//     let value = person1[keys];
//     if(typeof value === 'object' && value !== null){
//         Object.keys(value).forEach((key)=>{
//             console.log(key);
//         })
//     }else{
//         console.log(keys)
//     }
// })

/*

# object.entries():
1. Object.fromEntries() is the reverse of Object.entries() — it takes an array of key-value pairs and converts it back into an object.

2. Object.fromEntries(iterable)

3. static method transforms a  list of arry's key-value pairs into an object.

4. object.formEntries() expect iterable of kay value pair such as an array of array where each inner array contain tow element [key, value]

5 so in previous method If you used the object.entries method it converted the object to array of array But if you want to convert again array or array to return objects. You have to use object.fromEntries() .

6.Object.fromEntries() is a static method in JavaScript that transforms a list of key-value pairs (like an array of arrays or a Map) into a plain JavaScript object.

# Use Cases:
Convert a Map to an object
Convert an array of [key, value] pairs to an object
Transform, filter, or rename keys dynamically using Object.entries() + map() + Object.fromEntries()

*/

// # convert from Map to Object:
const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

console.log(Object.fromEntries(map)); // {foo: 'bar', baz: 42}

// # 2 Converting an Array to an Object
// With Object.fromEntries, you can convert from Array to Object:
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const data1 = Object.fromEntries(arr);
console.log(data1); // { 0: "a", 1: "b", 2: "c" }

// #
let arrayObject = Object.entries(person1);
console.log("array object", arrayObject);
let objectOfArray = Object.fromEntries(arrayObject);
console.log(objectOfArray);

// # how to delete any one property from an object
const user = {
  firstName: "vishal",
  lastName: "shinde",
  age: 33,
};
// delete any one properties
console.log(user);
console.log(delete user.age);
console.log(user);

/*
# what is Object.seal() and Object.freeze() method in js 
1. This 2 method are used to control how the object modified 
2. object.seal() and object.freeze() are two method in js that allow you to control the mutability (control the ability to modify ) of object.
3 used to restrict changes to a structure or value of an object.but they have different level of restriction
4. both Object.seal() and Object.freeze() only work shallowly. They do not affect nested objects by default.
*/

// # 1. object.seal():
// 1.Object.seal() used to  Prevents adding or deleting properties from the object, but allows modification of existing values.
// 2. Object.seal() method not work with nested object it work only top level object properties (create shallow work)

// No new properties can be added.
//  No properties can be removed.
//  Existing properties can be updated (if they are writable).
const person2 = { name: "John", age: 30 };
Object.seal(person2);
person1.age = 31; // OK, you can modify existing properties
person1.gender = "male"; // Error in strict mode, adding new properties is not allowed
delete person1.name; // Error in strict mode, can't delete properties

// # 2.  Object.freeze(obj)
// 1. Prevents adding, deleting, or modifying any property. The object becomes completely read-only (shallow freeze).
// 2. Additionally, it makes all existing properties immutable, meaning their values cannot be changed.
// 3. but note freeze() make you top level object only immutable of freeze() if your object having nested object it is not possible to freeze this nested object

// No new properties can be added.
// No properties can be removed.
// No properties can be modified (even if they are writable).
const car = { make: "Toyota", model: "Camry" };
Object.freeze(car);

car.model = "Corolla"; // Error in strict mode, can't modify property values
car.year = 2020; // Error in strict mode, adding new properties is not allowed
delete car.make; // Error in strict mode, can't delete properties

/*
# conclusion
Object.seal() allows modifying existing property values but prevents adding or deleting properties.
Object.seal(): Prevents property addition and deletion, but allows value changes.
Object.freeze(): Prevents property addition, deletion, and modification (making the object truly immutable).
Object.freeze() disallows all changes: no adding, no deleting, and no modifying of properties.

*/

/*

# relational operator (IN)
relation operator in used to check if the given property are exits in the object or not
i.e used to check if a property exists in an object (either as an own property or an inherited one).
2. It returns true if the specified property is in the object, otherwise, it returns false.
3. in operator checks for both own properties (properties directly present in the object) and inherited properties (properties in the object's prototype chain).
4.  The in operator checks whether a key/index exists in an object or array — not values.

*/
const person11 = {
  id: 1,
  name: "Alice",
  age: 30,
  subjects: ["Math", "Science"],
  address: {
    street: "123 Main St",
    city: "Springfield",
    state: "IL",
  },
  isActive: true,
};

console.log("present or not : ", "state" in person11.address);
console.log("...", "subjects" in person11);
// # to check value is present or not in arry you have to used
console.log(person11.subjects.includes("Math"));
console.log("isActive" in person11);

// # in method also used check the given property present in prototype chain or not
console.log("toString" in person11); // it return true because it present into the prototype chain

/*

# hasOwnProperty():
1. method checks whether an object has a specific property as its own property (not inherited from the prototype chain).
2. hasOwnProperty() method: Only checks if the property exists as an own (direct) property of the object, not on its prototype.
3 object.hasOwnProperty(property)
property: A string or symbol representing the name of the property to test.
Returns: true if the object itself contains the property, otherwise false.

*/

console.log("hasOwnProperty", person.hasOwnProperty("toString")); // it return false because hasOwnProperty() method: Only checks if the property exists as an own (direct) property of the object, not on its prototype.
console.log(person.hasOwnProperty("name"));

// # hasOwnProperty() method are not work when the object is created using Object.create(null)
// You are creating an object without a prototype — meaning it does not inherit from Object.prototype, so it does not have built-in methods like: hasOwnProperty(),toString() ,valueOf()
let stud = Object.create(null);
stud.name = "vishal";
stud.age = 88;
console.log(stud);
// if create object using Object.create() method then hasOwnProperty are not work
// and here check if the object having the property of the name
// console.log(stud.hasOwnProperty('name'))  // TypeError: stud.hasOwnProperty is not a function
// # to solve this issue you have to used
console.log(Object.prototype.hasOwnProperty.call(stud, "name")); // ✅ true

console.log(Object.hasOwn(stud, "name")); // it return true
// in operator: Checks if the property exists anywhere in the object, including its prototype chain.

/*
# objects useful method in javascript 

1. Object.key() : return the arry containing the name all enumerable own properties of the object 
2. Object.value() : return an arry containing the value of all enumerable own properties of object 
3. Object.entries() : return the array containing array of key-value pairs for each enumerable own property of an object 
4. Object.hasOwnPopery() : Return the boolean indicating weather the object has specified property as an own object 
5. Object.seal() : allows modifying existing property values but prevents adding or deleting properties.
6. Object.freeze() :disallows all changes: no adding, no deleting, and no modifying of properties.
7. Object.assign(target,....source) : it used to create copy of the object or merge the object  (basically it create the shallow copy)
8. IN (operator) : it check if a property exists in object of not :(it check current object as well as prototype chain also)
9. object.hasOwnProperty() : it check property exist in object or not (it check only in the current object not check in the prototype chain)

*/

// # interview question

// # write a  function to dynamically add property in given object
let student = {
  name: "vishal",
  age: 28,
  grades: {
    math: 80,
    science: 85,
    history: 88,
  },
};

const addProperty = (student, property, value) => {
  let add = (student.grades[property] = value);
  console.log(add);
};
let newProperty = addProperty(student, "cs", 98);
newProperty;
console.log(student);

// # write a function that compare two object are equal or not
let objA = { name: "vishal", education: "BE", age: 28 };
let objB = { name: "akshu", education: "BE", age: 29 };
let objC = { name: "vishal", education: "BE", age: 28 };

function compareObject(obj1, obj2) {
  // get the key of each object to find out the length are same or not
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if (key1.length !== key2.length) return false;
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

let res = compareObject(objA, objB);
console.log(res);

// # how to work with deeply nested object

function deepNestedObject(obj1, obj2) {
  if (
    typeof obj1 === "object" &&
    obj1 !== null &&
    typeof obj2 === "object" &&
    obj1 !== null
  ) {
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);

    if (key1.length !== key2.length) return false;
    for (let key in obj1) {
      if (!deepNestedObject(obj1[key], obj2[key])) return false;
    }
    return true;
  } else {
    return obj1 === obj2;
  }
}
let res6 = deepNestedObject(objA, objC);
console.log("res6", res6);

// # write a function that transform of an object into an object where the key Are the object id

let inputArray = [
  {
    id: 1,
    name: "vishal",
  },
  {
    id: 2,
    name: "vishu",
  },
  {
    id: 3,
    name: "akshu",
  },
];

let newObj11 = {};
for (let key of inputArray) {
  console.log(key.id, key);
  newObj11[key.id] = key;
}
console.log(newObj11);

/*
# what is differences between normal object and map()

# normal object {}
1. normal object is collection key value pair where key are always string or symbol. if you use non-string key (like a number or object ) it is covert into string.


2. no guarantee of order for non-integer (but integer key are ordered in ascending numerical order )
Integer-like keys ("1", "2") are ordered numerically.
Other keys follow insertion order, but it's not guaranteed in older environments.
i.e not guarantee for insertion order.


2. performance : Not specifically optimized for frequent additions and deletions of key-value pairs.
Performance can degrade with a large number of keys.

3: Methods & Properties
Object.keys(obj);
Object.values(obj);
Object.entries(obj);
Uses generic utility methods.
Must check for inherited keys using .hasOwnProperty().

Iteration:
Can iterate using for...in loop, Object.keys(), Object.values(), or Object.entries().


7. Prototype Inheritance:
Inherits from Object.prototype, which includes methods like toString, hasOwnProperty, etc.
This can lead to issues if keys conflict with prototype properties.

 
 Serialization and Parsing:
Easily serializable with JSON.stringify()

*/
let ob = {};
ob[1] = "vishal"; // here key one are treated as string
console.log(ob);
for (let key in ob) {
  console.log(key, ob[key]);
}
// OR
Object.entries(ob).forEach(([key, value]) => console.log(key, value));

/*

 # map()

1. map is built in object in js that store key value pair where key can be of any type (string, any number, object, function)
where insertion order is preserved also provide faster lookup and better performances then normal object for dynamic key-value storage.

2 Keys are iterated in insertion order, always predictable.
i.e insertion order is preserved

3. Optimized for frequent additions and deletions of key-value pairs.
Provides better performance in scenarios where frequent updates or large data sets are involved.

3. 
 Methods and Properties:
Provides built-in methods:
set(key, value): Adds or updates a key-value pair.
get(key): Retrieves the value associated with a key.
delete(key): Removes a key-value pair.
has(key): Checks if a key exists.
clear(): Removes all key-value pairs.
size: Returns the number of key-value pairs.


iteration : Can iterate directly using for...of, map.keys(), map.values(), map.entries(), or forEach().

7. Prototype Inheritance:
Does not inherit from Object.prototype.
No risk of key conflicts with prototype properties.

 Serialization and Parsing
Cannot be directly serialized with JSON.stringify().
Requires conversion to an array or object first.
const map = new Map([['key', 'value']]);

*/

let map1 = new Map();
map1.set(1, "vishal");
console.log(map1.get(1)); //   Output: 'value' (key is a number, not a string)
for (let [key, value] of map1) {
  console.log(key, value);
}
// OR
map1.forEach((value, key) => console.log(key, value));
const jsonString = JSON.stringify(Array.from(map1));
console.log(jsonString); // '[["key","value"]]'

/*
| Feature               | `Object`                       | `Map`                         |
| --------------------- | ------------------------------ | ----------------------------- |
| Key Types             | String / Symbol only           | Any type                      |
| Insertion Order       | Not guaranteed (mixed)         | Guaranteed                    |
| Performance           | Less efficient for dynamic ops | Optimized for key operations  |
| Built-in Methods      | Limited (`Object.keys`, etc.)  | Rich API (`set`, `get`, etc.) |
| Iteration             | Manual or utility-based        | Direct with `for...of`        |
| Prototype Inheritance | Yes (can cause issues)         | No (cleaner)                  |
| JSON Serialization    | Directly works                 | Needs conversion              |



✅ Use Map when:
You need non-string keys
You care about insertion order
You need frequent additions/deletions
You need better performance

✅ Use Object when:
You want simple key-value pairs with string keys
You need JSON support
You don’t need insertion order or complex keys

# how to convert map object into the normal object
1. Using Object.fromEntries()
Object.fromEntries() is a built-in method that transforms an iterable (like a Map) into an object. Each key-value pair in the Map becomes a key-value pair in the resulting object
*/
const myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

const myObject = Object.fromEntries(myMap);
console.log(myObject); // Output: { a: 1, b: 2, c: 3 }

//#  note
// we are not able to defined in following way like 
// const myMap1 = new Map({name:'vishal', age:28});  // TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))

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

// const ReduceData = [...myMap].reduce((acc, [key, value])=>{
//  acc[key] = value
//  return acc
// },{})
// console.log('reduce data', ReduceData);

// also used this approach
const ReduceData = myMap.entries().reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});
console.log("reduce data", ReduceData);


// # how many way to create object 
// #  1. using object literal 
  // const car = { brand: "Toyota", year: 2022 };

// #  2. using object constructor
  const carNew = new Object();
  carNew.brand = "Toyota";

//#  3. using Object.create() method 
// Using Object.create(null) creates an object with no prototype — meaning it does not inherit from Object.prototype.


  // let objectG = Object.create();
  
// # constructor function 
  function Car(brand, year) {
  this.brand = brand;
  this.year = year;
}
const car1 = new Car("Honda", 2020);

// # using Es6 class
// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }
// }
const car2= new Car("Ford", 2023);
console.log('car', car2)



// # output based questions.

const shape = {
  radius : 20,
  diameter(){
    return  this.radius * 2
  },
  perimeter: () => 2* Math.PI * this.radius
}
console.log(shape.diameter()); 20
// in arrow function does not have their own this binding so in inherits form its surrounding state  os it undefined.
console.log(shape.perimeter()) // NaN