import{test, expect} from "@playwright/test"


test.only("Handling multi-select hidden Dropdown", async({page})=>{

await page.goto("https://demoqa.com/select-menu");

await page.locator("//input[@role='combobox' and (@id='react-select-4-input')]").click();

await page.pause();

/*Option are hidden..so pause the page once clicked on drop down

1. use await.page.pause() after clicking on dropDown menu.
2. execute script in debug mode
2. Inspect page
3. Step over till dropDown option are visible on UI
4. Take Dom selector or element selector(Arrow present on top left of inspect page)
4. Now hover over any option. u will see option in DOM

*/

await page.locator('#react-select-4-option-0').click();

const selectedValue =await page.locator("//div[text()='Green' and (@class='css-9jq23d')]").textContent();

expect(selectedValue).toBe("Green");

await page.locator('#react-select-4-option-2').click();

const selectedValue1 =await page.locator("//div[@class='css-9jq23d' and (text()='Black')]").textContent();

expect(selectedValue1).toBe("Black");


})