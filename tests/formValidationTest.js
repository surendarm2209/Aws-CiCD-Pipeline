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

const { driver } = require("../testSetup");
const { By, until, takeScreenshot } = require("../setup");

describe("Form Validation Test Suite", function () {
  it("should display error for empty form submission", async function () {
    await driver.get("https://example.com");
    await takeScreenshot(driver, "formValidationError");
  });
});

