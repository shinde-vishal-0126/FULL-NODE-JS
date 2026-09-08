//! # Buffer. (working with data streaming)

// buffer is Global object used to handled binary data directly
// This is particularly useful when working with data streams, such as file system operations, networking, or handling data in various encoding formats
//  They are designed to handle data streams or chunks of binary data while performing operations like reading or writing files, processing network streams, or handling other  I/O tasks. However,
//  they are not a permanent storage mechanism like a database or file system.
// buffer are essential because javascript does not have built in mechanism to handled binary data.
// Buffer is a temporary storage area that holds binary data. It allows you to work with raw binary data directly
// Buffers are immutable in size, i.e., once created, their size cannot be changed.
// buffers in Node.js are mutable. This means that once a buffer is created, its content can be changed by directly modifying the data in it, without needing to create a new buffer.
//  Buffers provide functionality to create, manipulate, and interact with binary data.

//? key feature of Buffer ?
// Binary Data Representation: Buffers store binary data in a fixed-size chunk of memory outside the V8 engine's garbage collection mechanism.
// Direct Interaction: They allow direct interaction with binary streams like TCP streams, file systems, or any other lower-level binary data.
// No Resizing: Once created, the size of a Buffer cannot be changed.
// File System Operations: Reading or writing files often involves Buffers to handle binary data efficiently.
// Networking: Buffers are used in TCP and HTTP streams to manage data chunks.
// Cryptography: Buffers are essential for encryption and decryption operations.
// Data Encoding: Buffers handle conversions between different encoding formats (e.g., UTF-8, Base64).

//? Why Buffers Are Temporary
// Memory Allocation: Buffers allocate memory in the system's RAM. Once the task requiring the buffer is complete (e.g., sending a file over the network), the buffer is no longer needed and can be garbage-collected.
//  Buffers often work with streams, which are inherently temporary.

//? creating buffer:
const buf = Buffer.from("hello word");
console.log(buf);

//? allocating memory to the buffer
const buff1 = Buffer.alloc(10); // create a buffer of 10 bytes and initialize to 0
console.log(buff1);

// ? allocation uninitialized memory
const buff3 = Buffer.allocUnsafe(10);
console.log(buff3);

//? create buffer form array
const buff4 = Buffer.from([71, 101, 108, 108, 111]);

//? common buffer operation
//1. reading and writing
const buf111 = Buffer.alloc(5);
// write data to the buffer
buf.write("vishal");
// read data form the buffer
console.log(buf.toString());

//2. conversion
const buf11 = Buffer.alloc("node js");
console.log(buf.toString("hex"));
console.log(buf.toString("base64"));
// concatenation
const buf1 = Buffer.from("ABC");
const buf2 = Buffer.from("BCD");
console.log(buf1.compare(buf2)); // -1 (buf1 is less than buf2)
