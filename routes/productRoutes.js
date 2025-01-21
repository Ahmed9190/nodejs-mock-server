import { Router } from "express";
import { faker } from "@faker-js/faker";
import { generatePageResponse } from "../utils.js";
import { DEFAULT_PAGE_SIZE } from "../constants.js";

const router = Router();

// Function to generate a single product
const generateProduct = () => {
  const unitPrice = +faker.commerce.price(10, 100, 2);
  const unitDiscount = +faker.commerce.price(0, unitPrice / 2, 2); // Discount ≤ 50% of price
  const availableQuantity = faker.number.float({
    min: 10,
    max: 100,
    precision: 0.1,
  });
  const freeQuantityPerPack = faker.number.float({
    min: 0,
    max: 5,
    precision: 0.1,
  });
  const minimumQuantityToGetFreePack = faker.number.int({ min: 1, max: 10 });
  const cost = +(unitPrice * 0.7).toFixed(2); // Cost is 70% of unit price

  return {
    number: `PROD-${faker.number.int({ min: 1000, max: 9999 })}`,
    name: faker.commerce.productName(),
    availableQuantity,
    unitPrice,
    unitDiscount,
    minimumQuantityToGetFreePack,
    freeQuantityPerPack,
    cost,
  };
};

// Endpoint for retrieving paginated products
router.get("/", (req, res) => {
  const { Page = 1, PerPage = DEFAULT_PAGE_SIZE } = req.query;

  const start = (Page - 1) * PerPage;
  const end = start + parseInt(PerPage);

  const data = Array.from({ length: 50 }, generateProduct).slice(start, end); // Total of 50 mock products
  const page = generatePageResponse(data, Page, PerPage, 50);

  res.json(page);
});

export default router;
