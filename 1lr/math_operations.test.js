const {sum, difference, multiply, division} = require('./math_operations');

//sum
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + -3 to equal -2', () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});

//difference
test('difference 5 - 4 to equal 1', () => {
  expect(difference(5, 4)).toBe(1);
});

test('difference -5 - 4 to equal -9', () => {
  expect(difference(-5, 4)).toBe(-9);
});

//multiply
test('multiply 2 * 4 to equal 8', () => {
  expect(multiply(2, 4)).toBe(8);
});

test('multiply 2 * 0.5 to equal 1', () => {
  expect(multiply(2, 0.5)).toBe(1);
});

//division
test('division 6 / 2 to equal 3', () => {
  expect(division(6, 2)).toBe(3);
});

test('division 6 / 0.5 to equal 12', () => {
  expect(division(6, 0.5)).toBe(12);
});