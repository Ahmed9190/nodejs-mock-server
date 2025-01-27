import { faker } from "@faker-js/faker";

const generateProduct = () => {
  const unitPrice = +faker.commerce.price(10, 100, 2);
  const unitDiscount = +faker.commerce.price(0, unitPrice / 2, 2); // Discount ≤ 50% of price
  const availableQuantity = faker.number.int({
    min: 10,
    max: 100,

  });
  const freeQuantityPerPack = faker.number.int({
    min: 0,
    max: 5,

  });
  const minimumQuantityToGetFreePack = faker.number.int({ min: 1, max: 10 });
  const cost = +(unitPrice * 0.7).toFixed(2); // Cost is 70% of unit price

  return {
    number: `PROD-${faker.number.int({ min: 1000, max: 9999 })}`,
    name: faker.commerce.productName(),
    unitPrice,
    unitDiscount,
    availableQuantity,
    minimumQuantityToGetFreePack,
    freeQuantityPerPack,
    cost,
  };
};


export const products = Array.from({ length: 50 }, generateProduct);