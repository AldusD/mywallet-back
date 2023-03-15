import express from "express";

import * as middlewares from '../middlewares/auth.middleware.js';
import * as transferMiddlewares from '../middlewares/transfer.middleware.js';
import * as controller from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", middlewares.signupMiddleware, controller.signup);
router.post("/login", middlewares.loginMiddleware, controller.login);
router.post("/logout", transferMiddlewares.verifyTokenMiddleware, controller.logout);

export default router;