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
 sleep(8000).then(() => {  let signInBtn = driver.findElement(By.xpath('/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[3]/a'));
    const actions = driver.actions({async: true});
      actions.doubleClick(signInBtn).perform();  
});
//пререхід до товару
 sleep(15000).then(() => {  let goToProduct = driver.findElement(By.xpath('/html/body/div/div[2]/div/div[3]/div[2]/ul/li/div/div[1]/div/a[1]/img'));
    const actions = driver.actions({async: true});
      actions.click(goToProduct).perform();  
});
//додавання в корзину
 sleep(25000).then(() => {  let addToCardBtn = driver.findElement(By.xpath('/html/body/div/div[2]/div/div[3]/div/div/div/div[4]/form/div/div[3]/div[1]/p/button'));
    const actions = driver.actions({async: true});
      actions.click(addToCardBtn).perform();  
});

//перехід до  корзини
 sleep(30000).then(() => {  let goToCardBtn = driver.findElement(By.className('btn btn-default button button-medium'));
    const actions = driver.actions({async: true});
      actions.click(goToCardBtn).perform();  
});
// назва товару
sleep(35000).then(() => {driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[2]/table/tbody/tr/td[2]/p/a"))
.then(span => span.getText())
.then(text => console.log("Назва товару - " + text));
});
//ціна товару
sleep(36000).then(() => {driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[2]/table/tbody/tr/td[4]/span/span"))
.then(span => span.getText())
.then(text => console.log("Ціна товару - " + text));
});
//додавання кількості товару
 sleep(40000).then(() => {  let addCountProduct = driver.findElement(By.xpath('//*[@id="cart_quantity_up_1_1_0_672628"]'));
    const actions = driver.actions({async: true});
      actions.click(addCountProduct).perform();  
});

//ціна за 2 товара
sleep(45000).then(() => {driver.findElement(By.xpath('//*[@id="total_product_price_1_1_672628"]'))
.then(span => span.getText())
.then(text => console.log("Ціна за 2 товара - " + text));
});

})();

