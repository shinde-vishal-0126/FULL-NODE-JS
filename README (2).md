# Node-js

    - 1. BASIC INFORMATION:
            - req object method (req.url, req.method, req.header)
            - res object method (res.end(), res.write(), res.writeHead())

    - 2. REPL : interactive shell or best palyGround to write, execute and debugging or test node js or javascript code execution
            - read:
            - evaluate:
            - print:
            - loop:

    - 3. CORE MODULE: (build in module (based on module you have to used multiple functionality used in our application))

    - 4. BUFFER: (node js include an additional data type called Buffer)
                - (buffer are temporary storage area where you have to stored binary data)
                - (Buffer allow you to deal with the binary data)
                - (buffer typically used when dealing with stream of data)
                - stream are ongoing process


    - 5. STREAM : (stream are ongoing process)
              - stream are object let us read data form the source or write data to the destination in continuos fashion
              - ex streaming means listening musing and watching video in real time instead of downloading file and watch later
               Four type fo Streaming (4 type):
                1.readable, 2.writable, 3.duplex, 4.transform
            - dream process data in chunk(instead of downloading whole file)

            Each type Stream are EventEmitter Instances and throw several event at different instances of Time
             some commonly used event are
            -  1. data: The event is fire when there is data is available to read
            -  2. end: The event is fired when there is no more data to read
            -  3. error: Then event is fired when there is any error receiving or writing data
            -  4. finish: This event is fired when all the data has been flushed to underlying system


    - STREAM().PIPE():  Stream.pipe() method used to take readable stream and connect it to a writable stream
            -  mechanism for connecting a readable stream to a writable stream,
            - pipe() method used to read data form the source and directly written in to the destination

    - 6. FS-MODULE: (used fo work with file)
            - 2 type of fs system
            - 1. synchronous file system
            - 2 . asynchronous file system
        1. fs synchronous (blocking structure): methods
            - 1. writeFileSync('file_name, "content"): create file and write data to the file
            - 2. appendFileSync('fileName', 'content data') : add new data to the file
            - 3. readFileSync('fileName','enCoding the data using utf-8') : read file data
            - 4. renameSync('oldFileName', 'newFileName') : rename file
            - 5. unlinkSync('fileName') : delete file

        2. fs asynchronous (non blocking structure): methods
            -IMP NOTE : in asynchronous file system it having callback function and this callback function having two (2 ) argument first one is error and second one is data .
            - 1. writeFile('file_name, "content",(error)=> console.log(error)): create file and write data to the file
            - 2. appendFile('fileName', 'content data',(error)=> console.log(error)) : add new data to the file
            - 3. readFile('fileName','enCoding the data using utf-8', (error, data)=> console.log(error, data)) : read file data
            - 4. rename('oldFileName', 'newFileName', (error)=> console.log(error)) : rename file
            - 5. unlink('fileName',(error)=> console.log(error)) : delete file

    - 7. ASYNCHRONOUS-SYNCHRONOUS:(- What is synchronous and asynchronous in javascript ? )
            - Synchronous (Blocking architecture)
                - Definition: Synchronous operations are executed one after the other, in a sequential order.
                - The code waits for each task to complete before moving on to the next one.
                - Behavior: When a synchronous task is being executed, the JavaScript engine will not move on to the next task until the current one finishes.
                - Synchronous tasks are used when the order of operations is important and each task depends on the previous one.
            -Asynchronous ( non Blocking architecture)
                - Definition: Asynchronous operations allow tasks to be executed independently of the main program flow.
                - When an asynchronous task is encountered, the JavaScript engine doesn’t wait for it to complete before moving on to other tasks. Instead, the task is handled separately,
                - and once it's done, a callback or promise will handle the result.
                -Asynchronous tasks are used for tasks that involve waiting, such as handling user input, network requests, reading files, or performing time-intensive operations like animations or timers
                - Behavior: Asynchronous tasks allow other code to execute while waiting for long-running operations (like file reading, network requests, or timers) to finish.

        - 8. OS-MODULE: (This file used to get operating system related information on your machine )
                - methods : os.arch(), os.totalmem(), os.freemem() , os.platform() , os.type(), os.hostname() , os.tempdir()

        - 9. PATH MODULE: that provides utilities for working with file and directory paths.




    - ROUTE:





    - OWN CUSTOM MODULE:


    - WEB-SERVER:
    - JSON:
    - USER API EXAMPLE:
    - NPM:
    
    - NODE WRAPPER FUNCTION:
    - EVENT MODULE:
    - SENT MAIL:

    - EXPRESS JS:
    - ROUTE IN EXPRESS JS:
    - SERVE STATIC FILE IN EXPRESS JS:
    - TEMPLATE ENGINE
        -CUSTOMIZING VIEWS DIRECTORY
        - PARTIALS IN EXPRESS.JS
        - 404 DYNAMIC (WHEN PAGE NOT FOUND)


    - Project :g

    - MongoDb:
    - Mongoose:
    -postMan:

    * what restful api
    * what is api
    -create restful api in node, express, mongoose,
