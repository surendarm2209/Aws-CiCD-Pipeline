import { getDriver, takeScreenshot, By } from "../utils/webdriverHelper.js";
import { expect } from "chai";

describe("Navigation Test Suite", function () {
    let driver;

    before(async function () {
        driver = await getDriver();
        await driver.get("https://example.com");
    });

    after(async function () {
        await driver.quit();
    });

    it("should navigate to About page", async function () {
        await driver.findElement(By.linkText("About")).click();
        let title = await driver.getTitle();
        expect(title).to.include("About");
    });

    it("should navigate to Contact page", async function () {
        await driver.findElement(By.linkText("Contact")).click();
        let title = await driver.getTitle();
        expect(title).to.include("Contact");
    });
});

