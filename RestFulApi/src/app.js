const express = require("express");
const mongoose = require("mongoose");
const router = require('./router/router')

require("./db/connection");

// const port = process.env.PORT || 8000

const app = express();
app.use(express.json());
app.use(router);

app.listen(8000, () => {
  console.log("server running...");
});
