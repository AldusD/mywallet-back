import express from "express";

import * as middlewares from '../middlewares/auth.middleware.js';
import * as authController from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", middlewares.signupMiddleware, authController.signup);
router.post("/login", middlewares.loginMiddleware, authController.login);

export default router;