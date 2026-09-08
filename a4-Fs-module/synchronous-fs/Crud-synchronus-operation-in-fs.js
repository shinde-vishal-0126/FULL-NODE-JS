//| # synchronous operation (Blocking architecture)

// - CRUD  create, read, update, delete
// - using synchronous operation (Blocking architecture)

// create folder name fs-module
// create file name bio and add data into it
// add more data into file at the existing of the end data
// Read the data form the file without reading buffer data . (using file encoding)
// rename file name to myBio.txt
// DELETE the file and directory

const fs = require("fs");
// create directory
// fs.mkdirSync('Fs-module');

//create file
fs.writeFileSync("bio.txt", "vishal shinde");

// add more data(append)
fs.appendFileSync("bio.txt", "junnar,pune");

//read data form the file in human readable format
// here used file encoding concept:
const data = fs.readFileSync("bio.txt", "utf-8");
console.log(data);

// rename the file
fs.renameSync("bio.txt", "myBio.txt");

// delete the file form the directory
// fs.unlinkSync('myBio.txt');

// How to remove directory using fs modal
// fs.rmdirSync('Fs-module')
