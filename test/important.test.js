const { add, multiply, cube } = require("../src/important");

test("add function adds two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

test("multiply function multiplies two numbers", () => {
  expect(multiply(3, 2)).toBe(6);
});

test("cube function cubes a number", () => {
  expect(cube(3)).toBe(27);
});

