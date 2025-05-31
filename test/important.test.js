const { add, multiply, subtract } = require("../src/important");

test("add function adds two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

test("add function subtracts number b from a", () => {
  expect(subtract(3, 2)).toBe(1);
});

test("multiply function multiplies two numbers", () => {
  expect(multiply(3, 2)).toBe(6);
});
