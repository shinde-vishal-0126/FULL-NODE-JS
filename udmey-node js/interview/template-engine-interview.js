
// ? what is template engine ?
// template engine used to putting the dynamic content on your html page you would used something called template engine
// template engine are libraries that enable developers to generate dynamic html content by combining static html template with data

 
//? what are the type of the template engine ?
// ejs (same as html but placeholder are denoted by  p<% = name %>); emended javascript
// puj (are different to the html and it having placeholder as p #{name})
// handlebars (built integrate with the express ja it same as html but add {{ as placeholder}}) i.e handlebars inbuilt integration with express js.


// ?what is steps to integrate template engine in your app
// in app.js file you need to set the global configuration value of the  template engine like 
// app.set('view engine', 'give template engine name') 
// then you have to give additional configuration like  here find the our views
// add.set('views', 'views')


//? Key Differences:
// Handlebars: Focuses on simplicity and logic-less templates (no JavaScript in templates). It is great for separation of concerns.
// Pug: Uses indentation to replace HTML tags, resulting in a cleaner syntax. It’s useful for minimalistic design and rapid development.
// EJS: Allows you to embed JavaScript directly within HTML, offering more flexibility. It’s ideal for scenarios where you need to include more complex logic in the views


//? how to implement the template engine in expess js 

// first step to install package of the template engine like npm i ejs 
// next create directory inside the root directory with view name and inside that you have to defined you template engine file or like html file 
// next step to in app.js file (in main file you have to defined the following operation )
// 1. using the app.set set the template engine in you application 
// app.set('view engine', 'ejs')
// 2. then we have the set the view directory in the app.js file (where we have to defined the template engine file )
// app.set('view', 'Give the path of your view directory')
// 3 to render the the this template file in your browser you have to used the render method (with template file name and 2nd parameter pass as object with more information which we can access into the template file dynamically )

// EJS Template Engine
// EJS (Embedded JavaScript) is another templating engine that is very similar to Handlebars and Pug but uses plain JavaScript embedded in HTML.
//! Setup EJS in Express
// To use EJS, install it first:
// const express = require('express');
// const app = express();
//! Set EJS as the view engine
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
//! EJS Template Syntax
// Variables: Use <%= variable %> to insert variables.
// Conditional statements: Use <% if (condition) { %> ... <% } else { %> ... <% } %> for conditionals.
// Loops: Use <% for (let item of array) { %> ... <% } %> to loop over arrays.
// Partials: Use <%- include('partials/filename') %> to include reusable components.
//! Example of EJS Template:
// <!DOCTYPE html>
// <html>
// <head>
//   <title><%= title %></title>
//   <%- include('partials/styles') %>
// </head>
// <body>
//   <%- body %>
// </body>
// </html>

//! rendering the element 
// <% include('partials/header') %> //| are partials file here 

// <h1><%= heading %></h1>

// <% if (users.length > 0) { %>
//   <ul>
//     <% users.forEach(function(user) { %>
//       <li><%= user.name %></li>
//     <% }); %>
//   </ul>
// <% } else { %>
//   <p>No users found.</p>
// <% } %>


//? also defined handlebars pug template engine 
// - Handlebars Template Engine
// Handlebars is a powerful templating engine that provides a way to generate dynamic HTML on the server side. It is commonly used in Express applications to create reusable layouts, partials, and templates.

//! Setup Handlebars in Express
// To use Handlebars with Express, you first need to install express-handlebars, which is a Handlebars adapter for Express
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Set up Handlebars engine
app.engine(
  'handlebars',
  exphbs({
    layoutsDir: path.join(__dirname, 'views/layouts'), // Directory for layouts
    defaultLayout: 'main', // Default layout file
    extname: 'handlebars', // File extension for templates
  })
);

// Set Handlebars as the view engine
app.set('view engine', 'handlebars');
app.set('views', 'views')
//! Handlebars Template Syntax
// Variables: To insert dynamic content, use {{variable}}.
// Conditional statements: Use {{#if condition}} ... {{else}} ... {{/if}} to conditionally render blocks.
// Loops: Use {{#each array}} ... {{/each}} to iterate over arrays.
// Placeholders: Use {{{body}}} to insert the body content from layouts into your templates.
//! views/layouts/main.handlebars:

// <!DOCTYPE html>
// <html>
// <head>
//   <title>{{title}}</title>
//   {{#if css}} <link rel="stylesheet" href="style.css"> {{/if}}
// </head>
// <body>
//   {{{body}}}
// </body>
// </html>

//! iterate 

// {{! This is your page content }}
// <h1>{{heading}}</h1>
// {{#if users.length}}
//   <ul>
//     {{#each users}}
//       <li>{{this.name}}</li>
//     {{/each}}
//   </ul>
// {{else}}
//   <p>No users found.</p>
// {{/if}}




// - 2. Pug Template Engine
// Pug (formerly known as Jade) is another popular templating engine for Express that uses a clean and minimalistic syntax. Instead of HTML-like tags, Pug uses indentation-based syntax.

// Setup Pug in Express
// To use Pug with Express, you first need to install it:

// const express = require('express');
// const app = express();

// Set Pug as the view engine
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

//! Pug Template Syntax
// Variables: Use #{variable} to insert variables.
// Conditional statements: Use if and else for conditional logic.
// Loops: Use each to loop through arrays.
//! Example of Pug Layout and Template:
// doctype html
// html
//   head
//     title= title
//     block styles
//   body
//     block content

// rendering the template
//! extends layouts/main.pug  // take layout template using extends keyword 
// block content
//   h1= heading
//   if users.length > 0
//     ul
//       each user in users
//         li= user.name
//   else
//     p No users found.

