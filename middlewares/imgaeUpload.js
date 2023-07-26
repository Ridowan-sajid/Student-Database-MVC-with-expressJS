const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/upload/");
  },
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname); //will extrace file extension
    const fileName =
      file.originalname
        .replace(fileExtension, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();
    cb(null, fileName + fileExtension);
  },
});

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000, //in byte
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only jpg, png, or jpeg is allowed"), false);
    }
  },
});

module.exports = upload;
