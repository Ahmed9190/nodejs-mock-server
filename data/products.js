import { faker } from "@faker-js/faker";

const generateProduct = () => {
  const unitPrice = +faker.commerce.price(10, 100, 2);
  const unitDiscount = +faker.commerce.price({
    min: 0,
    max: unitPrice / 2,
    dec: 2,
  }); // Discount ≤ 50% of price
  const availableQuantity = faker.number.int({
    min: 0,
    max: 10,
  });
  const freeQuantityPerPack = faker.number.int({
    min: 0,
    max: 5,
  });
  const minimumQuantityToGetFreePack = faker.number.int({ min: 1, max: 10 });

  return {
    id: faker.number.int({ min: 1, max: 999999999 }),
    number: `PROD-${faker.number.int({ min: 1000, max: 9999 })}`,
    name: faker.commerce.productName(),
    englishName: faker.commerce.productName(),
    unitPrice,
    unitDiscount,
    availableQuantity,
    minimumQuantityToGetFreePack,
    freeQuantityPerPack,
  };
};

export const products = Array.from({ length: 50 }, generateProduct);
