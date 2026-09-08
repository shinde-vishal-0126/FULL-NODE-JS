// create schema for student


const mongoose = require("mongoose");
const validator = require("validator");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Please enter a valid email.",
      },
    },
    rollNo: {
      type: Number,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      minlength: 10,
      maxlength: 10,
    },
  },
  {
    timestamps: true
  }
);

const Student = new mongoose.model("Student", StudentSchema);

module.exports = Student;
