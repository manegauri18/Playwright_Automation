import { test, expect } from "@playwright/test";

test.setTimeout(60000);
test("Navigation between application", async ({ page }) => {

    //Navigate to Facebook

    await page.goto("https://www.facebook.com/login");
    //Thread.sleep(5000)
    await expect(page).toHaveTitle("Facebook");

    //Navigate t orangeHRM
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //GoBack
    await page.goBack();
    await expect(page).toHaveTitle("Facebook");

    await page.goForward();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //Reload
    await page.reload();
    console.log("Page relaoded successfully");


})