const {findElementInArray,findWordInString,containsSpecifiedField,acceptArrayAndCallback,stringConvertToArray,user} = require('./task9');

//1
describe('findElementInArray',() =>{
const array1 = [1, 2, 3];
test('array contains an element', () => {
  expect(findElementInArray(array1,2)).toBeTruthy();
});

const array2 = ['cat', 'dog', 'bat'];
test('array dont contains an element', () => {
  expect(findElementInArray(array2,'lion')).toBeFalsy();
});
})

//2
describe('findWordInString',() =>{
test('string contains the word', () => {
  expect(findElementInArray('Hello world','world')).toBeTruthy();
});

test('string dont contains the word', () => {
  expect(findElementInArray('Hello world','word')).toBeFalsy();
});
})

//3
describe('containsSpecifiedField',() =>{
o = new Object();
o.prop = 'create';

test('contains', () => {
  expect(containsSpecifiedField(o,'prop')).toBeTruthy();
});

test('dont contains', () => {
  expect(containsSpecifiedField(o,'word')).toBeFalsy();
});
})

//4
describe('acceptArrayAndCallback',() =>{
	let arr;
beforeAll(() => {
 arr = [1, -2, 3];
});

test('number of callback starts', (done) => {
	function callback(data){
		try{
			expect(data).toBe(2)
			done();
		}
		catch(err){
			done(err)
		}
	}
  acceptArrayAndCallback(arr,callback);
});
})

//5
describe('acceptArrayAndCallback',() =>{
	let str;
beforeAll(() => {
 str = "Hello world";
});

test('stringConvertToArray', (done) => {
	function callback(data){
		try{
			expect(data).toStrictEqual(['Hello world'])
			done();
		}
		catch(err){
			done(err)
		}
	}
  stringConvertToArray(str,callback);
});

})

//6
describe('introduce',() =>{
test('output phrase', () => {
const spy = jest.spyOn(user,'introduce'); 
 user.introduce();
 expect(spy).toBeCalled();
});

})