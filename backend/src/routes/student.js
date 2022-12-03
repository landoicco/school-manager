const express = require("express");
const Student = require("../controllers/student");
let router = express.Router();

// Save a new student object
router.post("/save", Student.save);

// Get all student object
router.get("/students", Student.getStudents);

// Delete a student object
router.delete("/delete/:id", Student.delete);

module.exports = router;
