import express from 'express';

import * as middleware from '../middlewares/transfer.middleware.js';
import * as controller from '../controllers/transfer.controller.js';

const router = express.Router();

router.get("/transfer/:id", middleware.verifyTokenMiddleware, controller.getTransfers);
router.post("/transfer/:id", middleware.verifyTokenMiddleware, middleware.addTransferMiddleware, controller.addTransfer);
router.put("/transfer/:id", middleware.addTransferMiddleware, middleware.verifyTokenMiddleware, controller.putTransfer);
router.delete("/transfer/:id", middleware.verifyTokenMiddleware, controller.deleteTransfer);

export default router;