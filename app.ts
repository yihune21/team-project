import start from "./utils/db";
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
// Create an Express application
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
// Start the database connection
start();

import User from "./models/userModel";

// Define a user model based on the user schema
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req: any, res: any) => {
  res.send("This is the sn4y team-project API");
});
app.get("/login", (req: any, res: any) => {
  res.send("This is the login page");
});

app.get("/signup", (req: any, res: any) => {
  //render signup page
  res.send("This is the signup page");
});

app.post("/signup", (req: any, res: any) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
  });
  User.register(newUser, req.body.password, (err: any, user: any) => {
    if (err) {
      console.log(err);
      res.redirect("/signup");
    } else {
      passport.authenticate("local")(req, res, () => {
        res.send("User registered");
        //redirect to the user profile page
      });
    }
  });
});

app.get("/QRScanner", (req: any, res: any) => {
  res.send("This is the QRScanner page");
});

app.get("/contact", (req: any, res: any) => {
  res.send("This is the contact page");
});
app.get("/about", (req: any, res: any) => {
  res.send("This is the about us page");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
