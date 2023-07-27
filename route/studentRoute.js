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
  upload.single("avatar"), //N.B. all the time add upload middleware at first
  registerValidation,
  validationCheck,
  createStudent
);
router.post("/update/:id", registerValidation, validationCheck, updateStudent);
router.post("/delete/:id", deleteStudent);

module.exports = router;

//we didn't used put or delete method because put or delete method can't be accessed in <form>
