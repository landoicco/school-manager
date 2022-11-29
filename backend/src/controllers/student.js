const Student = require("../models/student");

// Create a object to use all route methods
const controller = {
  // Save a new student object
  save: (req, res) => {
    let params = req.body;
    console.log(params);

    let student = new Student();

    // Assign values to this new object
    student.name = params.name;
    student.age = params.age;

    // We save the student object
    student.save((err, studentStored) => {
      if (err || !studentStored) {
        return res.status(404).send({
          status: "error",
          message: "Error at saving student data!",
        });
      }

      // Send response
      return res.status(200).send({
        status: "success",
        studentStored,
      });
    });
  },
  // Query students objects
  getStudents: (req, res) => {
    const query = Student.find({});
    query.sort("-date").exec((err, students) => {
      if (err) {
        return res.status(500).send({
          status: "error",
          message: "Error at querying data!",
        });
      }

      // If no student objects exists
      if (!students) {
        return res.status(404).send({
          status: "error",
          message: "No data!",
        });
      }

      // If everything goes well
      return res.status(200).send({
        status: "success",
        message: "Success at querying data!",
        students,
      });
    });
  },

  // Delete student objects
  delete: (req, res) => {
    // Get id from url
    let studentId = req.params.id;
    Student.findOneAndDelete({ _id: studentId }, (err, studentRemoved) => {
      if (err) {
        return res.status(500).send({
          status: "error",
          message: "Error at deleting!",
        });
      }

      if (!studentRemoved) {
        return res.status(404).send({
          status: "error",
          message: "No student id found!",
        });
      }

      return res.status(200).send({
        status: "success",
        message: "Success at deleting student data!",
        student: studentRemoved,
      });
    });
  },
};

module.export = controller;
