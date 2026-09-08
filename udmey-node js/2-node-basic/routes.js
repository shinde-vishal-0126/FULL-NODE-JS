const fs = require("fs");

const requestHandler = (request, response) => {
  const url = request.url;
  const method = request.method;

  // console.log(request);
  // console.log(request.url);
  // console.log(request.method);
  // console.log(request.headers)
  //  console.log(response);

  if (url === "/") {
    response.writeHead(200, {
      "content-type": "text/html",
    });
    //! res.write method in Node.js is used to send a chunk of the response body to the client. It can be called multiple times to stream data to the client before ending the response with res.end.
    response.write("<html>");
    response.write("<head><title>Hello !</title></head>");
    response.write("<body>");
    response.write("<h1> Enter the input </h1>");
    response.write(
      '<form action=/message method ="POST"> <input type="text" placeholder ="enter the message" name="message"/> <button type="submit">click me </button> </form> '
    );
    response.write("</body>");
    response.write("</html>");
    return response.end();
  }

  if (url === "/message" && method === "POST") {
    // req.on used to register the listener
    let body = [];
    // data event is emitted when chunks of data are received from the client
    // req.on is an event listener in Node.js used to register a function that handles specific events emitted by the request object (req) in an HTTP server
    request.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    // When all the chunks are received, the end event is triggered
    return request.on("end", () => {
      //  toString() method convert buffer data into the string format (Human understandable format.)
      // Buffer.concat(body) method combines the body array into a single Buffer object, which is then converted to a string using toString().
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      const message = parseBody.split("=")[1];
      // this code block the execution until the file is not create event not handled the new incoming request
      // fs.writeFileSync('message.txt', message);
      // to solve this issue used writeFile method which is asynchronous
      fs.writeFile("message.txt", message, (error) => {
        console.log("error :", error);
        response.statusCode = 302;
        // response.setHeader('content-type','text/plain')
        response.setHeader("Location", "/");
        return response.end();
      });
    });

  }
  response.setHeader("content-type", "text/html");
  response.write("<html>");
  response.write("<head> <title> My first Page </title> </head>");
  response.write("<body> <h1>Hello from my node.js server </h1> </body>");
  response.write("</html>");
  response.end();
};

module.exports = requestHandler;

//! also defined
// module.exports.handler = requestHandler;
// module.exports.someText = 'This is hardCoded text'

// !also used in following way 
// module.exports = {
//     handler: requestHandler,
//     someText:'do someThing more'
// }

//! more shortest way 
// exports.handler = requestHandler;
// exports.someText = 'so some hard code'


//| what is differences between setHeader() and writeHead() of the response object
//! if you setHeader method You can set headers individually:(One-by-One)
// response.statusCode = 200; // HTTP status code

// response.setHeader('Cache-Control', 'no-store'); // Prevent caching
// response.setHeader('Access-Control-Allow-Origin', '*'); // CORS header
// response.setHeader('Content-Disposition', 'inline'); // Display inline
// response.setHeader('X-Powered-By', 'Node.js'); // Custom header
// response.setHeader('Content-Length', Buffer.byteLength(content)); // Content size

//! Using response.writeHead (All at Once)
//You can define the status code and all headers together as an object:
//  response.writeHead(200, {
// "Content-Type": "text/html",
// "Content-Length": "123",
// "Cache-Control": "no-store",
// "Access-Control-Allow-Origin": "*",
// "Set-Cookie": "sessionId=abc123; HttpOnly; Secure",
// "Content-Disposition": "inline",
// Connection: "keep-alive",
// ETag: '"12345"',
// "X-Custom-Header": "MyCustomValue",
//   });

// Order of Headers: The order doesn't matter when setting headers.
// Overriding Headers: If the same header is defined multiple times (e.g., setHeader and writeHead), the last one takes precedence.
// Default Headers: If not specified, Node.js might add default headers like Connection: keep-alive.

//? what is response.end
//  Give signal to server end of response.
//   response.end();
