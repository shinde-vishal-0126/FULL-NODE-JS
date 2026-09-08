// @ Node js

/*
@ what is node js ?

    - Javascript runtime
    - Open sources,
    - cross plantform.
    - runtime environment for executing javascript code outside of a brwoser.
    - Node js is javascript in a different environment means running js on  the server or any computer.
    - Bult on Crhome v8 engine : it run on the v8 engine, which compiles javascript directly to native machine code, To enhancing performances.
    - v8 written in C++ for speed.
    - V8 + Backend Features = Node js.


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

    2. File system access :
        - Provide API to read & write file directly, which is not possible in broser environment for security reasion

    3. Server - side - capabilities
        - Node js enable javascript to run on the server, Handling HTTP requeset, file operation, and other server - side capabilities

    4. module system :
        - Organize code into reusable module using require().

    5. non - blocking I/ O Model for efficiency.
        - Desinged to perform non - blocking operation by default, making it sutaible for i/o heavy operation.

    6. Network support :
        - Support TCP / UDP socket, which are crucial for building lower - level network application that browsers can't handle.

    7. full - stack js
        - allow using js on both server & client side

    8. scalability :
        - ideal for scalable network application due to its architecture.

    9. versatility :
        - Sutaible for web, real-time chat, and Rest api servers.


@ Removed features from node js.
    1. window object
        - The global window object, which is part of web brosers is absent in node js

    2. Dom manipulation
        - Node js does not have built in Document object Model (Dom), as it is not intended to intaract with a webpages content

    3. Bom(Browser object model )
        - No direct intaraction with things like nevigator or screen which are part of BOM

    4. web specific api
        - Api like Localstroage, sessionStroage, and broser based fetch are not available in Node.js

@ Responsibilities of javascript on server ?
    1. Database Management :
        - store, retrive, and manage data efficiently through operation like curd (create, read , update, Delete)

    2. Authentication :
        - verifies user identities to contorl access to the system, ensuring that users are who they claim to be.

    3. Authorization :
        - Determines what authenticated users are allowed to do by managing permissions and access controls

    4. input validation :
        - Check incoming data for correnctness, completeness, and security to prevent malicious data entry and errors.

    5. Session Management :
        - Tracks user activity across various requests to maintain state and manage user-specific setting.

    6. Api management :
        - provide and handles interface for applications to intaract, ensuring smooth data exchange and integration

    7. Error - handling:
        - Manages and responds to error effectively to maintain system stability and provide useful error messags.

    8. Security Measures:
        - Implements protocal to protect data from unathorized access and attacke sun as sql injection and cross - site scriptiing (xss)

    9. data Encryption :
        - secure sensitive information by encryption data stored in database and during trasnsmission.

    10. Logging & monitoring :
        - Keep records of system activity to diagnose issue and monitor system health and security.

@ Server Architecture with Node js ?
    # nodejs server will

    1. create server and Listen to incoming request
    2. Business Logic : validation, connect to Db, actual processing of data.
    3. return response in like json, etc.

      
*/
