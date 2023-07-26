const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  course: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  image: {
    type: String,
    required: false,
  },
  //   admin: {
  //     type: mongoose.Types.ObjectId,
  //     ref: "Admin",
  //   },
});

// we can create custom function

//Instance method
studentSchema.methods = {
  findActive: function () {
    return mongoose.model("Student").find({ status: "active" });
  },
};

//static method
studentSchema.statics = {
  findNode: function () {
    return this.find({ course: "Node js" });
  },
};

//Query Helpers: kind of static method, which can be used as a method chaining
studentSchema.query = {
  findName: function (name) {
    return this.find({ name: name });
  },
};

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
