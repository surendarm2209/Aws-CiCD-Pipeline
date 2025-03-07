// const { driver, By, until, takeScreenshot } = require("./setup");
// const assert = require("assert");
// const driver = require("../setup");

// describe("Google Search Test Suite", function () {
//   this.timeout(20000);

//   it("should open Google homepage", async function () {
//     await driver.get("https://www.google.com");
//     let title = await driver.getTitle();
//     assert.strictEqual(title, "Google");
//   });

//   it("should search for 'Selenium WebDriver' and verify results", async function () {
//     let searchBox = await driver.findElement(By.name("q"));
//     await searchBox.sendKeys("Selenium WebDriver");
//     await searchBox.submit();

//     try {
//       await driver.wait(until.elementLocated(By.id("search")), 10000);
//       let resultStats = await driver.findElement(By.id("result-stats"));
//       assert.ok(resultStats, "Search results not found");
//     } catch (error) {
//       await takeScreenshot("GoogleSearch_Failure");
//       throw error;
//     }
//   });
// });





import { getDriver, By, until, takeScreenshot } from "./setup.js";
import { describe, it, before, after } from "mocha";

let driver;

describe("Google Search Test", function () {
  this.timeout(20000);

  before(async function () {
    driver = await getDriver();
  });

  it("should open Google homepage", async function () {
    await driver.get("https://www.google.com");
    await takeScreenshot(driver, "google_homepage");
  });

  it("should search for 'Selenium WebDriver'", async function () {
    let searchBox = await driver.findElement(By.name("q"));
    await searchBox.sendKeys("Selenium WebDriver");
    await searchBox.submit();
    await driver.wait(until.titleContains("Selenium WebDriver"), 5000);
    await takeScreenshot(driver, "google_search_results");
  });

  after(async function () {
    await driver.quit();
  });
});
