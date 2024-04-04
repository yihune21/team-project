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
    secret: "secret", //This is a secret key used to sign the session ID cookie
    resave: false, //This option forces the session to be saved back to the session store
    saveUninitialized: false, //This option forces a session that is "uninitialized"(new) to be saved to the store
  })
);

// initialize the passport
app.use(passport.initialize());
app.use(passport.session());

// Start the database connection
start();

// Import the user model
import User from "./models/userModel";
/*
The passport will maintain persistent login sessions. 
In order for persistent sessions to work in the passport, 
the authenticated user must be serialized to the session
and deserialized when subsequent requests are made.
*/
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
