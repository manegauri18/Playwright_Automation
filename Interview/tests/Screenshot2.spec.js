import{test, expect} from "@playwright/test"

function getTimeStamp(){
const now = new Date();
console.log("Timestamp is", now);


const date=  now.toISOString().replace(/[T:]/g , "_");
console.log("date is", date); //2026-04-24_18_50_27.139Z


const DateTime=  date.slice(0, 19);
console.log("Date Time is", DateTime); //2026-04-24_18_50_27

return `${DateTime}`;

}

test("Capture FullPage SS with Current Date & Time", async({page})=>{

    await page.goto("https://www.netflix.com/in/");

    const filePath= `Screenshot/Netflix_${getTimeStamp()}.png`;

    await page.screenshot({
        path: filePath
    });

    await page.waitForTimeout(3000);
})
