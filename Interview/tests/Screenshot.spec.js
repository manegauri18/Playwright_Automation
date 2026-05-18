import{test, expect} from "@playwright/test"


test("Capture FullPage SS", async({page})=>{

    await page.goto("https://www.facebook.com/");

    await page.screenshot({
        path: 'Screenshot/Facebook_125.png',
        fullPage: true
    });

    await page.waitForTimeout(3000);
})


test.skip("Capture Particular Element SS", async({page})=>{

    await page.goto("https://www.facebook.com/");

    const Element= page.locator('//div[@class="xieb3on xur9t0a xv8g3db x5hfqc5 x106a9eq"]');

    await Element.screenshot({
        path: 'Screenshot/Facebook_126.png'
    });

    await page.waitForTimeout(3000);
})


function getTimeStamp(){
const now = new Date();
console.log("Timestamp is", now);


const date=  now.toISOString().replace('T' , "_");
console.log("Timestamp2 is", date); //2026-04-24_18:06:05.517Z


const DateTime=  date.slice(0, 19);
console.log("Timestamp3 is", DateTime); //2026-04-24_18:07:12

return `${DateTime}`;

}

test("Capture FullPage SS with Current Date & Time", async({page})=>{

    await page.goto("https://www.netflix.com/in/");

    await page.screenshot({
        path: `Screenshot/Facebook_${getTimeStamp()}.png`,
        fullPage: true
    });

    await page.waitForTimeout(3000);
})
