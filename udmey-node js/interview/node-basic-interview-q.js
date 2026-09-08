//# Basic of node js

//? what is node js
// node js not Language or Framework it is server side run time environment.
// node js is runtime environment where we have to run javascript on server side.


//? what is role of the framework
// The role of framework is to simplify the creation of large application by providing many in-built and reusable library, classes and function
// frameWork wrapper over the runtime environment (i.e provide additional feature over the runTime environment)


//? How node is runtime environment on server side ?
// javascript is language run on client side i.e on browser
// How run javascript on Browser? basically every browser has javascript engine inside it like chrome having v8 engine , fireFox has spiderMonkey
// so in chrome browser has v8 engine which is execute the javascript code
//  so engineer Dahna used same javascript engin and create node js. wrapper over it. so there fore node js runtime environment javascript can run outside the browser
// now here browser execute the javascript on client side  and here  node js to execute javascript on out side the browser like server side

//? what is v8 ?
//! V8 engine is an open-source JavaScript engine developed by Google.
// Key Features of the V8 Engine:
//* Just-In-Time (JIT) Compilation:
//  V8 uses JIT compilation to convert JavaScript into machine code at runtime, making the execution faster than interpreting the code.
//* Garbage Collection:
// V8 includes an efficient garbage collector to manage memory automatically, which helps in reclaiming unused memory and preventing memory leaks.
//* Cross-Platform:
//  V8 is cross-platform, meaning it can run on various operating systems, including Windows, macOS, and Linux.


//? what is differences between frameWork and runTimeEnvironment ?
//* framework:
// Framework are focus on simplifying the application development process by offering set of tool libraries and best practices
// Framework are wrapper over the run-time environment
//*RunTime environment:
// runtime environment primary focus on provide then necessary infrastructure for execution of code including some functionality or services like memory management , and i/o operation


//? what is difference between node js and express js
//* node js:
// node js is run time environment where we have to run javascript code on server side or out side the browser
//* express js
//Express js is framework built on the top of the node js
// it is designed to simplifying the process of building wab application and api providing set of feature like simplifying routing system , middleware support etc
// javascript (language) ===> node js (run-time environment) ===> express (framework )


//? what are the difference between client side and server side
//* Environment location :
// client side: (run on the users web browsers);
// server side: (run on the server side ) (node js)
//* primary language :
// client side languages :(html, css javascript)
// serverSide language : (javascript )
//* document/window/navigator/Event object
// in client side document window navigator and event object present in server side
// in server side does not present this objects
//* request/response/Database object:
// in client request, response and database object are not present
// server side are present request and response
//* responsibilities :
// client side responsibilities are handled ui display interaction and client or browser side logic
// server side handled the business logic / data-storage/ data-access, authentication, and authorization


//? what are main features of node js ?
//1. single threaded (like javascript )
//2. Asynchronous in nature (node js perform operation in asynchronously) (enables handling multiple concurrent request and non blocking execution of thread )
//3. event-driven approach (efficient handling event )
//4. used v8 javascript engine for run the javascript code on server side (execute the code fast)
//5. it having real time capabilities
//6. cross platform (so node js run on different operating system like mac, window, linux ) enhancing the flexibility
//7. also having npm package support
// suitable for building scalable application that can handled to increased load


//? what is single threaded programming ?
//*explanation :
// when user ==> send request to browser then to the request on ==> server.
// so inside the server having multiple independent task to execute. for example inside the server you have 5 independent task
// so programming language create single thread like T1  ==> that T1 thread start ==> Task1 to execution and T1 thread are wait until the Task1 completed even is waiting
// if Task1 is compleat then T1 thread Go to ==> Task2 for execution again T1 Thread wait unit the Task2 are compleat once complete The T1 thread Go to the next task same for all remaining task
// once last Task is completed then T1 thread inform to the API all Task completion
// so here single Thread Performing the task execution one by one like one task is waiting for previous one completed but in node and javascript achieve asynchronous proGramming even with  single thread programming.


//? what is synchronous programming ?
//! Here we have many confusion with synchronous and single threaded programming
//! (so single threaded programming means single thread so single thread are responsible for starting the task now
//! with single threaded we have to achieve the both synchronous and asynchronous operation )
//* here we have using the single thread we are doing synchronous operation
// so synchronous programming means each task should be perform one after the other  (and the program wait for each operation to complete before moving to the next one)
// The disAdvantages of the synchronous programming is performances like synchronous approach take more time (like total time to execution)
// also one more problem is there the synchronous approach is blocking approach because here till task one is completed task two has wait so (task one has blocker to the task two )  so that is blocking things
//! synchronous programming focus on order of the execution in a sequential manner,
//! while single threaded programming focus on the single thread .
// now in order to perform task concurrently for improving the time performances for non blocking problem you have to used the asynchronous approach

//? what is multiThreaded programming?
//*Explanation :
// when user send ==> request to the browser then browser send to the ==> server api
// inside the server having some independent task for execution so programming language create first Thread T1 so this create Thread T1 start execution of Task1
// so in multiThread approach if one thread start one task and it when see another task after that then immidiately create another ==? thread T2 , will be created
// and this T2 Thread Start the execution of Task2
//! so T1 thread waiting for Task1 to be completed in parallel T2 thread will start the execution of Task2 there for both task are executed in parallel
// so simply thread T2 start the Task2 then for the next Task3 for that Task3 create another Thread T3 will start the execution of Task3 same as Task4
//  so Finally you see different Task have Different Thread in multiThread approach
// This approach used for CUP intensive so many task are perform Parallel it is used for Heavy DeskTop application very Good multithread approach
//*
//! but in internet api multithread approach problematic because multiple thread that create deadLock problem if not properly handled so that why we have used single thread asynchronous approach for js and node js

//? what is asynchronous programming in
//! node js is asynchronous flow can be achieve by its single-thread, non-blocking and event-driven architecture.
// also in javascript you have achieve asynchronous programming using async-await and promises
//*Explanation :
// in  node js if there are four task (Task1, Task2, Task3 Task4) to be completed for an event the below step are executed
// first thread T1 is created
// Thread T1 initiate Task 1 but won,t wait for Task1 to be complete instead T1 proceeds to initiate Task2 then Task3 and Task4
//! so This asynchronous execution allow T1 to efficiently handled multiple task concurrently
// whenever Task1 is completes and event emitted.
// Thread T1 being event driven promptly responds to this event  interrupting its current task and delivering the result of task 1

//? when Task1 is executing independently then this Thread T1 busy starting the another task so how the system will know the task one is finished .
// at that time event are comes into picture ,(or event role are comes into picture)
// if any one task is completed or finish it will raise the event so this event is immediately listen or herd by the Thread T1 and T1 immediately stop whatever is doing  at that point and on priority basis report the completion of task to the source and then it resume whatever he has doing

//? What is differences between synchronous and asynchronous programming
//* Synchronous programming :
// in synchronous programming task are executed one after another in a sequential manner
// Each task to be completed before the program move on to the next task
// it is blocking structure (i.e execution of code is blocked until a task is finished )
// synchronous operation can lead to blocking and unresponsiveness

//* asynchronous programming :
// in asynchronous programming task can start, run and complete in parallel
// task are executed in-dependently of each other
// it is non-blocking structure(Asynchronous operation are typically non - blocking )
// it enable better concurrency and responsiveness


//? what happens behind the scenes when Node.js executes code:
// 1. Execution Begins
//* What happens:
// When you run your Node.js application, Node.js starts executing your JavaScript file. 
// It does so in a single-threaded environment. This means that it uses only one thread to run the JavaScript code.
// Why is this important:
// You might wonder how Node.js can handle multiple requests with just one thread. The key is that Node.js is built to handle tasks asynchronously and non-blocking, so it doesn't wait for tasks to finish before starting new ones.

//* 2. Handling Multiple Requests
// What happens:
// When a new request comes in, Node.js does not block the entire thread waiting for the task to complete (e.g., a file operation). 
// Instead, Node.js will process requests asynchronously and continue to handle other tasks while waiting for a long-running task to finish.
// Why is this important:
// This ability to not block the thread allows Node.js to handle multiple requests at once even with just one thread.
//  If it waited for each task to finish one by one, performance would suffer as one request would have to wait for another.

//* 3. The Event Loop Starts
// What happens:
// Once your program starts, the event loop is automatically initiated by Node.js.
//  The event loop is responsible for managing and executing asynchronous tasks (callbacks) that are ready to be executed.
// Why is this important:
// The event loop processes the callbacks (functions) in a queue. It checks if there are any tasks to process and runs those that can finish quickly.
// !important to note:
// The event loop is designed to handle fast, small tasks efficiently. 
// However, it does not directly handle long-running tasks, like reading a large file from the file system.

//* 4. Heavy Tasks Handled by the Worker Pool
// What happens:
// For tasks that take longer to complete (such as file system operations, database queries, etc.),
//  Node.js doesn’t let the event loop wait. Instead, Node.js sends these tasks to a worker pool.
// Why is this important:
// The worker pool is a separate set of threads managed by Node.js to handle long-running tasks.
//  It runs independently from the event loop, meaning that the event loop can continue processing other tasks without waiting for these heavy tasks to finish.
//* Worker Pool Details:
// The worker pool can process many tasks simultaneously using multiple threads. So, even though JavaScript runs on one thread, the heavy lifting is done in the background by other threads in the worker pool.
//* 5. Callback Handling
// What happens:
// Once a worker in the worker pool finishes its task (e.g., reading a file), it triggers a callback function to notify the event loop that the task is done.
// Why is this important:
// The event loop picks up the callback from the queue and executes it, allowing the application to continue. 
// Even though the worker pool did the heavy work, the event loop is the one that finishes up the task by executing the callback.
//* 6. Example Flow of a File System Operation
// Start Task:
// You ask Node.js to read a file. The request is handled by the event loop, which sends the file reading task to the worker pool.
// Worker Pool Processes Task:
// The worker pool reads the file in a separate thread while the event loop continues processing other incoming requests.
// Task Completion & Callback:
// Once the file is read, the worker pool triggers the callback function, notifying the event loop that the file is ready.
// Event Loop Executes Callback:
// The event loop picks up the callback and processes it, which may involve sending the file data back to the user.


//? 4 what is repl ?
//-  repl is best playGround where you have to execute the node js code or javascript on server.
// repl is used to do experiment, test and debug the node js code 
// R - read the user input
// E - Evaluate the input 
// p - based on the evaluate output print the result
// l - loop to return for the new user input  until the user does not exit the repl


//? 5. how does web work ?
//! Client/Browser Enters URL
// A user enters a URL like www.gmail.com in the browser.
// The browser begins the process to locate the corresponding server.

//! Domain Lookup
// The URL is a human-readable domain name (e.g., www.gmail.com).
// Behind the scenes, the browser contacts a Domain Name System (DNS) server to resolve the domain name into an IP address (e.g., 10.212.232.12).
// The IP address is the actual location of the server on the internet.

//! sending a Request
// The browser sends an HTTP request to the server using the resolved IP address.
// The request contains:
// HTTP method (e.g., GET, POST).
// Headers (metadata about the request, like content type, user agent, etc.).
// Body (optional, used for sending data with methods like POST).

//! Server Receives the Request
// The server receives the request at the specified IP address.
// If it's a Node.js server, it will run the code you wrote to handle the incoming request.

//! Server Processes the Request
// The server processes the request.
// It could fetch data from a database, process files, or perform any logic needed.

//! Server Sends a Response
// The server sends a response back to the client.
// The response typically includes:
// HTML content (to render a web page).
// JSON or XML data (for APIs).
// Files (like images, PDFs, etc.).
// Headers (meta-information about the response, such as content type or cache instructions).

//! Client/Browser Handles the Response
// The browser interprets the response.
// If the response is HTML, it renders the web page.
// If it's JSON, it might be processed by JavaScript for dynamic content.


//! Visual Representation

// 1. Client/Browser 
//    [User enters URL] 
//            ↓
// 2. DNS Lookup 
//    [Domain name resolved to IP address]
//            ↓
// 3. HTTP Request
//    [Request sent to the server at IP address]
//            ↓
// 4. Server Receives Request 
//    [Server processes the request using code]
//            ↓
// 5. Server Sends Response 
//    [HTML, JSON, XML, files, etc., with headers]
//            ↓
// 6. Client/Browser 
//    [Handles the response and displays content]

// DNS (Domain Name System): Translates domain names to IP addresses.
// IP Address: Unique identifier for a server on the internet.
// HTTP Request/Response: The communication protocol between the browser and the server.
// Headers: Metadata attached to requests and responses.
// Response Content: Can be HTML, JSON, XML, files, etc.

//? 6. what is http and https 
//! 1. http : Hyper Text Transfer Protocol
// - A protocol for transferring data which is understand by browser and server.

//! 2. https : Hyper text transfer Protocol secure.
// http + data encryption (during transformation)
// - A protocol for transferring in encryption format who is understand by browser and server
// https simply is the same with ssl encryption turned on where all the that is transmitted it actually encrypted so that if anyone is spoofing you connection they can not read you data.


//? 8 what is requestListener in createServer method ?
//  RequestListener in Node.js refers to a function that acts as a callback for handling incoming HTTP requests.
//  It is passed as an argument to the http.createServer() method and gets executed whenever the server receives a request.
//- The RequestListener function takes two parameters:
// req (Request Object): Represents the incoming HTTP request. It contains information about the request such as headers, query parameters, URL, HTTP method, and body.
// res (Response Object): Represents the HTTP response. It is used to send a response back to the client by setting headers, status codes, and the response body.


//? when to used node js
// ideal for real -time application like chat application, online gaming, and collaborative tools due to its event driven architecture.
// Effective for building lightweight and scalable restFul api that handled a large number of concurrent connections
// well suited for building microservices-based architecture enabling modular and scalable system


//? when not to used node js 
// cup intensive task : avoid for application that involve heavy cup processing (image/video) processing data encryption / decryption  as node js may not provide the optimal performances in such senario because it single thread and for heavy computation multi-threaded is better


//? what is role of node_modules folder 
// it hold all  libraries and dependencies used in  our projects 
// node_module folder contain all the dependencies of your node project 


//? what is npm 
// node package manager which is manage dependencies of  our node project.


 // ? how initialize the package.json file and what is package.json (what are the role of the package.json file)
// initialize using npm init;
// package.json is configuration file contain meta information about our project like project info project name, version, author , license, dependency info and script into
