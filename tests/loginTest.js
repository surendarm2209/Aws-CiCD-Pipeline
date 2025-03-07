import { getDriver, takeScreenshot, By, Key } from "../utils/webdriverHelper.js";
import { expect } from "chai";

describe("Login Test Suite", function () {
    let driver;

    before(async function () {
        driver = await getDriver();
        await driver.get("https://example.com/login");
    });

    after(async function () {
        await driver.quit();
    });

    it("should login with valid credentials", async function () {
        await driver.findElement(By.name("username")).sendKeys("testuser");
        await driver.findElement(By.name("password")).sendKeys("password123", Key.RETURN);

        let successMessage = await driver.findElement(By.id("success")).getText();
        expect(successMessage).to.include("Welcome");
    });

    it("should show error on invalid login", async function () {
        await driver.findElement(By.name("username")).sendKeys("wronguser");
        await driver.findElement(By.name("password")).sendKeys("wrongpassword", Key.RETURN);

        let errorMessage = await driver.findElement(By.id("error")).getText();
        expect(errorMessage).to.include("Invalid credentials");
    });
});

