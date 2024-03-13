import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import CourseRouter from "./routes/CourseRoute.js";
import TrainerRoute from "./routes/TrainerRoute.js";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(CourseRouter, TrainerRoute);
app.use(express.static("public"));

app.listen(process.env.port, "localhost", () =>
  console.log("Server Running in port 5000")
);
