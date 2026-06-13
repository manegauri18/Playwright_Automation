import { test, expect } from "@playwright/test";

test("Validate tab header", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
    await page.waitForTimeout(2000);

    await page.locator('//input[@placeholder="Username"]').fill("standard_user");

    await page.locator('//input[@type="password"]').fill("secret_sauce");

    await page.locator('//input[@value="Login"]').click();
})