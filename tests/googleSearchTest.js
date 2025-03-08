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


it("should search for 'Selenium WebDriver' and verify results", async function () {
  this.timeout(60000);

  // ✅ Accept cookies (if prompted)
  try {
      let acceptButton = await driver.findElement(By.css("button[aria-label='Accept all']"));
      await acceptButton.click();
  } catch (e) {
      console.log("No cookie prompt found,  proceeding...");
  }

  // ✅ Wait for search box and type query
  let searchBox = await driver.wait(until.elementLocated(By.name("q")), 10000);
  await searchBox.sendKeys("Selenium WebDriver", Key.RETURN);

  // ✅ Wait for results section to appear
  let searchResults = await driver.wait(until.elementLocated(By.id('search')), 15000);
  await driver.wait(until.elementIsVisible(searchResults), 5000);

  // ✅ Take a screenshot after results load
  await takeScreenshot(driver, "google_search_results");

  // ✅ Verify title contains the search term
  let title = await driver.getTitle();
  assert(title.toLowerCase().includes("selenium webdriver"), "Title does not contain expected text");
});

  after(async function () {
    await driver.quit();
  });
});
