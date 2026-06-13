import { test, expect } from "@playwright/test";

test("Get text From Child Frame", async({page})=>{

    await page.goto("https://demoqa.com/nestedframes", {waitUntil: "domcontentloaded"});

    // Parent Frame
    const parentFrame = page.frameLocator("//iframe[@id='frame1']")

    //Child Frame
    const childFrame = parentFrame.frameLocator("//iframe")
    
    const text = await childFrame.locator('//p[text()="Child Iframe"]').innerText()
    
    console.log("Text From Frame:", text)
})