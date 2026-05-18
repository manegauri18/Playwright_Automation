import { test, expect } from "@playwright/test"

test("Multi Select", async ({ page }) => {

    //step 1
    await page.goto("https://testautomationcentral.com/demo/multi_select_dropdown.html#google_vignette");

    await page.locator("//button[@id='dropdown-toggle']").click();
   
    await page.waitForTimeout(3000);
  
    const option =  page.locator("//ul[@id='dropdown-menu']//li[label/input[@value='Apple']]");

    await option.click();

   
const locator = page.locator("//div[@id ='selected-items']");


const selectedTexts = await locator.innerText();

console.log("Selected texts:", selectedTexts);

 
});

test.only("Multi Select1", async ({ page }) => {
  await page.goto("https://testautomationcentral.com/demo/dropdown.html");

  // open the grouped dropdown tab
  await page.locator("//div[@class='tabs flex flex-wrap border-b mb-4']/button[@data-target='grouped-dropdown']").click();

  // select multiple options by value
 const a =  page.locator("//div[@id='grouped-dropdown']//select//option[@value='option2']");
  await a.click()
  await page.waitForTimeout(5000);

  // verify selection
  const selected = await page.locator("//div[@id='grouped-dropdown']//select").inputValue();
  console.log("Selected values:", selected); // "option2,option3"
});
