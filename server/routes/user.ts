// src/routes/userRoutes.ts
import { Router } from "express";
import { getAllUsers, getUserById, getMe } from "../controllers/userController";
import { protect } from "../middleware/auth";

const router = Router();

// Create separate routers for different path patterns
const baseRouter = Router();
const userRouter = Router();

// Routes that don't use ID parameter
baseRouter.get("/me", protect, getMe);
baseRouter.get("/", protect, getAllUsers);

// Routes that use ID parameter
userRouter.get("/:id", protect, getUserById);

// Combine the routers
router.use("/me", protect, getMe);
router.use("/:id", protect, getUserById);
router.use("/", protect, getAllUsers);

export default router;
