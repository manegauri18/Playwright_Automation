
import { test, expect } from "@playwright/test";

test("Validate tab header", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    await page.waitForTimeout(5000)

   
});

