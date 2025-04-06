import { Router } from "express";
import { generatePageResponse, generateResponse } from "../utils.js";
import { DEFAULT_PAGE_SIZE } from "../constants.js";
import { faker } from "@faker-js/faker";
import { generateProductToPrint } from "../data/invoice.js";

const router = Router();

// Function to generate a single sales return

const generateSalesReturn = (id) => ({
  id: faker.number.int({ min: 1, max: 999999999 }),
  number: `RET-${id}`,
  createdAtSalesReturnInvoice: faker.date.recent(),
  invoiceNumber: `INV-${faker.number.int({ min: 1000, max: 9999 })}`,
  createdAtInvoice: faker.date.recent(),
  customerName: faker.person.fullName(),
  totalPrice: +faker.finance.amount(100, 1000, 2),
});

const generateSalesReturnToPrintModel = (id) => ({
  id: faker.number.int({ min: 1, max: 999999999 }),
  number: `RET-${id}`,
  createdAt: faker.date.recent(),
  customerName: faker.person.fullName(),
  vatNumber:
    Math.random() >= 0.5
      ? Array.from({ length: 13 }) // Optional VAT number (13-digit)
          .map(() => faker.number.int({ min: 0, max: 9 }))
          .join("")
      : null,
  address: faker.location.streetAddress(),
  creatorName: faker.person.fullName(),
  products: Array.from({ length: 5 }, generateProductToPrint),
  invoiceSummary: {
    total: +faker.finance.amount(100, 500, 2),
    vat: +faker.finance.amount(10, 50, 2),
    totalAfterVat: +faker.finance.amount(110, 550, 2),
  },
});

// Paginated sales returns
router.get("/Shortened", (req, res) => {
  const { Page = 1, PerPage = DEFAULT_PAGE_SIZE } = req.query;

  const start = (Page - 1) * PerPage;
  const end = start + parseInt(PerPage);

  const data = Array.from({ length: 50 }, (_, i) =>
    generateSalesReturn(i + 1)
  ).slice(start, end);
  const page = generatePageResponse(data, Page, PerPage, 50);

  res.json(page);
});

// Retrieve specific sales return
router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      error: "Sales Return ID is required",
    });
  }

  const salesReturn = generateSalesReturnToPrintModel(id);
  const response = generateResponse(salesReturn);

  res.json(response);
});

// Create a new sales return
router.post("/", (req, res) => {
  const salesReturn = generateSalesReturnToPrintModel(
    faker.number.int({ min: 1000, max: 9999 })
  );
  const response = generateResponse(salesReturn);

  res.json(response);
});

export default router;
