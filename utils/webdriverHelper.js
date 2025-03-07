import { Builder, By, Key, until } from "selenium-webdriver";
import fs from "fs";

const getDriver = async () => {
    return new Builder().forBrowser("chrome").build();
};

const takeScreenshot = async (driver, testName) => {
    let screenshot = await driver.takeScreenshot();
    fs.writeFileSync(`./reports/${testName}.png`, screenshot, "base64");
};

export { getDriver, takeScreenshot, By, Key, until };

