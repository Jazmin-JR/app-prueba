const {By,Key, Builder, Browser}=require("selenium-webdriver");
require("chromedriver");

async function test_upload(){
    //
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    //
    await driver.navigate().to("https://www.amazon.com.mx/");
    await driver.navigate().back();
    await driver.navigate().refresh();

    await driver.manage().window();
    await driver.sleep(2000);

    // await driver.get("https://www.selenium.dev/selenium/web/mouse_interaction.html")

    // const srcEle= await driver.findElement(By.id("draggable"));
    // const targetEle = await driver.findElement(By.id("droppable"));

    // await driver.actions({async:true}).dragAndDrop(srcEle,targetEle).perform();
    // await driver.sleep(3000);

    // await driver.get("https://ratings.fide.com/top.phthml?list=men/");
    // var names= await driver.findElement(By.css(".tur"));

    // await driver.sleep(2000);

    // for(let n of names){
    //     if (await n.getText()==="Grigoryan, Karen H.")
    //     {
    //         console.log(await n.getText());
    //     }
    // }
}

test_upload();
