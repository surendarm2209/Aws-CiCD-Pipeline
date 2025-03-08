
// import { Builder, By, until } from "selenium-webdriver";
// // import chrome from 'selenium-webdriver/chrome';
// // import { Builder } from 'selenium-webdriver';
// import chrome from "selenium-webdriver/chrome.js"; 
// import fs from "fs";
// import "chromedriver";



// export async function getDriver() {
//   let options = new chrome.Options();
//   options.addArguments("--headless", "--disable-gpu", "--no-sandbox", "--disable-dev-shm-usage");

//   let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).setChromeService(serviceBuilder) .build();

//   return driver;
// }

// export async function takeScreenshot(driver, filename) {
//   let image = await driver.takeScreenshot();
//   fs.writeFileSync(`./reports/${filename}.png`, image, "base64");
// }

// export { By, until };



import { Builder, By, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js"; // ✅ Correct import
import fs from "fs";
import path from "path";
import chromedriver from "chromedriver"; // ✅ Ensures correct ChromeDriver version

export async function getDriver() {
  let options = new chrome.Options();
  options.addArguments("--headless", "--disable-gpu", "--no-sandbox", "--disable-dev-shm-usage");

  // ✅ Ensure ChromeDriver path is set correctly
  let serviceBuilder = new chrome.ServiceBuilder(chromedriver.path);

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .setChromeService(serviceBuilder) // ✅ Fixes "serviceBuilder is not defined"
    .build();

  return driver;
}

export async function takeScreenshot(driver, filename) {
  let image = await driver.takeScreenshot();
  const screenshotPath = path.join("./reports", `${filename}.png`); // ✅ Cross-platform safe path
  fs.writeFileSync(screenshotPath, image, "base64");
}

export { By, until };

