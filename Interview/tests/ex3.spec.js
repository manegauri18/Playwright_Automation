
import { test, expect } from "@playwright/test";

test("Validate tab header", async ({ page }) => {

    await page.goto("https://www.google.com/");
    await page.waitForTimeout(2000);

    let Title = await page.title();
    console.log("Tab header name is: ", Title);
      await page.waitForTimeout(2000);

    await page.goto("https://omayo.blogspot.com/");
    await page.goBack();
    await page.waitForTimeout(2000);

    await page.reload();
});

