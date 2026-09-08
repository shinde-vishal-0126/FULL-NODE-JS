//?  what is node js ?
// ==>node js is javascript run time environment

//?  when to used node js ?
//  Applications with High I/O Operations ,  fle  update, api ,database heavy application
//  data streaming  (Node.js’s stream module and asynchronous processing make it highly efficient for handling data streams.)
//  Event-Driven Applications
// API Development

//? .what is repl in Node js
// playGround where we have execute, write, and debugging the javascript and node js code
// read-evaluate-print result and look back to the more user input

//?  what is differences bet parameter and arguments
// argument as defined at the time of function declaration and argument are nothing but actual value we have to pass at the time of function calling


//?  what is core module in node.js
// pre-defined or built in module in node js
// core module to be a javascript-libraries
// a set of function  or method you want to include in your application so node js a set of build in module which you can used without any further installation.
// ex. fs, os, http module  all this code module we have used in your application with help of require keyword

//?   what are the type of way to we have work with fs module and what is fs module and Give name of the corresponding method of synchronous and asynchronous
// fs module is nothing but file system module is to to perform file manipulation operation on file using fs module
// 2 way to work with fs module
// synchronous file system  (blocking-structure)
// writeFileSync, readFilesync, appendFileSync, renameSync,unlinkSync,rmdirSync
// asynchronous file system (non-blocking-structure)
// writeFIle, readFIle, appendFile, rename, rmdir, unLink;

//------

//?  what is buffer in javascript ?
// buffer Global object used to handled binary data
// useful stream the data such as reading and writing operation in file, network processing stream , handled data in various encoding system
// basically buffer are binary data representation

//?  why buffer are essential in javascript ?
// buffer are essential in javascript because in javascript there is no built in mechanism to handled binary data

//?  what are key feature of the buffer ?
// binary representation of data:(stored binary data in chunk of memory outside the v8 engine garbage collection mechanism)
// size is immutable
// buffer are mutable
// used for encoding and encryption and deception operation
// direct interaction to binary raw data
// used to work work stream of data  or chunk of binary data

//?   How to create buffer
// using Buffer.from() and Buffer.alloc(10)

//? how to read the binary data 
// read binary data using toString() method


//? what is synchronous and asynchronous in javascript 
// synchronous : task executed sequentially one after another. it having blocking structure , next task wait to completed previous one
// asynchronous : task executed parallel , it does not having blocking structure, next task does not wait to executed previous one

//? what is stream in node js
//stream are onGoing process in node js (so stream are object in node js used to read data from the source and write to the destination in continues fusion)


// -------------
 
//? what is module in node js ?
//  3 type of module 
//! build in module: (by default or build in module in node js like fs, os , path)
//! user defined module in node js : These are custom modules that you create
// A module in Node.js is simply a JavaScript file. You can export specific functionality or objects from one file and import them in another.
//! third party module : 
// Node.js allows you to use third-party modules available through the npm (Node Package Manager). These modules are installed in your project and can be imported into your application.

//? what is benefits of the module
// Code reusability
// Easier testing and debugging
// Better code organization
// Avoiding global variables and reducing conflicts


//? what is os module 
//using os module we have to perform operating system related operation
// Ths os module provide operating system-related utility method and properties .

//? what path module in node js
// path module provided utility method to work with file and directory path

//? how to create owr own or custom module and export into another file
// using module.exports = { function name ,or variable name} then in another file used require method to access function and variable

// -----


//? what is npm 
// npm stand for node package manager
// default package manager for javascript runtime
// used install update and delete the package form your projects.

// ? what is used of package.json file
// configuration file  (JSON file that stores or manage important information about a project)
//in Node.js and JavaScript projects to manage project dependencies, metadata, and scripts.
// It serves as a central place to define the details of a project and facilitates the management of packages and tools used in the project.

//? what packageLock.json file(and used of packageLock.json file)
// package-lock.json file is a file in a Node.js project that lists the exact versions of all packages and their dependencies that are installed
// It stores an exact, versioned dependency tree

//? how to initialize the npm 
// npm initialize using npm init (also if you want default all information you have to used npm init -y)

// ? how install package Globally 
// you have to install any package Globally using --global flag
// e.x npm install -g nodemon 


//? what module wrapper function in node js? 

// in node js wrapper function is internal module system and it is used to provide scop and context to the module ;
// wrapper function construct that wrap every modules code when it executed.  (simply encapsulate the every modules code and provide private scope of its  every variable and function )
// when you defined any javascript in so node js does not directly execute this file in Global scope it wrap inside the another module wrapper function to provide scope and context to defined module


//? what is benefits of the module wrapper function
// isolation : (each js file treated and separate module);
// module system: (function provide key module, exports, require to enable module system)
// performances: wrapper function allow node js to optimize performances and cache the module to execute efficiently
// standardization : create consistent environment to all module in the system

//? what is web server ?
// A web server in Node.js is an application that handles HTTP requests and sends back appropriate responses to clients (e.g., browsers or API consumers). 
// Node.js web server is software program  which serve web pages to the web users(Browsers) or 
// A web server is a software or hardware system that serves content to clients (typically web browsers) over the internet (like static pages, html, file, video etx )

//? what is key feature of the web server 
// 1. Handled the http request 
// receive the request : (get the incoming request and process the perticular file or script)
// process the request  (based on the request process the request and based on that sent the response)
// send  the response to the client 
// event-drive and not blocking : (web server handled the request asynchronously )
// sever the content (like html, file, video,)
// using web server you have to customize the server (like configure the route, handled the request, and integrate the middleware)


//? what is route in node js
// route in node js refer to the defined endpoint or url that the server respond specified action of function
// route is defined to specifically handled the http request 

//? what is used of the route ?
// organization : defined your application structure by defining the different rout to handled the  http request
// separation of concern  : keep request handling logic separate
// scalability : make it easy to scale and manage application on server 


//? what are the method of the req and res object in callback function
// req : req.url, req.method, req.header
// res : rew.write(), res.end(), res.writeHead()


//? what is json ?
// json stand for javascript object notation
// json is lightweight format for data storing and transporting data (json ofter used when data send from server to a web page)

// ? how to convert javascript object into json object 
// JSON.stringify(obj, null, 2) converts the obj JavaScript object into a JSON string.
// The null in the second argument means we don't want to modify the object or filter keys.
// The 2 in the third argument specifies that the JSON string should be formatted with 2 spaces of indentation for better readability.

//? how to convert json String into javascript object 
// using JSON.parse(json string)


//? what is Event module in node js
// event module in node js is built-in module where we have to create event , handled , listen and emit the event.
// this event module work with eventEmitter object the module facilitates the event driven architecture of node js 


//? how to send mail 
// i.e used nodeMailer package to send mail and we need to smtp server to send mail used ethereal (fake smtp server)



// ? what is differences between res.json() and res.send() in express js 
// res.send() :  more generic method to send data .
// It can send different types of responses, such as strings, buffers, objects, and arrays.
// If an object or array is passed to res.send(), it will automatically be converted to a JSON string (but it will not set the Content-Type to application/json explicitly).

// res.json() : specifically used to send json response
// when an array or object pass to res.json() it automatically set content-type header to application-json and convert into json string


// When using res.send(), both null and undefined result in an empty response body with a 200 OK status.
// When using res.json(), null results in a valid JSON response with null, but undefined results in an error with a 500 status code because undefined is not a valid JSON value.
// what is express js 