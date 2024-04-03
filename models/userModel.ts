const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

//Define a user schema for the MongoDB collection
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    maxLength: 8,
  },
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const User = mongoose.model("User", userSchema);

export default User;
