// 1. first create web server
//! In Node.js, a route refers to a defined endpoint or URL path that the server responds to with a specific action or function.
//  Routes are typically used to handle HTTP requests (e.g., GET, POST, PUT, DELETE) for specific URLs.
// Routeing : How to handheld the routing and http request in node js


// Key Concepts of Routes in Node.js:
// Route Path: The URL pattern to which the route responds.
// HTTP Methods: Defines the type of request the route handles (e.g., GET, POST).
// Callback Function: A function executed when the route is matched.


// Key Features:
// Dynamic Parameters: Routes can include dynamic parts (e.g., /user/:id), which can be accessed via req.params.
// Middleware: Routes can include middleware functions to perform actions like authentication, logging, etc.
// Chaining: Multiple handlers can be chained for a single route to modularize logic.



// Why Use Routes?
// Organization: Helps structure your application by defining how different endpoints handle requests.
// Separation of Concerns: Keeps request handling logic separate from the core application logic.
// Scalability: Makes it easier to scale and manage the server as the application grows.


const url = require("url"); // no need to import it by default present

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("url", req.url);
  console.log("method :", req.method);
  console.log("headers :", req.headers);

  if (req.url == "/") {
    res.end("<h1>Welcome To Home Page !</h1>");

  } else if (req.url == "/about") {
    res.end("<h1>Welcome To About Page !</h1>");

  } else if (req.url == "/contact") {
    res.end("<h1>Welcome To Contact Page !</h1>");

  } else {
    //Sends a response header to the request.
    res.writeHead(404, {
      "content-type": "text/html",
    });
    //  used to send chunks of the response body to the client while the connection is still open.
    res.write("<h1> 404 </h1> <span> Page Not Found ! <span>");
    res.end();
    //used to signal the end of the response in an HTTP server
    //  If you don’t need to send any additional data and just want to signal the end of the response,
  }
});

// Helper function to parse JSON body
const parseBody = (req, callback) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    callback(JSON.parse(body));
  });
};


// Routing based on URL and HTTP method
if (req.url === "/" && req.method === "GET") {
  res.end("<h1>Welcome To Home Page!</h1>");

} else if (req.url === "/about" && req.method === "GET") {
  res.end("<h1>Welcome To About Page!</h1>");

} else if (req.url === "/contact" && req.method === "GET") {
  res.end("<h1>Welcome To Contact Page!</h1>");

} else if (req.url === "/data" && req.method === "POST") {
  // Handle POST request to /data
  parseBody(req, (body) => {
    console.log("POST Data:", body);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Data received via POST", data: body }));
  });

} else if (req.url === "/data" && req.method === "PUT") {
  // Handle PUT request to /data
  parseBody(req, (body) => {
    console.log("PUT Data:", body);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Data updated via PUT", data: body }));
  });

} else if (req.url === "/data" && req.method === "PATCH") {
  // Handle PATCH request to /data
  parseBody(req, (body) => {
    console.log("PATCH Data:", body);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Data updated via PATCH", data: body }));
  });

} else if (req.url === "/data" && req.method === "DELETE") {
  // Handle DELETE request to /data
  console.log("DELETE request received");
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Data deleted successfully" }));
  
} else {
  // 404 Not Found
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>404</h1><span>Page Not Found!</span>");
}

// Start server on port 4000
server.listen(4000, "127.0.0.1", () => {
  console.log("Server started at port 4000");
});


// parseBody is a helper function in the server code used to collect and parse data from the body of incoming HTTP requests, 
// especially useful for handling POST, PUT, and PATCH requests. These types of requests often send data in the request body, such as JSON payloads, 
// that the server needs to read and process.
// In Node.js, the http module does not automatically parse incoming request bodies, so parseBody serves as a custom solution for collecting data from the request stream,
//  converting it into a string, and parsing it into a usable JavaScript object (if it's JSON data).