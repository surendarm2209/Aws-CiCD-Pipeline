import { getDriver, By, until, takeScreenshot } from "./setup.js";
import { describe, it, before, after } from "mocha";
import { Key } from 'selenium-webdriver';
import assert from "assert";

let driver;

describe("Google Search Test", function () {
  this.timeout(20000);

  before(async function () {
    driver = await getDriver();
  });

  it("should open Google homepage", async function () {
    this.timeout(60000);
    
    await driver.get('https://www.google.com');
    
    // ✅ Take a screenshot after the homepage loads
    await takeScreenshot(driver, "google_homepage");
    
    let title = await driver.getTitle();
    assert(title.includes("Google"), "Google homepage did not load properly");
});



after(async function () {
  if (driver) {
    await driver.quit();
  }
});

});
