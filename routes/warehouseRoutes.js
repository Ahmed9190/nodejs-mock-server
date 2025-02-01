import { Router } from "express";
import { faker } from "@faker-js/faker";
import { generateResponse } from "../utils.js";


const router = Router();

const generatePaymentSummary = () => {

  return {
    totalCash: +faker.finance.amount(100, 1000, 2),
    totalBanking: +faker.finance.amount(100, 1000, 2),
    totalCredit: +faker.finance.amount(100, 1000, 2),
  };

};

router.get("/PaymentSummary", (req, res) => {
  const paymentSummary = generateResponse(generatePaymentSummary());
  res.json(paymentSummary);
});


export default router;
