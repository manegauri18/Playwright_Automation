import{test, expect} from "@playwright/test"

const URL= "https://login.yahoo.com/";

test("Validate Tab header name", async({page})=>{

 await page.goto(URL);

 let title =await page.title();
 console.log("Tab header name is: ", title);

 await expect(page).toHaveTitle(/Yahoo/); 

})


test("Validate textbox is enabled", async({page})=>{

    await page.goto(URL);

   let UserName =page.locator("//input[@name='username']");

   const UN =await UserName.isEditable();

   if(UN)
    {
    await UserName.fill("Gauri"); 
   }

   

//   await expect(UserName).toBeEditable() // ✅ validation

//   await UserName.fill("Gauri");  //enter UN

//   
})


test.only("Validate Checkbox is enabled", async({page})=>{

 await page.goto(URL);

 const Checkbox =page.locator("//input[@id='persistent']");

 await expect(Checkbox).toBeChecked();


})





