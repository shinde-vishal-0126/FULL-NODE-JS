const express = require("express");
require("./src/db/connection");


const port = process.env.PORT || 8000;

const app = express();
const router = require('./src/router/router')

// This is middleware used to parses incoming JSON payloads in HTTP requests
app.use(express.json());
app.use(router)

app.listen(port, () => {
  console.log(`Server running on port number ${port}`);
});
