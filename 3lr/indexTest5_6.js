const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require("assert");
(async function helloSelenium() {
    let driver = await new Builder().forBrowser('firefox').build();

   await driver.get('https://uk.wikipedia.org/wiki');

await driver.findElement(By.id("searchInput")).sendKeys("Київ", Key.RETURN);

 await driver.get('https://uk.wikipedia.org/wiki/Київ');  

//присутність гербу
	if(driver.findElement(By.className('image')) != 0){
console.log('emblem found');
}else {
	console.log('emblem not found');
}

//Кількість населення
let population = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[5]/div[1]/table[7]/tbody/tr[35]/td[1]"))
.then(span => span.getText())
.then(text => console.log("Кількість населення " + text));

//середня температура
let averageTemperature = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[5]/div[1]/table[2]/tbody/tr[5]"))
.then(span => span.getText())
.then(text => console.log("\t Показник  \t Січ.Лют.Бер.Квіт.Трав.Черв.Лип.Серп.Вер.Жовт.Лист.Груд.Рік \n " + text));

//°C в квітні,
let aprilMaxTemperature = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[5]/div[1]/table[2]/tbody/tr[3]/th[5]"))
.then(span => span.getText())
.then(text => console.log("\t °C в квітні \nАбсолютний максимум " + text + " °C"));

let aprilLowTemperature = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[5]/div[1]/table[2]/tbody/tr[7]/th[5]"))
.then(span => span.getText())
.then(text => console.log("Абсолютний мінімум " + text + " °C"));

//наявність підрозділу Епідемія коронавірусу
let pandemia = driver.findElement(By.className("toclevel-2 tocsection-18"));
if(pandemia != 0){
	console.log('Pandemia part found');
}else {
	console.log('Pandemia part not found');
}
pandemia.then(span => span.getText())
.then(text => console.log(text));

//густота населення
let populationDensity = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[5]/div[1]/table[1]/tbody/tr[18]/td"))
.then(span => span.getText())
.then(text => console.log("Густота населення " + text));

//кількість пам'яток
let countOfMonuments = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[5]/div[1]/ul[11]"))
.then(span => span.getText())
.then(text => console.log("\t Пам'ятки \n" + text + "\n count > 20"));

//.then(span => span.getText())
//.then(text => console.log("Густота населення " + text));

})();

