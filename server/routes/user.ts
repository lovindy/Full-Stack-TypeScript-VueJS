import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/userController";
import { protect } from "../middleware/auth";

const router = Router();

// Route to get all users
router.get("/", protect, getAllUsers);

// Route to get a user by ID
router.get("/:id", getUserById);

export default router;
