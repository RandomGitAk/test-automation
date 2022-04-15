const {Builder, By, Key, until}  = require('selenium-webdriver');
var driver = new Builder().forBrowser('firefox').build();
class BasePage{

  constructor(){
global.driver = driver;
}
async navigateToTheTestRoom(){
 await driver.get('http://automationpractice.com/');
}

}
module.exports = BasePage;