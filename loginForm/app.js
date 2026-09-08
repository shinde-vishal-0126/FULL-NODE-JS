require("dotenv").config();
const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("./src/db/connection");
const cookieParser = require('cookie-parser');
const auth = require('./src/middleware/auth')

const Register = require("./src/model/login");
const bcrypt = require("bcryptjs");

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
// if you get the data from the form then you need to used middleware like
app.use(express.urlencoded({ extended: true }));


// get the cookies so cookies parser used as middleware
app.use(cookieParser())

// const staticPath = path.join(__dirname, "src/public");
// console.log(staticPath);
// //To add static file you have to used the middleware like express.static()
// // static file are by default render on the home route like('/')
// app.use(express.static(staticPath));
console.log(process.env.SECRETE_KEY);

// here we have to used template engine
const viewsPath = path.join(__dirname, "src/templates/views");
console.log(viewsPath);
app.set("views", viewsPath);

//set the template engine
app.set("view engine", "hbs");

const partialsPath = path.join(__dirname, "src/templates/partials");
console.log(partialsPath);
// Register the partials navBar:
hbs.registerPartials(partialsPath);

app.get("/login", (req, res) => {
  //   res.send("welcome to login form");
  // if you have to used template engine instead of send() method you have to used the render() method
  res.render("index");
});

app.get('/', (req,res)=>{
  res.render("index")
})

app.get("/about", auth, (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  //   res.send("welcome to login form");
  // if you have to used template engine instead of send() method you have to used the render() method
  res.render("register");
});

app.get('/logout', auth, async(req,res)=>{
  try{
    console.log(req.user);

    //logout for single devices
    // req.user.tokens = req.user.tokens.filter((currElement)=>{
    //   return currElement.token !== req.token
    // })

    // logout all login devices
    req.user.tokens = [];
    
    res.clearCookie("jwt1234");
    await req.user.save();
    res.render("index")
    console.log("logout successfully")
  }catch(error){
    res.status(500).send(error)
  }
})

app.post("/register", async (req, res) => {
  const bodyRequest = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  };
  if (bodyRequest.password === bodyRequest.confirmPassword) {
    const data = new Register(bodyRequest);
    console.log("the success part" + data);
    const token = await data.generateAuthToken();
    console.log("the token part ", token);
    res.cookie("jwt1234", token, {
      // expires: new Date(Date.now() + 30000),
      // httpOnly: true,
    });
    const response = await data.save();
    // res.status(200).send('data add successfully.')
    res.render("index");
    console.log("password match");
  } else {
    res.status(404).send("password are not match");
  }
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const data = await Register.findOne({ email: email });
    console.log(data);
    // this compare method return the promise and it return true and false
    const isMatch = await bcrypt.compare(password, data.password);
    const token = await data.generateAuthToken();
    console.log("the token part of the login ", token);
    res.cookie("jwt1234", token, {
      // expires: new Date(Date.now() + 50000),
      // httpOnly: true,
      // secure: true
    });
    // console.log(`the cookies value are ${req.cookies.jwt1234}`);
    console.log(isMatch);
    // if(data.password === password){
    if (isMatch) {
      res.status(201).render("welcome");
    } else {
      res.status(404).send("password are not match");
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () => {
  console.log(`server running or ${port}`);
});
