/*
@ why in js single threaded ?
    - js run one task at a time
    - There is only one call stack so the whole js code is exectuted line by line on a single call stack
    - js was designed to run in the browser and to make DOM manipulation safe so it use single thread


@ What make js asynchronous ?
    - not js alone make asynchronous
    - it use asynchronous freatures through the browser environment (or Node js api)
    - so runtime environment of the Browser or node js provide
        - web api  like settimeout, fetch, DOM event
        - task queue : to hold the callback (callback - queue / macrotask queue)
        - so the event loop co-ordinate and push thos task onto the main thread when it free.

@ what is DOM
    - DOM : Document object Model
    - it is programming interface for web document
    - Dom is tree like structure that represent the html element of a webpage so js can intaract with them
    - js & dom : js use dom to read, change, create or delete element
    - Dom is not part of js its part of web api
    - js intaract with the Dom to make dynamic changes.

@ what is differences betw ES5 & ES6
1. ES5
    - only var variable
    - support only for in & for loop
    - callback used for asynchronous purpose
    - default paramter are not supported (need to handle manually inside the function)
    - destructrung are not available
    - for string concatination used + operator
    - spread & rest operator are not available
    - import & export are not supported

2. ES6
    - let & const are supported
    - arrow function are supprted
    - support for of , Map, Set
    - promise and async/wait are introduced
    - default parameter are supported
    - destructuring supprot
    - template literal are supported
    - spread & rest operator are supported
    - also introduced import / export
    - new primitive type symbol()



*/
