import{test, expect} from "@playwright/test"


test("Dropdown with search box", async({page})=>{

await page.goto("https://www.testmuai.com/selenium-playground/jquery-dropdown-search-demo/?utm_source=chatgpt.com");

await page.locator("//span[@class='select2-selection select2-selection--single' and @aria-labelledby='select2-country-container']").click();

await page.locator("//span[@class='select2-search select2-search--dropdown']/input[@class='select2-search__field']").fill("India");

await page.locator("//li[text()='India']").click();

const selectedValue= await page.locator("//span[@title='India']").textContent();

expect(selectedValue).toBe("India");


})
