/*
# event loop 
js synchronous single threaded language it has one call stack its so only one things at time. to this call stack present in the js engine and whole js code run inside the call Stack 

ex. 
function a(){
console.log('x')
a();
console.log('end)
}


if the execute the above pice of code or any  javascript code run by js it create Global execution context here and this global execution context push into the call stack  and whole js code run line by line in Global execution context.

Browser has javascript engin , Local storage. alo browser has timer so browser has super power to communicate with external word. 
so here running the javascript code we need to the super power of browser to communicate with the browser we need some kind of connection so js engine need some way to access those superpower 

so browser has webApi so we need to access this super power we need this webApi 
# list of web api 
Timers: setTimeout, setInterval
Network: fetch, XMLHttpRequest
DOM: document.querySelector, addEventListener
Storage: localStorage, sessionStorage
Geolocation, File API, Console API, etc.
# note
    1. browser contains the window as global object and using this window object browser gives a super power to js engine


# defination of event loop:
The event loop is a fundamental concept in JavaScript that handles asynchronous operations like:
setTimeout()
Promises
AJAX calls
User interactions
Event listeners

1. event loop is tiny component within the javascript runtime.
2. The event loop is mechanism to javascript that handle asynchronous operation ensuring that non-blocking task are executed efficiently.
3. event loop constantly or continues running process that co-ordinate task between the call stack and callback queue to achieve concurrency so event loop continuously check the call stack and callback queue (i.e monitoring both call stack and callback queue.)
4. if there is callback function waiting in callback queue to execute the event loop will check call stack is empty or not  as soon as stack is empty it will take that callback function from callback queue and push into the call stack to be executed so continue this process is call as event loop.
5. event loop specially understand how asynchronous code execution work
i.e it is heart of the js currency model and play a significant role in event handling, callback, and not-blocking operation so js in single thread language the means js can do one this at single point of time


# The Event Loop and Callback Queue are part of:
    1.JavaScript Runtime Environment
    2. They are not part of the JavaScript language itself, but are provided by the JavaScript runtime, like:
    Browser engines (e.g., Chrome’s V8)

Node.js (built on V8 but adds APIs like file system, HTTP, etc.)

 # imp info
| Component                            | Description                                                        |
| ------------------------------------ | ------------------------------------------------------------------ |
| **Call Stack**                       | Runs synchronous code (function calls)                             |
| **Web APIs / Node APIs**             | Handles async operations (e.g., `setTimeout`, HTTP requests)       |
| **Callback Queue** (Microtask Queue) | Stores callbacks from Web APIs (e.g., `setTimeout`)                |
| **Microtask Queue**                  | Stores microtasks (e.g., `Promise.then`)                           |
| **Event Loop**                       | Coordinates the execution of stack, microtasks, and callback queue |


# How it all works together
    1. Synchronous code runs in the Call Stack.
    2. Async operations (like timers, fetch) go to Web APIs.
    3. When async operations complete, their callbacks are sent to:
            1. Microtask queue (if it's a promise, etc.)
            2. Macrotask queue (if it's a timer, event listener, etc.)
    4 Event Loop:
        1. Waits until the Call Stack is empty once the callstack is empty then .
                1. Then runs all microtasks.
                2. Then picks one macrotask from the callback queue and puts it on the call stack.


                ┌────────────┐
                │ Call Stack │
                └────┬───────┘
                     │
                     ▼
              ┌─────────────┐
              │ Web APIs    │ (e.g., setTimeout, fetch)
              └────┬────────┘
                   ▼
         ┌──────────────────────┐
         │ Callback Queue       │ (Macrotask Queue)
         └──────────────────────┘

         ┌──────────────────────┐
         │ Microtask Queue      │ (Promise.then, queueMicrotask)
         └──────────────────────┘

               ⟳ Event Loop
#  So, to summarize:
    1. Event Loop and Callback Queue are part of the JavaScript runtime environment (like browsers or Node.js), not the core JS language.
    2. They help manage and schedule asynchronous code execution.


*/

/*
# what is call stack :
    1. The call stack is a special data structure in programming that keeps track of function calls in the order they are executed.
    2.  The call stack is a fundamental mechanism that keeps track of function calls and ensures that functions are executed in the correct order, and it follows a "Last In, First Out" (LIFO) principle.
    3. all stack work on LIFO manner like last-in-first-out(last function called is the first one to be resolved.)
    4. javaScript uses a single thread to execute code, meaning only one function can be executed at a time. The call stack keeps track of which function is currently running.

    # how callstack work
        1.  Function Invocation: 
            When a function is called, a new execution context is created.  This context contains information about the function's execution, such as the values of its parameters and variables.
        2. push into the stack:
            he execution context of the called function is added (or "pushed") onto the top of the call stack.
        3. function execution:
            The JavaScript engine executes the code within the function's execution context.
        4. return 
             Once a function finishes execution, its execution context is removed (or "popped") from the top of the call stack, and the control is returned to the calling function.


# Call Stack
    Definition: A stack that keeps track of function calls.
    LIFO: Last function pushed is the first to pop.
    When a function is called:
    Its Execution Context is created and pushed to the stack.
    When a function returns:
    Its Execution Context is popped from the stack.

# what is stack overFlow 
    : When too many execution contexts are added to the call stack (e.g., infinite recursion), it exceeds memory limits and crashes.
    1. he call stack has fixed size , depends on the implementation of the host environment,either the web browser or node.js
    2.  So number of execution context exceeds the size of the stack a stack overflow error will occur.
    3. his usually happens due to excessive or infinite recursion, where a function keeps calling itself without an exit condition.

# what is Global execution context 
    1 Definition: The default context where JavaScript code starts executing.
    2.The global execution context is the default context in which any JavaScript code runs outside of functions
    3.It is the first context that is created when a JavaScript program is executed and it serves as the environment for all global code, variables, and functions.

    # The Two Phases of the Global Execution Context:
        1. * Creation Phase:
        1. When the JavaScript engine starts executing code, it creates a global execution context. During this phase, the engine does the following:  
            1. Creates a global object (e.g., window in browsers, global in Node.js).
            2. Sets up the this keyword to refer to the global object.
            3. Initializes all declared variables (but they are not assigned values yet) and functions.(i,e Memory Allocation: The JavaScript engine allocates memory for variables and functions declared in the global scope.)

        2. Execution Phase:
            1. The JavaScript code is executed line-by-line:
            2. Variables and functions are assigned their respective values.
            3. The this keyword continues to refer to the global object
            4. The global execution context is the first context to be created when a JavaScript program starts.
            5. After the global context is created, other execution contexts are created for any functions called, and they are pushed onto the call stack.
            6. The global execution context stays at the bottom of the call stack throughout the program’s execution


# Global Execution Context (GEC)
    1. Definition: The default context where JavaScript code starts executing.
    1. Phases:
        1.Creation Phase:
            1.Creates the global object (window in browsers, global in Node.js).
            2. Sets this to the global object.
            3. Allocates memory (variables: undefined, functions: reference).

        2. Execution Phase:
            1. Executes the code line-by-line.
            2. Assigns values and invokes functions.

#  what is execution context :
    1.  the execution is an abstract concept of an environment were the  javascript code is evaluated and executed.(or An execution context in JavaScript refers to the environment in which a piece of code is evaluated and executed)
    2. It is a container for all the information that the JavaScript engine needs to execute a function or evaluate a block of code.
    if you call any function it create execution context of that function
     There are three types of execution contexts in JavaScript:
        1.  Global Execution Context
        2. Function Execution Context
        3.  Eval Execution Context (rarely used in modern JavaScript)

# Execution Context
The environment in which code is executed.
    1. Types:
        1. Global Execution Context
        2. Function Execution Context
        3. Eval Execution Context (rarely used)
Components of an Execution Context:
        1. Variable Environment (memory)
        2. Scope Chain
        3. Value of this
*/

/*
#  explain execution stack or call stack
    1. The execution stack, also known as the call stack, is a data structure used by JavaScript to manage the execution of function calls  keeps track of the functions that are called during the execution of a program, and it follows a Last In, First Out (LIFO) order.
    2. When a function is called, create new function execution context and its execution context is pushed onto the call stack.
    3. When the function finishes execution, its context is popped off the stack. 
    4. The call stack ensures that JavaScript executes functions in the correct order and maintains proper scope and execution context.

# Key Concepts in the Call Stack:

1. Global Execution Context (GEC):
    This is the default execution context where the global code runs.
    When the program starts, the global execution context is pushed onto the call stack.
    It remains there until the script finishes execution.

2. Web APIs:
    Web APIs refer to browser APIs or environments like Node.js 
    that allow JavaScript to interact with the web, perform AJAX calls, or handle asynchronous tasks like setTimeout(), DOM manipulation, or HTTP requests.
    These tasks are non-blocking and run asynchronously.
    They do not execute directly in the call stack. Instead, they are handled by the web browser or Node.js environment.

3 Message Queue (Task Queue):
    The message queue is where asynchronous tasks are placed after being executed by the web APIs.
    Tasks in the queue are categorized into:
        1. Microtasks:
            1. These include tasks like promises or MutationObserver callbacks.
            2. Microtasks have a higher priority than macro tasks and are executed after the current script completes, before the next event loop tick.
        2.  Macro tasks: 
            1. These include tasks like setTimeout(), I/O tasks, setInterval(), or AJAX callbacks. 
            2.  They are placed in the message queue after the execution stack is empty.

4. Event Loop:
    The event loop is responsible for managing the execution of tasks. 
    It checks whether the call stack is empty. 
    If the stack is empty, it pushes the tasks from the message queue (starting with microtasks) onto the call stack for execution.


*/

console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);

Promise.resolve().then(() => {
  console.log("Inside Promise");
});

console.log("End");

/*
# Step-by-Step Execution:
    1. Global Execution Context:
        The program begins executing and enters the global execution context.
        The first statement console.log("Start") is executed, and "Start" is logged.

    2. etTimeout():
        The setTimeout() function is called. This is a web API call.
        The JavaScript engine passes the setTimeout callback function to the Web API (browser or Node.js), which will execute it after 2000ms (2 seconds).
        The callback is not executed immediately. Instead, it is placed in the message queue after the delay.

    3. Promise:
        The Promise.resolve().then() is called. This creates a microtask.
        The microtask is added to the microtask queue, which is part of the message queue but has a higher priority than the macro task (like setTimeout).

    console.log("End"):
    The next statement console.log("End") is executed, logging "End" to the console.

    4. Call Stack is Empty:
        At this point, all synchronous code is executed, and the call stack is empty.

    5. Event Loop:
        The event loop checks the call stack.
        Since the stack is empty, the event loop moves to the message queue.
        First, the event loop checks the microtask queue. The Promise callback is executed, and "Inside Promise" is logged.
        Then, the event loop moves to the macro task queue. The setTimeout callback is executed, and "Inside setTimeout" is logged after the specified delay.


*/

const fun2 = () => {
  setTimeout(() => {
    console.log("function 2 is running...");
  }, 3000);
};

const fun1 = () => {
  console.log("function 1 is starting");
  fun2();
  console.log("function 1 end the execution");
};
fun1();

/*
Example

1. if you call any function it cerate execution context
    Execution contest having two phase
    1 creation Phase
    2. Execution Phase

2. CREATION PHASE
    when the javascript engine execute function first time it create global execution context so during this phase javascript engine perform following task 
    1. create global object :  widows in the browser
    2. create this object and bind with Global object
    3 setup Memory for strong variable and function references
    4. stored the function declaration in heap memory and variable within the global execution context with the initial value as undefined

3.EXECUTION PHASE
    1. after creating the global execution context move to the execution phase
    2. During the execution phase, the javascript engine executes the code line by line, assigns a value to the variable and executes the function call.
    3. Each function call creates a new function execution context. An object that is a reference to all the parameters of the function.

in above example
1.you call fun1() it has fun1() execution context.

2.Then execute this console.log execution part and print whatever it writes.
 And remove its execution context  from the execution stack.

3.Then execute next line it having the function call of fun2()
If you call any function it has its execution context like  fun2() execution context.

4 So in function 2 the first execution line having setTimeout() function also has its execution context. Like setTimeout() execution context.
5. So setTimeout() comes under the webApi part
Inside the setTimeout having console.log(‘function 2 called’) but waiting for 3 millisecond so console.log()
does not create its execution context because it time base event its set time for 3 millisecond. And it callback function wait  for 3 millisecond

6. And we can pass this callback function inside the web api for 3 millisecond and if it pass to web-api then vanish  or remove its execution context form execution stack

7 So in the execution stack having fun2 context so fun2 checks if it's having any more execution if not any execution so fun2 also vanishes or removes its execution context from execution stack.

8 So in execution stack it having fun1() context so its check it having any execution or not it its having execution of console.log so its having it execution context and its execute remove the execution context of console.log in execution stack

9 The fun1() execution context  in the execution stack checks if it has any execution or not if not it vanishes or removes fun1() execution context from the execution stack.

10 Now the execution stack is empty.

11 When a web api has a callback function it waits for 3 millisecond once it completes 3 sec web api passes this callback function in the message queue.

12 So if  callback function comes under message queue it check if execution stack is empty or not it its empty then it move from message queue to global execution context in execution stack.

*/

/*

# NOTE:
when whatever present in web Api pass to the message queue
and event loop used to whatever pass web api in message queue, when execution stack is empty the event loop pass whatever present in message queue,
it moves to the execution stack and gives its position in the execution stack to execute and get its execution context and once its execute and print then it removes its execution context.

The Event Loop is a core part of JavaScript's concurrency model that handles asynchronous operations. It ensures non-blocking behavior by coordinating tasks, callbacks, and promises.
“The event loop is what allows JavaScript to handle asynchronous operations in a non-blocking way by processing the call stack and handling tasks from the task/microtask queues.”


# defination of event loop :
 1. Event loop is a process that waits for the call stack to be clear before pushing callbacks from the MESSAGE queue to the call stack OR execution stack.
Once the execution of call stack clear the event loop triggers and checks the MESSAGE queue for available callbacks

Def: javascript has a runtime model based on that event loop which is responsible for executing the code, collecting and processing the event and executing queued sub tasks.
If the call stack is empty and there is a callback function in the task queue then they will be dequeued from the task queue and run by them pushing them into the call stack.
javascript event loop constantly running processes that coordinate tasks between the call stack and callback Queue to achieve concurrency.


#  What is benefits of event loop
We are using single threaded event loop it make very easy to access and modify mutable state between requests
Also The event loop is constantly running process that monitor both call stack and callback Queue , so callback stack is not empty, the event loop wait until it is empty and place the next function from callback queue to the call stack,
If the callback queue is empty, nothing will happen.

1. Non-blocking I/O
    1. JavaScript can perform long-running operations like network requests, file access, or timers without blocking the main thread.
    It allows the rest of the code (e.g., UI rendering, animations) to continue running smoothly.
2. Improved Performance
    The event loop processes tasks asynchronously, allowing JavaScript to handle multiple events efficiently without creating new threads.
    Instead of waiting for each task to complete, it adds them to a task queue and handles them when the call stack is empty.
3. Simplified Concurrency
    1. JavaScript avoids the complexity of multithreading (like race conditions or deadlocks).
    2. It runs on a single thread, and the event loop ensures operations are executed in a predictable order.
4.. Responsive User Interfaces
    While waiting for events (e.g., click, input, timers), the event loop allows the browser to continue rendering the UI.
    This keeps the app responsive and avoids "freezing" the screen.
5. Efficient Resource Usage
    Instead of spawning multiple threads (which consume memory/CPU), JavaScript uses callbacks, promises, microtasks/macrotasks, and the event loop to schedule work.
    This results in lightweight and scalable applications.
 6. Foundation for Async Features (Promises, async/await)
    1. Promises, async/await, setTimeout, and fetch() all rely on the event loop.
    These features make asynchronous code more readable and manageable.
 7. Handles External Events
        1. The event loop listens for external events like:
        2. Mouse clicks
        3. Keyboard input
        4. Server responses
        5. Timer completions
These are all queued and handled without blocking the main execution



# Call Stack, Web API, and Message Queue Summary:
The call stack executes synchronous code.
Web APIs handle asynchronous tasks and move them to the message queue.
The message queue holds tasks that are ready to run (both microtasks and macro tasks).
The event loop manages the order in which tasks are processed, executing microtasks first and then macro tasks.



#  what is web api and Browser Environment
    1. A Web API (short for Application Programming Interface) refers to a set of functions or protocols provided by the browser environment or the web platform (like Node.js in server-side JavaScript) that allows JavaScript to interact with the browser and perform various tasks
    2. These tasks include interacting with the DOM, handling events, making network requests, accessing storage, managing timers, and much more.
    In JavaScript, Web APIs are provided by the browser to handle asynchronous tasks, offloading them from the call stack to the task queue. 
    These APIs handle long-running tasks asynchronously, allowing the main thread (JavaScript's call stack) to remain non-blocking while waiting for responses or performing tasks.
1. Fetch API:
    The Fetch API is used for making network requests asynchronously. It allows you to fetch resources from a server, such as making AJAX calls or fetching data from APIs.
    It returns a Promise, which resolves once the network request completes
2. Timers API (setTimeout, setInterval):
    setTimeout() allows you to execute a function after a specified delay.
    setInterval() repeatedly executes a function at specified intervals
3. Console API:
    The Console API provides methods for logging information to the browser’s console. Common methods include console.log(), console.error(), and console.warn().
4. Geolocation API:
    The Geolocation API allows you to get the geographical location of a device, such as the user's latitude and longitude.
    This API is useful for location-based features like maps or nearby places.
5. web Storage API (LocalStorage, SessionStorage):
    The Web Storage API provides two types of storage for the browser:
    LocalStorage: Stores data persistently across sessions (until manually deleted).
    SessionStorage: Stores data for the duration of a session (until the browser tab is closed).
    URL API:
    HTML DOM API
    Performance API:
    File API:



#  Web APIs & Browser Environment   
    1. APIs provided by the browser or runtime like Node.js for asynchronous and system-level operations.
Examples:
    1. Timers: setTimeout, setInterval
    2. Network: fetch, XMLHttpRequest
    3. DOM: document.querySelector, addEventListener
    4. Storage: localStorage, sessionStorage
    5. Geolocation, File API, Console API, etc.

# Task Queues
    1. Microtask Queue (High Priority)
    2. Promise.then, MutationObserver
Executed before next macrotask.

# Macrotask Queue
    setTimeout, setInterval, DOM event



# Benefits of Event Loop
    1. Enables non-blocking async execution.
    2. Allows JavaScript (single-threaded) to manage I/O operations, user input, and network requests efficiently.
    3.Simplifies working with mutable state.


# what is message queue or  Callback Queue (Macro Task Queue)
    1. The Callback Queue (also called the Macro Task Queue) is where JavaScript stores asynchronous callbacks once their associated tasks (like timers or events) are ready to be executed.

    # Role in Event Loop
    1. The Event Loop checks the Call Stack.
    2. If the Call Stack is empty, the Event Loop:
    3. First executes all Microtasks (like Promise.then).
    4. Then picks the next task from the Callback Queue (Macro Task Queue) and pushes it to the Call Stack.
*/


