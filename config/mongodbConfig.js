const mongoose = require("mongoose");

let mongodbConfig = () => {
  mongoose
    .connect(
      "mongodb+srv://saminur9125:sarishaBARI1234saminur@cluster0.bcqlsvo.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("MongoDB Database Connected!"));
};

module.exports = mongodbConfig;
