import { Router } from "express";
import { generatePageResponse, generateResponse } from "../utils.js";
import { DEFAULT_PAGE_SIZE } from "../constants.js";
import { products } from "../data/products.js";
const router = Router();

// Endpoint for retrieving paginated products
router.get("/", (req, res) => {
  const { Page = 1, PerPage = DEFAULT_PAGE_SIZE } = req.query;

  const start = (Page - 1) * PerPage;
  const end = start + parseInt(PerPage);

  const slicedData = products.slice(start, end);

  const page = generatePageResponse(slicedData, Page, PerPage, 50);

  res.json(page);
});

// Endpoint for retrieving all products
router.get("/All", (req, res) => {
  console.log(req.query);

  res.json(generateResponse(products));
});

export default router;
