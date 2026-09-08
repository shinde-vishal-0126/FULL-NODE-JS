//? what are events in node js
// events are signals that indicate something has occurred in the application.
//  i.e something happened in program like notification or action are happen )
// they are a core part of Node.js and are used to handle asynchronous operations.
//! Events can represent various types of occurrences, such as:
// - Completion of an asynchronous operation (e.g., reading a file, receiving data from a network request).
// - User actions (e.g., clicking a button in a web interface).
// - Internal operations (e.g., timers expiring, errors occurring).

// Node.js has a built-in module called events that provides a way to work with these events
// EventEmitter class in the events module allows you to create and handle custom events.

//* EventEmitter:
//  The core of Node.js event handling. It allows you to emit (trigger) events and set up listeners for those events.
//* Listeners:
//  Functions that are called when an event is emitted. You can add multiple listeners to a single event.
//* Emit:
// The process of signaling that an event has occurred.

//* Common Events in Node.js:
// File system events: fs module emits events when file operations are performed.
// HTTP events: http module emits events during HTTP requests and responses.
// Stream events: Streams emit events like data, end, and error to manage data flow.
// create custom event :

//? what is Event emitter in node js
// In Node.js, an EventEmitter is a core concept that provides the mechanism to create, emit, and handle events.
// It is part of the built-in events module having EventEmitter class  and  that call object allows objects to communicate with each other asynchronously by emitting named events and attaching listeners (or handlers) to those events.
//! Key Concept
//*Event Source:
// The object that emits an event is known as an EventEmitter. This object is the source or origin of the event.

//* Emitting Events:
// The process of signaling that something has happened by using the emit method.
// This notifies all listeners attached to that event.

//*Listeners (Handlers):
//  Functions that are executed when a specific event is emitted.
// These listeners are registered using the on (or addListener) method.
//!
// myEmitter.on('greet', listener):
// Registers a listener function that will be called when the greet event is emitted.
// The listener function receives any arguments passed during the emission of the event.
// myEmitter.emit('greet', 'Alice'):
// Emits the greet event, passing 'Alice' as an argument to the listener.

//?what is event Queue in node js  (all generated event are stored in queue so this called as event queue )
// the Event Queue (also known as the Event Loop Queue) is a fundamental part of the event-driven architecture.
//  It is where all the asynchronous events and their corresponding callbacks are stored and managed. by the event queue
// The Event Queue ensures that events are processed in a non-blocking manner, allowing Node.js to handle many operations concurrently without waiting for one to finish before starting another.

// Key Concepts:
//* Event Loop:
// The Event Loop continuously checks the Event Queue and processes any pending events one at a time.
// It is the core mechanism that handles asynchronous operations in Node.js.
//* Event Queue:
// A data structure where events (or tasks) are queued as they are emitted.
// These events are processed by the Event Loop in a sequential, FIFO (First In, First Out) manner.
//* Asynchronous Nature:
//  Node.js can handle I/O operations asynchronously, such as reading files, making network requests, or handling timers. The callbacks for these operations are queued in the Event Queue when they are ready to execute.
//! How the Event Queue Works:
//* Emit an Event:
// When an asynchronous operation is complete or an event is emitted, the associated callback is pushed into the Event Queue.
//* Event Loop Processing:
//  The Event Loop continuously checks the Event Queue. If the queue is not empty, the loop picks the first event from the queue, executes its callback, and then moves to the next event.
//* Non-Blocking Execution:
// Node.js uses this model to handle multiple operations without blocking the execution of other code. This makes it efficient for handling I/O-heavy operations.

//* Components of the Event Queue:
// Timers Queue: Handles setTimeout and setInterval callbacks.
// I/O Callbacks Queue: Handles I/O operations like file reads, network requests.
// Check Queue: Handles callbacks from setImmediate.
// Close Callbacks Queue: Handles close events for sockets, files, etc.
//! The Event Queue is where all asynchronous events and their callbacks are queued up.
//

//? what is event loop :
// Event Loop is a crucial component in Node.js that manages and orchestrates the execution of asynchronous operations.
//It continuously checks the Event Queue for any pending tasks (or events) and executes them one by one. (_// i.e Then event loop pick up event form the event queue and execute them in the order the were added.)
//This process allows Node.js to handle non-blocking I/O operations efficiently, making it well-suited for building scalable, real-time applications.

//! Key Characteristics of the Event Loop:
//* Single-threaded:
//  Node.js operates on a single thread but can handle many concurrent operations through asynchronous callbacks and the Event Loop.
//* Non-blocking:
// The Event Loop ensures that the application can handle multiple tasks without waiting for one to complete before starting another.
//* Continuous Process:
// The Event Loop runs indefinitely, picking up events from the Event Queue and executing their associated callbacks in the order they were added (FIFO - First In, First Out).

//! How the Event Loop Works:
//* Event Generation:
// Asynchronous operations (like file I/O, network requests, timers) generate events when they complete.
//* Event Queue:
// These events are placed in the Event Queue, waiting to be processed.
//* Event Loop Execution:
// The Event Loop continuously checks if there are any pending events in the Event Queue.
// It picks one event at a time, executes its associated callback or listener, and then moves on to the next event.
//* Repeat Until Done:
//  This process continues until there are no more events left in the queue, or the application is terminated.

//* Phases of the Event Loop:
//! Initialization
// Node.js Process Starts -> Event Loop Begins
// The event loop is started by Node.js when the process begins.
// Its job is to keep the process running and handle callbacks systematically.

//!  Timer Phase :
// [Timers Phase]
// - Check for expired timers (e.g., setTimeout, setInterval)
// - if expired timers then Execute their callbacks if timers have completed
// At the beginning of each iteration, the event loop checks if there are any timer callbacks ready to execute. If a timer (setTimeout or setInterval) has expired, its associated callback is executed.
// setTimeout(() => console.log('Timer callback executed'), 1000);

//! I/O Callbacks
// [I/O Callbacks Phase]
// - Handle callbacks for completed I/O operations
// After timers, the loop checks for I/O operation callbacks.
// These include:
// File system operations (e.g., fs.readFile or fs.writeFile)
// Network requests
// Other input/output-related tasks.
// If the I/O operation is complete, its callback is executed.

//! Defer Execution of Outstanding Callbacks
// [Outstanding Callbacks]
// - If there are too many callbacks to handle in the current iteration:
//   -> Postpone to the next loop iteration
// If there are too many outstanding callbacks in this phase, Node.js may defer some to the next iteration of the loop to maintain efficiency and responsiveness.

//! Idle, Prepare Phase:
// Internal operations for Node.js.

//!  Poll Phase
//[Poll Phase]
// - Check for new I/O events
// - If callbacks are ready, execute them immediately
// - If not, register as pending callbacks

//! Jump to Timer Callbacks (if applicable)
// [Jump Back to Timers Phase]
// - If timer callbacks are due:
//   -> Execute them
//   -> Return to current loop iteration
// If new timer callbacks are ready while in the poll phase, the event loop will jump back to the timers phase to execute them. This ensures timer callbacks are executed promptly.

//!setImmediate Callbacks (Check Phase)
// [Check Phase]
// - Execute setImmediate callbacks
// The check phase is for executing setImmediate callbacks, which run after all other callbacks in the current loop cycle are completed.
// setImmediate(() => console.log('setImmediate callback executed'));

//! . Close Event Callbacks
// [Close Callbacks Phase]
// - Execute callbacks for 'close' events
// If there are any close event callbacks registered (e.g., when closing a file or network connection), they are executed during this phase.

// Exit Condition
// [Exit Condition]
// - Exit the Node.js process only if:
//   -> There are no pending callbacks
//   -> All timers and events are completed
// The Node.js process will continue running as long as there are pending callbacks or timers. It exits only when everything is complete.

//! Event Loop Summary in Simple Terms:
//* Timer Phase:
//  when node js start execution The event loop starts and continuously runs, handling callbacks in a specific order.
// At the beginning of each iteration, it checks for any timer callbacks (like those from setTimeout or setInterval) that need to be executed if their timers have expired.

//* I/O Callback Phase:
// The loop then moves to check other types of callbacks, such as those from file or network operations (I/O operations).
// These callbacks are executed if the corresponding I/O operation has finished.

//* Defer Outstanding Callbacks:
// If there are too many callbacks pending, Node.js may defer some to the next iteration of the loop.
// This helps keep the loop moving smoothly, ensuring it doesn't get stuck on too many tasks at once.

//* Poll Phase:
// In this phase, Node.js checks for new I/O events and tries to execute their callbacks immediately if possible.
// If not, it marks them as pending and will handle them later.

//* Jump to Timer Callbacks (if needed):
// If any timer callbacks are due, the loop can jump back to the timer phase to execute them, even if it hasn't finished the current iteration.

//* Check Phase:
// Here, setImmediate callbacks are executed.
// These are similar to setTimeout but are designed to run after the current cycle of I/O events.
// setImmediate is usually faster than a setTimeout with a minimal delay.

//* Close Event Callbacks:
// At the end of each iteration, Node.js will execute any close event callbacks (like when a file or socket is closed).

//* If there are no remaining events to handle, the Node.js process may exit.


// ? what is event handler
// event handler is function it "handles" the event by performing a predefined action when the event occurs.
// "An event handler is a function that gets executed when a specific event occurs.
//  In Node.js, you attach an event handler to an event, and when that event is emitted, the handler runs. 
// This helps in managing events like user actions or I/O operations efficiently."


//? what is event driven architecture in node js 
// Event-driven architecture (EDA) in Node.js is a software design pattern where the flow of the program is determined by events—actions or event 
//  This architecture is particularly well-suited for handling asynchronous operations, which are common in I/O-bound applications like web servers, real-time systems, and microservices.
// An event can be any occurrence or action, such as a user action (like clicking a button), a system process (like a database update), or an external message (like an API response).
// In event-driven architecture, components of the system communicate and react to each other by emitting and listening for events
//!Key Points:
//* Event Emitters: 
// In Node.js, the core EventEmitter class allows us to create objects that emit events.
//* Event Listeners: 
// These are functions that are registered to react to specific events. When an event occurs, all the listeners attached to that event are executed.
//* Asynchronous and Non-blocking: 
// Node.js uses an event loop to handle multiple events asynchronously, meaning the system can react to events without waiting for other operations to complete.
//* Scalability and Flexibility: 
// EDA is suitable for real-time systems like messaging apps, online gaming, and microservices where multiple components need to react to changing states or actions.
