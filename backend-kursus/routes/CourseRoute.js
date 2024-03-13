import {
  getCourse,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/CourseController.js";
import express from "express";

const router = express.Router();

router.get("/course", getCourse);
router.get("/course/:id", getCourseById);
router.post("/course", createCourse);
router.put("/course/:id", updateCourse);
router.delete("/course/:id", deleteCourse);

export default router;
