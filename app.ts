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

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
