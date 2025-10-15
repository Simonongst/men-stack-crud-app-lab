require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes"); //server.js is the default file

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//error handling
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error", err));

app.use("/", router); // redirect the api calls to the router index.js

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
