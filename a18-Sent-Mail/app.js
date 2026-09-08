const express = require("express");
const sendMail = require('./controller/mail')
const app = express();


app.get("/", (req,res)=>{
    res.send('welcome to Node js server....')
})

app.get("/sendmail", sendMail)

const start = () => {
  try {
    app.listen(8000, () => {
      console.log("server started");
    });
  } catch {
    console.log("Internal server error");
  }
};

start();