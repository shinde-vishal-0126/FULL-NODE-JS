/*
# array destructuring 

1: array destructuring feature in js that allow you to extract or unpack value form array or properties form object and assign them to variable in a more concise and readable way.

2: using destructuring variable assignment that enable you to easily access individual element of an array  and work 

const [value1, value2, value3,...] = array.

3: destructuring assignment syntax is a javascript expression that makes it possible to unpack value from an array or properties form objects into distinct variable

# NOTE :
if you defied array destructuring it work serial not randomly  (i.e array destructuring always matter Position) . By using destructuring you have to used variable as array element



*/

// # with out array destructuring
// following are lengthy process you defined each and every element in variable
const info = ['vishal','shinde', 4];
let fName = info[0];
let myLastName = info[1];
let myAge = info[2];
console.log(myAge);

// # instead of that you have to used the array destructuring (array divided into different variable);
let [firstName, LastName, age] = info;
console.log(firstName);
console.log(LastName);
console.log(age);

//#  also by using array  destructuring you have to add the element in the array
// add the degree element into the array
let [first, last, year, degree='BE'] = info;
console.log(first);
console.log(last);
console.log(year);
console.log(degree)
console.log(info)

// # 1.  BASIC ARRAY DESTRUCTURING
// You can assign value form array to individual variable
const fruit = ['apple','banana', 'cherry'];
const [firstFruit, secondFruit] = fruit;
console.log(firstFruit);
console.log(secondFruit);


// # 2.  using rest operator (...rest) in array destructuring
// using rest operator(...) allow you to collect the remaining elements into new array
const [fruits, ...remainingfruit] = fruit
console.log(fruits);
console.log(remainingfruit);


// # 3. Skipping Element 
// you can skip element in the array by leaving empty slot in the destructuring pattern 
const color = ['red','green', 'blue'];
const [ , , thirdColor ] = color
console.log(thirdColor);

// # 4. Default Value
// you can provide the default Value for variable in case the corresponding array element is undefined
const numbers = [1,2];
const [firstNumber, secondNumber, ThirdNumber=3] = numbers;
console.log(firstNumber);
console.log(secondNumber);
console.log(ThirdNumber) // default value


//#  5 swapping variable:
// Array destructuring can be used to easily swap the value of two variables without the need for temporary variable
let a= 5;
let b = 10;
[a,b] = [b,a];
console.log(a);
console.log(b);


// # 6 Nested array destructuring 
// you also destructure the element from nested arrays 
const nestedArry = [1,[2,3]];
const [firstValue, [secondValue, thirdValue]] = nestedArry
console.log(firstValue);
console.log(secondValue);
console.log(thirdValue);



// # CONCLUSION
// array destructuring is a powerful feature in javascript that simplifies the working  with the array and enhance the readability and provide a conscious way to extract and work with the array element.

// example with object 
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
  ];
  
  // Destructuring the objects inside the array
  const [{ name: name1, age: age1 }, { name: name2, age: age2 }] = users;
  
  console.log(name1, age1); // Alice 25
  console.log(name2, age2); // Bob 30
//   You can combine array and object destructuring if you're working with arrays of objects

// # used 
// Array destructuring is a powerful feature in JavaScript, making it easy to work with and manipulate arrays efficiently.


// ignoring the element in array ?
let array = [10,20,2,0,10];
const [, , , ,s,d] = array;
console.log(s,d)
//if at the time of if you give array destruction length Grater then actual length of the array then that destructured value return the undefined.