import { getDriver, takeScreenshot, By, Key, until } from "../utils/webdriverHelper.js";
import { expect } from "chai";

describe("Google Search Test Suite", function () {
    let driver;

    before(async function () {
        driver = await getDriver();
        await driver.manage().setTimeouts({ implicit: 5000 });
    });

    after(async function () {
        await driver.quit();
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await takeScreenshot(driver, this.currentTest.title);
        }
    });

    it("should open Google homepage", async function () {
        await driver.get("https://www.google.com");
        let title = await driver.getTitle();
        expect(title).to.include("Google");
    });

    it("should search for WebDriver and check results", async function () {
        let searchBox = await driver.findElement(By.name("q"));
        await searchBox.sendKeys("WebDriver", Key.RETURN);
        await driver.wait(until.titleContains("WebDriver"), 5000);
        let title = await driver.getTitle();
        expect(title).to.include("WebDriver");
    });

    it("should check if the first result link is displayed", async function () {
        let firstResult = await driver.wait(
            until.elementLocated(By.css("h3")),
            10000
        );
        await driver.wait(until.elementIsVisible(firstResult), 5000);
        let isDisplayed = await firstResult.isDisplayed();
        expect(isDisplayed).to.be.true;
    });
});

