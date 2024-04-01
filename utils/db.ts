import mongoose from "mongoose";

// Example usage
async function start() {
  await // Connect to MongoDB
  mongoose
    .connect("mongodb://localhost:27017/team-project-db")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
}

export default start;
