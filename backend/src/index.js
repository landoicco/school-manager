const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/student");
const app = express();
const port = 3900;

const url = "mongodb://localhost:27017/school_manager";

// Load body-parser for this router. This analyzer accepts only UTF-8 codification
app.use(bodyParser.urlencoded({ extended: false }));

// Convert all requests to JSON
app.use(bodyParser.json());

// Activate CORS to allow AJAX and HTTP requests from front
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Load routes
app.use("/api", studentRoutes);

// We connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true }).then(() => {
  console.log("Success connecting to database!");

  app.listen(process.env.PORT || port, () => {
    console.log("Server running at http://localhost:" + port);
  });
});
