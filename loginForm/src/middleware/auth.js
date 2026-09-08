const jwt = require("jsonwebtoken");
const Register = require("../model/login");

// here we have create middleware so middle ware having the 3 parameter req, res, and next() method
const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt1234;
    const verifyUser = jwt.verify(token, process.env.SECRETE_KEY);
    console.log("verifyUser user", verifyUser);
    const user = await Register.findOne({ _id: verifyUser._id });
    console.log("user",user);
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send(e);
  }
};
module.exports = auth;
