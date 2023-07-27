const handle404Error = (req, res, next) => {
  res.render("error", {
    error: "Ops! You choose a wrong address",
  });
};

const handleError = (err, req, res, next) => {
  if (err.message) {
    res.render("error", {
      error: err.message,
    });
  } else {
    res.render("error", {
      error: "Server Side Error",
    });
  }
};

module.exports = { handle404Error, handleError };
