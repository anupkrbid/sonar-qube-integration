const { greet, farewell } = require("../src/other");

test("greet function works", () => {
  expect(greet("John")).toBe("Hello, John!");
});

test("farewell function works", () => {
  expect(farewell("John")).toBe("Goodbye, John!");
});
