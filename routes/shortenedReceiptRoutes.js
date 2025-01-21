import { Router } from "express";
import { shortenedReceipts } from "../data/shortenedReceipts.js";
import { generatePageResponse } from "../utils.js";
import { DEFAULT_PAGE_SIZE } from "../constants.js";

const router = Router();

router.get("/", (req, res) => {
  const { Page = 1, PerPage = DEFAULT_PAGE_SIZE } = req.query;
  const start = (Page - 1) * PerPage;
  const end = start + parseInt(PerPage);

  const data = shortenedReceipts.slice(start, end);
  const page = generatePageResponse(
    data,
    Page,
    PerPage,
    shortenedReceipts.length
  );

  res.json(page);
});

export default router;
