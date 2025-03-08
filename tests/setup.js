
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

  let options = new Options();
  options.addArguments(
    "--disable-blink-features=AutomationControlled",
    "--disable-infobars",
    "--start-maximized",
    `--user-data-dir=${uniqueProfile}` // Unique profile for each test run
  );

  // Headless mode for CI/CD (ensure compatibility)
  options.addArguments(
    "--headless=new", // Use "new" for Chrome versions >= 109
    "--disable-gpu",
    "--no-sandbox",
    "--disable-dev-shm-usage"
  );

  let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

  // Recommended: Remove implicit waits and use explicit waits in tests
  // await driver.manage().setTimeouts({ implicit: 10000, pageLoad: 20000 });

  return driver;
}

export async function takeScreenshot(driver, filename) {
  let image = await driver.takeScreenshot();
  const screenshotPath = path.join("./reports", `${filename}.png`); // ✅ Cross-platform safe path
  fs.writeFileSync(screenshotPath, image, "base64");
}

export { By, until };

