const mongoose = require("mongoose");
const Student = require("../model/Student");

const getAllStudent = async (req, res) => {
  try {
    const data = await Student.find({});
    // res.status(200).json({ data: data });

    res.render("allStudent", { data: data });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req, res) => {
  try {
    const data = await Student.findById(req.params.id);
    // res.status(200).json({ data: data });
    res.render("updateStudent", { data: data });
    // res.redirect("/student");
  } catch (err) {
    console.log(err);
  }
};

const createStudent = async (req, res) => {
  try {
    let newStudent;
    console.log(req.file);
    if (!req.file) {
      newStudent = new Student({
        name: req.body.name,
        course: req.body.course,
        status: req.body.status,
        date: req.body.date,
        //image: req.file.filename,
      });
    } else {
      newStudent = new Student({
        name: req.body.name,
        course: req.body.course,
        status: req.body.status,
        date: req.body.date,
        image: req.file.filename,
      });
    }

    await newStudent.save();
    // res.status(200).json({ data: data });
    res.redirect("/student");
  } catch (err) {
    console.log(err);
  }
};

const updateStudent = async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    // res.status(200).json({ data: data });
    res.redirect("/student");
  } catch (err) {
    console.log(err);
  }
};

const deleteStudent = async (req, res) => {
  try {
    await Student.deleteOne({ _id: req.params.id });
    // res.status(200).json({ data: data });
    res.redirect("/student");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllStudent,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};