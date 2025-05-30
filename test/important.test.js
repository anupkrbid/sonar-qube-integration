const { add } = require('../src/important');

test('add function adds two numbers', () => {
  expect(add(1, 2)).toBe(3);
});
