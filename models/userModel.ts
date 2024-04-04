const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

//Define a user schema for the MongoDB collection
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

//Add passport-local-mongoose to the user schema
userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const User = mongoose.model("User", userSchema);

export default User;
