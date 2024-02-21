const express = require("express");
const route = express.Router();
const apiRoute = require("./api");

route.use(process.env.API_VERSION, apiRoute);
module.exports = route;
