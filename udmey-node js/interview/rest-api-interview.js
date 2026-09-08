//? what is rest and restFull api

// - REST
// rest (representational state transfer )
// it is an architectural style for designing  the network application.
// ir relies on a stateless, client-server,cacheable communication protocol the http protocol are commonly used.
// rest is set of guidelines or rule  for creating the api
// It is a set of conventions for building web services that are stateless and can interact with resources, often represented by URLs.

// - rest
// key principle of the rest include.

// - separation of client and server:
// The implementation of the client and server must be done independently.  
// changes to the client do not affect the server and vice versa.
// advantages : independence allow easier maintenance, scalability, and evolution

//  - Stateless:
//  Each interaction is independent, meaning the server does not need to remember previous requests from the client.
// Each request from a client contains all the information the server needs to fulfill it.
// The server will not store anything about http request the client mode
// advantages : it will treat every request as new request it simplifies server implementation as it is not overloading it with state management

//  - Uniform Interface: 
// - i.e always respect all http request:
// RESTful APIs typically use a standard set of HTTP methods (e.g., GET, POST, PUT, DELETE) for interaction, each with a specific purpose:
// GET: Retrieve data from the server.
// POST: Send data to the server to create a new resource.
// PUT: Update an existing resource on the server.
// DELETE: Remove a resource from the server.

// - Resource-Based: 
// Resources (such as users, orders, or products) are identified by URLs (Uniform Resource Locators). 
// Each resource can be represented in different formats like JSON, XML, or HTML

//  - cacheable:
// Responses from the server should be cacheable, improving performance and scalability by reducing the number of client-server interactions.
// Responses must define themselves as cacheable or not, which helps optimize client-server interactions.
// the api response should be cacheable to improve the performances
// advantages: caching api response improves performances by reducing the need for repeated request for the server

// - layered system :
// the system should follow the layered pattern
// advantages : a layered system such as model-view-controller pattern promotes module design and separation of concern



// - RestFul api :
// - (restful api was representational state which have some standards or rule based on that you have to designed the restful api)
// A RESTful API (Representational State Transfer API) is a web service that follows the principles and constraints of REST (Representational State Transfer) architecture. REST is an architectural style for designing networked applications and relies on stateless, client-server communication
// RestFul api (application programming interface) Following Rules or Principles: of rest and allow for interaction with restFul web services
// it expose the endpoint (url ) representing resource (data or functionality ) and client used standard http method to interact with this resources
// Key Features of RESTful APIs:
// Resource-Based: Each resource is identified by a URI (Uniform Resource Identifier).
// HTTP Methods:
// GET: Retrieve a resource.
// POST: Create a new resource.
// PUT: Update an existing resource.
// DELETE: Remove a resource.
// Stateless Communication: Each request is independent, containing all the information needed.
// Representation: Resources can be represented in multiple formats, typically JSON or XML.

//? Advantages of RESTful APIs:
// Scalability: RESTful APIs can handle a large number of requests by distributing the load.
// Flexibility: They can be used with multiple types of clients (web, mobile, IoT).
// Interoperability: Standardized use of HTTP methods makes integration straightforward.



//? what is http request and response structure in ui and rest api ?

// - HTTP Request Structure (UI to REST API)
// When a client (such as a web UI or mobile app) sends a request to a REST API,
//  it follows a certain structure, which typically includes the following components:

// - HTTP Method:
// GET: Retrieve data from the server.
// POST: Send data to the server to create a new resource.
// PUT: Update an existing resource.
// DELETE: Delete a resource.
// PATCH: Apply partial updates to a resource.
// URL (Uniform Resource Locator):
// - Defines the endpoint (path) on the server to access the resource.
// Example: /api/products/123 (retrieves product with ID 123).

// - Headers:
// Metadata about the request, such as authorization, content type, and data format.
//  Common headers:
//  Content-Type: Specifies the media type (e.g., application/json, application/x-www-form-urlencoded).
//  Authorization: Carries authentication credentials (e.g., Bearer token).
//  Accept: Specifies the expected response format (e.g., application/json).
// Body (Optional):
// The data sent with the request (for methods like POST, PUT, PATCH).

// - http request get the
// action  (method like get,post, patch, put or delete)
//  url  (url or endpoint that is defined the route)
// type of request   (http or https type of request  )
// ui server address  ( ui server address like host address )
// request body (inside get some option param )
// also having the header like content -type  also having token information

// POST /api/products
//  HTTP/1.1
// Host: example.com
// Content-Type: application/json
// Authorization: Bearer token123

// {
//   "name": "New Product",
//   "price": 19.99
// }

// - HTTP Response Structure (From REST API to UI)
// The server responds to the client's HTTP request with an HTTP response, which generally includes:

// - HTTP Status Code:
// Indicates the result of the request.
// Common status codes:
// 200 OK: The request was successful.
// 201 Created: The resource was created successfully (usually for POST requests).
// 400 Bad Request: The request was invalid.
// 404 Not Found: The requested resource does not exist.
// 500 Internal Server Error: There was a server-side error.

// - Headers:
// Similar to the request headers, but from the server's perspective.

// - Common response headers:
// Content-Type: Specifies the media type of the response (e.g., application/json).
// Cache-Control: Specifies caching behavior.
// Authorization: Response header when the server sends credentials (e.g., token for session continuation).
// Body (Optional):
// The data returned by the server in response to the request, often in JSON or XML format.

// HTTP/1.1 201 Created
// Content-Type: application/json
// Location: /api/products/123

// {
//   "id": 123,
//   "name": "New Product",
//   "price": 19.99
// }
// - and finally ui server created into the html code to display on ui


//? what is differences between rest api ans soap api
// - restApi :
// representational state transfer api
// style: REST is an architectural style.
// Principle: Stateless communication, resource-based.
// Resources: Exposed as URLs (Uniform Resource Locators).
// Operations: Uses standard HTTP methods (GET, POST, PUT, DELETE).
// Primarily uses HTTP/HTTPS. protocol
// uses lightweight  Flexible data formats (JSON, XML, HTML, etc.).
// rest api are stateless (Stateless: Each request from a client contains all the information the server needs to fulfill that request.)
// Utilizes HTTP status codes (like 200 OK, 404 Not Found, 500 Internal Server Error) for error handling.
// Lightweight and faster due to the usage of JSON and the simplicity of HTTP methods.
// Relies on HTTPS for secure data transmission.(Simpler security options but can implement OAuth, JWT, and other token-based authentication mechanisms.)
// More flexible and easier to integrate with other services and technologies.

// - soap :
// Soap (simple object access protocol) is protocol
// Style: Protocol.
// Principle: Stateful or stateless communication, operation-based.
// Operations: Defined in a WSDL (Web Services Description Language) file.
// Uses various protocols such as HTTP/HTTPS, SMTP, TCP, etc.
// XML is the only data format.
// can be state full or stateless(Can be either stateless or stateful: Stateful services keep the state of the client’s session on the server.)
// Uses built-in error handling with <fault> elements in the XML response.
// can be slower due to xml processing
// Built-in security features like WS-Security for enterprise-level security. (Supports advanced security scenarios (e.g., encryption, signing, secure token).)
// Less flexible due to its strict standards and reliance on XML.

// Summary
// REST: Lightweight, flexible, and ideal for simple, stateless web services.
// SOAP: Heavy, rigid, and suitable for complex, enterprise-level applications with high-security needs.


// ? what are the http verbs and http methods  
// ? what are the get, post, put patch method 
// http methods also known as http verbs are a set of action that a client take on resources
// HTTP verbs and HTTP methods are terms used interchangeably to describe the actions that can be performed on resources in a web service. Here are the primary HTTP methods/verbs:
//- GET
// Purpose: Retrieve data from a server at the specified resource.
// Characteristics: Safe, idempotent, cacheable.
// Example: GET /users retrieves a list of users.

// - 2. POST
// Purpose: Submit data to the server to create a new resource.
// Characteristics: Not idempotent (subsequent identical requests may have different effects).
// Example: POST /users creates a new user.

// - 3. PUT
// Purpose: Update or create a resource at the specified URI.
// Characteristics: Idempotent.
// Example: PUT /users/123 updates the user with ID 123 or creates it if it doesn't exist.

// - 4. PATCH
// Purpose: Apply partial modifications to a resource.
// Characteristics: Not necessarily idempotent.
// Example: PATCH /users/123 updates some fields of the user with ID 123.

// - 5. DELETE
// Purpose: Remove a resource from the server.
// Characteristics: Idempotent.
// Example: DELETE /users/123 deletes the user with ID 123.

// - HEAD
// Purpose: Retrieve the headers of a resource, without the body.
// Characteristics: Safe, idempotent.
// Example: HEAD /users retrieves headers for the users resource.

//-  OPTIONS
// Purpose: Describe the communication options for the target resource.
// Characteristics: Safe, idempotent.
// Example: OPTIONS /users returns the HTTP methods supported by the users resource.

// - CONNECT
// Purpose: Establish a tunnel to the server identified by the target resource.
// Characteristics: Not safe or idempotent.
// Example: Often used for SSL tunneling.

// - TRACE
// Purpose: Perform a message loop-back test along the path to the target resource.
// Characteristics: Safe, idempotent.
// Example: TRACE /users returns the request as received by the server.


//? what is idempotent (explain the concept of the idempotent)
// idempotence meaning performing an operation multiple time should  have a same outcome as performing it once 
// ex. send multiple time get request it give same result and response.
// Idempotence is a concept from mathematics and computer science that describes an operation that can be applied multiple times without changing the result beyond the initial application
// i.e (Idempotent means something can be repeated multiple times without changing the result (performing same operation multiple times same output/response/ and result are return )


// ? what is differences between the put and patch method 
// - Both put and patch method are used to updated a resource by replacing the resource with new data provided in the request.
// put 
// - full resource replacement:
// in a put request the client send the full updated resources in the request body, replacing the existing resource on the server .
// Full Update: The PUT method replaces the entire resource at the specified URI with the new data provided. 
// If the resource does not exist, it can create a new one.
// Idempotent: Multiple identical PUT requests will have the same effect as a single request (i.e., the resource state will be the same after each request).

// patch 
// - partial updated resources
//  in a patch request the client send a specific changes or instruction for modifying the resources, updating only certain filed without resending the entire resource 
// Partial Update: The PATCH method applies a set of changes to a resource. 
// It is used when only partial modifications are needed, without sending the entire resource.
// Not Necessarily Idempotent: Multiple identical PATCH requests may have different effects if the operations are cumulative or context-dependent.

// Key Differences:
// - Scope of Update:
// PUT updates the entire resource.
// PATCH updates part of the resource.

//- Request Payload:
// PUT requires the complete representation of the resource.
// PATCH only requires the fields that need updating.

//- Idempotency:
// PUT is idempotent.
// PATCH is not necessarily idempotent.


//? what are roles of the status code in restApi 
// status code convey the result of a client request.
// 1xx info:
    // 100 : continue
// 2xx success
    // 200 : ok (success)
    // 201 : created
    // 202 : accepted
    // 204 : no content
// 3xx redirection  
    // 300 multiple choice
// 4xx client error 
    // 400 : bad request 
    // 401 : unauthorize
    // 403 : Forbidden
    // 404 : Not Found
// 500 server error
    // 500 : internal server error
    // 501 : not implemented 
    // 502 : bad gateway
    // 503 : services unavailable


//? what is cors in restFul api ?
//CORS, or Cross-Origin Resource Sharing, is a security feature implemented in web browsers that allows or restricts web pages from making requests to a different domain (or origin) than the one that served the web page.
// This is important in the context of RESTful APIs because it controls how resources are shared across different origins.
// - Key Concepts of CORS in RESTful APIs:
// By default, web browsers enforce the Same-Origin Policy, which restricts a web page from making requests to a domain different from the one that served the page.
// This is a security measure to prevent malicious websites from accessing sensitive data from another origin.
// CORS Headers:
// Access-Control-Allow-Origin: Specifies which origins are allowed to access the resource. For example, * allows all origins, while a specific URL like https://example.com allows only that origin.
// Access-Control-Allow-Methods: Specifies the HTTP methods (GET, POST, PUT, DELETE, etc.) that are allowed when accessing the resource.
// On the server side, CORS can be enabled by setting the appropriate headers in the HTTP response. This can be done in various ways depending on the server-side technology being used (Node.js, Express, Django, etc.).


//? How to remove the cors restriction form the express 
// you can enable CORS by using the cors middleware in application. 
// This middleware allows you to configure which domains are permitted to access your API.
// npm install cors
// Use the cors Middleware:
const express = require('express');
const cors = require('cors');
const app = express();
// Enable CORS for all routes
app.use(cors());
// Your routes here
app.get('/api/data', (req, res) => {
  res.json({ message: 'CORS is enabled for all origins!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// - Optional: Custom CORS Configuration:
// If you want to allow specific origins or set other options, you can customize the cors middleware like this:
const corsOptions = {
    origin: 'https://example.com', // Allow only this domain
    methods: ['GET', 'POST'], // Allow only GET and POST methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  };
  
  app.use(cors(corsOptions));
  

  //? what is serialization and deserialization
  // Serialization and deserialization in Express.js refer to the processes of converting data between different formats, typically for the purpose of transmitting it over a network or storing it in a database.
  // - serialization: (serialization is process of converting an object into a format  that can be stored or transmitted or reconstructed later)
  // Serialization is the process of converting complex data structures or objects into a format that can be easily transmitted or stored. Common formats include JSON, XML, or binary formats.

  //- deserialization :(deserialization is the process of converting serialization data such ans binary, json xml back in to an object)
  // Deserialization is the process of converting serialized data (e.g., JSON string) back into a complex data structure or object that can be used by the application.
  // - Serialization and deserialization are essential for ensuring data integrity and compatibility between different systems in web applications.

//   Common Use Cases
// API Communication: When creating RESTful APIs, data is serialized into JSON for responses and deserialized from JSON in requests.
// Session Management: In authentication, user session data may be serialized into a token (e.g., JWT) and deserialized when verifying the token.
// Database Operations: Data retrieved from a database is often serialized before sending to a client and deserialized when storing user input.

//? what is type of the serialization 
// binary serialization
// xml serialization
// json serialization

//? how to done the serialization and deserialization in express js 
// serialization :
//  JSON.stringify() used to convert into serialization

// deserialization:
//typically in JSON format, and converts it to a JavaScript object using JSON.parse().


//? explain the concept of the versioning in restFul api  (versioning in restFUl api refer to the practices of maintaining multiple version of an api to support backward compatibility )
// Versioning in RESTful APIs is a practice used to manage changes and updates to an API while maintaining compatibility for existing users.
//  As APIs evolve, new features, changes, or deprecations can break existing client applications if not managed properly. 
// Versioning allows the API to introduce these changes without disrupting the existing consumers.
//Key Concepts of API Versioning
// - Backward Compatibility:
// Ensures that existing API consumers can continue using the older versions of the API without any interruption even after new versions are released.
// - Forward Compatibility:
// While not as common, forward compatibility allows older clients to handle newer API responses gracefully, often by ignoring unknown fields.
// Common Approaches to Versioning URI Path Versioning:
// The API version is included in the URL path.
// Example:
// /v1/users
// /v2/use

// Query Parameter Versioning:
// The version is specified as a query parameter.
// Example:
// /users?version=1
// /users?version=2

// Benefits of API Versioning
// Stability for Clients: Consumers of the API can continue using the version they integrated with, ensuring stability and reducing the risk of breaking changes.
// Flexibility for API Developers: Allows developers to evolve the API, add new features, or refactor code without forcing immediate changes on all users.
// Clear Deprecation Path: Developers can deprecate older versions over time, giving clients notice and a timeline for migration


//? what is api document  and popular format of the document format 
// an api document described the functionality feature and usage of a rest api 
// swagger (open al), apiBlueprint , RAML

//? what is typical structure of the express.js
//node_module : where npm package are installed 
// src : source code directory 
    // controllers : contain the file responsible for handling business logic 
    // model : defined the models (properties)
    // route : defined api route
    // utils : contain reusable function used across the project 
// app.js :
// initialize and configure the express application, connect route, middleware and other configuration 

// .gitIgnore :
// a file that specifies file and direction to be ignored by version control 

// package.json : give the information about the project and dependencies 


//? what are authentication and authorization
// In Express.js, authentication and authorization are key concepts used to secure web applications.
// authentication i.e who are you  (authentication is process of verifying the identity of the user by  validation their credentials username and password )
// authorization : i.e your writes / or access
// authorization is process of allowing an authenticated user access the resource 

// - authentication is always precedes to authorization

// -Authentication
// Authentication is the process of verifying the identity of a user or system. 
// It ensures that the entity trying to access the system is who they claim to be.
// Purpose: To confirm the identity of a user.
// - Common Methods:
// - 1 basic authentication :
//  Username and Password: The most basic form of authentication where users provide credentials.
// - 2 Token-based Authentication: 
// Involves the use of tokens (e.g., JWT - JSON Web Token) which are issued after successful login and used for subsequent requests.
// - 3 api based authentication :
// - 4 multiFactor authentication :
// - 5 certificate based authentication :
// OAuth: A protocol that allows users to authenticate via third-party services (e.g., Google, Facebook).
// Session-based Authentication: Involves storing user session data on the server and using cookies to maintain user state.


//- Authorization
// Authorization is the process of determining if the authenticated user has permission to perform a certain action or access specific resources.
// Purpose: To control what actions or resources the authenticated user is allowed to access.
// -Common Methods:
//- Role-based Access Control (RBAC): Permissions are assigned based on roles (e.g., Admin, User).
// - Attribute-based Access Control (ABAC): Access is granted based on user attributes (e.g., age, department).
// - Policy-based Access Control: Access is managed through policies.

//? what is basic authentication 
// The basic authentication the user passes their credentials on a post request at the node rest api end , credential are verified and send response back 
// The disadvantages of basic authentication of it is basic authentication send credential in plain text over the network so it is not considered a secure method of authentication 

//? what are the security risk associated with strong password in plain text in node js 
//un authorization access : storing password in plain text means that anyone with access to the storage location such as database or configuration file can easily read the extract password 
// comparison of another account : many user then to reuse password multiple accounts allowing attackers to access multiple account 

//? what is role of hashing ans salt in securing password 
// used of hashing and salt for making the confidential information secure
// password (vishal@1234) ==> hashing the password using hashing algorithm (encrypt the password ):
// to make more secure password create salt 
// Generate the salt using bcrypt library (like random string)
// then salt or  password are together combine with the help of dot (.) it make more secure password  then hash the password 

// Hashing :
// Hashing is process of converting a password into a fixed size string of characters using a mathematical algorithm 

// salt :
// a salt is random string of data combined with a password before hashing
// salting ensure security even if the hacker know the hashing algorithm 
 
// salting ensure that even if two users have the same password their hash password will be different due to the unique salt so each user have unique salt 


//? How we can create Hash password in node js 
// To create a hashed password in an Express.js application, you can use the bcrypt library
// also you have to used the crypto library which is built in library of the node js 

// - bcrypt:
const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.post('/register', async (req, res) => {
  try {
    const { password } = req.body;
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, salt);
    // Store the hashed password in the database (mocked here as a response)
    // In a real app, you'd save it to your database
    res.status(200).json({ hashedPassword });
  } catch (error) {
    res.status(500).json({ error: 'Error hashing password' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// When a user tries to log in, you can verify their password by comparing the hashed password stored in the database with the one provided:
app.post('/login', async (req, res) => {
    try {
      const { password, storedHashedPassword } = req.body;
      // Compare the provided password with the stored hashed password
      const match = await bcrypt.compare(password, storedHashedPassword);
      if (match) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(400).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error during authentication' });
    }
  });
  

// - crypto
// crypto is a built-in Node.js module that provides cryptographic functionality, including hashing. While not specifically designed for password hashing, you can use it with a key derivation function like PBKDF2 to hash passwords securely.
const crypto = require('crypto');

const password = 'user_password'; // User's plain-text password
const salt = crypto.randomBytes(16).toString('hex'); // Generate a random salt

// Hash the password using PBKDF2
crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  const hashedPassword = derivedKey.toString('hex');
  console.log('Hashed Password:', hashedPassword);

  // Verify the password
  crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, verifyKey) => {
    if (err) throw err;
    console.log('Password Match:', hashedPassword === verifyKey.toString('hex')); // true if passwords match
  });
});



//? api key authentication :
// api key authentication in an api key authentication , the api owner will share an api key with the users and this key will authenticate the users of that api 


//? what is token based and jwt authentication 
// Token-based authentication is a method where the server verifies a user's credentials and, if valid, generates a token.
//  This token is then sent to the client, which can use it to access protected resources without having to re-send credentials.
//  Here's a breakdown of the process:
// - User Authentication: 
// The client sends login credentials (username and password) to the server.
// - Token Generation: 
// If the credentials are valid, the server generates a token and sends it back to the client.
// - Token Storage: 
// The client stores the token, typically in localStorage, sessionStorage, or cookies.
//  -Token Usage: 
// The client sends the token with each subsequent request, usually in the HTTP header (e.g., Authorization: Bearer <token>).
// -  Server Verification: 
// The server verifies the token's validity and grants access to protected resources if the token is valid.

// JSON Web Token (JWT)
// JWT is a specific type of token used in token-based authentication.
//  It is a compact, URL-safe token format designed for securely transmitting information between parties. 
// - A JWT consists of three parts:
// - Header: (algorithm used to generate) and (Type of the token  and which is jwt here)
// Contains metadata about the token, typically the type of token (JWT) and the signing algorithm (e.g., HMAC SHA256).
// - Payload:  payload contain the claims  (user data)
// Contains the claims or statements about the user or other data. This is the part that holds the user information and any additional data.
// - Signature: the signature is a string that is used to ensure the integrity of the token and verify that it has not been tempered with  
// () A cryptographic signature created by combining the encoded header, payload, and a secret key. This signature ensures the token's integrity and authenticity.

// JWT Workflow in Express.js

// Authentication Endpoint:
// -User sends credentials (username/password).
// Server validates credentials.
// Server generates a JWT and sends it back to the client.
// - Token Storage:
// Client stores the JWT (in localStorage, sessionStorage, or a cookie).

// - Protected Routes:
// Client sends the JWT in the Authorization header for protected requests.
// Middleware on the server verifies the JWT.
// If valid, the request is processed; otherwise, access is denied.

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const SECRET_KEY = 'your_secret_key';

// Login route (authentication)
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validate user credentials (this is just an example)
    if (username === 'user' && password === 'password') {
        // User authenticated, generate a token
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(403); // Forbidden

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403); // Invalid token
        req.user = user;
        next();
    });
};

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
    res.send(`Hello, ${req.user.username}`);
});

app.listen(3000, () => console.log('Server started on port 3000'));


// Key Benefits of JWT
// Stateless: No need to store session information on the server.
// Compact: The token is compact and can be easily sent in HTTP headers or URLs.
// Secure: JWT can be signed to ensure integrity and optionally encrypted for confidentiality.
// Cross-Domain: JWT is suitable for scenarios requiring tokens to be shared across different


// ? what is error handling ? in how many ways you can do error handling in node js
// error handling is the process of managing error that accur during the execution of the program or system 
// - way to implement error handling in node js 
// 1. try - catch (sync)
// 2. error first callback (async)
// 3. promise
// 4. try-catch with async/await


//? what is error-first-callback  
// An error-first callback is a design pattern or convention  commonly used in Node.js for handling asynchronous operations. 
// they are called error-first-callback because the first argument of a callback function is reserved for an error object 
// This pattern standardizes how errors and results are passed to callback functions.
// Error: The first argument is reserved for an error object. 
// If the operation succeeds, this argument is null or undefined. If there is an error, this argument contains the error details.
// Result: The second argument is used for the result of the successful operation. If there is an error, this argument is typically undefined or omitted.

function doSomethingAsync(callback) {
    setTimeout(() => {
      const error = Math.random() > 0.5 ? new Error('Something went wrong') : null;
      const result = error ? null : 'Success!';
      
      // Call the callback with error and result
      callback(error, result);
    }, 1000);
  }
  
  doSomethingAsync((err, result) => {
    if (err) {
      console.error('Error:', err.message);
    } else {
      console.log('Result:', result);
    }
  });
  

// ? how to handled error using promise ?
// by using the catch() method in promise used to error handling  