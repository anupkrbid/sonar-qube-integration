const { add, multiply, cube, absolute, round, ceil } = require("../src/important");

test("add function adds two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

test("multiply function multiplies two numbers", () => {
  expect(multiply(3, 2)).toBe(6);
});

test("cube function cubes a number", () => {
  expect(cube(3)).toBe(27);
});

test("absolute function returns the absolute value", () => {
  expect(absolute(-5)).toBe(5);
});

test("round function rounds a number", () => {
  expect(round(4.7)).toBe(5);
});

test("ceil function rounds a number up", () => {
  expect(ceil(4.2)).toBe(5);
});

