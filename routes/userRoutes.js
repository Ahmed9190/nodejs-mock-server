import express from "express";
import { generateResponse } from "../utils.js";

const router = express.Router();

// Change language endpoint
router.post("/ChangeLanguage", (req, res) => {
  res.json(generateResponse(null));
});

export default router;
