import{test, expect} from "@playwright/test"


test("Handling Dropdown with select tag", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");


//select by label(visible text)
//await page.locator("#country").selectOption({label: "India"});

//select by visible text
//await page.locator("#country").selectOption("Germany");


//select by value attribute
//await page.locator("#country").selectOption({value: "china"});


//select by index
await page.locator("#country").selectOption({index: 5});

await page.waitForTimeout(5000);

//check number of options in dropdown --approach1
// const options =  page.locator("#country option")
// await expect(options).toHaveCount(10);



//check particular option is present in dropdown or not
const content= await page.locator("#country").textContent();

await expect(content.includes('India')).toBeTruthy();






})