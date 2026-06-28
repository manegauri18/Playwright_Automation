import { test, expect } from "@playwright/test";

const FromDate = 25;
const FromMonth = "July";
const ToDate = 5;
const ToMonth = "August";

test("Handling date picker3", async ({ page }) => {

    await page.goto("https://www.booking.com/");

    await page.locator("button[aria-label='Dismiss sign-in info.']").click();

    await page.locator("//span[text()='Check-in date']").click();

    while (true) {

        const currentMonth = await page.locator("//h3[@id='bui-calendar-month-2026-5']").textContent();
        const currentMonth1 = currentMonth.trim().split(" ")[0];
        console.log("currentMonth1:", currentMonth1);


        const FutureMonth = await page.locator("//h3[@id='bui-calendar-month-2026-6']").textContent();
        const FutureMonth1 = FutureMonth.trim().split(" ")[0];
        console.log("FutureMonth1:", FutureMonth1);


        if (FromMonth == currentMonth1) {
            break;
        }

        await page.locator("//span[@class='ecb788f3b7 c0b8f1e8f8' and (@data-date='2026-06-25')]").click();

        await page.locator('//span[@data-date="2026-07-05"]').click();


    }



});