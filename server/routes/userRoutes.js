import { registerUser, userLogin } from "../controllers/userControllers.js";
import express from "express";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", userLogin);

export default router;
