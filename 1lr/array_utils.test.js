const {sumElementsArray, possitiveElementsArray, negativeElementsArray} = require('./array_utils');

let arr;
beforeAll(() => {
 arr = [1, -2, 3];
});

test('sum of the elements of the array is equal 15', () => {
  expect(sumElementsArray(arr)).toBe(2);
});
//possitiveNums
test('adds array elements wich > 0', () => {
  expect(possitiveElementsArray(arr)).toStrictEqual([1,3]);
  
});
//negativeENums
test('adds array elements wich < 0', () => {
  expect(negativeElementsArray(arr)).toStrictEqual([-2]);
});

