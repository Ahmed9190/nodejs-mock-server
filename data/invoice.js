import { faker } from "@faker-js/faker";

export const generateProductToPrint = () => {
  const unitPrice = +faker.commerce.price(20, 100, 2);
  const unitDiscount = +faker.commerce.price({ min: 0, max: 2, precision: 2 });
  const minimumQuantityToGetFreePack =
    Math.random() >= 0.5 ? 0 : faker.number.int({ min: 10, max: 15 });
  const freeQuantityPerPack =
    minimumQuantityToGetFreePack > 0 ? faker.number.int({ min: 1, max: 2 }) : 0;
  const quantity = faker.number.int({ min: 1, max: 1000 });
  const freeQuantity =
    minimumQuantityToGetFreePack > 0
      ? Math.floor(quantity / minimumQuantityToGetFreePack) *
      freeQuantityPerPack
      : 0;

  return {
    id: faker.number.int({ min: 1, max: 999999999 }),
    number: `PROD-${faker.number.int({ min: 1000, max: 9999 })}`,
    name: `صنف ${faker.number.int({
      min: 1,
      max: 999,
    })}`,

    englishName: faker.commerce.productName(),
    unitPrice,
    unitDiscount,
    quantity: quantity,
    freeQuantity: freeQuantity,
    minimumQuantityToGetFreePack,
    freeQuantityPerPack,
  };
};

export const generateInvoice = ({ id, number } = {}) => {
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
    id: id ?? faker.number.int({ min: 1, max: 999999999 }),
    number: number ?? `INV-${faker.number.int({ min: 1000, max: 9999 })}`,
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
    currencyId: faker.number.int({ min: 1, max: 2 }),
    notes: faker.lorem.words({ min: 0, max: 10 }),
    products,
    invoiceSummary: {
      total: +total.toFixed(2),
      vat,
      totalAfterVat,
    },
  };
};
