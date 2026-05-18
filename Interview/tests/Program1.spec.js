
import{test, expect} from "@playwright/test"


test("my first program", async({page})=>{

    await page.goto("https://www.facebook.com/");
})


 test("has title", async({page})=>{
    await page.goto("https://www.facebook.com/"); 
    let Title =await page.title();
    console.log("Page title is: ", Title);
 })



