const { getDriver } = require("./setup");

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

module.exports = { driver };

