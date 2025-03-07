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

// const { Builder, By, until } = require("selenium-webdriver");
// const fs = require("fs");

// async function getDriver() {
//   return await new Builder().forBrowser("chrome").build();
// }

// async function takeScreenshot(driver, testName) {
//   let image = await driver.takeScreenshot();
//   fs.writeFileSync(`./reports/${testName}.png`, image, "base64");
// }

// module.exports = { getDriver, By, until, takeScreenshot };


import { Builder, By, until } from "selenium-webdriver";
import fs from "fs";

export async function getDriver() {
  let driver = await new Builder().forBrowser("chrome").build();
  return driver;
}

export async function takeScreenshot(driver, filename) {
  let image = await driver.takeScreenshot();
  fs.writeFileSync(`./reports/${filename}.png`, image, "base64");
}

export { By, until };



