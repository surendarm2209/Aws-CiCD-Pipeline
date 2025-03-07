// const { driver, By, until, takeScreenshot } = require("./setup");
// const assert = require("assert");
// const driver = require("../setup");

// describe("Form Validation Test Suite", function () {
//   this.timeout(20000);

//   it("should display error for empty form submission", async function () {
//     await driver.get("https://example.com/contact");

//     let submitButton = await driver.findElement(By.id("submit"));
//     await submitButton.click();

//     try {
//       let errorMessage = await driver.wait(
//         until.elementLocated(By.id("error-message")),
//         5000
//       );
//       let text = await errorMessage.getText();
//       assert.strictEqual(text, "Please fill out this field.", "Validation failed");
//     } catch (error) {
//       await takeScreenshot("FormValidation_Failure");
//       throw error;
//     }
//   });
// });

import { getDriver, By, until, takeScreenshot } from "./setup.js";
import { describe, it, before, after } from "mocha";

let driver;

describe("Form Validation Test", function () {
  this.timeout(20000);

  before(async function () {
    driver = await getDriver();
  });

  it("should load the form page", async function () {
    await driver.get("https://www.w3schools.com/html/html_forms.asp");
    await takeScreenshot(driver, "form_page_loaded");
  });

  it("should fill out and submit the form", async function () {
    let nameInput = await driver.findElement(By.name("fname"));
    await nameInput.sendKeys("John Doe");

    let submitButton = await driver.findElement(By.css("input[type='submit']"));
    await submitButton.click();

    await takeScreenshot(driver, "form_submission");
  });

  after(async function () {
    await driver.quit();
  });
});
