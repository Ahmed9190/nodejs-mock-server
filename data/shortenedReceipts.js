import { faker } from "@faker-js/faker";

export const shortenedReceipts = Array.from({ length: 39 }, (_, i) => ({
  number: `REC-00${(i + 1).toString().padStart(2, "0")}`,
  customerName: faker.person.fullName(),
  createdAt: faker.date.recent(),
  moneyAmount: +faker.finance.amount(),
}));
