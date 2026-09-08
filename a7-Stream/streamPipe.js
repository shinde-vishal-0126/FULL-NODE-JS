//| # Stream.Pipe() :

// def : Stream.pipe() method used to take readable stream and connect it to a writable stream

// Piping in Node.js is a mechanism for connecting a readable stream to a writable stream,
//allowing data to flow from one stream to another automatically and efficiently.

// 2.When you pipe streams, data is read from the source (readable stream) and directly written to the destination (writable stream) without needing to manually manage reading and writing.

// 3.When you use the .pipe() method, it reads chunks of data from the readable stream and writes them to the writable stream. This is particularly useful for working with large data, as it doesn’t require the entire data to be loaded into memory at once.

// Benefits of Pipe():
// - Memory efficiency: Since data is processed in chunks, there's no need to load the entire data into memory at once.
// - Simplified code: Piping eliminates the need to manually handle reading and writing logic.
// - Chaining: Multiple streams (e.g., readable, transform, writable) can be chained together.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Create a readable stream for 'data.txt'
  const readStream = fs.createReadStream("data.txt", "utf-8");

  // Create a readable stream for 'data.txt'
  const writeStream = fs.createWriteStream("data.txt", "utf-8");

  // Use the pipe method to transfer data from readableStream to writableStream and response
  readStream.pipe(writeStream); // This will write data to output.txt

  // Pipe the readable stream directly to the response stream (res)
  // Pipe the readable stream to the response as well to send data to the client
  readStream.pipe(res); // This will send data to the client as HTTP response

  // Handle errors on the readStream
  readStream.on("error", (error) => {
    console.error("Read error:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Error reading file");
  });
});

writableStream.on("error", (error) => {
  console.error("Error writing stream:", error);
});

server.listen(8000, () => {
  console.log("Server started on port 8000...");
});
