var express = require("express");
const {
  getAllStudent,
  createStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/studentController");
const upload = require("../middlewares/imgaeUpload");
const router = express.Router();
const registerValidation = require("../middlewares/validationError");
const validationCheck = require("../middlewares/validationResult");

router.get("/", getAllStudent);
router.get("/:id", getSingleStudent);
router.post(
  "/",
  registerValidation,
  validationCheck,
  upload.single("avatar"),
  createStudent
);
router.post("/update/:id", updateStudent);
router.post("/delete/:id", deleteStudent);

module.exports = router;
