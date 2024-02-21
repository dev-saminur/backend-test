require("dotenv").config();
const express = require("express");
const router = require("./Routes");
const app = express();

app.use("/", router);

const port = process.env.PORT || 8000;

app.listen(port);
