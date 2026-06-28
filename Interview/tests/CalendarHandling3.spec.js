import { test, expect } from "@playwright/test";

const day = 28;
const TargetMmonth = "August";
const TargetYear = 2026;

test("Handling date picker3", async ({ page }) => {

    await page.goto("https://www.redbus.in/");

    await page.locator("//div[@class='dateInputWrapper___b6c7d8 dateHighlight___57f48d']").click();



    while (true) {

        const currentMonth = await page.locator("//p[@class='monthYear___93a489']").textContent();
        const currentMonth1 = currentMonth.trim().split(" ")[0];
      //  console.log("currentMonth:", `${currentMonth1}`);

        const currentYear = await page.locator("//p[@class='monthYear___93a489']").textContent();
        const currentYear1 = currentYear.trim().split(" ")[1];
      //  console.log("currentYear:", `${currentYear1}`);

        if (currentMonth1 == TargetMmonth && currentYear1 == TargetYear) {

            break;
        }
        await page.locator("//i[@class='icon icon-arrow arrow___4df7ff right___90a032 ']").click();
    }

    await page.locator(`//span[text()='${day}']`).click();

    const selectedDate= await page.locator("//div[contains(@aria-label,'Select Date of Journey')]").textContent();

    await expect(selectedDate).toContain(`${day}`);

});