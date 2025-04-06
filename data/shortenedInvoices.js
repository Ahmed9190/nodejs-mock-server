import { faker } from "@faker-js/faker";

export const shortenedInvoices = Array.from({ length: 39 }, (_, i) => ({
  id: faker.number.int({ min: 1, max: 999999999 }),
  number: `INV-00${(i + 1).toString().padStart(2, "0")}`,
  customerName: faker.company.name(),
  createdAt: faker.date.recent(),
  totalAfterVat: +faker.finance.amount(),
  currencyId: faker.number.int({ min: 1, max: 2 }),
}));
