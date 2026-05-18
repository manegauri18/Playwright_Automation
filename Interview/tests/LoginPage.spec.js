import{test, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"


test("TC 001", async({page})=>{

const login= new LoginPage(page);

await login.openApp();

await login.Login("Admin", "admin123");

const text =await login.ValidateMsg();
expect(text).toBe('Dashboard');

await page.waitForTimeout(3000);

await login.clickPIM();

await login.clickaddEmployee();

const ID = await login.getEmpId();
console.log("Emp ID: ", ID);

await login.EnterFullName("Demo", "May", "User");

await login.clickSave();

await page.waitForTimeout(3000);

await login.clickemployeeList();

await login.enterEmpName(
   { First_Name: "Demo",
    Middle_Name: "May",
    Last_Name: "User"
   }
)

const actualID  = await login.validateEmpIDFromList(ID);
expect(actualID).toBe(ID);

})