import { getDriver, By, until, takeScreenshot } from "./setup.js";
import { describe, it, before, after } from "mocha";

let driver;

describe("Navigation Test", function () {
  this.timeout(20000);

  before(async function () {
    driver = await getDriver();
  });

  it("should navigate to the Google homepage", async function () {
    await driver.get("https://www.google.com");
    await takeScreenshot(driver, "google_homepage");
  });

  after(async function () {
    await driver.quit();
  });
});

