const { square } = require('../../src/utils/helper');

test('square of 2 is 4', () => {
  expect(square(2)).toBe(4);
});
