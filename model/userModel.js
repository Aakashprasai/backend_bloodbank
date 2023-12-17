const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  currentAddress: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: false,
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
