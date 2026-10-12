/*
# callback

1. A callback function in JavaScript is a function that is passed as an argument to another function and is executed later after some operation has been completed or at a specific point in the function's execution.

2. a callback function is a function pass as an argument to another function and it executed after the complication of synchronous task

# why callback 
1.handle asynchronous operation 
    1. callback commonly used in js for handling asynchronous task like api request file reading or event handling.
2. code reusability : 
    1. callback allow function to be more generic and reusable 
3. event handling : They enable function to execute only when certain event occurs 

4. A callback function is a function that is passed as an argument to another function and is intended to be executed after a certain event, operation, or condition is completed.

1. callback function is function that pass as an argument to another function and it intended to be executed after completion of some  operation and specified time of condition

2. callback function are commonly used in situation when you want ensure that certain code to be executed when the some perticular task completed such as reading file, making an api request and handling user event

3. So callback function are crucial in javascript for handling the asynchronous operation, event handling and various another scenario where you need to control the flow of your code base on the completion of some task

# A callback is just a function
It's passed as an argument
It can be called later, synchronously or asynchronously

*/

console.log("start");
function importantAction(username) {
  setTimeout(() => {
    console.log(username); //undefined
  }, 1000);
}
const name = importantAction("vishal");
console.log(name);

// #
function processUserInput(name, cb) {
  console.log(name);
  cb(name);
}
function getUser(name) {
  console.log("Hello", name);
}
processUserInput("vishal", getUser);

// # javascript function are first-class-citizen
// Def : so callback function is function that you pass into another function as an argument for execution later.
// example 1:
function isOdd(number) {
  return number % 2 != 0;
}
function isEven(number) {
  return number % 2 === 0;
}
function filtered(numbers, fu) {
  let result = [];
  for (const number of numbers) {
    if (fu(number)) {
      result.push(number);
    }
  }
  return result;
}
let numbers = [1, 2, 3, 4, 5, 6];
// here we have pass callback function as isOdd and isEven
console.log(filtered(numbers, isOdd));
console.log(filtered(numbers, isEven));
// The result is the same, However you can pass any function that accept an argument and return boolean value to the second argument for the filter function
// in above example you have to pass the anonymous function to the filter function instead of using the separate function

// # you have also used the arrow function as a callback function show in the following code
function filter(numbers, callback) {
  let data = [];
  for (const number of numbers) {
    if (callback(number)) {
      data.push(number);
    }
  }
  return data;
}
const oddNumbers = filter(numbers, (number) => number % 2 != 0);
console.log("oddNumbers", oddNumbers);

// # They can sometimes lead to callback hell and deeply nested code base structure when dealing with set of or multiple asynchronous operation
// example 2
function fetchData(url, callback) {
  setTimeout(function () {
    const data = { message: "Data fetch successfully" };
    callback(data);
  }, 1000);
}
function handledData(data) {
  console.log(data.message);
}
fetchData("www.google.com", handledData);
//  In the above example fetchdata is function take url and callback function as an argument
//  It simulates an asynchronous operation and after the delay calls the provided callback function with the fetch data .
//  HandledData is call back function that processed the data when it available

// # classification of callback function
// 1. Synchronous callback function
// 2. asynchronous callback function
// callback function is a function that is passed as an argument to the another function to be called back at a later time

// # (normal way without using callback function of higher order function);
const add = (a, b) => {
  return a + b;
};
console.log(add(4, 5));

const sub = (a, b) => {
  return a - b;
};
console.log(sub(4, 5));

const mul = (a, b) => {
  return a * b;
};
console.log(mul(4, 5));

//  so instead of that you have to used callback function and higher order function that are easy
const add1 = (a, b) => {
  return a + b;
};
const sub1 = (a, b) => {
  return a - b;
};
// here calculator are the Higher-Order function
// and add1 and sub2 are the callback function pass an an argument to the another function like calculator
const calculator = (num1, num2, callback) => {
  return callback(num1, num2);
};
console.log(calculator(4, 5, add1));
console.log(calculator(20, 10, sub1));

/*
# SYNCHRONOUS CALLBACK FUNCTION : 

1. (run sequentially , block the execution of code util the call back finish  )

2. synchronous callback executed during the execution of higher order function that used the call back

3. A synchronous callback is executed immediately after the function in which it is passed is called, blocking further execution of code until it completes.

4.These callbacks are executed in sequence, so the program waits for the callback to finish before moving to the next operation.

5. They not allow to main thread to continue executing other code while waiting for the asynchronous operation to finish
*/

// #
function isOdd2(number) {
  return number % 2 != 0;
}

function isEven2(number) {
  return number % 2 === 0;
}
function filtered2(numbers2, fu) {
  let result = [];
  for (const number of numbers) {
    if (fu(number)) {
      result.push(number);
    }
  }
  return result;
}
let numbers2 = [1, 2, 3, 4, 5, 6];
// here we have pass callback function as isOdd and isEven
console.log(filtered(numbers2, isOdd));
console.log(filtered(numbers2, isEven));
//1. in the  above example means isOdd and isEven are examples of the synchronous callback because they are executed during the execution of the filter function
// 2. In synchronous callback function a callback function executes immediately and blocks the execution of code that follows it in the same thread .
// It is also sometimes called a blocking callback because it prevents the program from continuing until the callback function is finished .

// example 2
function greet(name) {
  console.log(`hello, ${name}`);
}
function processUserInput(callback) {
  const name = "alliance";
  callback(name);
}
processUserInput(greet);
console.log("this run after the callbackfunction");

// example 3
function synchronousCallback() {
  console.log("start");
  function callBack() {
    console.log("callback");
  }
  callBack();
  console.log("end");
}
synchronousCallback();

/*
# ASYNCHRONOUS CALLBACK FUNCTION
1.An asynchronous callback is executed after the execution of the higher order function that used the callback

2. Is an asynchronous callback a callback function is not executed immediately instead it is scheduled to run at later time often some synchronous operation complete

3. So asynchronous commonly used for task like making http request , reading file, handling the user interaction that may take some time to complete it
They allow to main thread to continue executing other code while waiting for the asynchronous operation to finish

4. An asynchronous callback is executed after an operation completes, but that operation doesn't block the rest of the code from running.
 The callback is typically invoked after a non-blocking operation, such as an API request, a timer, or an event handler.

# note:
Asynchronous callbacks are often used in situations where you don't know how long the operation will take (e.g., fetching data from a server, reading files, etc.).
*/

function getData(callback) {
  setTimeout(() => {
    const data = { name: "vishal" };
    callback(data);
  }, 2000);
}
console.log("fetch data....");
getData((data) => {
  console.log(`data received ${data.name}`);
});
console.log("this running before data is received....");
//  In this example, the setTimeout function delays the execution of the callback by 2 seconds. This makes the callback asynchronous because the rest of the code continues running while the timer counts down. The console output will be:

/*
# what is difference between synchronous-callback and asynchronous-callback function

# synchronous callback :
bock the execution of the code until the callback finish
executed immediately (at the time of start higher order function execution) in sequence before the next line of code

# asynchronous callback :
do not the block the execution of code
execute later after some asynchronous operation is completed.


*/
// example for the asynchronous callback
function asynchronousCallback() {
  console.log("start");
  setTimeout(() => {
    console.log("callback");
  }, 1000); // here scheduled the callback after the one second.
  console.log("end");
}
asynchronousCallback();
//In above code settimeout function schedule the callback to execute after the one second delay meanwhile the program continue executing the code after the settimeout without waiting for completing the callback
// Asynchronous means that if javascript has to wait for an operation to complete it will execute the rest of code while waiting
// NOTE
// 1.So javascript is single threaded language it carries asynchronous operation vai the callback queue and event loop
// example :
//  suppose that you need to develop a script that download a picture from a remote server and process it after download complete
// Download the picture from a remote server take time depending on the network speed and the size of the picture
// So the following download() function is used to setTimeout ()  function to simulate the network request .

function downloadUrl(url) {
  setTimeout(() => {
    console.log(`downloading the ${url}`);
  }, 1000);
}
function process(picture) {
  console.log(`processing picture ${picture} `);
}
let url = "www.google.com";
downloadUrl(url);
process(url);
//output
// precessing www.google.com
//downloading the www.google.com
//So above output not what you expected because the process function executed before the download function
// But the correct way to be
// First download the picture and wait wait for download complete
// Then process the picture

//  to solved this issue you can pass process() function to the download() function and execute the process() function inside the download() function once the download complete  like like in following way

function download(url, callback) {
  setTimeout(() => {
    console.log("downloading url....");
  }, 1000);
  callback(url);
}
let url1 = "www.google.com";
// function pressing(url){
//     console.log('processing...')
// }
// download(url1, Processing);
// also her you have to defined processing  function as anonymous function

download(url, function (url) {
  console.log("processing the url");
});

// then here first processing then
// downloading url...
// defined 2 callback function

function downloaded(url, success, failure) {
  setTimeout(() => {
    console.log("downloading the url....");
  }, 1000);
  !url ? failure(url) : success(url);
}
download(
  url,
  (url) => {
    console.log("processing..++++");
  },
  (url) => {
    console.log("invalid url");
  }
);

// # Example of multiple callback function
// if you have multiple nested callback function
let uri = "example.com";
let uri1 = "test.com";
let uri2 = "testa test.com";
function fetChImage(uri, callback) {
  setTimeout(() => {
    console.log(`download the image ${uri}`);
  }, 1000);
  callback(url);
}
fetChImage(uri, function (uri) {
  console.log(`processing url like ${uri}`);
  fetChImage(uri1, function (uri) {
    console.log(`processing url like ${uri1}`);
    fetChImage(uri2, function (uri2) {
      console.log(`precessing url like ${uri2}`);
    });
  });
});
// so this call back strategy does not scale well when the complexity grow significantly
//  multiple callbacks are nested on top of each other

/*
#  what are the problem with the callback ?
2 main issue with the callback 
1. callback Hell
2. inversion of control (control of execution away form the main program )
The control of execution moves away from the main program, making it harder to predict what happens next.
inversion of control means we have to loose the control of your program when we have to used callback  
callbacks are a common example of Inversion of Control (IoC) because when we pass a function as a callback, we give up control over when and how that function will be executed. Instead, the function is called later by another piece of code, 

*/
