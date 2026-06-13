import { test, expect } from "@playwright/test";


test("get text Simple Frame", async({page})=>{

    await page.goto("https://demoqa.com/frames");

    //Find Number Of Frames on page
    console.log("total Frames:", page.frames().length)
    
    const selectFrame = page.frameLocator("//iframe[@id='frame1']")

    const text = await selectFrame.locator("//h1[@id='sampleHeading']").textContent()

    console.log("Text From Frame:", text)
})




