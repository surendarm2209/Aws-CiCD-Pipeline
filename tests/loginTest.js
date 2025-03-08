import { getDriver, By, until, takeScreenshot } from "./setup.js";
import { describe, it, before, after } from "mocha";

let driver;

describe("Login Test", function () {
  this.timeout(20000);

  before(async function () {
    driver = await getDriver();
  });

  it("should open the login page", async function () {
    await driver.get("https://www.saucedemo.com/");
    await takeScreenshot(driver, "login_page_loaded");
  });

  it("should enter credentials and login", async function () {
    let username = await driver.findElement(By.id("user-name"));
    let password = await driver.findElement(By.id("password"));
    let loginButton = await driver.findElement(By.id("login-button"));

    await username.sendKeys("standard_user");
    await password.sendKeys("secret_sauce");
    await loginButton.click();

    await driver.wait(until.elementLocated(By.className("inventory_list")), 5000);
    await takeScreenshot(driver, "login_success");
  });

  after(async function () {
    if (driver) {
      try {
        await driver.quit();
      } catch (error) {
        console.warn("Error closing WebDriver:", error);
      }
    }
  });
  
});
