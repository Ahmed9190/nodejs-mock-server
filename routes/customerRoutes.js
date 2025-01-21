import { Router } from "express";
import { faker } from "@faker-js/faker";
import { generateResponse } from "../utils.js";

const router = Router();

// Function to generate a single customer
const generateCustomer = (id) => ({
  id,
  accountNumber: faker.number.int({ min: 100000, max: 999999 }), // 6-digit account number
  name: faker.person.fullName(),
  vatNumber:
    Math.random() >= 0.5
      ? Array.from({ length: 13 }) // Optional VAT number (13-digit)
          .map(() => faker.number.int({ min: 0, max: 9 }))
          .join("")
      : null,
});

// Endpoint for retrieving paginated customers
router.get("/", (req, res) => {
  const data = Array.from({ length: 50 }, (_, i) => generateCustomer(i + 1));

  const page = generateResponse(data);

  res.json(page);
});

// Endpoint for retrieving a specific customer by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      error: "Customer ID is required",
    });
  }

  const customer = generateCustomer(parseInt(id));
  const response = generateResponse(customer);

  res.json(response);
});

// Endpoint for creating a new customer
router.post("/", (req, res) => {
  const customer = generateCustomer(faker.number.int({ min: 1, max: 1000 }));
  const response = generateResponse(customer);

  res.json(response);
});

export default router;
