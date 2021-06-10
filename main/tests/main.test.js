var add = require('../add.js');
test('Returns add correctly', () => {
  expect(add(4, 5)).toBe(9);
});