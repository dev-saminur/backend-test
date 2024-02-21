const secureApi = (req, res, next) => {
  console.log("Secure  Api", req.headers);
  if (req.headers.authorization == "saminur123") {
    next();
  } else {
    res.send({ error: "invalid error and error" });
  }
};

module.exports = secureApi;
