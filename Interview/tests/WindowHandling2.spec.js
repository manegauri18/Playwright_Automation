import { test, expect} from "@playwright/test"


test("Handling windows", async ({ page, context }) => {

    await page.goto("https://qaplayground.com/practice/tabs-windows");

    await expect(page).toHaveTitle("How to Handle Multiple Windows and Tabs in Selenium and Playwright");


    const [newPage]=await Promise.all([

      context.waitForEvent('page'),
      page.locator("//button[text()='Open Multiple Windows']").click()

    ])


    await newPage.waitForLoadState();

    await expect(newPage).toHaveTitle("How to Handle Dropdowns using Select Class in Selenium and Playwright");

    await page.bringToFront();

    await page.locator("//a[text()='Bank Demo']").click();
})