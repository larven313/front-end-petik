import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import CourseRouter from "./routes/CourseRoute.js";
import TrainerRoute from "./routes/TrainerRoute.js";
import UserRoute from "./routes/UserRoute.js";
import db from "./config/database.js";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(CourseRouter, TrainerRoute, UserRoute);
app.use(express.static("public"));

(async () => {
  await db.sync();
})();

// Middleware untuk menangani endpoint /
app.get("/", (req, res) => {
  res.send("<h1>Welcome to API kursus SukMaX</h1>");
});

// Middleware untuk menangani route lainnya
app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

app.listen(5000, "localhost", () => console.log("Server Running in port 5000"));
