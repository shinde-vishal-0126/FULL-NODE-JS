// | middleware 

// middleware refers to functions that execute during the lifecycle of a request to the server.
// Middleware functions are commonly used in frameworks like Express.js to handle various operations such as authentication, logging, data validation, and more. These functions can modify the request (req) and response (res) objects or terminate the request-response cycle.

// In Node.js, middleware is a function that acts as an intermediary between software layers.
//  It's used to: Modify request and response objects, Call the next middleware function, Execute code, and Terminate the request-response cycle


//! Key Characteristics of Middleware:
//1. Execution Order:
//  Middleware functions execute sequentially in the order they are defined in your code.
//2. Access to Request and Response:
// Middleware functions have access to the req (request) and res (response) objects, allowing you to manipulate them
//3. Control Flow:
// Middleware functions can pass control to the next middleware in the stack by calling next(). If next() is not called, the request-response cycle remains pending.

//! Types of Middleware:

//1. Built-in Middleware: Provided by frameworks (e.g., express.json(), express.static() in Express.js).
//2. Third-party Middleware: Libraries you install (e.g., body-parser, cors).
//3. Custom Middleware: Functions you write to handle specific tasks.

//! typical middleware function takes three arguments:
//function middlewareExample(req, res, next) {
// Perform some operation
//     console.log('Middleware executed');

// Call next middleware or route handler
//     next();
// }

//!1. Application-level Middleware:
// Used for the entire application or specific routes.
// app.use((req, res, next) => {
//     console.log('Application-level middleware');
//     next();
// });

//!2. Router-level Middleware:
// Associated with specific route handlers using express.Router().
// const router = express.Router();
// router.use((req, res, next) => {
//     console.log('Router-level middleware');
//     next();
// });

//!3 Error-handling Middleware:
// Handles errors in the app.
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });

//!4.  Built-in Middleware:
// Provided by Express.js.
// app.use(express.static('public')); // Serves static files

//!5 Third-party Middleware:
// Installed via npm.
//const cors = require('cors');
// app.use(cors());

// Middleware is a powerful way to manage the flow of your application and add reusable functionality to your server.
