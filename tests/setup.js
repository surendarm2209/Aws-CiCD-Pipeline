
import { Builder, By, until } from "selenium-webdriver";
// import chrome from 'selenium-webdriver/chrome';
// import { Builder } from 'selenium-webdriver';
import chrome from "selenium-webdriver/chrome.js"; 
import fs from "fs";
import "chromedriver";



export async function getDriver() {
  let options = new chrome.Options();
  options.addArguments("--headless", "--disable-gpu", "--no-sandbox", "--disable-dev-shm-usage");

  let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

  return driver;
}

export async function takeScreenshot(driver, filename) {
  let image = await driver.takeScreenshot();
  fs.writeFileSync(`./reports/${filename}.png`, image, "base64");
}

export { By, until };



