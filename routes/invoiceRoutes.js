import { Router } from "express";
import { generateResponse } from "../utils.js";
import { generateInvoice } from "../data/invoice.js";

const router = Router();

router.get("/:id", (req, res) => {
  const { id } = req.query;

  const invoice = generateInvoice(id);

  const page = generateResponse(invoice);

  res.json(page);
});

export default router;
