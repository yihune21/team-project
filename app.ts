import start from "./utils/db";
const express = require("express");
const bodyParser = require("body-parser");

// Create an Express application
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Start the database connection
start();

app.get("/", (req: any, res: any) => {
  res.send("This is the sn4y team-project API");
});

app.get("/QRScanner", (req: any, res: any) => {
  res.send("This is the QRScanner page");
});

app.get("/contactus", (req: any, res: any) => {
  res.send("This is the contact page");
});

app.get("/aboutus", (req: any, res: any) => {
  res.send("This is the about us page");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
