export class LoginPage {

    constructor(page) {

        this.page = page;

        // Login Page
        this.userName = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');

        this.loginButton = page.locator( "//button[normalize-space()='Login']");

        this.dashboard = page.locator("//h6[text()='Dashboard']");

        // PIM Menu
        this.PIMMenu = page.locator(
            "//span[text()='PIM']"
        );

        // Add Employee
        this.addEmployeeBtn = page.locator(
            "//a[text()='Add Employee']"
        );

        this.EmpID = page.locator(
            "//label[text()='Employee Id']/ancestor::div[contains(@class,'oxd-input-group')]//input"
        );

        this.firstName = page.locator(
            'input[name="firstName"]'
        );

        this.middleName = page.locator(
            'input[name="middleName"]'
        );

        this.lastName = page.locator(
            'input[name="lastName"]'
        );

        this.saveBtn = page.locator(
            "//button[normalize-space()='Save']"
        );

        // Employee List
        this.employeeList = page.locator(
            "//a[text()='Employee List']"
        );

        this.employeeName = page.locator(
            "//label[text()='Employee Name']/ancestor::div[contains(@class,'oxd-input-group')]//input"
        );

        this.searchBtn = page.locator(
            "//button[normalize-space()='Search']"
        );

        // Table rows
        this.rows = page.locator("//div[@class='oxd-table-card']");
    }

    // Open Application
   async openApp(){

    // Increase page timeout
    this.page.setDefaultTimeout(120000);

    // Open application
    await this.page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
        {
            waitUntil: "domcontentloaded",
            timeout: 120000
        }
    );

    // Wait for username textbox
    await this.userName.waitFor({
        state: "visible",
        timeout: 120000
    });
}

    // Login
    async Login(username, password) {

        await this.userName.fill(username);

        await this.password.fill(password);

        await Promise.all([
            this.page.waitForURL(/dashboard/),
            this.loginButton.click()
        ]);

        await this.dashboard.waitFor({
            state: "visible"
        });
    }

    // Validate Dashboard
    async ValidateMsg() {

        return await this.dashboard.textContent();
    }

    // Click PIM
    async clickPIM() {

        await this.PIMMenu.click();
    }

    // Click Add Employee
    async clickaddEmployee() {

        await this.addEmployeeBtn.click();
    }

    // Get Employee ID
    async getEmpId() {

        return await this.EmpID.inputValue();
    }

    // Enter Employee Name
    async EnterFullName(firstname, middlename, lastname) {

        await this.firstName.fill(firstname);

        await this.middleName.fill(middlename);

        await this.lastName.fill(lastname);
    }

    // Click Save
    async clickSave() {

        await this.saveBtn.click();
    }

    // Click Employee List
    async clickemployeeList() {

        await this.employeeList.click();
    }

    // Search Employee
    async enterEmpName(data) {

        const fullName =
            `${data.First_Name} ${data.Middle_Name} ${data.Last_Name}`;

        await this.employeeName.fill(fullName);

        await this.searchBtn.click();

        // Wait for search results
        await this.rows.first().waitFor({
            state: "visible"
        });
    }

  async validateEmpIDFromList(expectedID)
{
    const count = await this.rows.count();

    for(let i = 0; i < count; i++)
    {
        const row = this.rows.nth(i);

        const rowText = await row.textContent();

        if(rowText.includes(expectedID))
        {
            // Employee ID is in 2nd cell
            const empID = await row
                .locator("div[role='cell']")
                .nth(1)
                .textContent();

            return empID.trim();
        }
    }

    throw new Error(`Employee ID ${expectedID} not found`);
}
}