//? what is advantages of using express js with node js.
// simplified web development : (express js provide a lightweight framework that simplified the process of building web application in node js)
// middleware support :(Easy integration of middleware function into application request response cycle)
// flexible routing system using express.Router(); (defining routes for handling different http methods (get, post, put and delete ) and url pattern is easy)
// template engine integration (Express js supports various template engine making it easy to Generate dynamic content on the server side )

//? how to create http server using express js
// install express js
// import express
// create an express application  = const app = express() // server created using express
// then give prot number to with app.listen(3000)

//? how do you create and start express js application
// create an express js application by requiring the express module and calling the express function
// start and express server by calling the listen () method of the application object (app) and specifying the port number.

//? what is middleware in express js and when to use them
// In Node.js, middleware is a function that acts as an intermediary between software layers.
//  refers to functions that are executed during the lifecycle  or pipeline  of a request to the server.
//  They are functions that have access to the request (req), response (res), and the next middleware function in the application's request-response cycle.
// - Middleware functions can modify the request and response objects,
// - terminate the request-response cycle,
// - or pass control to the next middleware function by calling the next() function.
// a middleware in express js is function  that handle http requests, perform operation and pass control to the next middleware.

//? how to implement middleware in express
// first : defined the middleware function which tack callback function with argument like request, response, and next

const express = require("express");
const app = express();

const middleware = (request, response, next) => {
  response.send("Happy interview !");
  next(); // call the next middleware function
};

// To used the middleware Globally for all routes
app.use(middleware);

//? what is the purpose of the app.use() function in express js ?
// app.use() method is used to execute or mount the middleware function Globally.

//? what is purpose of the next parameter in express() js ?
// next() parameter in express js is callback function  which is used to pass control to the next middleware function in the stack
// (or also used call the next middleware function in stack )

//? how to use middleware Globally for specific route ?
// first defined middleware function like
const express = require("express");
const app1 = express();

const middleware1 = (request, response, next) => {
  response.send("welcome to node js application");
  next();
};
// if you want used this middleware Globally for specific route you have to used middle ware in following way

// in app.use give first argument as specific url to used this middleware for that specific route and 2nd argument give as middleware function.
app.use("/example", middleware1);

//? what request pipeline in express js
//  the request  pipeline in express js is a series of middleware function that handled incoming http request and pass control to the next function.

// The request pipeline in Express.js refers to the sequence of middleware and route handlers that a request passes through before generating a response
//- Request Handling :
// When a request is made to an Express server, it enters the request pipeline.
// - Middleware Functions :
// Middleware functions are functions that have access to the req (request), res (response), and next (a function to pass control to the next middleware) objects.
// Middleware can perform various tasks like:
// Logging
// Parsing request bodies
// Authentication and authorization
// Serving static files
// Error handling
// -  Route Handlers
// After passing through middleware, the request reaches route handlers, which are responsible for handling specific routes and methods.
// -Error Handling Middleware
// Error handling middleware catches errors and sends a response with appropriate status codes and messages.

// Once a route handler or middleware sends a response using res.send(), res.json(), res.render(), etc., the pipeline is concluded for that request.

//- Order of Middleware and Routes
// The order in which middleware and route handlers are defined matters. Express processes them sequentially.

// * the request pipeline in Express.js is a structured process where each incoming request passes through a series of middleware functions and route handlers, performing various operations, until a response is generated and sent back to the client

//? what are the type of middlewares in express js
// There are five (5) type of middleware
// - 1 . Application - level middleware
// Definition: Middleware that is bound to an instance of express().
// Usage: Used across the entire app or for specific routes.
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

// - 2 . Route - level middleware
// Definition: Works in the same way as application-level middleware, except it is bound to an instance of express.Router().
// Usage: Used specifically for routes handled by a router.
const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Router-level middleware");
  next();
});
router.get("/", (req, res) => {
  res.send("Router-level route");
});
app.use("/router", router);

// - 3 . error - handling middleware
// Definition: Specifically designed to handle errors in the application.
// Usage: Defined with four arguments: (err, req, res, next).
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// - 4 . Built in middleware
// Definition: Middleware functions included with Express to handle common tasks.
// express.json(): Parses incoming requests with JSON payloads.
// express.urlencoded(): Parses incoming requests with URL-encoded payloads.
// express.static(): Serves static files like HTML, CSS, images, etc.

// - 5 . Third - party middleware
// Definition: Middleware functions developed by the community to perform specific tasks.
// morgan: HTTP request logger.
// cookie-parser: Parse cookie header and populate req.cookies.
// body-parser: Parses incoming request bodies (though largely replaced by built-in express.json() and express.urlencoded()).

//? what is difference between application-level middleware and route-level middleware.
//  application-level middleware is useful for functionality that needs to be shared across the entire app,
// -(i.e application level middleware applied to all incoming request in the entire express application)
// while route-level middleware provides more granular control, applying middleware logic to specific routes as needed.
// -(Route - level middleware applied only to specific route not all incoming request )

// - Application-level Middleware
// Scope: Applies to the entire application or a wide set of routes.
// Attachment: It is attached to the Express application instance (app) using app.use() or directly within app.METHOD() calls.
// Purpose: Often used for tasks that need to be applied globally, such as logging, authentication, body parsing, or handling static files.
const express = require("express");
const app = express();

// Application-level middleware
app.use((req, res, next) => {
  console.log("Application-level middleware");
  next(); // Pass control to the next middleware or route handler
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

//- Route-level Middleware
// Scope: Applies only to specific routes.
// Attachment: It is attached directly to specific routes when defining them with app.METHOD() or router.METHOD().
// Purpose: Used when you need middleware logic to apply to particular routes, such as validating request parameters for specific endpoints or handling specific request scenarios.
const express = require("express");
const app = express();

// Route-level middleware applied to a specific route
app.get(
  "/user/:id",
  (req, res, next) => {
    console.log("Route-level middleware for /user/:id");
    next(); // Pass control to the next middleware or route handler
  },
  (req, res) => {
    res.send(`User ID: ${req.params.id}`);
  }
);

app.get("/about", (req, res) => {
  res.send("About Page");
});

//? what is error handling middleware and how to implement it
// error handling middleware in express js is special kind of middleware used to manage error happening while handling incoming request .
//  is used to manage and respond to errors in a centralized manner

// - Key Features of Error Handling Middleware:
// Centralized Error Management: Captures and processes errors from various parts of the application in a single location.
// Consistent Responses: Ensures that all errors are returned in a consistent format.
// Logging: Often logs errors for later debugging and monitoring.
// User-Friendly Messages: Hides technical details from users, providing more user-friendly error messages.

//- steps to Implement Error Handling Middleware in Express.js:
// Create an Error Handling Middleware Function:
// This function should accept four parameters: err, req, res, and next.
// The err parameter will contain the error object that was passed down from previous middleware or route handlers.
// Handle the Error:
// Log the error (optional but recommended for debugging).
// Send a response with an appropriate HTTP status code and error message.
// Use the Middleware in the Application:
// Register the error handling middleware after all other routes and middleware in the app
// - Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).json({ error: "Internal Server Error" }); // Send a generic error response
});

//? if you have five 5 middleware then in which middleware you will do the error handling?
// In a typical Express.js application, error handling middleware should be placed after all other middleware and route handlers
//Middleware 1-4: These handle various tasks like parsing requests, authentication, logging, etc.
// Middleware 5 (Routes): These define the application's routes and business logic.
// Error Handling Middleware: This is placed last to catch any errors that were not handled by the previous middleware or routes.
// By placing the error handling middleware at the end, you ensure that any uncaught errors from previous middleware or routes are properly handled.

// - Error Handling Middleware Last: This middleware should always be the last one added to the app. This ensures it can catch errors from all preceding middleware and routes.
// Order of Execution: Middleware functions are executed in the order they are defined. Placing the error handler last allows it to handle any errors from the entire application.
// - Passing Errors: Use next(err) in any middleware or route handler if you want to pass an error to the error handling middleware.
//!Note :
// in case of multiple middleware error handling middleware should be defined at last after all other middlewares
// because when an error occurs express js will search for the next error - handling middleware skipping any regular middleware or route handlers.

//? what is built in middleware ?
// Built-in middleware refers to the middleware functions that are provided by frameworks like Express.js out of the box.
//  These middleware functions are included with the framework and can be used directly to handle common tasks such as parsing request bodies, serving static files, and logging.
// - express.text()
// Purpose: Parses incoming requests with text payloads.
// Usage: Parses text data and makes it available in req.body.

// -express.raw()
// Purpose: Parses incoming requests with raw buffer data (useful for handling binary data).
// Usage: Parses all bodies as Buffer and makes them available in req.body.

// - express.static()
// Purpose: Serves static files such as HTML, CSS, JavaScript, and images.
// Usage: Allows serving files from a specified directory.

// - express.urlencoded()
// Purpose: Parses incoming requests with URL-encoded payloads.
// Usage: Useful for parsing data from HTML forms with the application/x-www-form-urlencoded content-type.
// Options:
// extended: true: Uses the qs library for rich objects and arrays.
// extended: false: Uses the querystring library.
app.use(express.urlencoded({ extended: true }));

// - express.json()
// Purpose: Parses incoming requests with JSON payloads.
// Usage: Automatically parses application/json content-type and makes the parsed data available in req.body.

// - Key Benefits of Built-in Middleware:
// Ease of Use: No need to install or configure third-party packages for common tasks.
// Integration: Built specifically for Express, ensuring seamless integration and compatibility.
// Efficiency: Optimized for performance and common use cases.

// ?how to server static file in express js.
// create public folder in root directory
// express.static: This middleware serves files directly from the specified directory.
// Request Handling: When a request comes in for a static file (e.g., /style.css), Express automatically looks in the public directory.
// Serve static files from the "public" directory
// - app.use(express.static(path.join(__dirname, 'public')));

//? what are the third party middleware ? give some example :
// third party middleware we need to install and then import in you express app
// third party middleware in express js developed by the third party developers

// Morgan:
// Logs HTTP requests and responses for monitoring and debugging. :
// app.use(morgan('dev'));

// CORS :
// 	Enables Cross-Origin Resource Sharing (CORS) for handling cross-origin requests.
// 	app.use(cors());

// Body-Parser:
// Parses incoming request bodies (JSON or URL-encoded) and makes them available in req.body.
// 	app.use(bodyParser.json());

// Helmet:
// Secures the app by setting various HTTP headers to mitigate common vulnerabilities.
// 	app.use(helmet());

// Custom Middleware:
// Custom logic for specific use cases such as error handling or authentication.
// app.use((err, req, res, next) => { res.status(500).send('Error'); });

//? what are the advantages of using the middleware in node js
// 1 modularity :
// middleware allow you to modularize your application functionality in smaller , and self contained unit
// each middleware handled specific task or concern such as logging authentication and error handling

// 2. reusability :
// middleware can used multiple place and then make application code easier to maintain

// 3 improve the request handling
// middleware function have access both request and response object which enable you to perform validation on request or modify the response before sending to the client

// 4 flexible control flow
// middle ware function can be applied globally to all route or selectively to specific route allowing you to control the flow of request processing your application

// 5 used third party middleware
// express js offers you wide range of third party middleware package that provide additional functionality

//? what is routing in express js
//  Routing is the process of defining endpoints (URIs) and handling HTTP requests for those endpoints
// Each route is associated with a specific HTTP method and a URL pattern.
// routing is process of directing incoming http request to the appropriate handler function based on the request methods like get, post and url path
//  routing refers to how an application responds to client requests for specific URLs (endpoints) and HTTP methods (GET, POST, etc.)
// routing refers to the mechanism used to handle HTTP requests and define the behavior of the application when a specific endpoint or URL is accessed.
// A route in Express consists of a URL pattern and an HTTP method (GET, POST, PUT, DELETE, etc.).
// When a request is made to a route, the corresponding route handler function is executed.
// - Key Concepts of Routing in Express.js:

//? what is differences between middleware and routing in express.js
// routing
// routing is process
// routing is process directing the http  incoming request to the appropriate handler function

// middleware:
// middleware is function
// middleware function access the request and response object and modify the request and response object also perform some action or terminate the request and response cycle and call the next () middleware function

//? how to implement the routing and how defined the routing in express js
// routing refers to how an application responds to client requests for specific URLs (endpoints) and HTTP methods (GET, POST, etc.)
const express = require("express");
const app = express();

// Define a simple route for the home page
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// Define a route for the about page
app.get("/about", (req, res) => {
  res.send("Welcome to the About Page!");
});

// Define a route with a parameter
app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// different method
app.get("/contact", (req, res) => {
  res.send("GET request to the Contact Page");
});

app.post("/contact", (req, res) => {
  res.send("POST request to the Contact Page");
});

// in express get route are defined using the app.Method function  like get, post , put, patch and delete
// and app is the instance of the express application .

//? how to handled the routing in express js in real application
// routing is typically handled in a modular, organized manner to maintain scalability and readability
// to handled to router in express js you have to used the express.Router() 
// Defining Routes in Separate Files
const express = require("express");
const router = express.Router();

// Home route
router.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

module.exports = router;


// in app.js ==> app.use('/', router )
// in controller file ==? defined the controller and import into the router file
// in router file having the router.get('/', controller function )



//? what is router handler ?
// A route handler in Express.js is a function that is executed when a specific route (URL path) and HTTP method are matched in the incoming request.
// It defines the logic for handling requests to that route and typically sends a response back to the client.

// -  A route handler has access to the following three key parameters:
// req (Request): Represents the HTTP request and contains information like request parameters, query strings, body, headers, etc.
// res (Response): Represents the HTTP response that the Express app sends when it receives an HTTP request.
// next (Next Function): A callback function to pass control to the next middleware function. It is optional and mostly used in middleware for error handling or chaining multiple handlers.
// router handler is the second argument pass to app.get() or app.post();
// router handler function is used to process the request generate the response


//? what are the route parameter in express js :
// route parameter in express js allow  you to capture dynamic value form the url paths 
// the router param access by using the request.param object .
// route parameters are dynamic segments of a URL 
// that capture values from the URL path and make them available in the req.params object.
// They allow you to create flexible and reusable routes.
// Route parameters are defined in the route path by prefixing a colon (:) before the parameter name.
const express = require('express');
const app = express();

// Route with a single parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

// Route with multiple parameters
app.get('/user/:id/book/:bookId', (req, res) => {
  const { id, bookId } = req.params;
  res.send(`User ID is: ${id} and Book ID is: ${bookId}`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// - Route parameters are accessed through the req.params object, which is an object containing the values of the named parameters in the route path.
// You can make a route parameter optional by appending a ? after the parameter name.
app.get('/user/:id?', (req, res) => {
    if (req.params.id) {
      res.send(`User ID is: ${req.params.id}`);
    } else {
      res.send('No User ID provided');
    }
  });

  // You can use router.param() to handle specific route parameters with middleware.
  app.param('id', (req, res, next, id) => {
    console.log(`Request for user ID: ${id}`);
    next(); // Pass control to the next handler
  });


  //? what is express.Router() (express.Router() are class in express js it return the new router object )
// express.Router is a class in Express.js that provides a way to create modular, mountable route handlers.
//  A Router instance is a complete middleware and routing system;  
// it is often used to define routes for different parts of an application and then mount them in the main application.
// express.Router helps to:
// Create modular and organized route handlers.
// Group routes under a specific path.
// Attach specific middleware to a set of routes.


//? what are the router object and router method () and hot to implement them ?
// router object is used to define routes for handling different HTTP requests.
//  The router allows you to modularize your application by grouping related routes together.
// - Key Methods of the router Object
// router.get(path, handler): Handles GET requests to the specified path.
// router.post(path, handler): Handles POST requests to the specified path.
// router.put(path, handler): Handles PUT requests to the specified path.
// router.delete(path, handler): Handles DELETE requests to the specified path.
// router.use(middleware): Attaches middleware functions to the router.
// router.param(paramName, handler): Defines middleware for processing route parameters.

// - to Implement router in Express.js
// Set Up Express Application
const express = require('express');
const app = express();
//  Create a Router
const router = express.Router();
// define  the routes
// Handle GET request
router.get('/users', (req, res) => {
    res.send('List of users');
});

// Handle POST request
router.post('/users', (req, res) => {
    res.send('User created');
});

// Handle PUT request
router.put('/users/:id', (req, res) => {
    res.send(`User ${req.params.id} updated`);
});

// Handle DELETE request
router.delete('/users/:id', (req, res) => {
    res.send(`User ${req.params.id} deleted`);
});

// Integrate the router into the main Express application using app.use().
app.use('/api', router);

// router object is mini version of an express application which used to handled the routes 
// router method are function provided by the router object to defined for different http method 


// ? what is differences between app.get() and router.get();

// app.get() :
// app.get() method used to defined routes directly on the application object 
// route defined using the app.get() automatically mounted on the root path  (Route is available globally in the application        )
// route defined using the app.get() are not modular and can not be reused in other application 
// No ability to define a base path (global).
// Routes cannot be easily reused in different contexts.
// Does not support route modularization.
app.get('/home', (req, res) => { res.send('Home'); });


// router.get()
// router.get() method used to defined route on a router object 
// route defined using the router.get() are not automatically mounted they must be explicitly mounted using app.use() (Route is available within the router, needs to be mounted.)
// router defined using the router.get() are modular and can be reused in other application by exporting the router object 
// Can define a base path when the router is mounted.
// Routes can be reused and mounted to different paths.
// Supports route modularization by grouping related routes.
router.get('/home', (req, res) => { res.send('Home'); });
app.use('/api', router);


//? share the real application use of routing ?
// routing are used for authentication  request based on the token available in request header.


// ? what route chaining in express js 
// route chaining is process of defining the multiple route handler  of the same route 
// Route chaining in Express.js refers to the process of handling multiple route methods for the same route path in a sequence, using the same route definition
// This can be achieved by applying multiple middleware or route handlers on a single route path.
const express = require('express');
const app = express();

// Middleware function 1: Log request information
const logRequest = (req, res, next) => {
  console.log(`Received ${req.method} request on ${req.url}`);
  next(); // Pass control to the next middleware or route handler
};

// Middleware function 2: Check if the query parameter "name" is present
const checkNameQuery = (req, res, next) => {
  if (!req.query.name) {
    return res.status(400).send('Missing "name" query parameter');
  }
  next(); // Pass control to the next middleware or route handler
};

// Apply both middlewares to the same path and method (GET /greet)
app.get('/greet', logRequest, checkNameQuery, (req, res) => {
  // After both middlewares, the route handler will be executed
  res.send(`Hello, ${req.query.name}!`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// - used of router chaining 
// modularity 
// organizing the code 
// improve the readability 
// separation of concern 

//? what is route nesting in express js 
// route nesting organize routes hierarchically by grouping related route under the common url 
// Route nesting in Express.js refers to defining routes in a hierarchical structure where routes are grouped under specific base paths,
// this allow you to create code more modular and structured route making your codebase easier to manage and maintain .

// - Benefits of Route Nesting:
// Modularity: Organize your routes based on different parts of your application.
// Reusability: Reuse the same router in different parts of your application.
// Separation of Concerns: Keep related routes grouped together, making the code cleaner and easier to maintain.


//? how to implement route nesting in express js 
const express = require('express');
const app = express();

// Create a router for /users-related routes
const userRouter = express.Router();

// Define routes for user operations
userRouter.get('/', (req, res) => {
  res.send('List of users');
});
userRouter.get('/:id', (req, res) => {
  res.send(`User details for ID: ${req.params.id}`);
});



// Create a router for /products-related routes
const productRouter = express.Router();

// Define routes for product operations
productRouter.get('/', (req, res) => {
  res.send('List of products');
});
productRouter.get('/:id', (req, res) => {
  res.send(`Product details for ID: ${req.params.id}`);
});



// Create a router for /admin-related routes
const adminRouter = express.Router();
// Create a router for /admin/users-related routes
const adminUserRouter = express.Router();

// Define routes for admin users
adminUserRouter.get('/', (req, res) => {
  res.send('Admin: List of users');
});

adminUserRouter.get('/:id', (req, res) => {
  res.send(`Admin: User details for ID: ${req.params.id}`);
});

// Nest the /admin/users router under /admin
adminRouter.use('/users', adminUserRouter);
// Mount the /users and /products routers at their respective paths
app.use('/users', userRouter);
app.use('/products', productRouter);
// Mount the /admin router at its base path
app.use('/admin', adminRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
