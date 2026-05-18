import{test, expect} from "@playwright/test"

const FB_URL = "https://www.facebook.com/login.php";

test.only("TC001", async ({page})=>{

    await page.goto(FB_URL);

    const links = page.locator('//a'); //a represnts all links 

    const Count =await links.count();

    console.log("Total link count: ", Count)

    for(let i=0; i<Count; i++)
    {
        let text= await links.nth(i).textContent();

        let href =await links.nth(i).getAttribute('href');


        console.log(`${text} :  ${href}`)
    }
    


})