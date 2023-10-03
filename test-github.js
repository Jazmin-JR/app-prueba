const {By, Key, Builder}= require ("selenium-webdriver");
require("chromedriver");

async function test_login(){
let driver = await new Builder().forBrowser("chrome").build();

await driver.get("https://github.com");

await driver.findElement(By.partialLinkText("Sign in")).click();

await driver.findElement(By.name("login")).sendKeys("Roldan Guzman Jazmin");
await driver.findElement(By.name("password")).sendKeys("Gordo260121jrg/");

}
test_login();