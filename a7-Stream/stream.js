
//| # What is Stream in node js ? 

// 1. stream are ongoing process in node js
// 2. Stream are object let you  read data from source or write data to a destination in continuous fashion.
// 3. Ex. Streaming means listening Music or watching video in real time instead of Downloading file and watch later
// 4. Four type fo Streaming (4 type):

// 1. Readable :  stream are used to read operation (read data sequentially)
// 2. writable :  stream are used to write operation (write data sequentially)
// 3. Duplex : stream which are used to both read and write operation
// 4. Transform : A type of duplex stream where output is computed based on the input
// -  (A duplex stream that can modify or transform the data as it's read or written.)
// Note:
// 1. Streams process data in chunks, so it doesn’t require loading the entire file into memory.
// 2. Streams allow efficient data handling, which is crucial for performance in applications dealing with large files, HTTP requests, or any I/O-bound operations.
// 3. Piping: You can pipe streams together, like piping a readable stream into a writable stream.

// IMP :
// Each type Stream are EventEmitter Instances and throw several event at different instances of Time
// some commonly used event are
// 1. data: The event is fire when there is data is available to read
// 2. end: The event is fired when there is no more data to read
// 3. error: Then event is fired when there is any error receiving or writing data
// 4. finish: This event is fired when all the data has been flushed to underlying system (i.e remove form our memory)
// 5. close : Emitted when the stream has been fully closed.
// 6. "drain : drain event is a form of flow control for writable streams, preventing you from overloading the stream buffer with data.
      // -drain is helpful when you’re dealing with high-throughput data writes


//Task
// 1. reading data from stream
// 2. create readable stream
// 3 handled stream events

const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  // This is not way to read data

  // fs.readFile('data.txt','utf-8',(error, data)=>{
  //     if(error){
  //         console.log(error)
  //     }else{
  //         console.log(data.toString())
  //     }
  // })

  // By using another way we have to read streaming data

  // createReadStream method in Node.js is part of the fs (file system) module, and it creates a readable stream to read data from a file in chunks, which is especially useful for handling large files.

  // create readable stream
  const streaming = fs.createReadStream("data.txt", "utf-8");

  // Create a writable stream to write data into output.txt
  const writableStream = fs.createWriteStream("output.txt");

  // - on is a method that listens for specific events on a stream or an EventEmitter. 
  // Yes, exactly! The on method is a function provided by the EventEmitter class in Node.js. Streams (both readable and writable) are instances of EventEmitter, and that's why you can use the on method to listen for specific events emitted by the stream.
  // - Callback Function: A function that runs whenever the specified event occurs. For "data", the callback function receives a data parameter containing the chunk of data streamed in that moment.
  streaming.on("data", (data) => {
    console.log(data);
    res.write(data);
    
    //Here you have to done writable stream
    writableStream.write(data); 
  });
  // Specifies which event you're listening for. Common event types in streaming include "data", "end", and "error".
  streaming.on("end", () => {
    res.end();
    // here end the writable stream
    writableStream.end();
  });

  streaming.on("error", (error) => {
    console.log(error);
  });
  
  // error event on writable stream
  writableStream.on('error',(error)=>{
    console.log(error)
  })
});


// to create writable stream



server.listen(8000, () => {
  console.log("server started.....");
});
