const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const CourseRouter = require("./routes/CourseRoute.js");
const TrainerRoute = require("./routes/TrainerRoute.js");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(CourseRouter);
app.use(TrainerRoute);
app.use(express.static("public"));

// Middleware untuk menangani endpoint /
app.get("/", (req, res) => {
  res.send("<h1>Welcome to API kursus SukMaX</h1>");
});

// Middleware untuk menangani route lainnya
app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

app.listen(process.env.PORT || 5000, "localhost", () => {
  console.log("Server Running in port 5000");
});
