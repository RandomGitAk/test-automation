
const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require("assert");


(async function helloSelenium() {
    let driver = await new Builder().forBrowser('firefox').build();

await driver.get('https://www.google.com');
     let title = await driver.getTitle(); 
  assert.strictEqual(title, "Google");   // => "Google"
console.log("Title: " + title);

	//присутність логотипу
	if(driver.findElement(By.className('lnXdpd')) != 0){
console.log('logotip found');
}else {
	console.log('logotip not found');
}
//присутність рядку пошуку
    if(driver.findElement(By.name('q')) != 0){
console.log('search bar found');
}else {
	console.log('search bar not found');
}
//кнопка пошуку
if(driver.findElement(By.className('QCzoEc z1asCe MZy1Rb')) != 0){
	console.log('search button found');
}else {
	console.log('search button not found');
}
 
    // Navigate to Url
    await driver.get('https://www.google.com');
    let searchBtn = driver.findElement(By.linkText('Gmail'));
    const actions = driver.actions({async: true});
     await actions.doubleClick(searchBtn).perform();
  
})();
