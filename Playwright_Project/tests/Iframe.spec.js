import { test, expect } from "@playwright/test";

/*
====================================================
Test 1: Handle Single iFrame
====================================================
Concept:
- Use frameLocator() when iframe has id or stable selector
- No need to switch like Selenium
====================================================
*/
test("IFRAME 1", async ({ page }) => {

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_myfirst");

    // Switch to iframe using frameLocator
    const frame = page.frameLocator('#iframeResult');

    // Perform action inside iframe
    await frame.locator('//button[@type="button"]').click();

    // Action outside iframe (main page)
    await page.locator('#tryhome').click();

    await page.waitForTimeout(3000);
});


/*
====================================================
Test 2: Another Single iFrame Example
====================================================
Concept:
- frameLocator directly interacts with iframe
====================================================
*/
test("IFRAME 2", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Frames.html");

    const frame = page.frameLocator('#singleframe');

    // Enter text inside iframe
    await frame.locator('//input[@type="text"]').fill("Javascript");

    // Switch automatically handled → now interact with main page
    await page.locator("//a[contains(text(),'WebTable')]").click();

    await page.waitForTimeout(3000);
});


/*
====================================================
Test 3: Nested iFrame (Iframe inside iframe)
====================================================
Concept:
- Use contentFrame() for dynamic iframe
- First locate iframe → convert to Frame → then interact
====================================================
*/
test("IFRAME 3", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Frames.html");

    // Click on nested iframe tab
    await page.locator("//a[contains(text(),'Iframe with in an Iframe')]").click();

    // Locate outer iframe element
    const outerFrameElement = page.locator('//div[@id="Multiple"]/iframe');

    // Convert element → Frame object
    const outerFrame = await outerFrameElement.contentFrame();

    // Get text from outer iframe
    const outText = await outerFrame.locator("//h5[contains(text(),'Nested iFrames')]").textContent();
    console.log("Outer Frame Text:", outText);

    // Locate inner iframe inside outer frame
    const innerFrameElement = outerFrame.locator("iframe");

    // Convert inner iframe → Frame object
    const innerFrame = await innerFrameElement.contentFrame();

    // Perform action inside inner iframe
    await innerFrame.locator('//input[@type="text"]').fill("Javascript");

    // Back to main page
    await page.locator("//a[contains(text(),'WebTable')]").click();

    await page.waitForTimeout(3000);
});


/*
====================================================
Theory Notes:
====================================================
✔ frameLocator()
   - Used when iframe has stable selector (id, name, css)

✔ contentFrame()
   - Used when iframe is dynamic or nested
   - Converts iframe element → Frame object

✔ Important:
   - Playwright does NOT use switchTo().frame()
   - It handles iframe automatically

✔ Difference:
   page.locator() → main page
   frame.locator() → inside iframe
====================================================
*/


/*
====================================================
Test 4: Checkbox and Radio Button Handling
====================================================
Concept:
- check() → select checkbox/radio
- uncheck() → deselect checkbox
- toBeChecked() → validation
====================================================
*/
test.only("Handle CheckBox & Radio", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const sundayCheckbox = page.locator("#sunday");
    const mondayCheckbox = page.locator("#monday");

    // Select checkboxes
    await sundayCheckbox.check();
    await mondayCheckbox.check();

    // Validate checked state
    await expect(sundayCheckbox).toBeChecked();
    await expect(mondayCheckbox).toBeChecked();

    // Uncheck one checkbox
    await sundayCheckbox.uncheck();
    await expect(sundayCheckbox).not.toBeChecked();

    /*
    ============================
    Radio Button Handling
    ============================
    - Radio button behaves like single selection
    */

    const maleRadio = page.locator("#male");

    await maleRadio.check();

    // Validate radio button
    await expect(maleRadio).toBeChecked();

    await page.waitForTimeout(3000);
});