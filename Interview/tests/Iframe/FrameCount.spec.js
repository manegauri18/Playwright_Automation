import { test, expect } from "@playwright/test";


test("Frame Count", async({page})=>{

    await page.goto("https://demoqa.com/frames");

       console.log("Total Frames:", page.frames().length);
  
})