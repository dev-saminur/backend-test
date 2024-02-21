const express = require("express");
const registrationController = require("../../Controller/registrationControler");
const secureApi = require("../../middleware/secureApi");
const route = express.Router();

route.get("/registration", secureApi, registrationController);

module.exports = route;
