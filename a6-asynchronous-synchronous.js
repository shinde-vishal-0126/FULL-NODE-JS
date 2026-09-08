
//| # synchronous vs asynchronous :


// 1. synchronous :
// 1. Synchronous operations are executed one after the other, in a sequential order. The code waits for each task to complete before moving on to the next one.
// 2. One task at a time, sequentially.
// 3. Blocking - Yes, tasks block the program until finished.
// 4. Slower in I/O operations, inefficient.
// 5. When a synchronous task is being executed, the JavaScript engine will not move on to the next task until the current one finishes.

// 2. asynchronous :
// 1. Asynchronous operations allow tasks to be executed independently of the main program flow. When an asynchronous task is encountered, the JavaScript engine doesn’t wait for it to complete before moving on to other tasks
// 2. Multiple tasks can be in progress concurrently.
// 3. Blocking - No, tasks don't block the program.
// 4. Faster, especially in I/O-bound tasks.
// 5. Asynchronous tasks allow other code to execute while waiting for long-running operations (like file reading, network requests, or timers) to finish.
