const express = require("express");
const {
  getCourse,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/CourseController.js");

const router = express.Router();

router.get("/course", getCourse);
router.get("/course/:id", getCourseById);
router.post("/course", createCourse);
router.put("/course/:id", updateCourse);
router.delete("/course/:id", deleteCourse);

module.exports = router;
