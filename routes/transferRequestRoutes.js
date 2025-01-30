import { Router } from "express";
import { generatePageResponse, generateResponse } from "../utils.js";
import { DEFAULT_PAGE_SIZE } from "../constants.js";

import { faker } from "@faker-js/faker";
import { products } from "../data/products.js";

const router = Router();

const generateTransferRequestShortened = (id) => ({
  number: `TR-${id}`,
  createdAt: faker.date.recent(),
  isFromMainWarehouse: faker.datatype.boolean(),
  totalPrice: +faker.finance.amount(100, 1000, 2),
  status: ["pending", "accepted", "rejected"][
    faker.number.int({ min: 0, max: 2 })
  ],
});
const generateTransferRequest = (id) => ({
  id: `TR-${id}`,
  createdAt: faker.date.recent(),
  isFromMainWarehouse: faker.datatype.boolean(),
  items: products.splice(faker.number.int({ min: 0, max: 5 }), faker.number.int({ min: 1, max: 10 })).map((product) => ({
    item: product,
    quantity: faker.number.int({ min: 1, max: 10 }),
  })),
  status: ["pending", "accepted", "rejected"][
    faker.number.int({ min: 0, max: 2 })
  ],
  totalPrice: +faker.finance.amount(100, 1000, 2),
});

// Paginated transfer requests
router.get("/Shortened", (req, res) => {
  const { Page = 1, PerPage = DEFAULT_PAGE_SIZE } = req.query;

  const start = (Page - 1) * PerPage;
  const end = start + parseInt(PerPage);

  const data = Array.from({ length: 50 }, (_, i) =>
    generateTransferRequestShortened(i + 1)
  ).slice(start, end);
  const page = generatePageResponse(data, Page, PerPage, 50);

  res.json(page);
});

// Retrieve specific transfer request
router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      error: "Transfer Request ID is required",
    });
  }

  const transferRequest = generateTransferRequest(id);
  const response = generateResponse(transferRequest);

  res.json(response);
});

// Create a new transfer request
router.post("/", (req, res) => {
  console.dir(req.body, { depth: null });

  const transferRequest = generateTransferRequest(
    faker.number.int({ min: 1000, max: 9999 })
  );
  const response = generateResponse(transferRequest);
  console.log(response)
  res.json(response);
});

export default router;
