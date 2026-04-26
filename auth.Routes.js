// routes/auth.routes.js
import express from 'express';
import { register, login } from '../controllers/auth.controller.js'; // Added .js extension

const router = express.Router();

// I removed "/api" from here because you should define that in server.js
router.post("/register", register);
router.post("/login", login);

export default router;