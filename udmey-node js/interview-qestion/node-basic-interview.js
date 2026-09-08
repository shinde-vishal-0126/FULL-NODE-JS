//? 1. why array element are modified ?
//! the contents of the array (its elements) are still mutable. This is because arrays (and objects) are stored as references in memory, and const only locks the reference, not the data itself.
const array = [1,2,3,4];
console.log(array)
// here we do not reassign the array 
// array = [3,4,5]
console.log(array) // const prevents reassignment of the array variable,

//! 2. if you want merge multiple argument into an array you used ()...args) rest operator it in the argument list of function


//? 3. There are two type of callback first one is synchronous and 2nd one is asynchronous :
//! 1 synchronous callback :
// ex. In synchronous function you have to not used the setTimeout()
function sayHi(name, callback){
    console.log('Hi,i am ' + name)
    callback()
    console.log('done!')
}

function returnName(){
    console.log(' execution done !')
}
sayHi('vishal', returnName)

//! 2 asynchronous callback :
// ex. In asynchronous callback you have to used setTimeout
function sayHi(name, callback){
    console.log('Hi,i am ' + name)
    setTimeout(() => {
        callback()
    }, 2000);
    console.log('done!')
}

function returnName(){
    console.log(' execution done !')
}
sayHi('vishal', returnName)


//? 10 what is difference between setHeader() and writeHead() :
// setHeader: Useful for adding or overriding headers incrementally before sending the response.
// writeHead: Ideal for setting the status code and multiple headers at once.

//? 11 what is write() method ?
// res.write method  used to send a chunk of the response body to the client.
//  It can be called multiple times to stream data to the client before ending the response with res.end.

//? 12 How to parsing request bodies ?
// basically incoming is basically sent as stream of data 
// To parsing the request body you have to used the middleware like parsBody.urlEncoded({extended:true})

//? 13 what is stream ?
// basically stream is onGoing process
// the request read by in chunks so that we theoretically can start working on this, on the individual chunks without having to wait for the full request being read.
// instead of coming chunk we have to used Buffer  (so buffer construct which you to hold multiple chunks and work with them before they are released)

//? what is nodemon package and how it install 
// npm install --save-dev : used on  for development environment
// nodemon autoStart the server if you have make change in your code it automatically restart 

//? type of error
// syntax error : you have missing any syntax
// runtime error : if the code syntactically right but it throw the error at runtime.
// logical error : logical error is not display the error but it not behave like you want 


//? how to parse the incoming request in express js 
// used third party package like body-parser and add as middleware in express js.

//? it is possible to used all http request with middleware ?
// yes it is possible to used get, post, patch, put method with middleware.


//? how to handled the routing using express router 
// express js give pretty simpler way to outsource routing 
// express.Router() function used to get router in express js

//? how to  creating the html pages in express js:
// create views directory and inside that you have to defined all html file 












.



// | mvc (architecture)
// model-view-controller
// The Model-View-Controller (MVC) architecture is a design pattern used to separate concerns within an application. 
// This separation makes it easier to manage, maintain, and scale an application. 
//! In an Express.js application, MVC is applied to 
// !separate the business logic (Model), 
//! user interface (View), 
//! and control flow (Controller) of your application. 
// Here’s how MVC applies to Express.js:


//| Model: (responsible for representing you data (working with data ex. fetch, save))
// The Model represents the data or business logic of the application.
//  It is responsible for managing data, database interactions, and performing business logic.
//! In Express, the Model could be:
// A database schema (e.g., using MongoDB with Mongoose, or SQL with Sequelize/Knex).
// Functions that interact with the database, validate data, or perform operations like creating, reading, updating, and deleting records (CRUD operations).
// example 
// Example of a simple Mongoose Model
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

//| View: (responsible for what the user see at the end )
// The View is responsible for rendering the user interface, i.e., the presentation layer. It takes data from the Controller and displays it to the user.
// In Express.js, views are usually rendered using template engines like EJS, Pug, or Handlebars.
// The View can also include client-side code, such as HTML and CSS, or can be part of a React or Vue.js front-end if it's a full-stack application.
// example
// <!-- views/userProfile.ejs -->
// <h1>Welcome <%= user.name %></h1>
// <p>Email: <%= user.email %></p>

//| Controller: (connection point between the model and view (controller are middle man that contain the in - between logic ))
// !controller defining with which model to work and which view to render
// controller are split across middleware function 
// The Controller acts as an intermediary between the Model and the View.
//  It handles user input, manipulates the Model, and passes the data to the View for rendering.
// The Controller contains the logic for handling requests, such as retrieving data from the Model, performing necessary calculations, and deciding which View to render.
// In Express.js, controllers handle routing, often using the express.Router to define request handlers (GET, POST, PUT, DELETE, etc.).

// example 
// controllers/userController.js
const User = require('../models/User');

// Controller function to render user profile
const getUserProfile = (req, res) => {
  const userId = req.params.id;
  User.findById(userId)
    .then((user) => {
      res.render('userProfile', { user });
    })
    .catch((err) => {
      res.status(500).send('Error fetching user data');
    });
};

module.exports = { getUserProfile };


//! Summary:
// Model: Represents the data layer and handles business logic, database interactions.
// View: Represents the user interface and how data is displayed to the user.
// Controller: Handles the user input, communicates with the model, and updates the view.

//! In Express.js, you generally:
// Use models to interact with the database.
// Use controllers to handle routes and business logic.
// Use views to render data and send it to the client.

//! in short

// what is mvc 
// mvc is design pattern it is used the separation of concern so using separation we have to easily manage, maintain and scale your application 

// model  :
// model responsible for the data and business logic
// like managing the data , interaction with database, validate the data also perform operation like creating, updating deleting the data by performing give business logic


// views :
// view basically used to what should user see
// view basically used to render the html (it should be contain the client side code ) or ui
// it take data form the controller and sent to the user

//controller :
// controller are connection between the model and view
// controller are responsible for handle the user request, manipulate the model and process this data using give business logic and decide the which view are render 
// it is act as middle man (ir intermediatory) between the view and controller 
// controller basically used to handling the request  for retrieve data form the model performing necessary Given action and decide with view are render.





//? passing route param 
//? using query param 



//|
// database :

// no-sql  :
// in no-sql instead of table we have collections 
// in collection we don/t find record  but so called record 
// no-sql does't have strong schema.
// in no-sql database we have to stored the multiple document with different structure.
//data are typically merged / nested into few collections.
// horizontal scaling is easier.
// Great performance for mass read and write requests.


// ! characteristics of the no-sql database :
// no data schema (no structure required ) (schema-less)
// no data relation (you can related document but you don't have(no/few-connection))
// To scale your database we have to used scaling technique like vertical scaling and Horizontals scaling

// sql :
// structured query language 
// it having table structure table having so called field is called as column it having  record 
// we have such relation in sql database
// data use Schemas 
// data are distributed in multiple tables.
// Horizontal scaling are is ofter is impossible or difficult
// (vertical scaling simply possible )
// limitation for lots of (thousands) record ans write queries per second.

// ! characteristics of the sql database
// strong database schema (each table how the data should look like and which type of does each filed shore)(i.e all data in a table has to fit)
// in sql have relation in data (i.e table are connected to each other) (relation like one to one, one to many and many to many)






// what is query ?
// simply is command interact with database


//? what is difference between horizontal and vertical scaling
// The main purposes of horizontal and vertical scaling in databases are to improve performance, capacity, and availability to handle increasing data and user demand.

//! Horizontal Scaling (Sharding):  add more servers (and merge data into one Database)
//  Horizontal scaling involves adding more machines or nodes to your database system to distribute the load.
//This method is often referred to as "sharding." 
// Each shard holds a portion of the total data, and collectively they form the entire database.
//! Advantages:
// Increased capacity: By adding more nodes, you can handle more requests and store more data.
// Fault tolerance: Failure of one node does not affect the others.
// Scalability: Easier to scale out by adding more nodes.

//Challenges:
// Complexity: Managing distributed systems and ensuring consistency across shards can be complex.
// Data distribution: Determining how to distribute data across nodes efficiently

//! Vertical Scaling (Scaling Up): (improve server capability and hardware)
//  Vertical scaling involves increasing the resources (CPU, RAM, disk space) of a single server or database instance.

//! Advantages:
// Simplicity: Easier to implement and manage since everything remains on a single machine.
// Consistency: No need to manage data consistency across multiple nodes.
// Challenges:
// Limits: There's a physical limit to how much you can scale up a single machine.
// Downtime: Scaling up may require downtime as hardware is upgraded.
// Cost: High-end hardware can be expensive


//! Choosing Between Horizontal and Vertical Scaling
// Horizontal Scaling is typically preferred for applications with a large amount of data and high read/write traffic, like social media platforms, e-commerce websites, and SaaS applications.

// Vertical Scaling may be suitable for smaller applications, databases with simpler schemas, or when immediate scaling is needed without complex architectural changes.


// Key Differences:
//! Horizontal Scaling focuses on distributing the load across multiple servers to manage growth in data and traffic.
//! Vertical Scaling focuses on enhancing a single server's capabilities to improve performance and handle larger workloads.


// if you want to connect your application with mysql database you have to used mysql2 npm package 
// npm install mysql2
// create db.js find -> used to setup code to allow us to connect to sql database return us the connection object with promise allow us to run the sql queries.
// there are 2 way to connect with sql like single connection or pool connection (two different methods for managing database connections.)
// 1. createConnection(); 
// - create single connection to mysql database:
// - ideal scenario where you need simple or persistent connection 
// - performance Lower due to frequent reconnects

// 2. createPool({user:'',password:'', host:'',database:''})
// - create pool of connection to the mysql database;
// - Suitable for handling multiple simultaneous connections
// - The pool manages a set of connections, reusing them to improve performance and resource utilization.
// - Ideal for applications with high concurrency or multiple users.

// de.execute('write query to here to execute and get the data form the database.')



//! sequelize:
// 3rd party object relational mapping library 
// allow us to work with javascript object convenient method and also connect them to the database 
// sequelize offers a model to work with database. (basically define which data make an model and therefor which data will be saved in the database.)
// also instances this model 
// also queries the data on that.
// also associate our model 
// note : if you want to install sequelize the package you need to install the mysql2 package.

//* step of sequelize

//! connecting to the mysql database.
// const Sequelize = require("sequelize");
// here give database name, userName, password 
// const sequelize = new Sequelize("node-compleat", "root", "root", {
//   dialect: "mysql",
//   host: "localhost",
// });

// module.exports = sequelize;

//! create model with sequelize

// const Sequelize = require('sequelize');
// const sequelize = require('../util/database');

// here product is Table name we want to create in the database for give fileds.
// const Product = sequelize.define('product', {
    //defined attributes and field defined in database

//     id: {
//         type:Sequelize.INTEGER,
//         autoIncrement : true,
//         allowNull: false,
//         primaryKey:true
    
//     },
//     title :{
//        type: Sequelize.STRING
//     },
//     price :{
//         type: Sequelize.DOUBLE,
//         allowNull:false
//     },
//     imageUrl :{
//         type: Sequelize.STRING,
//         allowNull:false
//     },
//     description:{
//         type:Sequelize.STRING,
//         allowNull:false
//     }
// })

// module.exports = Product;

//! sync() this model with database using sequelize.sync() method 
// sequelize.sync().then((result)=>{
//   console.log(result)
//   app.listen(3000);
// }).catch((error)=>{
//   console.log(error)
// })