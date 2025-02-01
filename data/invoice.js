import { faker } from "@faker-js/faker";

export const generateProductToPrint = () => {
  const unitPrice = +faker.commerce.price(20, 100, 2);
  const unitDiscount = Math.random();
  const minimumQuantityToGetFreePack =
    Math.random() >= 0.5 ? 0 : faker.number.int({ min: 10, max: 15 });
  const freeQuantityPerPack =
    minimumQuantityToGetFreePack > 0 ? faker.number.int({ min: 1, max: 2 }) : 0;

  return {
    number: `PROD-${faker.number.int({ min: 1000, max: 9999 })}`,

    name: faker.commerce.productName(),
    unitPrice,
    unitDiscount,
    quantity: faker.number.int({ min: 1, max: 10 }),
    freeQuantity: faker.number.int({ min: 0, max: 5 }),
    minimumQuantityToGetFreePack,
    freeQuantityPerPack,
  };
};

export const generateInvoice = () => {
  const products = Array.from({ length: 3 }, generateProductToPrint);

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
