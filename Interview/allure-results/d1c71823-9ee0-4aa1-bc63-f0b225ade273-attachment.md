# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Iframe\Iframe1.spec.js >> IFRAME3
- Location: tests\Iframe\Iframe1.spec.js:36:6

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | 
  4  | test("IFRAME1", async({page})=>{
  5  | 
  6  |     await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_myfirst");
  7  | 
  8  |     const frame1= page.frameLocator('#iframeResult');
  9  | 
  10 |     await frame1.locator("//button[@type='button']").click();
  11 | 
  12 |    const text = frame1.locator("//p[@id='demo']");
  13 | 
  14 |    await expect(text).toContainText("Sun May 03 2026 ");
  15 | 
  16 | 
  17 |    await page.locator('//a[@id="menuButton"]').click();
  18 | 
  19 |     await page.waitForTimeout(3000);
  20 | })
  21 | 
  22 | test("IFRAME2", async({page})=>{
  23 | 
  24 |     await page.goto("https://demo.automationtesting.in/Frames.html");
  25 | 
  26 |     const frame2= page.frameLocator('#singleframe');
  27 | 
  28 |     await frame2.locator('//input[@type="text"]').fill("Playwright");
  29 | 
  30 | 
  31 |     await page.locator("//a[text()='Home']").click();
  32 | 
  33 |     await page.waitForTimeout(3000);
  34 | })
  35 | 
  36 | test.only("IFRAME3", async({page})=>{
  37 | 
  38 |     await page.goto("https://demo.automationtesting.in/Frames.html");
  39 | 
  40 | 
  41 |     await page.locator("//a[text()='Iframe with in an Iframe']").click();
  42 | 
  43 |     await page.waitForTimeout(3000);
  44 | 
  45 |     const OuterFrameElement= page.locator("//div[@id='Multiple']/iframe");
  46 | 
  47 |    const outerFrame= await OuterFrameElement.contentFrame();
  48 | 
  49 |   const text1 = await outerFrame.locator("//h5[text()='Nested iFrames']").textContent();
  50 |   console.log("outer frame text: ", text1);
  51 | 
  52 |   // Locate inner iframe inside outer frame
  53 |     const innerFrameElement = outerFrame.locator("iframe");
  54 | 
  55 |     // Convert inner iframe → Frame object
  56 |     const innerFrame = await innerFrameElement.contentFrame();
  57 | 
  58 |     // Perform action inside inner iframe
  59 |     await innerFrame.locator('//input[@type="text"]').fill("Javascript");
  60 | 
  61 |     // Back to main page
  62 |     await page.locator("//a[contains(text(),'WebTable')]").click();
  63 | 
> 64 |     await page.waitForTimeout(3000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  65 | })
  66 | 
  67 | 
  68 | 
```