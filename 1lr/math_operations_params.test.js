const {sum, difference, multiply, division} = require('./math_operations');

//sum
test.each([
  {a: 2, b: 2, expected: 4},
  {a: -2, b: 2, expected: 0},
  {a: 3, b: -2, expected: 1},
])('.sum($a, $b)', ({a, b, expected}) => {
  expect(a + b).toBe(expected);
});

//difference
test.each([
  {a: 6, b: 3, expected: 3},
  {a: -4, b: 2, expected: -6},
  {a: 3, b: -2, expected: 5},
])('.difference($a, $b)', ({a, b, expected}) => {
  expect(a - b).toBe(expected);
});

//multiply
test.each([
  {a: 2, b: 3, expected: 6},
  {a: -4, b: 0.5, expected: -2},
  {a: 5, b: -6, expected: -30},
])('.multiply($a, $b)', ({a, b, expected}) => {
  expect(a * b).toBe(expected);
});

//division
test.each([
  {a: 6, b: 3, expected: 2},
  {a: 4, b: 8, expected: 0.5},
  {a: 10, b: 0.5, expected: 20},
])('.difference($a, $b)', ({a, b, expected}) => {
  expect(a / b).toBe(expected);
});