const { validationResult } = require("express-validator");

const validationCheck = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let errorsList = errors.array().map((err) => err.msg);
    // const errorsList = errors.mapped();
    return res.status(400).json({ errors: errorsList });
    // res.render("allStudent", { errors: errorsList });
  }
  next();
};

module.exports = validationCheck;
