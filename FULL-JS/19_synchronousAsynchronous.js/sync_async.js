/*
# what is synchronous and asynchronous
1. js executed synchronous code first and then execute asynchronous code 
2. synchronous code executed line by line, blocking the further execution until the each line completed
3. asynchronous code allow other code to continue executing while it wait for and asynchronous.


# synchronous :
1. code executed line by line
2. synchronous are blocking architecture(i.e blocking the execution of subsequent code until the current task is finished )
3. execution of each task depends of the completion of the previous task because it work serial
i.e each instruction wait for previous instruction to be completed execution.
4.Due to synchronous nature some time important instruction get blocked due to some previous instruction which case delay the user interface.
5. task are executed one after another in sequential manner each operation must be completed before to the next.
*/

// # here code executed line by line i.e block the next line execution until the previous one compleat
console.log("start");
console.log("work in progress");
console.log("end");

const fun2 = () => console.log("function 2 is called..");
const fun1 = () => {
  console.log("function 1 is called");
  fun2();
  console.log("function 2 invoke here....");
};
fun1();

/*
# asynchronous:
1.code executed parallel
2. asynchronous are not-blocking architecture (not block the execution of the subsequent code instead of used mechanism like callback, promise, or async/await to handle asynchronous operation)
3. execution one one task are not depend to another task 
4. it can run simultaneously
5. js start long-running task and continue running task in parallel
6.asynchronous code execution allow to execution next instruction immediately and does not block the flow because of previous instruction 
*/
function fun3() {
  setTimeout(() => {
    console.log("function is called...");
  }, 2000);
}
function fun4() {
  console.log("function 4 is called ");
  fun3();
  console.log("function 3 again called.");
}
fun4();

/*
# notes:
1. javascript are single threaded language and it can not executed this setTimeout in parallel as our code begin executed.
2. so first js go and executed all synchronous code then executed asynchronous code so setTimeout is part of the web-api
3.so using the setTimeout simulate the asynchronous process
4. i.e in js synchronous code executed first then start the executing asynchronous code 


# imp info

1. js is single threaded programming language 
2. This means that the js engine has only on call stack therefor it only can do one thing at time
3. when execute a script js engine execute code form top to bottom line by line in order with synchronous manner
4. asynchronous means js engine execute other task while waiting for another task to be completed.(it can handle multiple operation currently)
    1. js request for data from server 
    2. display spinner
*/

console.log("start.....");
function importantAction(username) {
  setTimeout(() => {
    return `subscribed to the ${username}`;
  }, 1000);
}
const call = importantAction("vishal");
console.log(call); // it return undefined
// also this is asynchronous function
console.log("stop");

// # to solved this issue we have to used callback function here

function interactiveAction1(user_name, cb) {
  setTimeout(() => {
    cb(user_name);
  }, 1000);
}
let res = interactiveAction1("akshu", (message) => {
  console.log(message);
});


//#  The method console. dir() displays an interactive list of the properties of the specified JavaScript object
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hello!");
  },
};
console.dir(person);
console.log(person);
