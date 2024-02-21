const secureApi = (req, res, next) => {
  console.log("Secure  Api", req.headers);
  if (req.headers.authorization === "saminur") {
    next();
  } else {
    res.send({ error: "Invalid" });
  }
};

module.exports = secureApi;
