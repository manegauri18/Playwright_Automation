import{test, expect} from "@playwright/test"


test("Validate table headers", async({page})=>{

await page.goto("https://qaplayground.com/practice/data-table");

const header_count= await page.locator("//thead[@class='[&_tr]:border-b']//th").count();
console.log("Table headers count: ", header_count);

const tHeaders= await page.locator("//thead[@class='[&_tr]:border-b']//th").allTextContents();
console.log("Table headers: ", tHeaders);



const array= [ 'Sr No.',
  'Book Name',
  'Book Genre',
  'Book Author',
  'Book ISBN',
  'Book Published'];

expect(tHeaders).toEqual(array);

expect(header_count).toBe(array.length);

// Wait for loading row to disappear
//await expect(page.locator("text=Loading books...")).toBeHidden();

await page.waitForSelector("//tbody[@class='[&_tr:last-child]:border-0']//tr");

await page.waitForTimeout(15000);

const rowCount= await page.locator("//tbody[@class='[&_tr:last-child]:border-0']//tr").count();

console.log("row count: ", rowCount);



})