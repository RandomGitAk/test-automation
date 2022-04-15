const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require('./base');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
class HomePage extends BasePage{
//авторизація 
enterData(){
//sign in
    let signInBtn = driver.findElement(By.linkText('Sign in'));
    const actions = driver.actions({async: true});
      actions.click(signInBtn).perform();

sleep(15000).then(() => { 
driver.findElement(By.id("email")).sendKeys("19fi.v.mishchenko@std.npu.edu.ua");
driver.findElement(By.id("passwd")).sendKeys("202000", Key.RETURN);
});
}

}
module.exports = new HomePage();