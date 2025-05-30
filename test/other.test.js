const { greet } = require('../src/other');

test('greet function works', () => {
  expect(greet('John')).toBe('Hello, John!');
});
