import { Router } from "express";
import authRoutes from "./auth";
import userRoutes from "./user";
import { protect } from "../middleware/auth";

const router = Router();

// Authentication routes
router.use("/auth", authRoutes);

// User routes
router.use("/user", userRoutes);

export default router;
