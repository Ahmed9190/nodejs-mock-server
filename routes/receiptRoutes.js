import { Router } from "express";
import { shortenedReceipts } from "../data/shortenedReceipts.js";
import { generatePageResponse, generateResponse } from "../utils.js";
import { DEFAULT_PAGE_SIZE } from "../constants.js";
import { faker } from "@faker-js/faker";

const router = Router();

// Function to generate a receipt for printing
const generateReceiptToPrint = (id) => {
  return {
    number: `REC-${id}`,
    customerName: faker.person.fullName(),
    createdAt: faker.date.recent(),
    creatorName: "John Doe",
    statement: faker.lorem.sentence(),
    moneyAmount: +faker.finance.amount(50, 1000, 2), // Money amount between 50 and 1000
  };
};

router.get("/Shortened", (req, res) => {
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

// Endpoint for retrieving a specific receipt
router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      error: "Receipt ID is required",
    });
  }

  const receiptToPrint = generateReceiptToPrint(id);
  const response = generateResponse(receiptToPrint);

  res.json(response);
});

router.post("/", (req, res) => {
  const receiptToPrint = generateReceiptToPrint(
    faker.number.int({ min: 1000, max: 9999 })
  );
  const response = generateResponse(receiptToPrint);

  res.json(response);
});

export default router;
