import{test, expect} from "@playwright/test"


test("Handling Simple Iframes", async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

const ParentFrame= page.frameLocator("//iframe[@id='courses-iframe']");

const count = await ParentFrame.getByRole('link', { name: 'Courses' }).count();

console.log(count);

await ParentFrame.getByRole('link', { name: 'Courses' }).nth(1).click();

})

test.only("Handling nested iframes", async({page})=>{

await page.goto("https://demo.automationtesting.in/Frames.html");

await page.locator("//a[text()='Iframe with in an Iframe']").click();

const parentFrame= page.frameLocator("//iframe[@src='MultipleFrames.html']");

const parentText= await parentFrame.locator("//h5[text()='Nested iFrames']").textContent();
console.log("Parent text: ", parentText);

const childFrame= parentFrame.frameLocator("//iframe[@src='SingleFrame.html']");

const childFrameText= await childFrame.locator("//h5[text()='iFrame Demo']").textContent();
console.log("Child text: ", childFrameText);

await childFrame.locator("//input[@type='text']").fill("testing");

await page.bringToFront();

await page.locator("//a[text()='WebTable']").click();

})
