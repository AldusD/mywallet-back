import express from "express";

import * as middlewares from '../middlewares/auth.middleware.js';
import * as controller from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", middlewares.signupMiddleware, controller.signup);
router.post("/login", middlewares.loginMiddleware, controller.login);

export default router;