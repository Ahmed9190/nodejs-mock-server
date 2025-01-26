import { Router } from "express";
import { faker } from "@faker-js/faker";
import { generatePageResponse } from "../utils.js";
import { DEFAULT_PAGE_SIZE } from "../constants.js";

const router = Router();

const generateWarehouseItems = () => {

  return {
    productId: faker.number.int({ min: 1000, max: 9999 }),
    totalCash: +faker.finance.amount(100, 1000, 2),
    totalBanking: +faker.finance.amount(100, 1000, 2),
    totalCredit: +faker.finance.amount(100, 1000, 2),
    productName: faker.commerce.productName(),
    productQuantity: faker.number.int({ min: 1, max: 10 }),
  };

};

router.get("/", (req, res) => {
  const { Page = 1, PerPage = DEFAULT_PAGE_SIZE } = req.query;

  const data = Array.from({ length: 50 }, generateWarehouseItems);

  const start = (Page - 1) * PerPage;
  const end = start + parseInt(PerPage);

  const slicedData = data.slice(start, end);

  const page = generatePageResponse(slicedData, Page, PerPage, 50);

  res.json(page);
});


export default router;
