const express = require("express");
const {
  getTrainer,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer,
} = require("../controllers/TrainerController.js");

const router = express.Router();

router.get("/trainer", getTrainer);
router.get("/trainer/:id", getTrainerById);
router.post("/trainer", createTrainer);
router.put("/trainer/:id", updateTrainer);
router.delete("/trainer/:id", deleteTrainer);

module.exports = router;
