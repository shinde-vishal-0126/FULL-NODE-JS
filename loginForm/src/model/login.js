const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  tokens:[{
    token:{
      type:String,
      required:true
    }
  }]
});
console.log("key", process.env.SECRETE_KEY)
// Generating web token 
loginSchema.methods.generateAuthToken = async function() {
  try {
    console.log("this._id", this._id);
    const token = jwt.sign({ _id: this._id.toString() }, process.env.SECRETE_KEY);
    this.tokens = this.tokens.concat({ token: token });
    // Save the token to the database
    await this.save();
    console.log("token123", token);
    return token;
  } catch (e) {
    console.error('Error generating auth token:', e);
    throw new Error('Token generation failed');
    res.send(e)
  }
};

// here before the save we have to called middleware with pre method to encrypted the password
loginSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
    console.log("this.confirmPassword",this.confirmPassword)
    // this.confirmPassword = undefined
  }
  next();
});

const Register = new mongoose.model("Register", loginSchema);
module.exports = Register;
