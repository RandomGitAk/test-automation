const {sumElementsArray, possitiveElementsArray, negativeElementsArray} = require('./array_utils');
const {checkPalindrome,isAnagram} = require('./string_operations.tests');

describe('array_utilis tests',() =>{
var arr = [1, -2, 3];
//sum
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
})

describe('string_operations tests',() =>{

test('The value is a palindrome', () => {
  expect(checkPalindrome('kotik kitok')).toBe(true);
});

test('The values are a anagram', () => {
  expect(isAnagram('апельсин', 'спаниель')).toBe(true);
});
})