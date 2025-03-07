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

const { getDriver, By, until } = require("./setup");
const fs = require("fs");

let driver;

before(async function () {
  this.timeout(30000);
  driver = await getDriver();
});

after(async function () {
  if (driver) {
    await driver.quit();
  }
});

async function takeScreenshot(testName) {
  let image = await driver.takeScreenshot();
  fs.writeFileSync(`./reports/${testName}.png`, image, "base64");
}

module.exports = { takeScreenshot };


