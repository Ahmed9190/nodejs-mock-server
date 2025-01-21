import { Router } from "express";
import { faker } from "@faker-js/faker";
import { generatePageResponse } from "../utils.js";
import { DEFAULT_PAGE_SIZE } from "../constants.js";

const router = Router();

const generateTransferRequestShortened = () => {
  const statuses = ["pending", "accepted", "rejected"];
  return {
    number: `TR-${faker.number.int({ min: 1000, max: 9999 })}`,
    createdAt: faker.date.recent(),
    isFromMainWarehouse: faker.datatype.boolean(),
    totalPrice: +faker.finance.amount(100, 5000, 2),
    status: statuses[faker.number.int({ min: 0, max: statuses.length - 1 })],
  };
};

// Endpoint to fetch a paginated list of transfer requests
router.get("/", (req, res) => {
  const { Page = 1, PerPage = DEFAULT_PAGE_SIZE } = req.query;

  const start = (Page - 1) * PerPage;
  const end = start + parseInt(PerPage);

  const count = 50;
  const data = Array.from(
    { length: count },
    generateTransferRequestShortened
  ).slice(start, end);

  const page = generatePageResponse(data, Page, PerPage, count);

  res.json(page);
});

export default router;
