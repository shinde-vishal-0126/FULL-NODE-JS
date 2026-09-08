
//|  fs : file system module
//! synchronous operation with file system. (Blocking architecture)


const { isUtf8 } = require("buffer");
const fs = require("fs");

// if file does not exists then create file and add data (if file are present then override the previous data with new data)
fs.writeFileSync("demo.txt", " Hello welcome to the node js !");

// append the new data with previous data using appendFileSync() method
fs.appendFileSync("demo.txt", "\nThank you !");

// How to read data form the given file:
// here if you not give 2nd argument as encoding then data return into the Buffer format 
// so using this 2nd argument you have to convert buffer data into string format
// instead of using toString() method you have to used data encoding
const data = fs.readFileSync("demo.txt", "utf8");
// console.log('data',data.toString());
console.log(data);

// it return data in the form of Buffer
// Buffer basically used stored binary data.

// Rename the fileName :
fs.renameSync("demo.txt", "readWrite.txt");
