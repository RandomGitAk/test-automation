const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require("assert");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('firefox').build();

 await driver.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
//логін пароль
driver.findElement(By.id("email")).sendKeys("19fi.v.mishchenko@std.npu.edu.ua");
driver.findElement(By.id("passwd")).sendKeys("202000", Key.RETURN);
 
 sleep(3000).then(() => {  driver.findElement(By.id("search_query_top")).sendKeys("Printed Chiffon Dress", Key.RETURN);
});

sleep(6300).then(() => {  driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div[2]/ul/li/div/div[2]/h5/a"))
.then(span => span.getText())
.then(text => console.log("Назва знайденого товару: " + text));		
});

sleep(6500).then(() => {driver.findElement(By.className("price-percent-reduction"))
.then(span => span.getText())
.then(text => console.log("Знижка товару: " + text));	
});

})();

