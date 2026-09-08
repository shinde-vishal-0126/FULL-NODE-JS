

//? what are the module in node js 
// module  contain the pice of functionality or a specific functionality  that can be easily reused within a node js application
// ideally in javascript file can be treated as module 


//? what is differences between the module and function
// module is broader concept that encapsulate  functionality while function is a specific set of instruction within that module 
// module can contain multiple function and variable 


//? how many way are there to exports the module ?
// module.exports: Used for both single and multiple exports (replaces the object).
// exports: Used for adding multiple named exports (adds to the existing object).


//?  what are the core module ?
// core module are which module built in module which are predefined in the node js.
// just we need to require (or import ) and used 
// ex
//  http (used to launch server and working with the http request and http response);
// https would be helpful when you want to launch an ssl encoded server so where all data that which encrypted 
// fs (fs module are used to manipulate the file system )
// os (os module used to get information about the operating system)
// path (path module used to get the current dir, or file path) i.e work with path

//? what is module wrapper function :

// in node js each module is wrapped in a function called the module wrapper function before it is executed.

// This function is part of Node.js's internal module system and is used to provide the scope and context for the module.
// the wrapper function is a construct that wraps every module's code when it is executed.
//! Under the hood, NodeJS does not run our code directly, it wraps the entire code inside a function before execution. This function is termed as Module Wrapper Function 
// This default wrapper function encapsulates the module’s code and provides a private scope for its variables and functions.
// when i have create any module so node js wrap the module with another wrapper function.

// how to work module wrapper function in node js ?
// here we have grouping operator and inside that having anonymous function and inside that anonymous function access whatever you have defined in the module
// When you create a file in Node.js, its content is not executed directly in the global scope. Instead, it is wrapped in a function that looks like this:
(function (exports, require, module, __filename, __dirname) {
    const name = "vishal shinde";
    console.log(name);
  })();
  
  // so this is immediate invoked function in javascript ES6 (IIFE in node js called as module wrapper function)
  // get the current directory name
  console.log('dir_name :', __dirname);
  // get the current file name;
  console.log('file_name :', __filename);
  
  
  
  //! Key Parameters in the Wrapper Function
  // exports: An object used to expose parts of the module to be imported by other modules.
  // require: A function to import other modules.
  // module: An object representing the current module. It contains metadata and a reference to exports.
  // __filename: The absolute path to the current module file.
  // __dirname: The absolute path to the directory containing the current module.
  
  
  //! Purpose of the Wrapper Function
  //! Isolation:
  // It ensures that variables declared in one file/module are not accessible in another, avoiding global scope pollution.
  // Each file in Node.js is treated as a separate module with its own scope.
  //! Module System:
  // The function provides key variables such as exports, require, module, __filename, and __dirname to enable the module system.
  //! Performance:
  // It helps optimize execution and allows Node.js to cache and manage modules efficiently.
  //! Standardization:
  // It creates a consistent environment for all modules in the system.
  
  //! note
  // the wrapper function is an internal mechanism that provides structure, context, and functionality to Node.js modules, making the module system robust and efficient.
  // A module wrapper function in Node.js is a mechanism by which Node.js encapsulates the code of every module before execution. It ensures that the module's scope is private and provides essential variables like require, exports, and module to the module.
  // This function creates a private scope for the module. Variables declared inside a module do not pollute the global namespace.


  //? what are the type of the module in node js 
  // 3 type of the module in node js 
  // built in module  (core module) : http, path, fs, os
  // local module : (custom module defined by the user.)
  // Third party module : external package or modules (we need to install first ) 


//? 8 what are the method of the request object 
// Request (req) Methods :
//! The req object represents the HTTP request and contains information about the request.
//* req.method: The HTTP method (e.g., GET, POST).
// req.url: The full URL of the request.
// req.headers: An object containing the headers of the request.
// req.rawHeaders: An array of the raw headers (header names followed by values).
// req.httpVersion: The HTTP version of the request (e.g., "1.1").
// req.query: Parsed query string parameters (only available in frameworks like Express).
// req.params: Route parameters (available in Express).
// req.body: The body of the request (available after parsing, e.g., with body-parser in Express).
// req.cookies: Cookies sent by the client (if cookie parsing middleware is used).

//* Streams and Data Handling
// req.on('data', callback): Listens for data chunks in the request body.
// req.on('end', callback): Called when the request body has been fully received.
// req.pipe(destination): Pipes the request data to a writable stream.


//* Express-Specific Methods
// req.get(field): Retrieves a header value.
// req.is(type): Checks the Content-Type of the request.
// req.accepts(types): Checks if the request accepts specific content types.
// req.ip: The IP address of the request.
// req.ips: Array of IP addresses in the X-Forwarded-For header (when trust proxy is enabled).
// req.protocol: The request protocol (http or https).
// req.hostname: The hostname of the request.
// req.path: The path part of the request URL.
// req.secure: Boolean indicating if the request was made using HTTPS.



//? method of response object method :
// The res object represents the HTTP response and is used to send data back to the client.

//* General Methods
// res.statusCode: The HTTP status code of the response.
// res.statusMessage: The HTTP status message.

//* Setting Headers
// res.setHeader(name, value): Sets a single response header.
// res.getHeader(name): Retrieves a specific response header.
// res.removeHeader(name): Removes a response header.

//* Streams
// res.write(chunk, encoding?): Sends a chunk of the response body.
// res.end([data], [encoding]): Signals the end of the response.

//* Express-Specific Methods
// res.status(code): Sets the HTTP status for the response (e.g., res.status(200)).
// res.send(body): Sends the response body and ends the response.
// res.json(body): Sends a JSON response.
// res.jsonp(body): Sends a JSONP response.
// res.render(view, [locals]): Renders a view template.
// res.redirect([status], path): Redirects the client to a different URL.
// res.sendFile(path, [options], [callback]): Sends a file as an attachment.
// res.type(type): Sets the Content-Type header.
// res.set(field, value): Sets multiple headers (an alias for res.setHeader in Express).
// res.cookie(name, value, [options]): Sets a cookie.
// res.clearCookie(name, [options]): Clears a cookie.
// res.append(field, value): Appends to an existing header value.



//? explain the role of fs module name of some function of it 
// fs : file system model used the managing the file
// asynchronous function 
// function : readFile 
// appendFile
// writeFile
// unLink();
// readdir()
// mkdir()
// rmdir()

//? explain the role of the path module 
// path module provide utilities for joining, resolving, parsing, formatting, normalizing and manipulating the path 
// method of path module :
// path.join() : joining path segment together
// path.resolve() : resolving the absolute path 
// path.dirname() : getting the directory name of the path
// path.fileExtension() : Greeting the file extension of a pth 
// path.parse() : parsing a path into an object with is components 

//? explain the role of the os module in node js
// os module in node js provide a set of method for interaction with the os.
// os.type() : Get platform information 
// os.userInfo() : get the userInformation of you os
//! get memory information 
// os.totalmem()
// os.freemem() 


//? explain the role of the event module  How to handled event in node js
// The event module in Node.js provides a way to handle asynchronous events.
//  It is a core module that allows you to create, emit, and listen for events
//  The EventEmitter class is the central piece of this module, and it is used to bind events and handlers, enabling communication between different parts of an application.
// Key Concepts:
// EventEmitter Class: The foundation for event handling in Node.js.
// Emitting Events: You can emit an event using the emit() method.
// Listening to Events: You can listen for events using methods like on(), once(), and off() (or removeListener()).


// handling the event in node js
// import the events Module:
// const EventEmitter = require('events');

//  Create an EventEmitter Instance:
// const eventEmitter = new EventEmitter();

// Register Event Handlers:
// You can register event handlers for specific events using on() or once().
//using on(): This method adds a listener for the specified event.
// eventEmitter.on('greet', () => {
//   console.log('Hello, world!');
// });

//Using once(): This method adds a listener that is executed at most once for a particular event.
// eventEmitter.once('welcome', () => {
//     console.log('Welcome, this will only log once!');
//   });
  
//Use emit() to trigger an event.
// eventEmitter.emit('greet'); // Output: Hello, world!
// eventEmitter.emit('welcome'); // Output: Welcome, this will only log once!
// eventEmitter.emit('welcome'); // No output

// You can remove event listeners using removeListener() or off().


//? what are the event argument ?
// In Node.js, when an event is emitted, it can pass arguments to the event listeners (handlers).
//  These arguments provide additional context or data related to the event, allowing the handler to perform its task based on the specific circumstances of the event.

// Structure of Event Arguments
// When you emit an event using emit(), you can pass any number of arguments to the event handler. The arguments are received by the event listener in the order they are passed.
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Listener expecting one argument
eventEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emitting the event with an argument
eventEmitter.emit('greet', 'Alice');
// Output: Hello, Alice!

// there are some built in event with arguments 
// HTTP Module:request: The listener receives two arguments: the request and response objects.
// Stream Module:data: The listener receives a chunk of data as an argument.
// exit: The listener receives the exit code as an argument.


//? 14 what is req.on in node js ? (It allows you to attach a listener function to a named event.
// When the event is emitted using emit(), the attached listener(s) execute.)
// req.on is an event listener in Node.js
//  basically used to register a function that handles specific events emitted by the request object (req) in an HTTP server.
// req.on(): Used to listen for specific events that occur during the request handling.
// Event Listener: .on() registers a function (callback) that runs when a certain event (like data being received or the request ending) happens.
// req.on() registers a callback function (event handler) for a particular event on the request object. The callback function will be executed when that event is triggered.
//  .on method in Node.js is a function provided by the EventEmitter class in the events module. It is used to register event listeners for a specific event. When that event is emitted, all registered listeners for that event are invoked.

//? 15 what are the common event on req.on() event listener
// 1. The 'data' event is triggered whenever a chunk of data is received in the request body. This is used for handling streams of data (like when a file is uploaded or large amounts of data are sent).
// 2. The 'data' event is triggered whenever a chunk of data is received in the request body. This is used for handling streams of data (like when a file is uploaded or large amounts of data are sent).
// 3. The 'error' event is emitted if there is an error while processing the request.
// 4. the 'close' event is a part of the http.IncomingMessage and other streams in Node.js, but it's typically used in the context of the response object (res) or a connection being closed,


//? what is differences between function and event 
// function is reusable piece of code that perform specific tack  when invoked or called 
// event : event represent the action that can be observed and respond to  event will call the function internally


//? what is the role in http module in node js.
// The http module in Node.js provides functionality to create HTTP servers and make HTTP requests.
//  It is one of the core modules in Node.js 
// and plays a crucial role in building web applications, APIs, and handling web-based communications.
//! Key Roles of the HTTP Module:
// 1. Creating HTTP Servers:http module allows you to create an HTTP server that listens for incoming requests from clients (e.g., web browsers) and sends back responses. This is fundamental for serving web pages, APIs, and handling web traffic.

// Handling HTTP Requests and Responses:The http module provides methods to handle different aspects of HTTP requests and responses.
// Request Handling: You can access the request URL, method, headers, and data.
// Response Handling: You can send headers, status codes, and data back to the client.

//The http module also enables making HTTP requests like get post, patch, put and delete to external servers, acting as a client.



//? 9 what is return createserver() method ?
// the create server method of the http module in node js used to create and http server .
// createServer() method basically return the server.