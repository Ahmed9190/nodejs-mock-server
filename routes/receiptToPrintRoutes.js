import { Router } from "express";
import { faker } from "@faker-js/faker";
import { generateResponse } from "../utils.js";

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

export default router;
