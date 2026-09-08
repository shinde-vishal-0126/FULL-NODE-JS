//| #  asynchronous operation in file system module
//! # all task are run parallel.


// create folder name fs-module
// create file name bio and add data into it
// add more data into file at the existing of the end data
// Read the data form the file without reading buffer data . (using file encoding)
// rename file name to myBio.txt
// delete the file and directory

const { error, log } = require("console");
const fs = require("fs");

// create directory using asynchronous operation
// fs.mkdir('fs',(error)=>{
// console.log('directory created');
// console.log(error);
// });

fs.writeFile("bio.txt", " Hi, welcome to node js series", (error) => {
  console.log("file created !");
  console.log(error);
});

// append or add more data on existing file
fs.appendFile("bio.txt", " Thanks for joining node js series !", (error) => {
  console.log("data add successfully ");
  console.log(error);
});

// read data from the file
fs.readFile("bio.txt", "utf-8", (error, data) => {
  console.log(data);
  console.log(error);
});

// rename the given file
fs.rename("bio.txt", "myBio.txt", (error) => {
  console.log("file are re-name successfully..");
  console.log(error);
});

fs.rmdir("fs", (error) => {
  console.log("removed directory");
  console.log(error);
});

fs.unlink("bio.txt", (error) => {
  console.log("file remove successfully...");
  console.log(error);
});
