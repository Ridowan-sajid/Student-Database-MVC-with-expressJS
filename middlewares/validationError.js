const { check } = require("express-validator");

const registerValidation = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("Name can't be empty")
    .matches(/[A-Za-z ]+$/)
    .withMessage("Name must have letters or underscore")
    .isLength({ min: 7 })
    .withMessage("Name must have at least 7 characters"),

  check("course").trim().notEmpty().withMessage("Course can't be empty"),
  check("date")
    .trim()
    .notEmpty()
    .withMessage("date can't be empty")
    .isISO8601()
    .isDate()
    .withMessage("Not a valid a date"),
  check("status")
    .isIn(["active", "inactive"])
    .withMessage("Status should active or inactive"),
];

module.exports = registerValidation;
