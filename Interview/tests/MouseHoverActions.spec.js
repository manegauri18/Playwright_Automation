
import{test, expect} from "@playwright/test"


test("Handling Mouse Hover Actions", async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

await page.locator("#mousehover").hover();

await page.locator("//a[text()='Reload']").click();

})


test("Handling Mouse Actions", async({page})=>{

await page.goto("https://demoqa.com/buttons?utm_source=chatgpt.com");


   //double click
   await page.getByRole("button", {name: "Double Click Me"}).dblclick();

   await expect(page.getByText("You have done a double click")).toBeVisible();


   //right click
   await page.locator("#rightClickBtn").click({button: "right"});

   await expect(page.getByText("You have done a right click")).toBeVisible();

  
   //click
   await page.locator("//button[text()='Click Me']").click();

   await expect(page.getByText("You have done a dynamic click")).toBeVisible();


})


test.only("Handling Drag & Drop Actions", async ({ page }) => {

    //await page.goto("https://demoqa.com/droppable");
    await page.goto("https://xqa.io/practice/droppable");
    await page.dragAndDrop("#draggable","#droppable")
    await expect(page.locator("//span[text()='Dropped!']")).toBeVisible();
    page2.zc

});


