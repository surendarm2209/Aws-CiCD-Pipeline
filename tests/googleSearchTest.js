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

const { driver } = require("../testSetup");
const { By, until, takeScreenshot } = require("../setup");

describe("Google Search Test Suite", function () {
  it("should open Google homepage", async function () {
    await driver.get("https://www.google.com");
  });

  it("should search for 'Selenium WebDriver' and verify results", async function () {
    let searchBox = await driver.findElement(By.name("q"));
    await searchBox.sendKeys("Selenium WebDriver");
    await searchBox.submit();
    await driver.wait(until.titleContains("Selenium WebDriver"), 5000);
    await takeScreenshot(driver, "googleSearchResults");
  });
});
