// const { driver, By, until, takeScreenshot } = require("./setup");
// const assert = require("assert");
// const driver = require("../setup");

// describe("Navigation Test Suite", function () {
//   this.timeout(20000);

//   it("should navigate to About page", async function () {
//     await driver.get("https://example.com");
//     let aboutLink = await driver.findElement(By.linkText("About"));
//     await aboutLink.click();

//     try {
//       await driver.wait(until.titleContains("About"), 10000);
//       let title = await driver.getTitle();
//       assert.ok(title.includes("About"), "Navigation failed");
//     } catch (error) {
//       await takeScreenshot("Navigation_About_Failure");
//       throw error;
//     }
//   });

//   it("should navigate to Contact page", async function () {
//     let contactLink = await driver.findElement(By.linkText("Contact"));
//     await contactLink.click();

//     try {
//       await driver.wait(until.titleContains("Contact"), 10000);
//       let title = await driver.getTitle();
//       assert.ok(title.includes("Contact"), "Navigation failed");
//     } catch (error) {
//       await takeScreenshot("Navigation_Contact_Failure");
//       throw error;
//     }
//   });
// });


------------------------------------------------------

  
// const { driver } = require("../testSetup");
// const { By, until, takeScreenshot } = require("../setup");

// describe("Navigation Test Suite", function () {
//   it("should navigate to About page", async function () {
//     await driver.get("https://example.com/about");
//     await takeScreenshot(driver, "aboutPage");
//   });

//   it("should navigate to Contact page", async function () {
//     await driver.get("https://example.com/contact");
//     await takeScreenshot(driver, "contactPage");
//   });
// });
