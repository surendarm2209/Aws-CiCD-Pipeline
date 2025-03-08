import { Builder, By, until } from "selenium-webdriver/index.js";
import chrome from "selenium-webdriver/chrome.js";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// ✅ Ensure WebDriver Manager is updated before running tests
execSync("npx webdriver-manager update --chrome", { stdio: "inherit" });

// ✅ Get ChromeDriver path dynamically
const chromedriverPath = execSync("npx webdriver-manager path --chrome").toString().trim();

export async function getDriver() {
  let options = new chrome.Options();
  options.addArguments("--headless", "--disable-gpu", "--no-sandbox", "--disable-dev-shm-usage");

  let serviceBuilder = new chrome.ServiceBuilder(chromedriverPath); // ✅ Use correct driver path

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .setChromeService(serviceBuilder)
    .build();

  return driver;
}

export async function takeScreenshot(driver, filename) {
  let image = await driver.takeScreenshot();
  const screenshotPath = path.join("./reports", `${filename}.png`);
  fs.writeFileSync(screenshotPath, image, "base64");
}

export { By, until };
