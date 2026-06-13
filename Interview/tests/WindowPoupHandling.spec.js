import { test, expect} from "@playwright/test"


test("Handling windowPopup", async ({ page }) => {

    await page.goto("https://demoqa.com/browser-windows");

    

const [newPopup]= await Promise.all([
 
    page.waitForEvent('popup'),
    page.locator("//button[text()='New Window']").click()

])


await newPopup.waitForLoadState();

const text= await newPopup.locator("#sampleHeading").textContent();

expect(text).toBe("This is a sample page");

await newPopup.close();

})