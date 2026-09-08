// what is partials in express js

// 1. In Express.js, "partials" refer to reusable view templates (often HTML or embedded JavaScript) that represent smaller parts or sections of a web page.
// 2. They are particularly useful in template engines like EJS (Embedded JavaScript) or Handlebars, where you want to break down a larger page into smaller, manageable, and reusable components.

// Create partials: Let's say you have a common header and footer for your website, which you want to reuse across multiple pages.

// Create a partials folder inside your views directory.
// Add header.hbs and footer.hbs files in the partials folder.

// Benefits of Partials
// Reusability: You can create once and reuse in multiple places.
// Maintainability: Changes to common sections (like a header or footer) are made in one file and apply everywhere.
// Consistency: Ensures consistent layouts across all pages.

const express = require("express");
const path = require("path");
const hbs = require("hbs");

const viewPath = path.join(__dirname, "views");
const partialsPath = path.join(__dirname, "partial");
console.log(partialsPath);
console.log(viewPath);

const app = express();
app.set("views", viewPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index", {
    name: "vishal shinde",
  });
});

app.get("/about", (req, res) => {
  const data = req.query.data;
  res.render("index", {
    name: "vishal shinde",
    data: data,
  });
});

// 404 dynamic page
app.get("*", (req, res) => {
  res.render("404", {
    message: "page not found",
  });
});

app.listen(8000, () => {
  console.log("server started...");
});
