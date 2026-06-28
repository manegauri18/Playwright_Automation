import { test, expect } from "@playwright/test";



test("Handling date picker", async ({ page }) => {

    await page.goto("https://www.testmuai.com/selenium-playground/bootstrap-date-picker-demo/")

    const date = new Date();
    date.setDate(date.getDate() + 5);
    console.log("actualDate:", date);

    const futureDate = date.getDate();
    console.log("futureDate:", futureDate);

    const calendarDate = page.locator("input[placeholder='Start date']");
    await calendarDate.waitFor({ state: 'visible', timeout: 10000 });

    await page.waitForTimeout(5000);
    await calendarDate.click();
   
    await page.locator(`//td[@class='day' and text()='${futureDate}']`).click();

});