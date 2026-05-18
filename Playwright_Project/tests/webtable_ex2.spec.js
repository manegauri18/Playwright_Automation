import{test, expect} from "@playwright/test"


test("Validate each header", async({page})=>{

await page.goto("https://xqa.io/practice/web-tables");

//Find Total number of rows
const totalRows = (await page.locator("//div[@role='grid']/div").count() -1);
console.log("Number Of Rows:", totalRows);


//Find Total number of headers or columns
const totalColumns = await page.locator("//div[@class ='bg-gray-100 border-b flex font-semibold text-sm']/div").count();
console.log("Number Of Columns:", totalColumns);

//Get all header or column texts..It will return javascript array
const actualColumnTexts = await page.locator("//div[@class ='bg-gray-100 border-b flex font-semibold text-sm']/div").allTextContents()

//Store header expacted value in array
const expectedColumnTexts =[
  'First Name',
  'Last Name',
  'Age',
  'Email',
  'Salary',
  'Department',
  'Action'
]

for(let i=0; i<totalColumns; i++){

        console.log('Expacted header '+ expectedColumnTexts[i] + ' matches with actual header ' + actualColumnTexts[i]);
        expect(actualColumnTexts[i]).toBe(expectedColumnTexts[i]);

}

})


test("Validate PArticular value in table", async({page})=>
{
    await page.goto("https://xqa.io/practice/web-tables");
    
    const row = page.locator("//div[@role='grid']/div").filter({ hasText: 'alden@example.com' });

    await expect(row).toBeVisible();


}

)