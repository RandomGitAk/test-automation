
const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require("assert");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async function helloSelenium() {
    let driver = await new Builder().forBrowser('firefox').build();



await driver.get('http://automationpractice.com');
//sign in
    let signInBtn = driver.findElement(By.linkText('Sign in'));
    const actions = driver.actions({async: true});
      actions.doubleClick(signInBtn).perform();

await driver.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
//title
sleep(500).then(() => { let title =  driver.getTitle();
title.then(text => console.log(text));
//assert.strictEqual(title, "Login - My Store"); 
});
//логін пароль
driver.findElement(By.id("email")).sendKeys("19fi.v.mishchenko@std.npu.edu.ua");
driver.findElement(By.id("passwd")).sendKeys("202000", Key.RETURN);
  

//title
sleep(5000).then(() => {let title2 =  driver.getTitle();
title2.then(text => console.log(text));
})
sleep(5000).then(() => { driver.findElement(By.xpath("/html/body/div/div[1]/header/div[2]/div/div/nav/div[1]"))
.then(span => span.getText())
.then(text => console.log("Дані акаунту " + text));
});

})();
