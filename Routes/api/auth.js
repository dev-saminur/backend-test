const express = require("express");
const registrationController = require("../../Controller/registrationControler");
const route = express.Router();

route.get("/registration", registrationController);

module.exports = route;
