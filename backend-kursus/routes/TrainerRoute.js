import {
  getTrainer,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer,
} from "../controllers/TrainerController.js";
import express from "express";

const router = express.Router();

router.get("/trainer", getTrainer);
router.get("/trainer/:id", getTrainerById);
router.post("/trainer", createTrainer);
router.put("/trainer/:id", updateTrainer);
router.delete("/trainer/:id", deleteTrainer);

export default router;
