
import { Builder, By, until } from "selenium-webdriver";
// import chrome from 'selenium-webdriver/chrome';
// import { Builder } from 'selenium-webdriver';
import chrome from "selenium-webdriver/chrome.js"; 
import fs from "fs";

// export async function getDriver() {
//   let options = new chrome.Options();
//   options.addArguments(
//       "--disable-blink-features=AutomationControlled", // Bypass bot detection
//       "--disable-infobars",
//       "--start-maximized"
//   );
//   options.addArguments("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36");

//   let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
  
//   // ✅ Set timeouts for better stability
//   await driver.manage().setTimeouts({ implicit: 10000, pageLoad: 20000 });

//   return driver;

// }


export async function getDriver() {
  const uniqueProfile = `/tmp/chrome-profile-${Date.now()}`; // Unique profile directory

  let options = new chrome.Options();
  options.addArguments(
    "--disable-blink-features=AutomationControlled",
    "--disable-infobars",
    "--start-maximized",
    `--user-data-dir=${uniqueProfile}` // Unique profile for each test run
  );

  // Headless options for CI/CD
  options.addArguments(
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    "--disable-dev-shm-usage"
  );

  let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

  // Set timeouts for stability
  await driver.manage().setTimeouts({ implicit: 10000, pageLoad: 20000 });

  return driver;
}

export async function takeScreenshot(driver, filename) {
  let image = await driver.takeScreenshot();
  fs.writeFileSync(`./reports/${filename}.png`, image, "base64");
}

export { By, until };



