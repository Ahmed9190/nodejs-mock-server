import { faker } from "@faker-js/faker";

export const generateInvoice = () => {
  return {
    number: `INV-${faker.number.int(1000, 9999)}`,
    createdAt: faker.date.recent(),
    payType: faker.number.int(0, 3),
    customerName: faker.person.fullName(),
    vatNumber: faker.number.int(),
    address: faker.address.streetAddress(),
    creatorName: "John Doe",
    currencyId: faker.number.int(1, 2),
    products: Array.from({ length: 3 }, (_, i) => ({
      number: `INV-${faker.number.int(1000, 9999)}`,
      name: faker.commerce.productName(),
      unitPrice: +faker.commerce.price(20),
      unitDiscount: +faker.commerce.price(0, 5),
      quantity: faker.number.int(10, 100),
      freeQuantity: faker.number.int(0, 5),
    })),
    invoiceSummary: {
      total: +faker.commerce.price(),
      vat: +faker.commerce.price(0, 100),
      totalAfterVat: +faker.commerce.price(100, 1000),
    },
  };
};
