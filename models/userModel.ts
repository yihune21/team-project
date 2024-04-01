const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//Define a user schema for the MongoDB collection
const userSchema = new mongoose.Schema({
  name: {
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

  token: {
    type: String,
  },
});

// Hash the password before saving it to the database

// Define a user model based on the user schema
const User = mongoose.model("User", userSchema);

export default User;
