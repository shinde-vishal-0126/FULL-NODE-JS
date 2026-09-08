//! Q# what is node js

//- node js not library not framework it is runtime environment where we have to run the javascript
//- node js single threaded (but instead of that node js handled multiple request)
//- node js are non blocking 
//- node js is a runtime environment for javascript and built on chrome v8 javascript engine
//-  node js javascript running or the server.
// (v8 engine in built for google chrome ==> it is just in compiler not interpreter)
// v8 engine used to convert js code into the machine understandable code

//! # Node js.


//? - in node js if you send response you have to used following method like
// 1. res.end() :
// - used to signal the end of the response in an HTTP server (If you don’t need to send any additional data and just want to signal the end of the response,)
// ends the response and closes the connection.

// 2. res.write() :
// - send parts of the response, ( used to send chunks of the response body to the client while the connection is still open.)

// 3. res.writeHead(200,{ contentType: 'text/plain'}) :
// - Sends a response header to the request.
// - The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers. Optionally one can give a       human-readable statusMessage as the second argument.


//? in node request object to used following method like :
// 1. request.url :
// - return current url.

// 2. request.method :
// - return current method .

// 3. request.header:
// - return header of the current request


// Q# What is api ?
// ANS: api is services where we have request to data
// api stands for application programming interface which communicate with each other



//! Express js
// 1. if you have used express js you no need to used http module
// also you don't need to used http.createServer() method
// here you have to used directly app.get("/", (req, res)=>{})
// res.status().send() : used to send status code:
// info about express js method
// instead of write or end method in express js having send() method to send response or response body


//! to create package.json file used npm init -y (-y flag used get by default value and create the package.json)

//! API http method :
// Get:
// Post:
// put:
// patch :
// delete:



// node js run top to bottom
// ex if you have defined the same route that situation first route is render then send single to end of the response.

//! Template engine
// 1.first we need to set the views as default folder where you have to defined the template file are located set in above way app.set('views', 'path of the view folder')
// 2. second we need to set template engine which you have to used  in above way app.set('view engine', 'template engine name')
// 3. you have to used render method to render the html or template engine file so render method having the  2 parameter first on in file name and 2nd one is object to pass the dynamic content

//!  In express js is possible to change the directory name views to any other name like view to template
// yes it is possible in following way
const templatePath = path.join(__dirname, "template");
app.set("views", templatePath);


//! what is partials in express js

// 1. In Express.js, "partials" refer to reusable view templates (often HTML or embedded JavaScript) that represent smaller parts or sections of a web page.
// 2. They are particularly useful in template engines like EJS (Embedded JavaScript) or Handlebars, where you want to break down a larger page into smaller, manageable, and reusable components.

// Create partials: Let's say you have a common header and footer for your website, which you want to reuse across multiple pages.

// 1. Create a partials folder inside your views directory.
// 2.Add header.hbs and footer.hbs files in the partials folder.
// 3. next we have to register the partial with give template engine in following way
// first you have to import template engine you have to used in your application
const hbs = require("hbs");
const partialsPath = path.join(__dirname, "partical");
console.log(partialsPath);
console.log(viewPath);

const app = express();
app.set("views", viewPath);

app.set("view engine", "hbs");

hbs.registerPartials(partialsPath);

// 4 then in template file you have to defined the partial template file using following syntax
{
  /* <body>
    {{>header}}
    <h1>Finally dynamic content are here .... {{name}}</h1>
</body> */
}

//? Benefits of Partials
// Reusability: You can create once and reuse in multiple places.
// Maintainability: Changes to common sections (like a header or footer) are made in one file and apply everywhere.
// Consistency: Ensures consistent layouts across all pages.


//! middleware :
//? middleware are function that handled the req and response object and based on function we have to perform some perticular task
// middleware defined in following way

// const function_name = async (req,res, next) =>{
    // your code
//      nextTick()
// }


 //! List of third party or npm packages
// 1. chalk : Terminal styling
// 2. validator : used for string validation and sanitizers
// 3. nodemon : used to application by automatically restarting the node application when file changes in the directory are detected.
// 4. nodemailer : this package used to send mail through node js  // https://nodemailer.com/
// 5. (to used feck SMTP (simple mail transfer protocol) server you have to use ethereal)  // https://ethereal.email/create
//6  used Template engine package
// hbs: Handlebar
// pug:
// ejs:


// ! to make password secured
// Bcrypt async algorithm used for the password encryptions and decryption

//?  2 way to perform password secured
//* 1. hashing algorithm 
//  - it is one way communication
//   plain text --> hash function to encrypt --> hashed Text

//* 2. encryption :
// - it is two way communication
// if you encrypted any plain text so you can easily decreased 
// plain text --> encryptions text ---> decrypted text (last return as plain text)


//? // authentication 
// node js jwt authentication used for authorization and authentication
// 1 jsonwebToken (is standard used to create access tokens for an application)
//   - it works this way the server Generates a token that certifies the user identity and send to the client
// jwt widely used for single sign-on api authentication and mobile app authentication
// also you have to expiry in jwt token

//? Dot env package
// The dotenv package is used in Node.js applications to load environment variables from a .env file into process.env.
//  This helps keep sensitive information, like API keys, database credentials, and configuration settings, outside the source code, making your application more secure and easier to configure across different environments (e.g., development, staging, production).


//? cookie-parser :
// Parse cookie header and populated req.cookies with an object keyword by the cookie names.
// used this as middleware


// -  consider module to be same as javascript libraries 
//? - A set of function you want to include in your application.(to perform perticular task on your application)
// -  core module is set of built in module which you can used without any further installation.
// 1. fs : work with i/o file
// 2. os : working with os data or information (os related utility method and properties)
// 3. path : work with path of directory, file
// 4. http : used to  create web-server, handled the http request also handled or sending http response  and handled the http method,
// 5. url : used to deal with url:

// Events module in node js:
// 1. 'Events' :


// npm module
// chalk
// validator