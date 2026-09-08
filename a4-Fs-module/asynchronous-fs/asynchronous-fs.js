//| # asynchronous file operation (non-Blocking structure);

const fs = require("fs");

// in asynchronous file system method callback function so callback function make a asynchronous behavior
// callback must a function
// create file and store data
fs.writeFile("demo.txt", "Hi, Node js ", (error) => {
  console.log(error);
});

// append the data with existing file data
fs.appendFile("demo.txt", "\n welcome to node js tutorial !", (error) => {
  console.log("data added successfully");
  console.log("error", error);
});

// read the data form the file
// here if you not give 2nd argument as encoding then data return into the Buffer format 
// so using this 2nd argument you have to convert buffer data into string format
// instead of using toString() method you have to used data encoding
fs.readFile("demo.txt", "utf-8", (error, data) => {
  console.log("data :", data);
  console.log(error);
});
