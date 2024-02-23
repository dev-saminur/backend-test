require("dotenv").config();
const express = require("express");
const router = require("./Routes");
const mongodbConfig = require("./config/mongodbConfig");
const app = express();

mongodbConfig();
app.use("/", router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Port 8000 Connected");
});
