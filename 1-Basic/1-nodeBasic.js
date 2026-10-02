/*
Q what is node js ?

    - node js not library not framework
    - it is runtime environment where we have to run the javascript outside the browser
    - node js single threaded :(but instead of that node js handled multiple request)
    - node js are non blocking
    - node js is a runtime environment for javascript and built on chrome v8 javascript engine
    - (v8 engine in built for google chrome ==> it is just in compiler not interpreter)
    - v8 engine used to convert js code into the machine understandable code
    - Node.js is open-source(Open-source means its source code is publicly available.)i.e Developers can Use it,Inspect the source code,Modify it,Contribute to it
    - Node.js is cross-platform.Cross-platform means the same Node.js application can run on different operating systems like Windows, macOS,Linux
      - Normally, JavaScript runs inside a web browser. like console.log('Hello word') : The browser uses a JavaScript engine to execute JavaScript code.
      - Different browsers use JavaScript engines such as chrome -> v8 engine, firefox -> spiderMonkey, safari -> javascriptCore
    - so node js allow js to execute outside the browser so node js used v8 js engine to execute js.


Q. why node js special as Runtime ?

  - v8 engine :
    - Node js uses Google chrome v8 engine to compile js into machine code making it lightning-fast
  - Built in API
    - Node js comes with built in apis (like fs for file system, or http for servers) so you can build powerful application without extra libraries.


Q. why Do we need node.js

  - single language for full stack development.(developer can used js for both frontend and backend reducing complexity);
  - High performances : Thansk to v8 engine , node js is super fast also it can handle thousands of simultaneous connection with ease.
  - versatile language.
  - scalable language.
  - event derive & non blocking i/o : unlike tradition server that block a thread for each request node js used asynchronous model making it highely efficinet for handling multiple task
  - scalable for Moder application : chat application, streaming application,  or online gaming.
  - ex. netflix, Linkdin, paypal , uber,

Q. it is a Language or a framework ?

  - not a library, framewor or programming language rather a  it's a runtime environment that allow developers to run js outside of a browsser.


Q. node js is built on the v8 js engine ?
    - Node.js uses Google's V8 JavaScript engine.
    - V8 is the same JavaScript engine used by Chrome and Chromium-based browsers.
    - V8 is responsible for executing JavaScript.
    - V8 is primarily written in C++.
    - V8 contains the components required to execute and optimize JavaScript efficiently.
    - V8 uses JIT (Just-In-Time) compilation techniques to optimize JavaScript execution.
  IMPORTANT:
    - V8 is a JavaScript engine.
    - V8 uses JIT (Just-In-Time) compilation techniques to compile JavaScript into optimized machine code at runtime
    - V8's main responsibility is JavaScript execution.
    - Node.js embeds V8 and adds additional runtime capabilities around it.

Q. what does node js add to v8 engine
    - V8 mainly provides JavaScript execution.
    - Node.js adds runtime APIs and supporting components that allow JavaScript to interact with the operating system and network.
    - Node.js provides APIs/features for:
        - File System operations
        - HTTP networking
        - TCP networking
        - UDP networking
        - Streams
        - Timers
        - Process management
        - Environment variables
        - Operating-system interaction
    - Node.js embeds Google's V8 JavaScript engine and provides additional runtime APIs and capabilities that allow JavaScript to interact with the operating system, file system, network, etc.

Q. node js javascript & browser javascript
    - JavaScript running inside a normal browser does not have unrestricted access to the user's local file system.
    - This restriction exists because of browser security and sandboxing.
    - For example:  A website should NOT be able to freely execute:
      - deleteFile("C:/Users/User/password.txt");
    - If browsers allowed unrestricted file-system access, it would create serious security problems.

    - Node.js is designed as a runtime environment that provides controlled APIs for interacting with the operating system.
    - It is mainly used for building:
        - Server-side applications
        - Backend applications
        - REST APIs
        - Web servers
        - Real-time applications
        - Network applications


A simplified conceptual view is:

    +--------------------------------------+
    |              Node.js                 |
    |                                      |
    |  +-------------------------------+   |
    |  |             V8                |   |
    |  |      JavaScript Engine        |   |
    |  +-------------------------------+   |
    |                                      |
    |  +-------------------------------+   |
    |  |      Node.js Runtime APIs     |   |
    |  |                               |   |
    |  |  File System                  |   |
    |  |  HTTP                         |   |
    |  |  Networking                   |   |
    |  |  Streams                      |   |
    |  |  Timers                       |   |
    |  |  Process / OS APIs            |   |
    |  +-------------------------------+   |
    |                                      |
    |          Event-driven Model          |
    |          Non-blocking I/O            |
    +--------------------------------------+

Q. key features of node js

    - JavaScript Runtime Environment => Executes JavaScript outside the browser.
    - Built on V8 => Uses Google's V8 JavaScript engine.
    - Event-driven => Uses an event-driven programming model.
    - Non-blocking I/O => Handles asynchronous I/O efficiently.
    - Single JavaScript Thread => JavaScript execution primarily happens on one main thread.
    - Highly Scalable - Suitable for handling many concurrent I/O operations.
    - Cross-platform - Runs on Windows, macOS, and Linux.
    - Open-source - Source code is publicly available.
    - Large npm Ecosystem - Provides access to a huge collection of packages.
    - Versatile : Useful for APIs, web servers, real-time applications, microservices, streaming, and network applications.


Q. What is node js architecture
    - node js used event driven , non blocking I/o model
    - This architecture allow node js to handle many concurrent i/o operaion efficiently .
    - node js not need to create separate js thread for every incoming request insted of that node js used event driven architecture where asynchronous operation can handle without blocking the   main javascript thread.
    - This make node js perticularly sutaible for application that perform a lot of i/o operation
    - ex
      - rest api
      - real time application
      - chat application
      - streaming application
      - web servers
      - network application

Q. what is mean by Event driven architecture ?
  - def :
    - event driven architecture is programming model where the flow of application is determined by evnet
    - when a event occure node.js execute the corresponding event handler or callback .
    - event means : simply something that happened.
      - ex.
        - user click
        - http request arrive
        - file reading complete
        - database queary completate
        - timer finish
        - socket receive a message
    - something Happn => event occure => node js detect the event => associated handler executes.
    - node js provide the EventEmitter from the event module
    - note :
      - Node.js follows an event-driven architecture where the application responds to events such as HTTP requests, file completion, timers, or network messages by executing registered event handlers.


Q. what is non blocking i/o ?
    - I/O means input / output
    - it refers to operation where you application communicate with something external
    - ex.
      - read file
      - read database
      - receive network data
      - receive http request
    - so this operation take time  so what should javascript do while waiting ?
    - there are 2 approach

      1. blocking
        - its synchronous (one by one execution )
        - in blocking operation javascript wait until the operation compleates.
        - in this blocking appraoch js cannot continue executing the next code until the task / file operation is compleate so this is called as blocking

      2. non - blocking
        - its look asynchronus file reading.
        - in non blocking apprach js does not wait for the file to finish reading
        - Non-blocking tells us that Node.js doesn't wait for I/O operations. Event-driven tells us how Node.js reacts when those operations are completed
      - note
        - Non-blocking I/O allows Node.js to initiate I/O operations without waiting for them to complete. While the operation is in progress, Node.js can continue executing other tasks, and once the operation completes, the corresponding callback or Promise continuation is executed.

  - Non-Blocking = Don't wait while the task is running
  - Event-Driven = React when the task is completed



Q. SCALABILITY
    - Node.js is well suited for building scalable network applications.
    - Its event-driven and non-blocking I/O architecture allows a relatively small number of threads to handle many concurrent I/O operations efficiently.
    - This is especially useful for I/O-intensive applications.
    - Examples:
      - REST APIs
      - Chat applications
      - Real-time applications
      - Streaming applications
      - Web servers

    - IMPORTANT:
        - "Single-threaded" does NOT mean Node.js can only do one thing at a time.
        - JavaScript execution primarily happens on a single main thread.
        - Node.js can use the operating system and its runtime components to handle asynchronous I/O operations.
        - Some operations may also use a thread pool behind the scenes.

Q. VERSATILITY
    - Node.js can be used to build many types of applications.
    Examples:
      - REST APIs
      - Web servers
      - Real-time applications
      - Chat applications
      - Streaming applications
      - Microservices
      - Command-line tools
      - Backend services
      - Network applications

    - This is nature of versatile.

# NPM ECOSYSTEM
  - Node.js has a large ecosystem through npm.
  - npm stands for Node Package Manager.
  - npm allows developers to install and use open-source packages and libraries.
  - Instead of implementing everything from scratch, developers can reuse existing packages.
  Example:
      npm install express

  - This installs the Express package.
  - npm helps developers:
      - Reuse existing packages
      - Speed up development
      - Manage dependencies
      - Share packages
      - Build applications faster

# STREAMS
  - Node.js provides Streams for handling data gradually instead of loading everything into memory at once.
  - Streams are useful for:
    - Large files
    - Video streaming
    - Network communication
    - HTTP requests/responses
    - Data processing

# TIMERS
  - Node.js provides timer APIs for scheduling operations.
  - Examples:
    - setTimeout()
    - setInterval()
    - setImmediate()
  - Example:
    setTimeout(() => {
        console.log("Executed after 2 seconds");
    }, 2000);

- Timers are integrated with Node.js's event-driven execution model.

                     NODE.JS
                        |
        +---------------+---------------+
        |               |               |
        v               v               v
   JavaScript       Event-driven    Non-blocking
   Runtime          Architecture       I/O
        |               |               |
        +---------------+---------------+
                        |
                        v
              Backend Capabilities
                        |
       +----------------+----------------+
       |                |                |
       v                v                v
  File System       Networking        HTTP/HTTPS
       |                |                |
       v                v                v
    Files          TCP / UDP         Web Servers
       |
       +----------------------------------+
                                          |
                                          v
                                 Database Connectivity
                                          |
                              +-----------+-----------+
                              |                       |
                              v                       v
                           SQL DB                  NoSQL DB
                              |                       |
                              v                       v
                           MySQL                  MongoDB

# Other capabilities:
    +---- Streams
    +---- Timers
    +---- Process Management
    +---- Environment Variables
    +---- Module System
    +---- External API Communication
    +---- npm Ecosystem

# COMMON BACKEND CAPABILITIES USING NODE.JS + PACKAGES:
    - Database connectivity
    - Input validation
    - Authentication
    - Authorization
    - Password hashing
    - JWT
    - Logging
    - Web frameworks
    - ORM / ODM
    - Request validation

@ Features of node js ?

# Design for :
  1. Features an event - driven
  - JavaScript is single-threaded — the JavaScript code itself runs on a single main thread.
  - Node.js is event-driven and uses the Event Loop to handle asynchronous operations without blocking the main JavaScript thread.
    - The Call Stack executes synchronous JavaScript code.
    - When Node.js encounters an asynchronous operation such as file I/O, timers, or network requests, the operation is handled by Node.js/libuv, the operating system, or the libuv thread pool, depending on the operation.
    - Once the asynchronous operation completes, its callback is placed in the appropriate queue.
    - The Event Loop continuously checks whether the Call Stack is empty.
    - If the Call Stack is empty and a callback is ready, the Event Loop moves the callback to the Call Stack, where it gets executed.
  2. File system access :Provide API to read & write file directly, which is not possible in broser environment for security reasion
  3. Server - side - capabilities : Node js enable javascript to run on the server, Handling HTTP requeset, file operation, and other server - side capabilities
  4. module system : Organize code into reusable module using require().
  5. non - blocking I/ O Model for efficiency : Desinged to perform non - blocking operation by default, making it sutaible for i/o heavy operation.
  6. Network support : Support TCP / UDP socket, which are crucial for building lower - level network application that browsers can't handle.
  7. full - stack js : allow using js on both server & client side
  8. scalability : ideal for scalable network application due to its architecture.
  9. versatility : Sutaible for web, real-time chat, and Rest api servers.


@ Removed features from node js.

  1. window object : The global window object, which is part of web brosers is absent in node js
  2. Dom manipulation : Node js does not have built in Document object Model (Dom), as it is not intended to intaract with a webpages content
  3. Bom(Browser object model ): No direct intaraction with things like nevigator or screen which are part of BOM
  4. web specific api : Api like Localstroage, sessionStroage, and broser based fetch are not available in Node.js

@ Responsibilities of javascript on server ?

  1. Database Management : store, retrive, and manage data efficiently through operation like curd (create, read , update, Delete)
  2. Authentication : verifies user identities to contorl access to the system, ensuring that users are who they claim to be.
  3. Authorization : Determines what authenticated users are allowed to do by managing permissions and access controls
  4. input validation :vCheck incoming data for correnctness, completeness, and security to prevent malicious data entry and errors.
  5. Session Management :Tracks user activity across various requests to maintain state and manage user-specific setting.
  6. Api management : provide and handles interface for applications to intaract, ensuring smooth data exchange and integration
  7. Error - handling: Manages and responds to error effectively to maintain system stability and provide useful error messags.
  8. Security Measures: Implements protocal to protect data from unathorized access and attacke sun as sql injection and cross - site scriptiing (xss)
  9. data Encryption : secure sensitive information by encryption data stored in database and during trasnsmission.
10. Logging & monitoring : Keep records of system activity to diagnose issue and monitor system health and security.


@ Server Architecture with Node js ?
- nodejs server will
  1. create server and Listen to incoming request
  2. Business Logic : validation, connect to Db, actual processing of data.
  3. return response in like json, etc.


*/
