// const { Builder, By, until } = require("selenium-webdriver");
// const fs = require("fs");

// let driver;

// before(async function () {
//   this.timeout(30000); // Increase timeout for setup
//   try {
//     driver = await new Builder().forBrowser("chrome").build();
//   } catch (error) {
//     console.error("WebDriver failed to initialize:", error);
//   }
// });

// after(async function () {
//   if (driver) {
//     await driver.quit();
//   }
// });

// async function takeScreenshot(testName) {
//   let image = await driver.takeScreenshot();
//   fs.writeFileSync(`./reports/${testName}.png`, image, "base64");
// }

// module.exports = { driver, By, until, takeScreenshot };


const { Builder, By, until } = require("selenium-webdriver");
const fs = require("fs");

async function getDriver() {
  try {
    const driver = await new Builder().forBrowser("chrome").build();
    return driver;
  } catch (error) {
    console.error("WebDriver failed to initialize:", error);
    throw error; // Ensure the error is properly handled
  }
}

async function takeScreenshot(driver, testName) {
  let image = await driver.takeScreenshot();
  fs.writeFileSync(`./reports/${testName}.png`, image, "base64");
}

module.exports = { getDriver, By, until, takeScreenshot };


