import { faker } from "@faker-js/faker";

export const shortenedSalesReturns = Array.from({ length: 39 }, (_, i) => ({
  number: `RET-00${(i + 1).toString().padStart(2, "0")}`,
  createdAtSalesReturnInvoice: faker.date.recent(),
  invoiceNumber: `INV-00${(i + 1).toString().padStart(2, "0")}`,
  createdAtInvoice: faker.date.recent(),
  customer: faker.person.fullName(),
  totalPrice: +faker.finance.amount(),
}));
