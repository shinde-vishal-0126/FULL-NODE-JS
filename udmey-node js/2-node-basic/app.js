// create node server


const http = require("http");
const route = require('./routes')

//! instead of that used route file 
// it having requestListener function that will execute every incoming request and pass to the create server method to callback function with two argument like request and response object
// const server = http.createServer((request, response) => {
//* remove here code and add into route file 
// }) 

const server = http.createServer(route);

server.listen(3000, () => {
  console.log(`server running on port no 3000`);
});
