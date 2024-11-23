// src/routes/auth.ts
import { Router } from "express";
import { user, login } from "../controllers/userController";

const router = Router();

router.post("/register", register);
router.post("/login", login);

export default router;
