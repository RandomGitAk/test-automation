const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require('./base');
//var List = require("collections/list");
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
class WomenPage extends BasePage{

//перехід в розділ woman
sectionOfWoman(){
//sign in
   sleep(25000).then(() => {  let womanBtn = driver.findElement(By.className('sf-with-ul'));
    const actions = driver.actions({async: true});
      actions.click(womanBtn).perform(); 
    }); 
}

//кількість товарів
countGoods(){
sleep(35000).then(() => { 
let num = driver.findElement(By.className('product_list grid row'));
var list = num.findElement(By.tagName("li"))

driver.findElement(By.xpath('/html/body/div/div[2]/div/div[3]/div[2]/h1/span[2]'))
.then(span => span.getText())
.then(text => console.log("Товарів: " + text));

    
    }); 
}

openGoods(){
//Вибрати товар
   sleep(35000).then(() => {  let womanBtn = driver.findElement(By.xpath('/html/body/div/div[2]/div/div[3]/div[2]/ul/li[1]/div/div[2]/h5/a'));
    const actions = driver.actions({async: true});
      actions.click(womanBtn).perform(); 
    }); 
}
sendFriendButton(){
	 sleep(40000).then(() => {  let sendFriendBtn = driver.findElement(By.id('send_friend_button'));
    const actions = driver.actions({async: true});
      actions.click(sendFriendBtn).perform(); 
    }); 
}

checkTitleNameAndBtn(){
sleep(43000).then(() => { driver.findElement(By.xpath('/html/body/div[2]/div/div/div/div/div/div/div[2]/div[3]/p[2]/label'))
.then(span => span.getText())
.then(text => console.log("поле- " + text));
driver.findElement(By.xpath('/html/body/div[2]/div/div/div/div/div/div/div[2]/div[3]/p[2]/label')).isDisplayed();


driver.findElement(By.id('sendEmail'))
.then(span => span.getText())
.then(text => console.log("Кнопка- " + text));
driver.findElement(By.id('sendEmail')).isDisplayed();
    }); 

}

}
module.exports = new WomenPage();