# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: locator\XpathForYahooPage.spec.js >> TC-008 - Create Account Link Exists
- Location: tests\locator\XpathForYahooPage.spec.js:126:6

# Error details

```
Error: expect(received).toBeTruthy()

Received: null
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e6]:
          - img "Yahoo" [ref=e8]
          - generic [ref=e9]:
            - link "Help" [ref=e10] [cursor=pointer]:
              - /url: https://help.yahoo.com/kb/index?locale=en_IN&page=product&y=PROD_ACCT
            - link "Terms" [ref=e11] [cursor=pointer]:
              - /url: https://legal.yahoo.com/in/en/yahoo/terms/otos/index.html
            - link "Privacy" [ref=e12] [cursor=pointer]:
              - /url: https://legal.yahoo.com/in/en/yahoo/privacy/index.html
        - generic [ref=e14]:
          - heading "Sign in to Yahoo" [level=1] [ref=e16]
          - generic [ref=e17]:
            - generic [ref=e18]:
              - generic [ref=e20]:
                - generic [ref=e22]: Username, email or phone number
                - textbox "Username, email or phone number" [active] [ref=e26]
              - generic [ref=e27]:
                - generic [ref=e29] [cursor=pointer]:
                  - generic [ref=e30]:
                    - checkbox "Stay signed in" [checked] [ref=e31]
                    - img
                  - generic [ref=e32]: Stay signed in
                - paragraph [ref=e33]:
                  - link "Forgot username" [ref=e34] [cursor=pointer]:
                    - /url: /forgot
            - button "Next" [ref=e35] [cursor=pointer]:
              - generic [ref=e36]: Next
            - separator [ref=e37]:
              - paragraph [ref=e38]: or
            - button "Sign in with Google" [ref=e40] [cursor=pointer]:
              - generic [ref=e41]:
                - img [ref=e42]
                - text: Sign in with Google
            - button "Create account" [ref=e49] [cursor=pointer]:
              - generic [ref=e50]: Create account
      - iframe [ref=e54]:
        - iframe [ref=f6e4]:
          - generic [ref=f12e1]:
            - link [ref=f12e2] [cursor=pointer]:
              - /url: https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjstjbb-O8FawRMOdvCh9xi0UPiyyKPTPYk3So1m2l4seLtPE2eGEEgsvxKX8jRT2XEs4XYZeUGx9xrYRb6fVfnLQmAmFKMie8_k1tje62ri_BQkU_6zBGk8z5BeE4eQK26R4Lzkl6KrNMVQ2PG8MwJHa9A_7PQ9uxI8jeH_xPAQM2NC44KjB3K7IgDkgF_Oq8GbySOkZdQ4ykK_qy5xIZJ7FDuARVCCLmRKz3LyAd-HDfHqTo49zWPAj0OZ8uFt8R-idk4pg-JZafTi5GM65Lx3GJDndzO6LpX-P_M7e0KUVHLeCvKwM7Nysxzu6CT0ctWVzJH7lbboOzZer3VgcePBNzEbgCKj8-0be7cqoXJiGtJqg3JhrX9l1BMt0VFLZtMZJGl9D0lG1awKmf14SK4OO7lhkFazKSxuZMfYAjOd1JgWz6PjhsOc&sai=AMfl-YTo2T_V0sVkb8cw_Kn9KyuazezntiDro9lYmdG15xNVTr9jAq2fy6ptbxkq3Bqs3Wo3j6bnNbeYv9OEBOa5XIBNk4PnPI444udw-4irGBtF2Iz0YJqAxcMURbyqts6z6xrhphZLhX-KFJSm2kCKWDadTYScrp_rIGo8KoCU_fdswevPMec3N51RwwCgTbGs4foQdpimO-JnJWflZoXR2-UqI0Pk6P7-2espHNgvPz6BKzgYglNmRcKk7vlnkREQlsIgdHVxTXvbnW-GgQh_BfCALrvpmYld6G3wVwc7nSYq7a-9qM77gdxM9C7uY88pYE8gSDV0ihDuUQWoM7DrmuvBzdeSN963H_Ag5I7ujw-JZnWtwxpW9JRc7Pet83rgoYJ54o6OstHdy5tBBQ&sig=Cg0ArKJSzBzZmZxtPLl-&fbs_aeid=%5Bgw_fbsaeid%5D&adurl=https://finance.yahoo.com%3Fncid%3D100001231
            - img [ref=f12e6] [cursor=pointer]
            - button [ref=f12e8] [cursor=pointer]:
              - img [ref=f12e9]
  - alert [ref=e55]
```

# Test source

```ts
  37  | 
  38  |     // XPath contains text - exact match
  39  |     const nextButton = page.locator("//span[contains(text(), 'Next')]");
  40  |     const buttonCount = await nextButton.count();
  41  | 
  42  |     if (buttonCount > 0) {
  43  |         expect(buttonCount).toBeGreaterThan(0);
  44  |         console.log('✓ Next button found by exact text match');
  45  |     } else {
  46  |         // XPath contains text - partial match
  47  |         const nextButtonAlt = page.locator("//span[contains(text(), 'Next')]");
  48  |         expect(await nextButtonAlt.count()).toBeGreaterThan(0);
  49  |         console.log('✓ Next button found by contains text');
  50  |     }
  51  | });
  52  | 
  53  | // TC-004: Test Sign In Heading
  54  | test('TC-004 - Sign In Heading is Present', async ({ page }) => {
  55  |     await page.goto(BASE_URL);
  56  | 
  57  |     // XPath by text - find heading containing sign in
  58  |     const heading = page.locator("//h1[contains(text(), 'Sign')]");
  59  |     const headingCount = await heading.count();
  60  | 
  61  |     expect(headingCount).toBeGreaterThanOrEqual(0);
  62  |     console.log('✓ Page heading validated');
  63  | });
  64  | 
  65  | // TC-005: Test Empty Email Submission Error
  66  | test('TC-005 - Empty Email Shows Error', async ({ page }) => {
  67  |     await page.goto(BASE_URL);
  68  | 
  69  |     // XPath by attribute - find submit button
  70  |     const submitButton = page.locator("//button[@type='submit']").first();
  71  |     const isEnabled = await submitButton.isEnabled();
  72  | 
  73  |     if (isEnabled) {
  74  |         await submitButton.click();
  75  |         await page.waitForTimeout(1000);
  76  | 
  77  |         // XPath by attribute - look for error message
  78  |         const error = page.locator("//*[@role='alert']");
  79  |         const errorCount = await error.count();
  80  | 
  81  |         console.log(`✓ Submit attempted, error elements found: ${errorCount}`);
  82  |     } else {
  83  |         console.log('✓ Submit button validation completed');
  84  |     }
  85  | });
  86  | 
  87  | // TC-006: Test Email Input Fill
  88  | test('TC-006 - Email Input Can Be Filled', async ({ page }) => {
  89  |     await page.goto(BASE_URL);
  90  | 
  91  |     // XPath by index - get first input of type text
  92  |     const emailInput = page.locator("//input[@type='text']").first();
  93  |     const isEditable = await emailInput.isEditable();
  94  | 
  95  |     if (isEditable) {
  96  |         await emailInput.fill('testuser@yahoo.com');
  97  | 
  98  |         // XPath by attribute - validate value
  99  |         const value = await emailInput.inputValue();
  100 |         expect(value).toBe('testuser@yahoo.com');
  101 |         console.log('✓ Email successfully filled in input field');
  102 |     } else {
  103 |         console.log('✓ Email input field validation completed');
  104 |     }
  105 | });
  106 | 
  107 | // TC-007: Test Forgot Password Link
  108 | test('TC-007 - Forgot Password Link Exists', async ({ page }) => {
  109 |     await page.goto(BASE_URL);
  110 | 
  111 |     // XPath contains text - find link with forgot password text
  112 |     const forgotLink = page.locator("//a[contains(text(), 'Forgot')]");
  113 |     const linkCount = await forgotLink.count();
  114 | 
  115 |     if (linkCount > 0) {
  116 |         // XPath by attribute - get href
  117 |         const href = await forgotLink.getAttribute('href');
  118 |         expect(href).toBeTruthy();
  119 |         console.log(`✓ Forgot password link found: ${href}`);
  120 |     } else {
  121 |         console.log('✓ Forgot password link validation completed');
  122 |     }
  123 | });
  124 | 
  125 | // TC-008: Test Create Account Link
  126 | test.only('TC-008 - Create Account Link Exists', async ({ page }) => {
  127 |     await page.goto(BASE_URL);
  128 | 
  129 |     // XPath contains text - find signup/create link
  130 |     const signupLink = page.locator("//span[contains(text(), 'Create')]");
  131 |     const linkCount = await signupLink.count();
  132 | 
  133 |     if (linkCount > 0) {
  134 |         // XPath by index - get first matching link
  135 |         const firstLink = signupLink.first();
  136 |         const href = await firstLink.getAttribute('href');
> 137 |         expect(href).toBeTruthy();
      |                      ^ Error: expect(received).toBeTruthy()
  138 |         console.log(`✓ Create account link found: ${href}`);
  139 |     } else {
  140 |         console.log('✓ Create account link validation completed');
  141 |     }
  142 | });
  143 | 
  144 | // TC-010: Test Complete Login Flow
  145 | test.skip('TC-010 - Complete Login Flow with All Validations', async ({ page }) => {
  146 |     await page.goto(BASE_URL);
  147 | 
  148 |     // Step 1: Validate initial state
  149 |     const emailInput = page.locator("//input[@type='text']").first();
  150 |     await expect(emailInput).toBeVisible();
  151 |     console.log('✓ Step 1: Email input is visible');
  152 | 
  153 |     // Step 2: Fill email
  154 |     const isEditable = await emailInput.isEditable().catch(() => false);
  155 |     if (isEditable) {
  156 |         await emailInput.fill('student@yahoo.com');
  157 |         const value = await emailInput.inputValue();
  158 |         expect(value).toBe('student@yahoo.com');
  159 |         console.log('✓ Step 2: Email filled successfully');
  160 |     }
  161 | 
  162 |     // Step 3: Validate next button
  163 |     const nextButton = page.locator("//button[contains(text(), 'Next')]").first();
  164 |     const isEnabled = await nextButton.isEnabled().catch(() => false);
  165 |     console.log(`✓ Step 3: Next button enabled state: ${isEnabled}`);
  166 | });
```