import { test, expect } from "@playwright/test";


test("IFRAME1", async({page})=>{

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_myfirst");

    const frame1= page.frameLocator('#iframeResult');

    await frame1.locator("//button[@type='button']").click();

   const text = frame1.locator("//p[@id='demo']");

   await expect(text).toContainText("Sun May 03 2026 ");


   await page.locator('//a[@id="menuButton"]').click();

    await page.waitForTimeout(3000);
})

test("IFRAME2", async({page})=>{

    await page.goto("https://demo.automationtesting.in/Frames.html");

    const frame2= page.frameLocator('#singleframe');

    await frame2.locator('//input[@type="text"]').fill("Playwright");


    await page.locator("//a[text()='Home']").click();

    await page.waitForTimeout(3000);
})

test("IFRAME3", async({page})=>{

    await page.goto("https://demo.automationtesting.in/Frames.html");


    await page.locator("//a[text()='Iframe with in an Iframe']").click();

    await page.waitForTimeout(3000);

    const OuterFrameElement= page.locator("//div[@id='Multiple']/iframe");

   const outerFrame= await OuterFrameElement.contentFrame();

  const text1 = await outerFrame.locator("//h5[text()='Nested iFrames']").textContent();
  console.log("outer frame text: ", text1);

  // Locate inner iframe inside outer frame
    const innerFrameElement = outerFrame.locator("iframe");

    // Convert inner iframe → Frame object
    const innerFrame = await innerFrameElement.contentFrame();

    // Perform action inside inner iframe
    await innerFrame.locator('//input[@type="text"]').fill("Javascript");

    // Back to main page
    await page.locator("//a[contains(text(),'WebTable')]").click();

    await page.waitForTimeout(3000);
})


