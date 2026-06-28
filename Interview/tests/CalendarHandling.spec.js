import { test, expect } from "@playwright/test";

const day = 25;
const month = "December";
const year = "2026";

test("Handling date picker", async ({ page }) => {

    await page.goto("https://jqueryui.com/datepicker/");

    const frame = page.frameLocator("iframe");

    await frame.locator("#datepicker").click();

    while (true) {

        const currentMonth = await frame.locator(".ui-datepicker-month").textContent();
        const currentYear = await frame.locator(".ui-datepicker-year").textContent();

        if (currentMonth === month && currentYear === year) {
            break;
        }

        await frame.locator("//a[@title='Next']").click();
    }

    await frame.locator(`//a[@data-date='${day}']`).click();
});