import { Router } from "express";
import { faker } from "@faker-js/faker";
import { generateResponse } from "../utils.js";

const router = Router();

// Function to generate a sales return for printing
const generateSalesReturnToPrint = (id) => {
  const products = Array.from(
    { length: faker.number.int({ min: 1, max: 5 }) },
    () => {
      const unitPrice = +faker.commerce.price(1, 10, 2);
      const unitDiscount = Math.random();
      return {
        number: `PROD-${faker.number.int({ min: 1000, max: 9999 })}`,
        name: faker.commerce.productName(),
        unitPrice,
        unitDiscount,
        quantity: faker.number.int({ min: 1, max: 10 }),
        freeQuantity: faker.number.int({ min: 0, max: 5 }),
      };
    }
  );

  const total = products.reduce(
    (sum, product) =>
      sum + product.quantity * (product.unitPrice - product.unitDiscount),
    0
  );
  const vat = +(total * 0.15).toFixed(2); // VAT is 15%
  const totalAfterVat = +(total + vat).toFixed(2);

  return {
    number: `RET-${id}`,
    createdAt: faker.date.recent(),
    customerName: faker.person.fullName(),
    vatNumber:
      Math.random() >= 0.5
        ? Array.from({ length: 13 })
            .map(() => faker.number.int({ min: 0, max: 9 }))
            .join("")
        : null,
    address: faker.location.streetAddress(),
    creatorName: "John Doe",
    products,
    invoiceSummary: {
      total: +total.toFixed(2),
      vat,
      totalAfterVat,
    },
  };
};

// Endpoint for retrieving a specific sales return
router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      success: false,
      error: "Sales Return ID is required",
    });
  }

  const salesReturnToPrint = generateSalesReturnToPrint(id);
  const response = generateResponse(salesReturnToPrint);

  res.json(response);
});

export default router;
