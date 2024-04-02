const mongoose = require("mongoose");
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
});

// Define a user model based on the user schema
const User = mongoose.model("User", userSchema);

export default User;
