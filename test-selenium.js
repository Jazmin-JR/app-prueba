const {By,Key,Builder}= require("selenium-webdriver");
require("chromedriver");

async function test_case(){

    let driver= await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.google.com");

    await driver.findElement(By.name("q")).sendKeys("hola Mundo!!",KEY.RETURN);

    await driver.quit();
}

test_case();