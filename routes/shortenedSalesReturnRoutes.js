import { Router } from "express";
import { shortenedSalesReturns } from "../data/shortenedSalesReturns.js";
import { generatePageResponse } from "../utils.js";

const router = Router();

router.get("/", (req, res) => {
  const { Page, PerPage } = req.query;
  const start = (Page - 1) * PerPage;
  const end = start + parseInt(PerPage);

  const data = shortenedSalesReturns.slice(start, end);
  const page = generatePageResponse(
    data,
    Page,
    PerPage,
    shortenedSalesReturns.length
  );

  res.json(page);
});

export default router;
