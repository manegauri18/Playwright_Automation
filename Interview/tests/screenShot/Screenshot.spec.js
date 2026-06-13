import{test, expect} from "@playwright/test"


// Page Screenshot
test("Page Screenshot", async({page})=>{

    await page.goto("https://www.facebook.com/");

    await page.screenshot({path: 'Screenshot/Facebook_125.png' });

    await page.waitForTimeout(3000);
})


// Full Page Screenshot
test("Full Page Screenshot", async({page})=>{

    await page.goto("https://www.facebook.com/");

    await page.screenshot({
        path: 'Screenshot/Facebook_125.png',
        fullPage: true
    });

    await page.waitForTimeout(3000);
})

/
//Element Screenshot
test.skip("Element Screenshot", async({page})=>{

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


const date =  now.toISOString().replace(/[T:]/g , "_");
console.log("date is", date); //2026-04-24_18_50_27.139Z


const DateTime=  date.slice(0, 19);
console.log("Date Time is", DateTime); //2026-04-24_18_50_27

return `${DateTime}`;

}

test("Full Page Screenshot With Dynamic File Name", async({page})=>{

    await page.goto("https://www.netflix.com/in/");

    await page.screenshot({
        path: `Screenshot/Facebook_${getTimeStamp()}.png`,
        fullPage: true
    });

    await page.waitForTimeout(3000);
})
