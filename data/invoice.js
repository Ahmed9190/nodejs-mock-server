import { faker } from "@faker-js/faker";

export const generateInvoice = () => {
  const products = Array.from({ length: 3 }, () => {
    const unitPrice = +faker.commerce.price(20, 100, 2);
    const unitDiscount = +faker.commerce.price(0, unitPrice / 2, 2); // Discount ≤ 50% of price
    return {
      number: `PROD-${faker.number.int({ min: 1000, max: 9999 })}`,
      name: faker.commerce.productName(),
      unitPrice,
      unitDiscount,
      quantity: faker.number.int({ min: 1, max: 100 }),
      freeQuantity: faker.number.int({ min: 0, max: 5 }),
    };
  });

  // Calculate total price of products
  const total = products.reduce(
    (sum, product) =>
      sum + product.quantity * (product.unitPrice - product.unitDiscount),
    0
  );

  const vat = +(total * 0.15).toFixed(2); // VAT is 15% of total
  const totalAfterVat = +(total + vat).toFixed(2);

  return {
    number: `INV-${faker.number.int({ min: 1000, max: 9999 })}`,
    createdAt: faker.date.recent(),
    payType: faker.number.int({ min: 0, max: 3 }),
    customerName: faker.person.fullName(),
    vatNumber:
      Math.random() >= 0.5
        ? Array.from({ length: 13 })
            .map(() => faker.number.int({ min: 0, max: 9 }))
            .join("")
        : null,
    address: Math.random() >= 0.5 ? faker.location.streetAddress() : null,
    creatorName: "John Doe",
    currencyId:
      Math.random() >= 0.5 ? faker.number.int({ min: 1, max: 2 }) : null,
    products,
    invoiceSummary: {
      total: +total.toFixed(2),
      vat,
      totalAfterVat,
    },
  };
};
