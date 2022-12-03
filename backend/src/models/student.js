const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("Student", StudentSchema);
