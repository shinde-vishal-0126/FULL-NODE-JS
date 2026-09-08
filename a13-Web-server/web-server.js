// node js web-server:

//? what is web server 

// A web server is a software application or hardware system that delivers web content to users over the Internet or a private network.
//  Its primary purpose is to store, process, and deliver web pages to clients, typically through web browsers, using protocols such as HTTP (HyperText Transfer Protocol) or HTTPS (HTTP Secure).
//! A web server in Node.js is an application that handles all HTTP requests and sends back appropriate responses to clients (e.g., browsers or API consumers). 
// Node.js so basically web server is software program  which serve web pages to the web users(Browsers)
// A web server is a software or hardware system that serves content to clients (typically web browsers) over the internet.
// Its main role is to deliver web pages and files, such as HTML documents, images, and videos, by responding to HTTP (Hypertext Transfer Protocol) requests from clients.


// Key Functions of a Web Server:
//! Handles HTTP Requests:
// Processes requests made to specific URLs (routes).
// Supports HTTP methods like GET, POST, PUT, DELETE, etc.
//! Receive Requests: Web servers listen for incoming requests, often through port 80 (for HTTP) or port 443 (for HTTPS).
//! Process Requests: Based on the requested URL, the server locates the corresponding file or script.
//! Serve Content: It delivers static files (like HTML, CSS, JavaScript, images) or dynamically generated content (such as pages from a database or results from scripts like PHP, Node.js).
//! Security & SSL: Web servers often handle security functions, like serving content over HTTPS and ensuring secure connections.
//! event-driven and non-blocking  : Node.js handles requests asynchronously, enabling it to manage many simultaneous connections efficiently.
//! web server are customizable : for full configurable rouging , handled the request and integrating the middleware
// To access web page of any web application you need to web server.
// The web server handheld all http request for the web application.

// Node.js provide capability to create your own web server which will handled http request asynchronously.
// To create server you have to used http module

const http = require("http");

// createServer() method having  callback function with req and res parameter which is supplied by node js
// req object used to get information about current http request. (url, headers, data)
// res object used to send response to the current request
const server = http.createServer((req, res) => {
  res.end("Hello, Welcome to node js server.....");
});
server.listen(4000, "localhost", () => {
  console.log("server started.....");
});
