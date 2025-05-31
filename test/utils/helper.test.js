const { square, cube } = require("../../src/utils/helper");

test("square of 2 is 4", () => {
  expect(square(2)).toBe(4);
});

test("cube of 3 is 27", () => {
  expect(cube(3)).toBe(27);
});
