const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require("assert");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('firefox').build();

  await driver.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');

sleep(2000).then(() => {
driver.findElement(By.id("email")).sendKeys("19fi.v.mishchenko@std.npu.edu.ua")
	let signInBtn = driver.findElement(By.id('SubmitLogin'));
    const actions = driver.actions({async: true});
      actions.doubleClick(signInBtn).perform();   
});

sleep(15000).then(() => {driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[1]/ol/li"))
.then(span => span.getText())
.then(text => console.log("Результат помилки - " + text));
});
})();

