//! Template engine
// 1.first we need to set the views as default folder where you have to defined the template file are located set in above way app.set('views', 'path of the view folder')
// 2. second we need to set template engine which you have to used  in above way app.set('view engine', 'template engine name')
// 3. you have to used render method to render the html or template engine file so render method having the  2 parameter first on in file name and 2nd one is object to pass the dynamic content

//!  In express js is possible to change the directory name views to any other name like view to template
// yes it is possible in following way
const templatePath = path.join(__dirname, 'template');
app.set('views', templatePath);

//! what is partials in express js

// 1. In Express.js, "partials" refer to reusable view templates (often HTML or embedded JavaScript) that represent smaller parts or sections of a web page.
// 2. They are particularly useful in template engines like EJS (Embedded JavaScript) or Handlebars, where you want to break down a larger page into smaller, manageable, and reusable components.

// Create partials: Let's say you have a common header and footer for your website, which you want to reuse across multiple pages.

// 1. Create a partials folder inside your views directory.
// 2.Add header.hbs and footer.hbs files in the partials folder.
// 3. next we have to register the partial with give template engine in following way
// first you have to import template engine you have to used in your application
const hbs = require('hbs');
const partialsPath = path.join(__dirname, 'partical');
console.log(partialsPath);
console.log(viewPath);

const app = express();
app.set('views', viewPath);

app.set('view engine', 'hbs');

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


//  used Template engine package
// hbs: Handlebar
// pug:
// ejs:
