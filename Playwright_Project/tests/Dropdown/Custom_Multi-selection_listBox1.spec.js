import { test, expect } from "@playwright/test"


test("Handle DropDown", async ({ page }) => {

    //step 1
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");


    let selectDropdown =  page.locator('//select[@id="dropdown-class-example"]');

   // await expect(selectDropdown).toBeVisible();

    let dropdown =await selectDropdown.selectOption({value: 'option1'});

    await page.waitForTimeout(3000);


    let selectedValie =await selectDropdown.inputValue();
    console.log(selectedValie);

    await expect(selectDropdown).toHaveValue(selectedValie);

    let option= selectDropdown.locator('option');

    let OptionCount= await option.count();

    console.log("option count is: ", OptionCount);

    for(let i=0; i<OptionCount; i++){

        let optionText= await option.nth(i).textContent();
        console.log(`option ${i+1} : ${optionText.trim()}`);


    }
})



test.only("Handle Multi-selection DropDown", async ({ page }) => {

    //step 1
    await page.goto("https://semantic-ui.com/modules/dropdown.html#multiple-selection");

   await page.locator('//div[@class="ui fluid dropdown selection multiple"]').click();

   await page.locator('//div[@class="menu transition visible"]//div[text()="CSS"]').click();

   await page.locator('//div[@class="menu transition visible"]//div[text()="HTML"]').click();

   await page.waitForTimeout(3000);
   



const locator = page.locator("//div[contains(@class,'ui fluid dropdown selection multiple')]//a[contains(@class,'ui label transition visible')]");


const selectedTexts = await locator.allTextContents();

console.log("Selected texts:", selectedTexts);

  
});
