import { Router } from "express";
import { generateResponse } from "../utils.js";
import { generateInvoice } from "../data/invoice.js";
import { DEFAULT_PAGE_SIZE } from "../constants.js";
import { shortenedInvoices } from "../data/shortenedInvoices.js";
import { generatePageResponse } from "../utils.js";

const router = Router();

router.get("/Shortened", (req, res) => {
  const Page = parseInt(req.query.Page || "1");
  const PerPage = parseInt(req.query.PerPage || DEFAULT_PAGE_SIZE.toString());

  const start = (Page - 1) * PerPage;
  const end = start + parseInt(PerPage);

  const data = shortenedInvoices.slice(start, end);
  const page = generatePageResponse(
    data,
    Page,
    PerPage,
    shortenedInvoices.length
  );

  res.json(page);
});

router.get("/ByField", (req, res) => {
  const { number } = req.query;

  const invoice = generateInvoice({ number });

  const page = generateResponse(invoice);

  res.json(page);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const invoice = generateInvoice({ id });

  const page = generateResponse(invoice);

  res.json(page);
});

router.post("/", (req, res) => {
  const invoice = generateInvoice();

  const page = generateResponse(invoice);

  res.json(page);
});

export default router;
