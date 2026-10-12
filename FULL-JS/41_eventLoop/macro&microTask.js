/*
# micro task and macro task :

# JavaScript Event Loop Overview
1.The Event Loop in JavaScript manages the execution of synchronous and asynchronous code. 
2.It runs continuously and does the following:
    1.Executes synchronous (call stack) code first.
    2.Then processes the Microtask Queue.
    3.Then picks and executes one task from the Macrotask Queue.

1. javaScript starts by running all the synchronous code on the call stack.
Macro Tasks: When a macro task (like setTimeout) is scheduled, it is added to the task queue.
Micro Tasks: When a microtask (like a Promise) is scheduled, it is added to the microtask queue.
# Microtask Queue Processing: 
After synchronous code finishes executing (the call stack is empty), the event loop first checks the microtask queue and processes all the microtasks before moving on to the task queue.
#  Macro Task Queue Processing:
 Once all microtasks have been processed, the event loop picks the next macro task from the task queue and executes it.


#  What are Tasks?
There are two types of asynchronous tasks:
| Type          | Queue           | Priority |
| ------------- | --------------- | -------- |
| **Macrotask** | Task Queue      | Lower    |
| **Microtask** | Microtask Queue | Higher   |


Repeats the loop.

# macro task : it also know as callback queue or message queue

1.Also called: Task queue, callback queue
2. Scheduled to run after current script and after all microtasks are done.(i.e A macro task (also called a task or macrotask) is any task that is scheduled to run in the task queue.)
3. The macro task queue holds tasks that need to be executed after the currently executing code has completed.
4.One macro task runs per event loop iteration.
4.Examples of Macrotask
    1.setTimeout()
    2.setInterval()
    3.setImmediate() (Node.js)
    4.fetch() callbacks
    5.UI events (click, scroll)
    6.I/O tasks

5. The JavaScript engine processes one macro task from the task queue at a time after the current stack of synchronous code has finished.
6. After a macro task is processed, the JavaScript engine will process all pending microtasks before picking the next macro task.
5.Characteristics
    1.Lower priority than microtasks.
    2.Runs after microtasks.
    3.Executed in FIFO order (first in, first out).
    4.Can cause delay if microtasks queue grows large.


# Microtasks
1. A microtask is a smaller, more immediate task that is placed into the microtask queue. or Added to a microtask queue (separate from macrotask).
2. Executed immediately after the current synchronous code, before any macrotask.
3. All microtasks are run before the next macrotask. 
4.Examples of Microtasks
    1.Promise.then(), Promise.catch(), Promise.finally()
    2. queueMicrotask: (explicitly queues a microtask)
    3. MutationObserver callbacks : (a DOM change observation mechanism)
5. Microtasks are executed immediately after the current task (whether it's synchronous code or a macro task) finishes, but before any new macro tasks.
6. The JavaScript engine processes all microtasks in the queue before moving to the next macro task.
# Characteristics
    1.Higher priority than macrotasks. 
    2. Executed before rendering and before next macrotask.
    3 Can block rendering if too many are queued.
*/

console.log("start");

setTimeout(() => {
  console.log("macro task: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("micro task: promise");
});

console.log("end");

// start
// end
// micro task: promise
// macro task: setTimeout

// Synchronous code: 'start', 'end' → immediately
// Promise.then() → microtask → executes after sync
// setTimeout() → macrotask → executes after microtasks

console.log("1");

setTimeout(() => {
  console.log("2"); // macro

  Promise.resolve().then(() => {
    console.log("3"); // micro inside macro
  });
}, 0);

Promise.resolve().then(() => {
  console.log("4"); // micro
});

console.log("5");

// output
// 1
// 5
// 4
// 2
// 3
// Flow:
// Synchronous: 1, 5
// Microtask queue: 4
// Macrotask queue: 2, then its microtask 3

// summary table
/* 
| Feature                 | **Microtask**                                  | **Macrotask**                                  |
| ----------------------- | ---------------------------------------------- | ---------------------------------------------- |
| **Queue**               | Microtask queue                                | Macrotask queue                                |
| **Priority**            | Higher                                         | Lower                                          |
| **Exec Timing**         | After current script, before rendering         | After microtasks and rendering                 |
| **Triggered by**        | Promises, `queueMicrotask`, `MutationObserver` | `setTimeout`, `setInterval`, events, `fetch()` |
| **Blocking Rendering**  | Yes, if overloaded                             | No                                             |
| **Execution Frequency** | All microtasks run before next macro task      | One macro task per event loop round            /



# Important Notes
1. Microtasks run first: Even if both macro and micro tasks are scheduled at the same time.
2. If microtasks keep adding more microtasks, it can starve the event loop (blocking macro tasks).
3. Event loop will not proceed to the next macro task until all microtasks are cleared.




# whatEver callback function are present in web api or host
so this callback function task may be 
1. Macro Task 
2. Micro Task

# MACRO TASK
SetTimeOut();
setTimeinterval()
fetchApi()
user interactions like click event
1. Granularity: A macro task is a large, high-level task that involves significant operations, such as computations or time-consuming actions.
2. Execution Order: Macro tasks are executed in the order they are scheduled, one after the other.
3. Use Case: Used for operations like I/O tasks (file reading, network requests), rendering graphics, or handling user interactions.
4. Event Loop: Macro tasks are processed in the main thread, helping maintain application responsiveness while performing substantial work.
4. Examples: Loading large datasets, complex data processing, rendering a complex user interface.
 Macrotasks  represent larger and more time consuming task   
Macro Tasks: Larger, time-consuming tasks (e.g., I/O operations, rendering) that run sequentially in the event loop.

# Micro task 
promises/callback
async/await
so this microtask and macrotasks ultimately need to execute by javascript runtime 
so microTask tack the precedence(or higher propriety)
event loop first pick the microtask and place on the stack before macro task pickup 
1. Granularity: A micro task is a smaller, quicker task that is typically executed in microseconds or less.
2. Execution Order: Micro tasks are executed immediately after the current macro task finishes, but before the next macro task starts. Micro tasks have higher priority than macro tasks.
3. Use Case: Used for lightweight tasks like handling promises, event listeners, or scheduling simple asynchronous operations.
4. Event Loop: Micro tasks also belong to the event loop but are processed before the next macro task in the queue.
4. Examples: Resolving a promise, executing a callback function, or updating the UI in response to user actions.
Microtask represent small, and quick task that has higher priority 
Micro Tasks: Smaller, lightweight tasks (e.g., promises, callbacks) that run immediately after the current macro task and before the next one



# note :
So both macro and micro tasks have separate queues so the micro  task queue has higher priority and completes first. 
So javascript executed the js program in event loop depending or programming design 
Complete execution of program maintain several round of loop 
So event loop state the execution for first synchronous task in the current scope and the end with clear the micro task in queue
  */

/*
# what is differences between micro task and macro task 
| 🔹 **Aspect**           | 🟩 **Microtask**                                                                               | 🟦 **Macrotask**                                                                                                               |
| ----------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Execution Timing**    | After current synchronous code, **before the next macrotask**                                  | After current script and **after all microtasks**                                                                              |
| **Priority**            | Higher priority                                                                                | Lower priority                                                                                                                 |
| **Queue Type**          | Microtask queue                                                                                | Task (Macrotask) queue                                                                                                         |
| **Processed When**      | **Immediately** after current script execution ends                                            | After microtasks and **usually after rendering**                                                                               |
| **Event Loop Behavior** | All microtasks run **before** the next macrotask                                               | Only one macrotask runs per event loop cycle                                                                                   |
| **Examples**            | - `Promise.then()` / `.catch()` / `.finally()`<br>- `queueMicrotask()`<br>- `MutationObserver` | - `setTimeout()`<br>- `setInterval()`<br>- `setImmediate()` (Node.js)<br>- DOM events (click, scroll)<br>- `fetch()` callbacks |
| **Use Case**            | For **small, urgent tasks** that need to run quickly after current execution                   | For **larger tasks** like timers, UI events, or I/O operations                                                                 |
| **Rendering Impact**    | Executed **before browser re-renders**                                                         | Usually executed **after rendering**                                                                                           |
| **Blocking Risk**       | Yes – a long microtask queue can block the event loop                                          | No – only one macro task runs per loop, then microtasks follow                                                                 |
| **Re-entrancy Risk**    | Higher – recursive microtasks can block the loop                                               | Lower – only processed once per loop cycle                                                                                     |


*/
