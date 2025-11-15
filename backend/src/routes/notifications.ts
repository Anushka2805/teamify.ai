import express from "express";
import { authMiddleware } from "../middleware/auth";
import {
  listNotifications,
  createNotification,
} from "../controllers/notificationController";

const router = express.Router();

router.get("/:teamId", authMiddleware, listNotifications);
router.post("/", authMiddleware, createNotification);

export default router;
