import { test, expect } from "@playwright/test"

//Handel dropDown/ListBox
//Select lis = new Select();
//lis.getByValue()
//lis.getByIndex()
//lis.getByVisbltxt

test("Handle DropDown", async ({ page }) => {

    //step 1
    await page.goto("https://testautomationpractice.blogspot.com/");

    const countryDropDown = await page.locator('#country');

    await expect(countryDropDown).toBeVisible();

    await countryDropDown.selectOption({ label: "India" });
    console.log("Selected by visible text : india");


    await page.waitForTimeout(3000);
    await countryDropDown.selectOption({ value: "japan" });
    console.log("Selected by value : Japan");

    await page.waitForTimeout(3000);
    await countryDropDown.selectOption({ index: 2 });

    //Validate selected value

    const selectedValue = await countryDropDown.inputValue();
    console.log(selectedValue);
    await expect(countryDropDown).toHaveValue(selectedValue);

    //Count total options in dropdown
    const options = countryDropDown.locator('option');
    const optionCount = await options.count();
    console.log("Total options in the dropdown :", optionCount);

    //Print all dropdwon options

    for (let i = 0; i < optionCount; i++) {
        const optionText = await options.nth(i).textContent();
        console.log(`Options ${i + 1} : ${optionText.trim()}`)
    }
})

//How do u handle dropdown in playwirght
//Using selectOptions() for native <select> elements

//How do u sleect by index
//selectOption({ index: 2 }) with o based index


test.only("Handle Multiple list element", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const colorDropDown = page.locator("#colors")

    await expect(colorDropDown).toBeVisible();

    const optionToSelect = ["Red", "Green", "White"];

    await colorDropDown.selectOption(optionToSelect);

    await page.waitForTimeout(10000);

})