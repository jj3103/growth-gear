import express from "express";
import {
  processQuery,
  explainQuery,
  validateQuery,
} from "../controllers/queryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/query", authMiddleware, processQuery);
router.post("/explain", authMiddleware, explainQuery);
router.post("/validate", authMiddleware, validateQuery);

export default router;
