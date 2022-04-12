//Чи містить масив вказаний об’єкт
function findElementInArray(arr,element){return arr.includes(element)};
//Чи містить текстовий фрагмент вказане слово
function findWordInString(str,element){return str.includes(element)};
//Чи містить об’єкт який повертає функція вказане поле
function containsSpecifiedField(obj,element){return obj.hasOwnProperty(element)};
//Функцію яка приймає масив та зворотній виклик який виконується над елементами масиву.
//Напишіть тест який перевіряє кількість запусків зворотного виклику.
function acceptArrayAndCallback(arr,back){
	return back(arr.reduce((acc, num) => acc + num, 0));
};
//Функція яка приймає текстовий рядок із фразою та зворотній виклик. Функція перетворює
//фразу на масив слів передає її у зворотній виклик. Протестуйте з якими аргументами викликається зворотній виклик.
function stringConvertToArray(str,back){
	return back(str.split());
};
//Створіть об’єкт який містить поле імені та поле прізвища, додайте в об’єкт метод introduce
//який виводить у консоль фразу «Hello, I’m firstname lastname». З використання jest.spyOn
//преревірте кількість викликів методу.
const user = {
  name: "John",
  surname: "Smith",
   introduce() {
  return('Hello, I`m '+ user.name + user.surname);
}
};

module.exports = {findElementInArray,findWordInString,containsSpecifiedField,acceptArrayAndCallback,stringConvertToArray,user};



