# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: locator\Inbuilt_Locators.spec.js >> Login using various locators
- Location: tests\locator\Inbuilt_Locators.spec.js:71:6

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: locator.fill: Test timeout of 120000ms exceeded.
Call log:
  - waiting for getByTestId('Username')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.8
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | 
  3  | /*
  4  |  * Playwright Built-in Locators Demo
  5  |  * This file demonstrates various built-in locators in Playwright
  6  |  */
  7  | 
  8  | // getByRole - Locates elements by their ARIA role
  9  | test("Register user using getByRole", async ({ page }) => {
  10 | 
  11 |     await page.goto('https://demo.automationtesting.in/Register.html');
  12 | 
  13 |     // Fill first name using textbox role and name attribute
  14 |     await page.getByRole('textbox', { name: 'First Name' }).fill("Ketan");
  15 |     // Fill last name using button role and name attribute
  16 |     await page.getByRole("button", { name: 'Last Name' }).fill('Jadhav');
  17 |     await page.waitForTimeout(5000);
  18 | });
  19 | 
  20 | // getByRole - Login test with assertion
  21 | test("Login using getByRole", async ({ page }) => {
  22 | 
  23 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  24 | 
  25 |     // Enter username in textbox with name attribute
  26 |     await page.getByRole('textbox', { name: 'username' }).fill('Admin');
  27 |     // Enter password in textbox with name attribute
  28 |     await page.getByRole('textbox', { name: 'password' }).fill('admin123');
  29 |     // Click login button
  30 |     await page.getByRole('button', { name: 'Login' }).click();
  31 | 
  32 |     await page.waitForTimeout(3000);
  33 | 
  34 |     // Verify dashboard is visible after login
  35 |     const dashboard = await page.getByRole('heading', { name: 'Dashboard' }).isVisible();
  36 | 
  37 |     if (dashboard) {
  38 |         console.log("Login successful");
  39 |     }
  40 |     else {
  41 |         console.log("Login failed");
  42 |     }
  43 | });
  44 | 
  45 | // getByLabel - Locates form elements by their label text
  46 | test("Login using getByLabel", async ({ page }) => {
  47 | 
  48 |     await page.goto("https://the-internet.herokuapp.com/login")
  49 | 
  50 |     // Fill username using label text
  51 |     await page.getByLabel('Username').fill("tomsmith");
  52 |     // Fill password using label text
  53 |     await page.getByLabel('Password').fill("SuperSecretPassword!");
  54 |     // Click login button
  55 |     await page.getByRole('button', { name: 'Login' }).click();
  56 | 
  57 |     // Assert success message is visible
  58 |     await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  59 | });
  60 | 
  61 | // getByText - Locates elements by their text content
  62 | test("Login using getByText", async ({ page }) => {
  63 | 
  64 |     await page.goto("https://www.facebook.com/");
  65 |     // Click on link containing exact text
  66 |     await page.getByText("Forgotten password?").click();
  67 |     await page.waitForTimeout(5000);
  68 | });
  69 | 
  70 | // getByPlaceholder, getByTestId, getByTitle - Other built-in locators
  71 | test.only('Login using various locators', async ({ page }) => {
  72 | 
  73 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  74 | 
  75 |     // getByTestId - Locates by data-testid attribute
> 76 |     await page.getByTestId('Username').fill("Admin");
     |                                        ^ Error: locator.fill: Test timeout of 120000ms exceeded.
  77 |     // getByTitle - Locates element by title attribute
  78 |     await page.getByTitle('Password').fill("admin123");
  79 |     // Click login button
  80 |     await page.getByRole('button', { name: 'Login' }).click();
  81 | });
  82 | 
```