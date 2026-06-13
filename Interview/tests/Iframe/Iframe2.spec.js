import{test, expect} from "@playwright/test"

test("Handling iframe1", async({page})=>{

await page.goto("https://xqa.io/practice/frames");

const frame1 = page.frameLocator("#frame1");

const text1 =await frame1.locator("#sampleHeading").textContent();

console.log("text: ", text1);


})


test("Handling Nested iframe", async({page})=>{

await page.goto("https://xqa.io/practice/nested-frames");



const parentFrame = page.frameLocator('//iframe[@id="frame1"]');
const parentText =await parentFrame.locator("//p[text()='Parent Iframe']").textContent();
console.log("text: ", parentText);

//Switch to Child
const childFrame = parentFrame.frameLocator("//iframe");
const childText = await childFrame.locator("//p[text()='Child Iframe']").textContent();
console.log("text: ", childText);

})