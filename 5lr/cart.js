const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require('./base');
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
class CartPage extends BasePage{

//перехід в розділ корзина
addToCart(){

   sleep(40000).then(() => {  let addBtn = driver.findElement(By.id('add_to_cart'));
    const actions = driver.actions({async: true});
      actions.click(addBtn).perform(); 
    }); 
}
//перевірка зображення
imgIsDisplay(){

   sleep(43000).then(() => {  if(driver.findElement(By.xpath('/html/body/div/div[1]/header/div[3]/div/div/div[4]/div[1]/div[1]/div[1]/img')).isDisplayed()){
    console.log("img is displayed");
   }
    }); 
}

numberAndMailisDisplay(){
//перевірка номеру
   sleep(44000).then(() => {  if(driver.findElement(By.xpath('/html/body/div/div[3]/footer/div/section[6]/div/ul/li[2]/span')).isDisplayed()){
    console.log("number is displayed");
   }
//перевірка пошти
   if(driver.findElement(By.xpath('/html/body/div/div[3]/footer/div/section[6]/div/ul/li[3]/span/a')).isDisplayed()){
    console.log("mail is displayed");
   }
    }); 
}

}
module.exports = new CartPage();