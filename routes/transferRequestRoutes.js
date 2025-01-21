import { Router } from "express";
import { faker } from "@faker-js/faker";
import { generateResponse } from "../utils.js";

const router = Router();

// Function to generate a single transfer request
const generateTransferRequest = (id) => {
  const statuses = ["pending", "accepted", "rejected"];
  const items = Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    () => {
      const unitPrice = +faker.commerce.price(5, 100, 2);
      const quantity = faker.number.int({ min: 1, max: 50 });
      return {
        id: faker.number.int({ min: 1000, max: 9999 }).toString(),
        code: `PROD-${faker.number.int({ min: 1000, max: 9999 })}`,
        name: faker.commerce.productName(),
        unitPrice,
        quantity,
        total: +(unitPrice * quantity).toFixed(2),
      };
    }
  );

  const totalPrice = items.reduce((sum, item) => sum + item.total, 0);

  return {
    id: `TR-${id}`,
    createdAt: faker.date.recent(),
    isFromMainWarehouse: faker.datatype.boolean(),
    items,
    status: statuses[faker.number.int({ min: 0, max: statuses.length - 1 })],
    totalPrice: +totalPrice.toFixed(2),
  };
};

// Endpoint for retrieving a specific transfer request by ID
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

export default router;
